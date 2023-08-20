import { Shell } from '@/components/Shell';
import SummaryWrapper from './SummaryWrapper';
import PageTitle from '@/components/PageTitle';
import { currentUser } from '@clerk/nextjs';

export default async function SummaryPage() {
  const user = await currentUser();
  return (
    <Shell>
      <PageTitle
        title='Summary Tool'
        description='Generate a concise summary of your lengthy text and highlight key
        points.'
      />
      <SummaryWrapper userId={user?.id!} />
    </Shell>
  );
}
