'use client';
import { OcrResponse } from '@/lib/types';
import { fileInputSchema } from '@/lib/validations/file';
import { catchError } from '@/utils/catchError';
import { isFile } from '@/utils/isFile';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FileDialog, FileWithPreview } from '../FileUploader';
import { Button } from '../ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';

type Inputs = z.infer<typeof fileInputSchema>;

export default function OcrForm({
  userId,
  setResponse,
}: {
  userId: string;
  setResponse: React.Dispatch<React.SetStateAction<OcrResponse | null>>;
}) {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<Inputs>({
    resolver: zodResolver(fileInputSchema),
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      if (files && isFile(files[0])) {
        const formData = new FormData();
        formData.append('input_file', files[0]);
        formData.append('language', 'english');

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
            <FormItem className='space-y-0'>
              <FormLabel className='sr-only'>File</FormLabel>
              <FormControl>
                <FileDialog
                  setValue={form.setValue}
                  files={files}
                  setFiles={setFiles}
                  name='file'
                  disabled={isPending}
                  maxFiles={1}
                  maxSize={1024 * 1024 * 2}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-center'>
          <Button disabled={isPending} className='mt-4 w-full max-w-[220px]'>
            {isPending && (
              <Loader2
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Convert
          </Button>
        </div>
      </form>
    </Form>
  );
}
