import { db } from '@/db';
import { sentimentResults } from '@/db/schema';
import { SentimentAnalysisResponse } from '@/lib/types';
import { catchErrorServer } from '@/utils/catchError';
import { InferModel } from 'drizzle-orm';
import { NextResponse } from 'next/server';

type Sentiment = InferModel<typeof sentimentResults, 'insert'>;

export async function POST(req: Request) {
  const {
    content,
    userId,
    id,
  }: { content: SentimentAnalysisResponse; userId: string; id: number } =
    await req.json();

  const sentiment: Sentiment = {
    userId: userId,
    id: id,
    result: content.sentiment,
    negative: content.aggregate_sentiment.neg,
    neutral: content.aggregate_sentiment.neu,
    positive: content.aggregate_sentiment.pos,
  };

  try {
    await db.insert(sentimentResults).values(sentiment);
  } catch (error) {
    catchErrorServer(error);
  }
  return NextResponse.json({ status: 'Success' });
}
