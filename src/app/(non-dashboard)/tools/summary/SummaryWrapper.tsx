'use client';
import CopyButton from '@/components/CopyButton';
import SaveButton from '@/components/SaveButton';
import SummaryForm from '@/components/forms/SummaryForm';
import React from 'react';

export default function SummaryWrapper({ userId }: { userId: string }) {
  const [text, setText] = React.useState('');
  const [response, setResponse] = React.useState('');
  const responseRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, [response.length]);

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-32'>
      <SummaryForm setResponse={setResponse} setText={setText} />

      {response.length !== 0 ? (
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
              <SaveButton
                userId={userId}
                endpoint='/api/save-summary'
                body={{
                  content: text,
                  response: response,
                  userId: userId,
                }}
              />
              <CopyButton text={response}>Copy Text</CopyButton>
            </div>
          </div>
          <p ref={responseRef} className='p-4 tracking-[-0.02em]'>
            {response}
          </p>
        </div>
      ) : null}
    </div>
  );
}
