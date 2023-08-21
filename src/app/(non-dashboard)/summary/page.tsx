import { Shell } from '@/components/Shell';
import SummaryWrapper from './SummaryWrapper';
import PageTitle from '@/components/PageTitle';
import { currentUser } from '@clerk/nextjs';
import { db } from '@/db';
import { texts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

export default async function SummaryPage() {
  const user = await currentUser();

  const latestSavedSummaries = user
    ? (await db.select().from(texts).where(eq(texts.userId, user.id))).slice(
        0,
        3
      )
    : null;

  return (
    <Shell>
      <PageTitle
        title='Summary Tool'
        description='Generate a concise summary of your lengthy text and highlight key
        points.'
      />

      <h2 className='text-lg font-semibold md:text-xl'>
        Latest saved Summeries
      </h2>
      <div className='mb-12 flex items-center gap-8'>
        {latestSavedSummaries ? (
          <>
            {latestSavedSummaries.map((sum) => (
              <Link
                href={`/summary/${sum.id}`}
                key={sum.id}
                className='max-w-sm rounded-base border p-4'
              >
                <h3 className='leading-4 tracking-tight'>{sum.title}</h3>
              </Link>
            ))}
          </>
        ) : null}
      </div>
      <SummaryWrapper userId={user?.id!} />
    </Shell>
  );
}
