import { env } from '@/env.mjs';
import { catchErrorServer } from '@/utils/catchError';

export async function postText(text: string) {
  const apiUrl =
    'https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1';

  const data = {
    language: 'english',
    summary_percent: 10,
    text: text,
  };

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error('Fetch failed');
    }

    return await res.json();
  } catch (error) {
    catchErrorServer(error);
  }
}
