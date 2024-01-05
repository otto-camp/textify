'use server';

import { utapi } from '@/app/api/uploadthing/core';
import { db } from '@/db';
import { files, texts } from '@/db/schema';
import { env } from '@/env.mjs';
import { type OcrResponse } from '@/types';
import { getFirstSentence, getSlug } from '../utils';

export async function getOcr(formData: FormData) {
  try {
    const res = await fetch(env.EXT_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
      },
      body: formData,
    });

    return (await res.json()) as OcrResponse;
  } catch (error) {
    throw error;
  }
}

type InsertText = typeof texts.$inferInsert;
type InsertFiles = typeof files.$inferInsert;

export async function saveOcr(formData: FormData) {
  const response = formData.get('response') as string;
  const content = formData.get('content') as File;
  const userId = formData.get('userId') as string;

  const upload = await utapi.uploadFiles(content);

  if (upload.error) throw new Error(upload.error.message);

  const title = getFirstSentence(response);
  const slug = getSlug(title);

  const text: InsertText = {
    userId: userId,
    title: title,
    slug: slug,
    content: response,
    label: 'OCR',
  };

  const file: InsertFiles = {
    userId: userId,
    url: upload.data.url,
  };

  try {
    await db
      .insert(texts)
      .values(text)
      .then(async (res) => {
        file.id = Number(res.insertId);
        await db.insert(files).values(file);
      });

    return true;
  } catch (error) {
    throw error;
  }
}
