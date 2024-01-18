'use client';
import { getSummary } from '@/lib/actions/summary';
import { catchError } from '@/lib/utils';
import { textSchemaWithMin } from '@/lib/validations/text';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';

type Inputs = z.infer<typeof textSchemaWithMin>;

export default function SummaryForm({
  setResponse,
}: {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(textSchemaWithMin),
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        const res = await getSummary(data.content);
        setResponse(res.summary);

        if (res.summary.length === 0) {
          toast.error(
            "Your message is concise and to the point! Unfortunately, it's so short that we can't summarize it. Please provide a bit more context so we can assist you effectively."
          );
        }
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className='grid w-full gap-2'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel className='sr-only'>Summarizer</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={3}
                  placeholder='Enter your text'
                  className='min-h-[200px] resize-none md:min-h-[400px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='mx-auto flex w-full max-w-[220px]'>
          <Button disabled={isPending} className='w-full'>
            {isPending && (
              <Loader2
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Summarize
          </Button>
        </div>
      </form>
    </Form>
  );
}
