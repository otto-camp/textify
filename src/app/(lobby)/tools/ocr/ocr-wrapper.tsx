'use client';
import { CopyButton } from '@/components/copy-button';
import { type FileWithPreview } from '@/components/file-uploader';
import OcrForm from '@/components/forms/ocr-form';
import ResponseConsole from '@/components/response-console';
import { type OcrResponse } from '@/types';
import React from 'react';

export default function OcrWrapper() {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const [response, setResponse] = React.useState<OcrResponse | null>(null);

  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      <OcrForm setResponse={setResponse} files={files} setFiles={setFiles} />
      <ResponseConsole
        control={
          <div className='flex gap-2'>
            <CopyButton value={response?.text} />
          </div>
        }
      >
        <p className='p-4 tracking-[-0.02em]'>{response?.text}</p>
      </ResponseConsole>
    </div>
  );
}
