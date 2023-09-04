import { db } from '@/db';
import { texts } from '@/db/schema';
import { catchErrorServer } from '@/utils/catchError';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { InferModel } from 'drizzle-orm';
import { NextResponse } from 'next/server';

type InsertText = InferModel<typeof texts, 'insert'>;

export async function POST(req: Request) {
  const { content, userId } = await req.json();

  const title = getFirstSentence(content);

  const text: InsertText = {
    userId: userId,
    title: title,
    content: content,
  };

  let id: string = '';

  try {
    await db
      .insert(texts)
      .values(text)
      .then(async (res) => {
        id = await res.insertId;
      });
  } catch (error) {
    catchErrorServer(error);
  }
  return NextResponse.json(id);
}
