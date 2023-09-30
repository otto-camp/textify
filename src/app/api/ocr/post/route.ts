import { env } from '@/env.mjs';
import { OcrResponse } from '@/lib/types';
import { catchErrorServer } from '@/utils/catchError';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  try {
    const ocrRes = (await fetch(env.EXT_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
      },
      body: formData,
    }).then(async (res) => await res.json())) as OcrResponse;

    return NextResponse.json(ocrRes);
  } catch (error) {
    catchErrorServer(error);
  }
}
