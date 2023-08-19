import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function DashboardPage() {
  return (
    <Shell>
      <PageTitle>Dashboard</PageTitle>
      <p>Nothing to see yet.</p>
      <div className='h-full w-full rounded-base bg-primary/10'>
        <Button asChild>
          <Link href='/summary'>Summarize</Link>
        </Button>
      </div>
    </Shell>
  );
}
