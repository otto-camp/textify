'use client';
import SummaryForm from '@/components/forms/SummaryForm';
import { Loader2 } from 'lucide-react';
import React from 'react';

export default function SummaryWrapper() {
  const [response, setResponse] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className='grid grid-cols-2 gap-8'>
      <div>
        <h2>Text</h2>
        <SummaryForm setResponse={setResponse} setIsLoading={setIsLoading} />
      </div>
      <div>
        <h2>Summary</h2>
        <div className='h-full overflow-hidden rounded-base border'>
          {isLoading ? (
            <Loader2 className='w-full animate-spin' />
          ) : (
            <p className='p-4 tracking-tight'>{response}</p>
          )}
        </div>
      </div>
    </div>
  );
}
