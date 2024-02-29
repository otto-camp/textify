'use client';
import SentimentForm from '@/components/forms/sentiment-form';
import ResponseConsole from '@/components/response-console';
import { type SentimentAnalysisResponse } from '@/types';
import { Frown, Meh, Smile } from 'lucide-react';
import React from 'react';

export default function SentimentWrapper() {
  const [response, setResponse] =
    React.useState<SentimentAnalysisResponse | null>(null);

  return (
    <div className='mx-auto min-h-screen w-full space-y-32'>
      <SentimentForm setResponse={setResponse} />

      {response ? (
        <ResponseConsole
          control={
            <div className='flex gap-2'>
              {/* Download button */}
              {/* Share button */}
            </div>
          }
        >
          <div>
            <div className='flex justify-center gap-4 p-4 sm:gap-8'>
              <div className='flex items-center gap-2 sm:gap-4'>
                <Frown className='text-red-700 dark:text-red-400 sm:size-16' />
                <span className='sm:text-2xl'>
                  %{(response.aggregate_sentiment.neg * 100).toFixed()}
                </span>
              </div>
              <div className='flex items-center gap-2 sm:gap-4'>
                <Meh className='sm:size-16' />
                <span className='sm:text-2xl'>
                  %{(response.aggregate_sentiment.neu * 100).toFixed()}
                </span>
              </div>
              <div className='flex items-center gap-2 sm:gap-4'>
                <Smile className='text-green-700 dark:text-green-400 sm:size-16' />
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
        </ResponseConsole>
      ) : null}
    </div>
  );
}
