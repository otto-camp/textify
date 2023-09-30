import { db } from '@/db';
import { sentimentResults, texts } from '@/db/schema';
import { SentimentAnalysisResponse } from '@/lib/types';
import { catchErrorServer } from '@/utils/catchError';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { InferModel } from 'drizzle-orm';
import { NextResponse } from 'next/server';

type Sentiment = InferModel<typeof sentimentResults, 'insert'>;
type InsertText = InferModel<typeof texts, 'insert'>;

export async function POST(req: Request) {
  const {
    content,
    response,
    userId,
  }: {
    response: SentimentAnalysisResponse;
    content: string;
    userId: string;
  } = await req.json();

  const title = getFirstSentence(content);

  const text: InsertText = {
    userId: userId,
    title: title,
    content: content,
    label: 'Sentiment Analysis',
  };

  const sentiment: Sentiment = {
    userId: userId,
    result: response.sentiment,
    negative: response.aggregate_sentiment.neg,
    neutral: response.aggregate_sentiment.neu,
    positive: response.aggregate_sentiment.pos,
  };

  try {
    await db
      .insert(texts)
      .values(text)
      .then(async (res) => {
        sentiment.id = Number(res.insertId);
        await db.insert(sentimentResults).values(sentiment);
      });
  } catch (error) {
    catchErrorServer(error);
  }
  return NextResponse.json({ status: 'Success' });
}
