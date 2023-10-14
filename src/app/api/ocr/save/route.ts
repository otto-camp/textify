import { NextResponse } from 'next/server';
import { utapi } from '../../uploadthing/core';
import { env } from '@/env.mjs';
import { InferModel } from 'drizzle-orm';
import { files, texts } from '@/db/schema';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { db } from '@/db';

type InsertText = InferModel<typeof texts, 'insert'>;
type InsertFiles = InferModel<typeof files, 'insert'>;

export async function POST(req: Request) {
  const formData = await req.formData();
  const response = formData.get('response') as string;
  const content = formData.get('content') as File;
  const userId = formData.get('userId') as string;

  const upload = await utapi.uploadFiles(content);

  if (upload.error) {
    throw new Error(upload.error.message);
  }

  const text: InsertText = {
    userId: userId,
    title: getFirstSentence(response),
    content: response,
    label: 'OCR',
  };

  const file: InsertFiles = {
    userId: userId,
    url: upload.data.url,
  };

  try {
    await db
      .insert(files)
      .values(file)
      .then(async (res) => {
        text.fileId = BigInt(res.insertId);
        await db.insert(texts).values(text);
      });
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ status: 'Success' });
}
