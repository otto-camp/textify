import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { db } from '@/db';
import DataTable from './data-table';

export const metadata = {
  title: 'textify | Dashboard',
};

export default async function DashboardPage() {
  // const user = await currentUser();

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
