import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { Button } from '@/components/ui/Button';
import { db } from '@/db';
import { texts } from '@/db/schema';
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
      <div className='h-full w-full rounded-base bg-primary/10'>
        <Button asChild>
          <Link href='/summary'>Summarize</Link>
        </Button>
        {textsRes.map((textRes) => (
          <pre key={textRes.id}>{JSON.stringify(textRes, null, 2)}</pre>
        ))}
      </div>
    </Shell>
  );
}
