import { Shell } from '@/components/Shell';
import { db } from '@/db';
import { currentUser } from '@clerk/nextjs';
import DataTable from './DataTable';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/PageHeader';

export const metadata = {
  title: 'Dashboard',
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
      <PageHeader>
        <PageHeaderHeading>Dashboard</PageHeaderHeading>
        <PageHeaderDescription>
          Effortlessly manage, track, and customize your summarization
          experience with the textify Dashboard. Stay organized and save time as
          you access and tail
        </PageHeaderDescription>
      </PageHeader>

      <DataTable data={textsResponse} />
    </Shell>
  );
}
