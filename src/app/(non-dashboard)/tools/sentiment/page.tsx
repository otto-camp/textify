import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import React from 'react';
import SentimentWrapper from './SentimentWrapper';

const TITLE = 'Sentiment Analysis | SummariX';
const DESCRIPTION =
  'Generate concise summaries of lengthy texts with TextSummarizer. Highlight key points for better comprehension. Try now for efficient information retrieval.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'text summary',
    'concise insights',
    'key points',
    'summarization tool',
    'generate summary',
    'efficient understanding',
    'highlight content',
    'information extraction',
    'quick comprehension',
    'effective summarization',
    'essential details',
    'main ideas',
    'clear overview',
    'condensed content',
    'efficient reading',
    'distilled information',
    'simplify text',
    'comprehend quickly',
    'summarized content',
    'focused information',
    'main takeaways',
    'core concepts',
    'key takeouts',
    'summary creation',
    'essential concepts',
    'quick overview',
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
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
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'SummariX',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
        alt: 'Generate concise summaries of lengthy texts with TextSummarizer. Highlight key points for better comprehension. Try now for efficient information retrieval.',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
        alt: 'Generate concise summaries of lengthy texts with TextSummarizer. Highlight key points for better comprehension. Try now for efficient information retrieval.',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SentimentPage() {
  return (
    <Shell>
      <PageTitle title='Sentiment Analysis' description='' />
      <SentimentWrapper />
    </Shell>
  );
}
