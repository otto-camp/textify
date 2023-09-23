'use client';
import CopyButton from '@/components/CopyButton';
import ResponseConsole from '@/components/ResponseConsole';
import OcrForm from '@/components/forms/OcrForm';
import { OcrResponse } from '@/lib/types';
import React from 'react';

export default function OcrWrapper({ userId }: { userId: string }) {
  const [response, setResponse] = React.useState<OcrResponse | null>(null);
  const responseRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, [response]);
  return (
    <div className='grid gap-8 lg:grid-cols-2 '>
      <OcrForm userId={userId} setResponse={setResponse} />
      {response ? (
        <ResponseConsole
          control={
            <div className='flex gap-2'>
              <CopyButton text={response.text}>Copy Text</CopyButton>
            </div>
          }
        >
          <p ref={responseRef} className='p-4 tracking-[-0.02em]'>
            {response.text}
          </p>
        </ResponseConsole>
      ) : null}
    </div>
  );
}
