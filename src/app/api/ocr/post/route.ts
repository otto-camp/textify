import { db } from '@/db';
import { files, texts } from '@/db/schema';
import { env } from '@/env.mjs';
import { OcrResponse } from '@/lib/types';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { isFile } from '@/utils/isFile';
import { NextResponse } from 'next/server';
import { utapi } from 'uploadthing/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  formData.append('language', 'english');
  const file = formData.get('input_file');
  const userId = formData.get('user_id');

  try {
    //ocr post
    const ocrRes = (await fetch(env.EXT_API_URL, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': env.API_KEY,
      },
      body: formData,
    }).then(async (res) => await res.json())) as OcrResponse;

    if (ocrRes.ok && isFile(file)) {
      const uploadRes = await utapi.uploadFiles(file);
      console.log('UploadThing Response:', uploadRes);

      if (!uploadRes.error) {
        try {
          let fileId = '';
          await db
            .insert(files)
            .values({
              userId: userId as string,
              url: uploadRes.data.url,
            })
            .then(async (res) => (fileId = await res.insertId));

          await db.insert(texts).values({
            userId: userId as string,
            title: getFirstSentence(ocrRes.text),
            content: ocrRes.text,
            fileId: BigInt(fileId),
          });
        } catch (error) {
          console.error('DB upload failed:', error);
        }
      } else {
        console.error('UploadThing upload failed:', uploadRes.error);
      }

      return NextResponse.json(ocrRes);
    } else {
      console.error('OCR request failed:', ocrRes.text);
    }
  } catch (error) {
    console.log(error);
  }
}
