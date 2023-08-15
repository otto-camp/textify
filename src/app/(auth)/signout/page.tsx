import { SignOutButtons } from '@/components/auth/SignOutButton';
import { Shell } from '@/components/Shell';

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
