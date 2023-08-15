'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
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
import { type Pages } from '@/db/schema';
import * as Dialog from '@radix-ui/react-dialog';
import { FileDialog, FileWithPreview } from '../FileUploader';
import { generateReactHelpers } from '@uploadthing/react/hooks';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { deleteImage } from '@/app/_actions/image';
import { isFile } from '@/utils/isFile';
import { sanitizeFileName } from '@/utils/sanitizeFileName';

type Inputs = z.infer<typeof pageSchema>;

export type FileData = {
  name: string;
  size: number;
  key: string;
  url: string;
}[];

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

//TODO: Needs cleanup
export default function EditPageForm({ page }: { page: Pages }) {
  const [files, setFiles] = useState<FileWithPreview[] | null>(null);
  const [isPending, startTransition] = useTransition();
  const { isUploading, startUpload } = useUploadThing('imageUploader');
  const router = useRouter();

  const form = useForm<Inputs>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      title: page.title,
      description: page.description ?? '',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        if (files) {
          await deleteImage(
            page.image?.substring(page.image?.indexOf('/f/') + 3)!
          );

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

          await fetch('/api/pages/update', {
            method: 'POST',
            body: JSON.stringify({
              id: page.id,
              title: data.title,
              description: data.description,
              image: image ? image[0].url : page.image,
            }),
            cache: 'no-cache',
          });
        } else {
          await fetch('/api/pages/update', {
            method: 'POST',
            body: JSON.stringify({
              id: page.id,
              title: data.title,
              description: data.description,
              image: page.image,
            }),
            cache: 'no-cache',
          });
        }

        router.refresh();
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Form {...form}>
      <h2 className='text-lg font-bold sm:text-xl md:text-2xl'>Edit Page</h2>
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
                <Textarea {...field} className='min-h-[200px]' />
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
        <div className='flex justify-between gap-2'>
          <Dialog.Close asChild>
            <Button variant='secondary' disabled={isPending}>
              Cancel
            </Button>
          </Dialog.Close>
          <Button disabled={isPending || isUploading}>
            {isUploading ||
              (isPending && (
                <Loader2
                  className='mr-2 h-4 w-4 animate-spin'
                  aria-hidden='true'
                />
              ))}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
