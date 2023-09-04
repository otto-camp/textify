import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <Shell>
      <PageTitle title='Tools' description='' />
      <div className='grid gap-4 sm:grid-cols-2'>
        <Link
          href='/tools/summary'
          className='rounded-base border bg-accent p-12 text-center text-2xl font-bold duration-200 hover:bg-accent/70'
        >
          Summary Tool
        </Link>
        <Link
          href='/tools/sentiment'
          className='rounded-base border bg-accent p-12 text-center text-2xl font-bold duration-200 hover:bg-accent/70'
        >
          Sentiment Analysis
        </Link>
      </div>
    </Shell>
  );
}
