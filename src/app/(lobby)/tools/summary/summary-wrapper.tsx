'use client';

import { CopyButton } from '@/components/copy-button';
import SummaryForm from '@/components/forms/summary-form';
import ResponseConsole from '@/components/response-console';
import React from 'react';

export default function SummaryWrapper() {
  const [response, setResponse] = React.useState('');

  return (
    <div className='grid gap-8 lg:grid-cols-2 '>
      <SummaryForm setResponse={setResponse} />

      <ResponseConsole
        control={
          <div className='flex gap-2'>
            {/* Download button */}
            {/* Share button */}
            <CopyButton value={response} />
          </div>
        }
      >
        <p className='p-4 tracking-[-0.02em]'>{response}</p>
      </ResponseConsole>
    </div>
  );
}
