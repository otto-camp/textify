import { db } from '@/db';
import { files } from '@/db/schema';
import { NextResponse } from 'next/server';
import { utapi } from 'uploadthing/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('input_file') as File;
  const userId = formData.get('user_id');

  try {
    const uploadRes = await utapi.uploadFiles(file);
    console.log('UploadThing Response:', uploadRes);

    if (!uploadRes.error) {
      await db
        .insert(files)
        .values({
          userId: userId as string,
          url: uploadRes.data.url,
        })
        .then(async (res) => {
          return NextResponse.json(await res.insertId);
        });
    } else {
      console.error('UploadThing upload failed:', uploadRes.error);
    }
  } catch (error) {
    console.error(error);
  }
}
