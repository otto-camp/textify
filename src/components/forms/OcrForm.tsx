'use client';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { z } from 'zod';
import { fileInputSchema } from '@/lib/validations/file';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileDialog, FileWithPreview } from '../FileUploader';
import { Button } from '../ui/Button';
import { Loader2 } from 'lucide-react';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { generateReactHelpers } from '@uploadthing/react/hooks';
import { OcrResponse } from '@/lib/types';
import { isFile } from '@/utils/isFile';
import { sanitizeFileName } from '@/utils/sanitizeFileName';
import { catchError } from '@/utils/catchError';

type Inputs = z.infer<typeof fileInputSchema>;

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export default function OcrForm({
  userId,
  setResponse,
}: {
  userId: string;
  setResponse: React.Dispatch<React.SetStateAction<OcrResponse | null>>;
}) {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const [isPending, startTransition] = React.useTransition();
  const { isUploading, startUpload } = useUploadThing('imageUploader');

  const form = useForm<Inputs>({
    resolver: zodResolver(fileInputSchema),
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      if (files && isFile(files[0])) {
        const formData = new FormData();
        formData.append('input_file', files[0]);
        formData.append('user_id', userId);

        try {
          const res = await fetch('/api/ocr/post', {
            method: 'POST',
            body: formData,
          });

          setResponse((await res.json()) as OcrResponse);
        } catch (error) {
          catchError(error);
        }
      } else {
        catchError('You need to upload a file first.');
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
        <FormField
          control={form.control}
          name='file'
          render={() => (
            <FormItem>
              <FormLabel className='sr-only'>File</FormLabel>
              <FormControl>
                <FileDialog
                  setValue={form.setValue}
                  files={files}
                  setFiles={setFiles}
                  name='file'
                  isUploading={isUploading}
                  disabled={isPending}
                  maxFiles={1}
                  maxSize={1024 * 1024 * 2}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} className='mt-4'>
          {isPending && (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
          )}
          Create
        </Button>
      </form>
    </Form>
  );
}
