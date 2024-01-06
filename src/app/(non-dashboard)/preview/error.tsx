'use client';
import { Shell } from '@/components/shell';
import Link from 'next/link';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <Shell className='prose min-h-screen dark:prose-invert'>
      <div className='text-center'>
        <h1>{error.name}</h1>
        <h2>{error.message}</h2>

        <Link href='/preview'>Go Back</Link>
      </div>
    </Shell>
  );
}
