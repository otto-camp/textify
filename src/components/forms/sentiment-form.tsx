'use client';
import { catchError } from '@/lib/utils';
import { textSchemaWithMax } from '@/lib/validations/text';
import { type SentimentAnalysisResponse } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { getSentimentAnalysis } from '@/lib/actions/sentiment';

type Inputs = z.infer<typeof textSchemaWithMax>;

export default function SentimentForm({
  setResponse,
  setText,
}: {
  setResponse: React.Dispatch<
    React.SetStateAction<SentimentAnalysisResponse | null>
  >;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const ref = React.useRef<HTMLTextAreaElement | null>(null);
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(textSchemaWithMax),
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        const res = await getSentimentAnalysis(data.content);

        if (res.ok) {
          setResponse(res);
          setText(data.content);
        }
      } catch (error) {
        catchError(error);
      }
    });
  }

  React.useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = 'inherit';
      textarea.style.height = `${Math.min(250, 640)}px`;
    }
  }, [ref.current?.value]);

  return (
    <Form {...form}>
      <form className='grid gap-2' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={3}
                  placeholder='Enter your text'
                  className='resize-none'
                  ref={ref}
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
            Analyze
          </Button>
        </div>
      </form>
    </Form>
  );
}
