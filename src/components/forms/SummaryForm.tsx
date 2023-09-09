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
import { textSchemaWithMin } from '@/lib/validations/text';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/TextArea';
import React from 'react';
import { catchError } from '@/utils/catchError';
import { Button } from '../ui/Button';
import { Loader2 } from 'lucide-react';
import { SummaryResponse } from '@/lib/types';
import { toast } from 'sonner';

type Inputs = z.infer<typeof textSchemaWithMin>;

export default function SummaryForm({
  setResponse,
  setText,
}: {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const ref = React.useRef<HTMLTextAreaElement | null>(null);
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<Inputs>({
    resolver: zodResolver(textSchemaWithMin),
    defaultValues: {
      content: '',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        const res = (await fetch('/api/post-summary', {
          method: 'POST',
          body: JSON.stringify(data.content),
        }).then(async (res) => await res.json())) as SummaryResponse;

        if (res.ok) {
          setResponse(res.summary);
          setText(data.content);

          if (res.summary.length === 0) {
            toast(
              "Your message is concise and to the point! Unfortunately, it's so short that we can't summarize it. Please provide a bit more context so we can assist you effectively."
            );
          }
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
      textarea.style.height = `${Math.min(textarea.scrollHeight, 640)}px`;
    }
  }, [ref.current?.value]);

  return (
    <Form {...form}>
      <form
        className='grid w-full gap-2'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Summarizer</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={3}
                  placeholder='Enter your text'
                  className='min-h-[200px] md:min-h-[400px] resize-none'
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
                className='animate-spin mr-2 h-4 w-4'
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
