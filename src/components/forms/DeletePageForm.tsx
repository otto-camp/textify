'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTransition } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { z } from 'zod';
import { deletePageSchema } from '@/lib/validations/page';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { catchError } from '@/utils/catchError';
import { type Pages } from '@/db/schema';

type Inputs = z.infer<typeof deletePageSchema>;

export default function DeletePageForm({ page }: { page: Pages }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<Inputs>({
    resolver: zodResolver(deletePageSchema),
    defaultValues: {
      confirm: '',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      if (data.confirm !== 'delete my page') {
        form.setError('confirm', {
          type: 'value',
          message: 'You need to write correctly.',
        });
      }
      try {
        await fetch('/api/pages/delete', {
          method: 'POST',
          body: JSON.stringify({
            id: page.id,
          }),
          cache: 'no-cache',
        });
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Form {...form}>
      <h2 className='text-lg font-bold sm:text-xl md:text-2xl'>Delete Page</h2>
      <p>This page will be deleted, along with all of its data.</p>
      <hr />
      <form
        className='grid gap-4'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='confirm'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm text-muted-foreground'>
                To verify, type <b>delete my page</b> below:
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
          )}
          Delete
        </Button>
      </form>
    </Form>
  );
}
