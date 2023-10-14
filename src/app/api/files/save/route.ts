import { NextResponse } from 'next/server';
import { UTApi } from 'uploadthing/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('input_file') as File;

  try {
    const uploadRes = await UTApi.prototype.uploadFiles(file);
    console.log('UploadThing Response:', uploadRes);

    return NextResponse.json(uploadRes.data?.url);
  } catch (error) {
    console.error(error);
  }
}
