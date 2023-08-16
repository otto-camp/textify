import { Shell } from '@/components/Shell';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import SummaryWrapper from './SummaryWrapper';

export default function SummaryPage() {
  const data = [
    { href: '/dashboard', text: 'Dashboard' },
    { href: '/dashboard/summary', text: 'Summary Tool' },
  ];
  return (
    <Shell>
      <Breadcrumbs data={data} />
      <SummaryWrapper />
    </Shell>
  );
}
