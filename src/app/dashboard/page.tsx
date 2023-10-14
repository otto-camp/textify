import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { db } from '@/db';
import { currentUser } from '@clerk/nextjs';
import DataTable from './DataTable';

export const metadata = {
  title: 'Dashboard | textify',
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await currentUser();

  const textsResponse = await db.query.texts.findMany({
    with: {
      files: true,
    },
  });

  return (
    <Shell>
      <div className='flex justify-between gap-4'>
        <PageTitle
          title='Dashboard'
          description='Effortlessly manage, track, and customize your summarization experience with the textify Dashboard. Stay organized and save time as you access and tailor your summarized content with ease.'
        />
      </div>

      <DataTable data={textsResponse} />
    </Shell>
  );
}
