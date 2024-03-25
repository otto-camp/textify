import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { env } from '@/env.mjs';
import { Compass, Lightbulb, PartyPopper } from 'lucide-react';
import { type Metadata } from 'next';
import SentimentWrapper from './sentiment-wrapper';

const title = 'Analyze Text Emotions Instantly for Free';
const description =
  "Unlock the emotional tone of text with textify's Sentiment Analysis Tool. Speed, accuracy, and free access make it the go-to choice. Dive into the sentiments within text and share the insights effortlessly.";
const keywords = [
  'sentiment analysis',
  'text emotions',
  'emotional tone analysis',
  'free sentiment analysis',
  'textify sentiment tool',
  'analyze sentiments',
  'emotional analysis',
  'text processing',
  'sentiment insights',
  'online sentiment tool',
  'emotional text analysis',
  'accurate sentiment analysis',
  'text emotion discovery',
];

export const metadata: Metadata = {
  title,
  description,
  keywords,

  authors: [
    {
      name: 'otto-camp',
      url: 'https://github.com/otto-camp',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.NEXT_PUBLIC_APP_URL,
    title,
    description,
    siteName: 'textify',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=Sentiment%20Analysis&mode=dark`,
        alt: description,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=Sentiment%20Analysis&mode=dark`,
        alt: description,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SentimentPage() {
  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading>Sentiment Analysis</PageHeaderHeading>
        <PageHeaderDescription>
          Unlock the emotional tones within text with textify&apos;s Sentiment
          Analysis Tool. Analyze sentiments instantly, with speed, accuracy, and
          free access. Dive into the emotions conveyed in your text.
        </PageHeaderDescription>
      </PageHeader>
      <SentimentWrapper />

      <div className='space-y-12 py-12 md:py-24'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-[-10%] hidden size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:block'></div>
          <div className='absolute inset-y-0 right-0 hidden size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:block'></div>

          <PageHeaderHeading
            as='h2'
            size='lg'
            className='text-balance text-center'
          >
            Analyze. Understand. Act on Emotion.
          </PageHeaderHeading>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <PartyPopper className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Uncover the Emotional Nuances
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Go beyond basic sentiment. Analyze text to reveal hidden
                emotions and opinions.
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <Compass className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Navigate the Landscape of Emotions
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Gain insights into the full range of emotions within your text.
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-xl md:col-span-2 lg:col-span-1'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <Lightbulb className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Transform Insights into Action
              </h3>
            </CardHeader>
            <CardContent>
              <p>Make data-driven decisions based on sentiment analysis.</p>
            </CardContent>
          </Card>
        </div>

        <div className='max-w-[850px] space-y-8 md:space-y-16'>
          <div className='space-y-6'>
            <PageHeaderHeading as='h3'>How textify works?</PageHeaderHeading>
            <p>
              Our cutting-edge sentiment analysis goes beyond the surface. We
              delve deeper to understand the emotions and opinions embedded
              within your text. Think of it like an emotional compass, guiding
              you towards a nuanced understanding of the sentiment expressed.
              This empowers you to make data-driven decisions based on the true
              feeling behind the words.
            </p>
          </div>
          <Separator className='bg-primary' />
          <h3 className='text-lg font-semibold sm:text-xl md:text-2xl'>
            How to Use Our Sentiment Analysis Tool
          </h3>
          <ul className='list-disc space-y-8'>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Copy and paste your text directly into the designated area
                below.
                <br />
                <span className='text-xs'>
                  (coming soon!) Alternatively, you can upload documents like
                  articles, research papers, or book excerpts.
                </span>
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Hit the big &quot;Analyze&quot; button, and we&apos;ll analyze
                your text in milliseconds.
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Uncover the emotional undercurrents of your text. Our analysis
                reveals if the sentiment leans positive, negative, or neutral,
                helping you tailor your approach.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
