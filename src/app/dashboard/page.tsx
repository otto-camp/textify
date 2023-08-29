import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { Button } from '@/components/ui/Button';
import { db } from '@/db';
import { texts } from '@/db/schema';
import { formatDate } from '@/utils/formatDate';
import { currentUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

export default async function DashboardPage() {
  const user = await currentUser();

  const textsRes = await db
    .select()
    .from(texts)
    .where(eq(texts.userId, user?.id!));

  return (
    <Shell>
      <PageTitle title='Dashboard' description='' />
      <div className='h-full w-full space-y-12'>
        <Button asChild>
          <Link href='/summary'>Summarize Tool</Link>
        </Button>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {textsRes.map((textRes) => (
            <Link href={`/summary/${textRes.id}`} key={textRes.id}>
              <article className='rounded-base border'>
                <div className='space-y-2 border-b p-4'>
                  <time className='text-muted-foreground'>
                    {formatDate(textRes.createdAt?.toUTCString()!)}
                  </time>
                  <h3 className='leading-4 tracking-tight'>
                    {textRes.title}
                  </h3>
                </div>
                <div className='p-4'>
                  <p className='line-clamp-3 leading-4 tracking-tight text-foreground/70'>
                    {textRes.summaryContent}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
