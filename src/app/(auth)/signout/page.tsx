import { SignOutButtons } from '@/components/auth/logout-button';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Sign Out',
};
export default function SignOutPage() {
  return (
    <Shell className='max-w-xs'>
      <div className='grid gap-2 text-center'>
        <h1 className='line-clamp-1 text-3xl font-bold tracking-tight'>
          Sign out
        </h1>
        <p className='line-clamp-2 text-muted-foreground'>
          Are you sure you want to sign out?
        </p>
      </div>

      <SignOutButtons />
    </Shell>
  );
}
