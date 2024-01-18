'use server';
import { env } from '@/env.mjs';
import { type SummaryResponse } from '@/types';

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
