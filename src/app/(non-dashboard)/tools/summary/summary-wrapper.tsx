'use client';

import { CopyButton } from '@/components/copy-button';
import SummaryForm from '@/components/forms/summary-form';
import ResponseConsole from '@/components/response-console';
import SaveButton from '@/components/save-button';
import { saveSummary } from '@/lib/actions/summary';
import React from 'react';

export default function SummaryWrapper({
  userId,
}: {
  userId: string | null | undefined;
}) {
  const [content, setContent] = React.useState('');
  const [response, setResponse] = React.useState('');

  return (
    <div className='grid gap-8 lg:grid-cols-2 '>
      <SummaryForm setResponse={setResponse} setContent={setContent} />

      <ResponseConsole
        control={
          <div className='flex gap-2'>
            {/* Download button */}
            {/* Share button */}
            <SaveButton
              userId={userId}
              func={async () => await saveSummary(userId,content,response)}
            />
            <CopyButton value={response} />
          </div>
        }
      >
        <p className='p-4 tracking-[-0.02em]'>{response}</p>
      </ResponseConsole>
    </div>
  );
}
