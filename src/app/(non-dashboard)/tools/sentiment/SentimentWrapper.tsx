'use client';
import React from 'react';
import SentimentForm from '@/components/forms/SentimentForm';
import { Button } from '@/components/ui/Button';
import { SentimentAnalysisResponse } from '@/lib/types';
import { useUser } from '@clerk/nextjs';
import { Frown, Meh, Smile } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { catchError } from '@/utils/catchError';

export default function SentimentWrapper() {
  const [response, setResponse] =
    React.useState<SentimentAnalysisResponse | null>(null);
  const [id, setId] = React.useState('');
  const [isPending, startTransition] = React.useTransition();
  const { user } = useUser();

  const saveDb = () => {
    startTransition(async () => {
      if (!user?.id) {
        catchError('You need to login to save sentiment analysis.');
        return;
      }
      try {
        await fetch('/api/save-sentiment', {
          method: 'POST',
          body: JSON.stringify({
            content: response,
            userId: user.id,
            id: id,
          }),
        });
      } catch (error) {
        catchError(error);
      }
    });
  };

  return (
    <div className='mx-auto min-h-screen w-full max-w-4xl space-y-32'>
      <SentimentForm
        setResponse={setResponse}
        setId={setId}
        userId={user ? user.id : null}
      />

      {response ? (
        <div className='grid min-h-[300px] gap-8 rounded-base border'>
          <div className='flex flex-wrap justify-between rounded-t-base border-b bg-secondary/30 px-4 py-2'>
            <div className='hidden items-center gap-2 xs:flex'>
              <div className='h-3 w-3 rounded-full bg-blue-700'></div>
              <div className='h-3 w-3 rounded-full bg-blue-700'></div>
              <div className='h-3 w-3 rounded-full bg-blue-700'></div>
            </div>

            <div className='flex gap-2'>
              {/* Download button */}
              {/* Share button */}
              <Button onClick={saveDb} disabled={isPending} variant='ghost'>
                {isPending && (
                  <Loader2
                    className='mr-2 h-4 w-4 animate-spin'
                    aria-hidden='true'
                  />
                )}
                Save
              </Button>
            </div>
          </div>
          <div className='flex justify-center gap-4 p-4 sm:gap-8'>
            <div className='flex items-center gap-2 sm:gap-4'>
              <Frown className='text-red-700 dark:text-red-400 sm:h-16 sm:w-16' />
              <span className='sm:text-2xl'>
                %{(response.aggregate_sentiment.neg * 100).toFixed()}
              </span>
            </div>
            <div className='flex items-center gap-2 sm:gap-4'>
              <Meh className='sm:h-16 sm:w-16' />
              <span className='sm:text-2xl'>
                %{(response.aggregate_sentiment.neu * 100).toFixed()}
              </span>
            </div>
            <div className='flex items-center gap-2 sm:gap-4'>
              <Smile className='text-green-700 dark:text-green-400 sm:h-16 sm:w-16' />
              <span className='sm:text-2xl'>
                %{(response.aggregate_sentiment.pos * 100).toFixed()}
              </span>
            </div>
          </div>
          <h2 className='text-center text-2xl font-bold capitalize sm:text-3xl md:text-4xl lg:text-5xl'>
            {response.sentiment}
          </h2>
          <div className='grid gap-4 p-4'>
            <h3 className='text-lg font-semibold sm:text-xl md:text-2xl'>
              Sentence List
            </h3>
            <ul className='flex flex-col gap-4'>
              {response.sentiment_list.map((sentiment, index) => (
                <li key={index} className='space-y-2'>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 sm:gap-4'>
                      <Frown className='text-red-700 dark:text-red-400 ' />
                      <span>%{(sentiment.neg * 100).toFixed()}</span>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-4'>
                      <Meh />
                      <span>%{(sentiment.neu * 100).toFixed()}</span>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-4'>
                      <Smile className='text-green-700 dark:text-green-400 ' />
                      <span>%{(sentiment.pos * 100).toFixed()}</span>
                    </div>
                  </div>
                  <p>{sentiment.sentence}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
