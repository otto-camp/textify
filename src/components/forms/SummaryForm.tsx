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
import { toast } from 'sonner';

type Inputs = z.infer<typeof summarySchema>;

export default function SummaryForm({
  setResponse,
  setIsLoading,
}: {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
        setResponse('');
        setIsLoading(true);
        const res = (await fetch('/api/post-text', {
          method: 'POST',
          body: JSON.stringify(data.content),
        }).then(async (res) => await res.json())) as SummaryResponse;

        if (res.ok) {
          setResponse(await res.summary);

          if (res.summary.length === 0) {
            toast(
              "Your message is concise and to the point! Unfortunately, it's so short that we can't summarize it. Please provide a bit more context so we can assist you effectively."
            );
          }
        }
        setIsLoading(false);
      } catch (error) {
        catchError(error);
        setIsLoading(false);
      }
    });
  }
  return (
    <Form {...form}>
      <form
        className='grid gap-2'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem className='h-full space-y-0'>
              <FormLabel className='sr-only'>Summarizer</FormLabel>
              <FormControl>
                <Textarea {...field} className='min-h-[440px]' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-between gap-4'>
          <Button type='button' variant='ghost' onClick={() => form.reset()}>
            Clear
          </Button>
          <Button disabled={isPending}>
            {isPending && (
              <Loader2
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
