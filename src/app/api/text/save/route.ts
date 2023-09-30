import { db } from '@/db';
import { texts } from '@/db/schema';
import { getFirstSentence } from '@/utils/getFirstSentence';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const {
    userId,
    content,
    fileId,
  }: { userId: string | any; content: string; fileId: bigint | undefined } =
    await req.json();

  if (userId !== null && typeof userId === 'string' && userId === '') {
    return NextResponse.error();
  }

  try {
    await db.insert(texts).values({
      userId: userId,
      title: getFirstSentence(content),
      content: content,
      fileId: fileId ? fileId : null,
    });

    return NextResponse.json('Success');
  } catch (error) {
    console.log(error);
  }
}
