'use client';
import React from 'react';
import { CopyButton } from '@/components/copy-button';
import ResponseConsole from '@/components/response-console';
import OcrForm from '@/components/forms/ocr-form';
import { type OcrResponse } from '@/types';
import { type FileWithPreview } from '@/components/file-uploader';

export default function OcrWrapper({
  userId,
}: {
  userId: string | undefined | null;
}) {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const [response, setResponse] = React.useState<OcrResponse | null>(null);

  // const body = () => {
  //   const formData = new FormData();
  //   formData.append('response', response?.text as string);
  //   formData.append('content', files?.at(0) as File);
  //   formData.append('userId', userId!);
  //   return formData;
  // };

  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      <OcrForm setResponse={setResponse} files={files} setFiles={setFiles} />
      <ResponseConsole
        control={
          <div className='flex gap-2'>
            {/* <SaveButton
              userId={userId}
              endpoint='/api/ocr/save'
              body={body()}
            /> */}
            <CopyButton value={response?.text} />
          </div>
        }
      >
        <p className='p-4 tracking-[-0.02em]'>{response?.text}</p>
      </ResponseConsole>
    </div>
  );
}
