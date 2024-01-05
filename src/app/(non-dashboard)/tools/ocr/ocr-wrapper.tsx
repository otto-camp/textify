'use client';
import { CopyButton } from '@/components/copy-button';
import { type FileWithPreview } from '@/components/file-uploader';
import OcrForm from '@/components/forms/ocr-form';
import ResponseConsole from '@/components/response-console';
import SaveButton from '@/components/save-button';
import { saveOcr } from '@/lib/actions/ocr';
import { type OcrResponse } from '@/types';
import React from 'react';

export default function OcrWrapper({
  userId,
}: {
  userId: string | undefined | null;
}) {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const [response, setResponse] = React.useState<OcrResponse | null>(null);

  const body = () => {
    const formData = new FormData();
    formData.append('response', response?.text as string);
    formData.append('content', files?.at(0) as File);
    formData.append('userId', userId!);
    return formData;
  };

  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      <OcrForm setResponse={setResponse} files={files} setFiles={setFiles} />
      <ResponseConsole
        control={
          <div className='flex gap-2'>
            <SaveButton
              userId={userId}
              func={async () => await saveOcr(body())}
            />
            <CopyButton value={response?.text} />
          </div>
        }
      >
        <p className='p-4 tracking-[-0.02em]'>{response?.text}</p>
      </ResponseConsole>
    </div>
  );
}
