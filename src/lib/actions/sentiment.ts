'use server';
import { env } from '@/env.mjs';
import { type SentimentAnalysisResponse } from '@/types';

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

