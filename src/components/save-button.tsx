'use client';
import React from 'react';
import { saveSummary } from '@/lib/actions/summary';
import { catchError } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function SaveButton({
  userId,
  type,
  body,
}: {
  userId: string | null | undefined;
  type: 'Summary' | 'Sentiment' | 'Ocr';
  body: { content: string; response: string } | FormData;
}) {
  const [isPending, startTransition] = React.useTransition();

  const saveDb = () => {
    startTransition(async () => {
      if (!userId) {
        catchError('You need to login to save.');
        return;
      }

      if (body instanceof FormData) {
      } else {
        try {
          const res = await saveSummary(userId, body.content, body.response);

          if (res) {
            toast.success('Saved!');
          }
        } catch (error) {
          catchError(error);
        }
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
