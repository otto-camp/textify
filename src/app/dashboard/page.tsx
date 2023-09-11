import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import UpdateDate from '@/components/UpdateDate';
import { Card, CardHeader } from '@/components/ui/Card';
import { db } from '@/db';
import { texts } from '@/db/schema';
import { formatDate } from '@/utils/formatDate';
import { currentUser } from '@clerk/nextjs';
import { eq, gt } from 'drizzle-orm';
import Link from 'next/link';
import DataTable from './DataTable';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Dashboard | textify',
};
//add table layout
export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await currentUser();
  console.log(searchParams);

  const textsResponse = await db
    .select()
    .from(texts)
    .where(eq(texts.userId, user?.id!));

  return (
    <Shell>
      <div className='flex justify-between gap-4'>
        <PageTitle
          title='Dashboard'
          description='Effortlessly manage, track, and customize your summarization experience with the textify Dashboard. Stay organized and save time as you access and tailor your summarized content with ease.'
        />
        {/* <UpdateDate /> */}
      </div>

      <DataTable data={textsResponse}/>

      {/* <div className='grid h-full w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {textsResponse.map((textRes) => (
          <Card key={textRes.id}>
            <CardHeader>
              <Link href={`/dashboard/${textRes.id}`}>
                <time className='text-muted-foreground'>
                  {formatDate(textRes.createdAt?.toUTCString()!)}
                </time>
                <h3 className='leading-4 tracking-tight'>{textRes.title}</h3>
              </Link>
            </CardHeader>
          </Card>
        ))}
      </div> */}
    </Shell>
  );
}
