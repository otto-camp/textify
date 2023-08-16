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
import { z } from 'zod';
import { summarySchema } from '@/lib/validations/summary';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/TextArea';
import React from 'react';
import { catchError } from '@/utils/catchError';
import { Button } from '../ui/Button';
import { Loader2 } from 'lucide-react';
import { SummaryResponse } from '@/lib/types';

type Inputs = z.infer<typeof summarySchema>;

export default function SummaryForm({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      content: '',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        const res = (await fetch('/api/post-text', {
          method: 'POST',
          body: JSON.stringify(data.content),
        }).then(async (res) => await res.json())) as SummaryResponse;

        if (res.ok) {
          setResponse(await res.summary);
        }

        form.reset();
      } catch (error) {
        catchError(error);
      }
    });
  }
  return (
    <Form {...form}>
      <form
        className='grid gap-8'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem className='h-full'>
              <FormLabel>Summarizer</FormLabel>
              <FormControl>
                <Textarea {...field} className='min-h-[440px]' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
          )}
          Submit
        </Button>
      </form>
    </Form>
  );
}
