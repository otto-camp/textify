import { Shell } from '@/components/Shell';
import { db } from '@/db';
import { texts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function SummaryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const text = (
    await db
      .select()
      .from(texts)
      .where(eq(texts.id, Number(id)))
  ).at(0);
  return (
    <>
      {text ? (
        <Shell variant='markdown' className='prose dark:prose-invert'>
          <h1>{text.title}</h1>
          <h2>Content</h2>
          <p>{text.content}</p>
          <h2>Summary</h2>
          <p>{text.summaryContent}</p>
        </Shell>
      ) : (
        <Shell></Shell>
      )}
    </>
  );
}
