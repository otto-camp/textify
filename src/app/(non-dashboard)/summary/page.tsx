import { Shell } from '@/components/Shell';
import SummaryWrapper from './SummaryWrapper';
import PageTitle from '@/components/PageTitle';

export default function SummaryPage() {
  return (
    <Shell>
      <PageTitle
        title='Summary Tool'
        description='Generate a concise summary of your lengthy text and highlight key
        points.'
      />
      <SummaryWrapper />
    </Shell>
  );
}
