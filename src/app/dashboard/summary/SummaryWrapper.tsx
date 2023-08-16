'use client';
import SummaryForm from '@/components/forms/SummaryForm';
import React from 'react';

export default function SummaryWrapper() {
  const [response, setResponse] = React.useState('');
  return (
    <div>
      <SummaryForm setResponse={setResponse} />
      <div>{response}</div>
    </div>
  );
}
