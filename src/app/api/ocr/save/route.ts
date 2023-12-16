import { db } from '@/db';
import { files, texts } from '@/db/schema';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { NextResponse } from 'next/server';
import { utapi } from '../../uploadthing/core';

type InsertText = typeof texts.$inferInsert;
type InsertFiles = typeof files.$inferInsert;

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
