'use client';
import { catchError } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

export default function SaveButton({
  userId,
  func,
}: {
  userId: string | null | undefined;
  func: () => Promise<boolean>;
}) {
  const [isPending, startTransition] = React.useTransition();

  const saveDb = () => {
    startTransition(async () => {
      if (!userId) {
        catchError('You need to login to save.');
        return;
      }
      await func();
    });
  };

  return (
    <Button onClick={saveDb} disabled={isPending} variant='ghost'>
      {isPending && (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
      )}
      Save
    </Button>
  );
}
