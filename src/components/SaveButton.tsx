'use client';
import React from 'react';
import { Button } from './ui/Button';
import { Loader2 } from 'lucide-react';
import { catchError } from '@/utils/catchError';
import { toast } from 'sonner';

export default function SaveButton({
  userId,
  endpoint,
  body,
}: {
  userId: string;
  endpoint: string;
  body: BodyInit | null | undefined;
}) {
  const [isPending, startTransition] = React.useTransition();

  const saveDb = () => {
    startTransition(async () => {
      if (!userId) {
        catchError('You need to login to save.');
        return;
      }
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: body,
        });

        if (res.ok) {
          toast.success('Saved!');
        }
      } catch (error) {
        catchError(error);
      }
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
