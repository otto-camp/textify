import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import React from 'react';
import SentimentWrapper from './SentimentWrapper';

const TITLE = 'Analyze Text Emotions Instantly for Free';
const DESCRIPTION =
  "Unlock the emotional tone of text with textify's Sentiment Analysis Tool. Speed, accuracy, and free access make it the go-to choice. Dive into the sentiments within text and share the insights effortlessly.";
const KEYWORDS = [
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
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,

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
    siteName: 'textify',
    images: [
      {
        url: `${
            env.NEXT_PUBLIC_APP_URL
          }/api/og?title=textify&type=Sentiment%20Analysis&mode=dark`,
        alt: DESCRIPTION,
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
        url: `${
            env.NEXT_PUBLIC_APP_URL
          }/api/og?title=textify&type=Sentiment%20Analysis&mode=dark`,
        alt: DESCRIPTION,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SentimentPage() {
  return (
    <Shell>
      <PageTitle
        title='Sentiment Analysis'
        description="Unlock the emotional tones within text with textify's Sentiment Analysis Tool. Analyze sentiments instantly, with speed, accuracy, and free access. Dive into the emotions conveyed in your text."
      />
      <SentimentWrapper />
    </Shell>
  );
}
