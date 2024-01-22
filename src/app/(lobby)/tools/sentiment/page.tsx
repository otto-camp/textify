import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
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
    </Shell>
  );
}
