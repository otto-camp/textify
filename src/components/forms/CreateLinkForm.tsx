'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { linkSchema } from '@/lib/validations/link';
import { useTransition } from 'react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { Loader2, Pencil } from 'lucide-react';
import { catchError } from '@/utils/catchError';

type Inputs = z.infer<typeof linkSchema>;

export default function CreateLinkForm({
  id,
  userId,
  order,
}: {
  id: string;
  userId: string;
  order: number;
}) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      title: '',
      description: '',
      url: '',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        await fetch('/api/links/create', {
          method: 'POST',
          body: JSON.stringify({ ...data, id, userId, order }),
        });
        form.reset();
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className='w-full space-y-2'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder='URL' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name='imageUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Title' />
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
              <FormLabel className='sr-only'>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder='Description'
                  className='resize-none'
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
