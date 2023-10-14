'use client';
import CopyButton from '@/components/CopyButton';
import { FileWithPreview } from '@/components/FileUploader';
import ResponseConsole from '@/components/ResponseConsole';
import SaveButton from '@/components/SaveButton';
import OcrForm from '@/components/forms/OcrForm';
import { OcrResponse } from '@/lib/types';
import React from 'react';

export default function OcrWrapper({ userId }: { userId: string }) {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
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

  const body = () => {
    const formData = new FormData();
    formData.append('response', response?.text as string);
    formData.append('content', files?.at(0) as File);
    formData.append('userId', userId);
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
              endpoint='/api/ocr/save'
              body={body()}
            />
            <CopyButton text={response ? response.text : ''}>
              Copy Text
            </CopyButton>
          </div>
        }
      >
        <p ref={responseRef} className='p-4 tracking-[-0.02em]'>
          {response?.text}
        </p>
      </ResponseConsole>
    </div>
  );
}
