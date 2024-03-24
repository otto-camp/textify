'use client';
import React from 'react';
import { type OcrResponse } from '@/types';
import { fileInputSchema } from '@/lib/validations/file';
import { catchError, isFile } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';
import { FileDialog, type FileWithPreview } from '../file-uploader';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { getOcr } from '@/lib/actions/ocr';

type Inputs = z.infer<typeof fileInputSchema>;

export default function OcrForm({
  files,
  setFiles,
  setResponse,
}: {
  files: FileWithPreview[] | null;
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[] | null>>;
  setResponse: React.Dispatch<React.SetStateAction<OcrResponse | null>>;
}) {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<Inputs>({
    resolver: zodResolver(fileInputSchema),
  });

  function onSubmit() {
    startTransition(async () => {
      if (!files) throw new Error('You need to upload a file first.');

      if (files.length > 1 || files.length === 0) {
        throw new Error('You need to upload only 1 file.');
      }

      if (!isFile(files.at(0))) throw new Error('You need to upload a file.');

      const file = files.at(0) as FileWithPreview;
      const formData = new FormData();
      formData.append('input_file', file);
      formData.append('language', 'english');

      try {
        const res = await getOcr(formData);
        if (res.ok) {
          setResponse(res);
        }
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                  className='lg:min-h-[400px]'
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
                className='mr-2 size-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Extract Text
          </Button>
        </div>
      </form>
    </Form>
  );
}
