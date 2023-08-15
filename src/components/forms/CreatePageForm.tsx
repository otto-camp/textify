'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState, useTransition } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { z } from 'zod';
import { pageSchema } from '@/lib/validations/page';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/TextArea';
import { catchError } from '@/utils/catchError';
import { FileDialog, type FileWithPreview } from '../FileUploader';
import { generateReactHelpers } from '@uploadthing/react/hooks';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { isArrayOfFile } from '@/utils/isArrayOfFile';
import { isFile } from '@/utils/isFile';
import { sanitizeFileName } from '@/utils/sanitizeFileName';
import { FileData } from './EditPageForm';
import { useRouter } from 'next/navigation';

type Inputs = z.infer<typeof pageSchema>;

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export default function CreatePageForm({ userId }: { userId: string }) {
  const [files, setFiles] = useState<FileWithPreview[] | null>(null);
  const [isPending, startTransition] = useTransition();
  const { isUploading, startUpload } = useUploadThing('imageUploader');
  const router = useRouter()

  const form = useForm<Inputs>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        if (files) {
          const image = isFile(files[0])
            ? ((await startUpload([
                new File(
                  [files[0]],
                  `${sanitizeFileName(data.title)}.${files[0].name
                    .split('.')
                    .pop()}`,
                  { type: files[0].type }
                ),
              ])) as FileData)
            : null;

          await fetch('/api/pages/create', {
            method: 'POST',
            body: JSON.stringify({
              userId: userId,
              title: data.title,
              description: data.description,
              image: image && image[0].url,
            }),
            cache: 'no-cache',
          });
        } else {
          await fetch('/api/pages/create', {
            method: 'POST',
            body: JSON.stringify({
              userId: userId,
              title: data.title,
              description: data.description,
            }),
            cache: 'no-cache',
          });
        }
        router.refresh()
      } catch (error) {
        catchError(error);
        console.log(error);
      }
    });
  }

  return (
    <Form {...form}>
      <h2 className='text-lg font-bold sm:text-xl md:text-2xl'>Create Page</h2>
      <hr />
      <form
        className='grid gap-4'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='image'
          render={() => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <FileDialog
                  setValue={form.setValue}
                  files={files}
                  setFiles={setFiles}
                  name='image'
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
        <Button disabled={isPending}>
          {isPending && (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
          )}
          Create
        </Button>
      </form>
    </Form>
  );
}
