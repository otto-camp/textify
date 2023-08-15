import { type HandleOAuthCallbackParams } from '@clerk/types';

import SSOCallback from '@/components/auth/SSOCallback';
import { Shell } from '@/components/Shell';

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams;
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <Shell className='max-w-lg'>
      <SSOCallback searchParams={searchParams} />
    </Shell>
  );
}
