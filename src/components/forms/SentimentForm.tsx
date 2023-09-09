'use client';
import { textSchemaWithMax } from '@/lib/validations/text';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { Textarea } from '../ui/TextArea';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { catchError } from '@/utils/catchError';
import { SentimentAnalysisResponse } from '@/lib/types';

type Inputs = z.infer<typeof textSchemaWithMax>;

export default function SentimentForm({
  setResponse,
  setId,
  userId,
}: {
  setResponse: React.Dispatch<
    React.SetStateAction<SentimentAnalysisResponse | null>
  >;
  setId: React.Dispatch<React.SetStateAction<string>>;
  userId?: string | null;
}) {
  const ref = React.useRef<HTMLTextAreaElement | null>(null);
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(textSchemaWithMax),
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        if (userId) {
          const res = await fetch('/api/save-text', {
            method: 'POST',
            body: JSON.stringify({ content: data.content, userId: userId }),
          });
          const id = await res.json();
          setId(id);
        }

        const res = (await fetch('/api/post-sentiment', {
          method: 'POST',
          body: JSON.stringify(data.content),
        }).then(async (res) => await res.json())) as SentimentAnalysisResponse;

        if (res.ok) {
          setResponse(res);
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
      <form
        className='grid gap-2'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
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
