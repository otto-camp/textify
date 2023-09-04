'use client';
import CopyButton from '@/components/CopyButton';
import SummaryForm from '@/components/forms/SummaryForm';
import { Button } from '@/components/ui/Button';
import { catchError } from '@/utils/catchError';
import { Loader2 } from 'lucide-react';
import React from 'react';

export default function SummaryWrapper({ userId }: { userId: string }) {
  const [text, setText] = React.useState('');
  const [response, setResponse] = React.useState('');
  const responseRef = React.useRef<HTMLDivElement | null>(null);
  const [isPending, startTransition] = React.useTransition();

  //FIX
  // React.useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1.0, // Element is completely visible
  //   };

  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       // Scroll to the target element
  //       entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });

  //       // Disconnect the observer since we only need to scroll once
  //       observer.disconnect();
  //     }
  //   }, observerOptions);

  //   if (responseRef.current) {
  //     observer.observe(responseRef.current);
  //   }
  //   console.log('Sliding');

  //   // Clean up the observer when the component unmounts
  //   return () => {
  //     if (observer) {
  //       observer.disconnect();
  //     }
  //   };
  // }, [response]);

  const saveDb = () => {
    startTransition(async () => {
      if (!userId) {
        catchError('You need to login to save summaries.');
        return;
      }
      try {
        await fetch('/api/save-summary', {
          method: 'POST',
          body: JSON.stringify({
            content: text,
            response: response,
            userId: userId,
          }),
        });
      } catch (error) {
        catchError(error);
      }
    });
  };

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-32'>
      <SummaryForm setResponse={setResponse} setText={setText} />

      <div className='min-h-[300px] w-full rounded-base border shadow-md shadow-primary/30'>
        <div className='flex flex-wrap justify-between rounded-t-base border-b bg-secondary/30 px-4 py-2'>
          <div className='hidden items-center gap-2 xs:flex'>
            <div className='h-3 w-3 rounded-full bg-blue-700'></div>
            <div className='h-3 w-3 rounded-full bg-blue-700'></div>
            <div className='h-3 w-3 rounded-full bg-blue-700'></div>
          </div>

          <div className='flex gap-2'>
            {/* Download button */}
            {/* Share button */}
            <Button
              disabled={isPending || response.length === 0}
              onClick={saveDb}
              variant='ghost'
            >
              {isPending && (
                <Loader2
                  className='animate-spin mr-2 h-4 w-4'
                  aria-hidden='true'
                />
              )}
              Save
            </Button>
            <CopyButton text={response}>Copy Text</CopyButton>
          </div>
        </div>
        <p ref={responseRef} className='p-4 tracking-[-0.02em]'>
          {response}
        </p>
      </div>
    </div>
  );
}
