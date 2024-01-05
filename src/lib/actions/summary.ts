'use server';
import { env } from '@/env.mjs';
import { type SummaryResponse } from '@/types';
import { getFirstSentence, getSlug } from '../utils';
import { summaryResults, texts } from '@/db/schema';
import { db } from '@/db';

export async function getSummary(content: string) {
  try {
    const res = await fetch(env.SUM_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'english',
        summary_percent: 10,
        text: content,
      }),
    });

    if (!res.ok) {
      throw new Error('Fetch request failed. Try again!');
    }

    return (await res.json()) as SummaryResponse;
  } catch (error) {
    throw error;
  }
}

type InsertText = typeof texts.$inferInsert;
type InsertSummary = typeof summaryResults.$inferInsert;

export async function saveSummary(
  userId: string | undefined | null,
  content: string,
  response: string
) {
  if (!userId) throw new Error('You need to login to save.');

  try {
    const title = getFirstSentence(content);
    const slug = getSlug(title);

    const text: InsertText = {
      userId: userId,
      title: title,
      content: content,
      slug: slug,
      label: 'Summary',
    };

    const summary: InsertSummary = {
      userId: userId,
      result: response,
    };

    await db
      .insert(texts)
      .values(text)
      .then(async (res) => {
        summary.id = Number(res.insertId);
        await db.insert(summaryResults).values(summary);
      });

    return true;
  } catch (error) {
    throw error;
  }
}
