import { db } from '@/db';
import { summaryResults } from '@/db/schema';
import { eq } from 'drizzle-orm';
import React from 'react';

export default async function SummaryFetchResult({ id }: { id: number }) {
  const res = (
    await db.select().from(summaryResults).where(eq(summaryResults.id, id))
  ).at(0);
  return <p>{res?.result}</p>;
}
