'use server';
import { env } from '@/env.mjs';
import { type SentimentAnalysisResponse } from '@/types';
import { getFirstSentence, getSlug } from '../utils';
import { sentimentResults, texts } from '@/db/schema';
import { db } from '@/db';

export async function getSentimentAnalysis(content: string) {
  try {
    const res = await fetch(env.SEN_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: content,
        language: 'english',
      }),
    });

    if (!res.ok) {
      throw new Error('Fetch request failed. Try again!');
    }
    return (await res.json()) as SentimentAnalysisResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

type InsertText = typeof texts.$inferInsert;
type InsertSentiment = typeof sentimentResults.$inferInsert;

export async function saveSentimentAnalysis(
  userId: string | undefined | null,
  content: string,
  response: SentimentAnalysisResponse
) {
  if (!userId) throw new Error('You need to login to save.');

  const title = getFirstSentence(content);
  const slug = getSlug(title);

  const text: InsertText = {
    userId: userId,
    title: title,
    slug: slug,
    content: content,
    label: 'Sentiment Analysis',
  };

  const sentiment: InsertSentiment = {
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
    return true;
  } catch (error) {
    throw error;
  }
}
