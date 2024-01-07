import React from 'react';
import { db } from '@/db';
import { summaryResults } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function SummaryFetchResult({ id }: { id: number }) {
  const res = (
    await db.select().from(summaryResults).where(eq(summaryResults.id, id))
  ).at(0);
  return <p>{res?.result}</p>;
}
