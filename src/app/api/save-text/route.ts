import { db } from '@/db';
import { texts } from '@/db/schema';
import { catchErrorServer } from '@/utils/catchError';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { InferModel } from 'drizzle-orm';
import { NextResponse } from 'next/server';

type newText = InferModel<typeof texts, 'insert'>;

export async function POST(req: Request) {
  const { text, response, userId } = await req.json();

  const title = getFirstSentence(text);

  const data: newText = {
    userId: userId,
    title: title,
    content: text,
    summaryContent: response,
  };
  try {
    await db.insert(texts).values(data);
  } catch (error) {
    catchErrorServer(error);
  }
  return NextResponse.json({ status: 'Success' });
}
