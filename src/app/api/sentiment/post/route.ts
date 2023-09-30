import { env } from '@/env.mjs';
import { catchErrorServer } from '@/utils/catchError';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const res = await fetch(env.SEN_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'english',
        text: body,
      }),
    });

    if (!res.ok) {
      throw new Error('Fetch failed!');
    }
    return NextResponse.json(await res.json());
  } catch (error) {
    catchErrorServer(error);
  }
}
