import { Shell } from '@/components/Shell';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function SummaryPage() {
  const data = [
    { href: '/dashboard', text: 'Dashboard' },
    { href: '/dashboard/summary', text: 'Summary' },
  ];
  return (
    <Shell>
      <Breadcrumbs data={data} />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum molestias
      ex itaque corrupti omnis quas voluptatem perspiciatis! Quaerat obcaecati
      nostrum quam nam corporis impedit voluptatum, est ratione vel et rerum
      ipsum, dolor, accusamus perspiciatis quae aspernatur quidem quia quos
      molestiae ad consequuntur laboriosam provident omnis iure. Vero fugit iste
      eligendi?
    </Shell>
  );
}
