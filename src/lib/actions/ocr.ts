'use server';

import { env } from '@/env.mjs';
import { type OcrResponse } from '@/types';

export async function getOcr(formData: FormData) {
  try {
    const res = await fetch(env.EXT_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
      },
      body: formData,
    });

    return (await res.json()) as OcrResponse;
  } catch (error) {
    throw error;
  }
}
