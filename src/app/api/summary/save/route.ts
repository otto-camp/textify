import { db } from '@/db';
import { summaryResults, texts } from '@/db/schema';
import { catchErrorServer } from '@/utils/catchError';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { NextResponse } from 'next/server';

type InsertText = typeof texts.$inferInsert;
type InsertSummary = typeof summaryResults.$inferInsert;

export async function POST(req: Request) {
  const { content, response, userId } = await req.json();

  const title = getFirstSentence(content);

  const text: InsertText = {
    userId: userId,
    title: title,
    content: content,
    label: 'Summary',
  };

  const summary: InsertSummary = {
    userId: userId,
    result: response,
  };

  try {
    await db
      .insert(texts)
      .values(text)
      .then(async (res) => {
        summary.id = Number(res.insertId);
        await db.insert(summaryResults).values(summary);
      });
  } catch (error) {
    catchErrorServer(error);
  }

  return NextResponse.json({ status: 'Success' });
}
