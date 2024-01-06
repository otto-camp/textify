"use server"
import { db } from '@/db';
import { texts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getText(id: number) {
  const res = (await db.select().from(texts).where(eq(texts.id, id))).at(0);

  if (!res) {
    throw new Error(
      'Sorry, the content you are looking for could not be found. It may have been removed or does not exist.'
    );
  } else {
    return res;
  }
}
