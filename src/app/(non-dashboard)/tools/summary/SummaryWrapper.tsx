'use client';
import CopyButton from '@/components/CopyButton';
import ResponseConsole from '@/components/ResponseConsole';
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
    <div className='grid gap-8 lg:grid-cols-2 '>
      <SummaryForm setResponse={setResponse} setText={setText} />

      <ResponseConsole
        control={
          <div className='flex gap-2'>
            {/* Download button */}
            {/* Share button */}
            <SaveButton
              userId={userId}
              endpoint='/api/summary/save'
              body={JSON.stringify({
                content: text,
                response: response,
                userId: userId,
              })}
            />
            <CopyButton text={response}>Copy Text</CopyButton>
          </div>
        }
      >
        <p ref={responseRef} className='p-4 tracking-[-0.02em]'>
          {response}
        </p>
      </ResponseConsole>
    </div>
  );
}
