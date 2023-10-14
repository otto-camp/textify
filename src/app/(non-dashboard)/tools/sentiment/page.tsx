import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import React from 'react';
import SentimentWrapper from './SentimentWrapper';

const TITLE = 'Sentiment Analysis Tool | textify';
const DESCRIPTION =
  "Analyze sentiment within text using textify's sentiment analysis tool. Understand emotions in your content.";
const KEYWORDS = ['Sentiment analysis', 'emotional analysis', 'text emotion'];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
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
    siteName: 'textify',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
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
        description='Gain insights into text emotions with our powerful sentiment analysis tool.'
      />
      <SentimentWrapper />
    </Shell>
  );
}
