import PageTitle from '@/components/PageTitle';
import RainbowCard from '@/components/RainbowCard';
import { Shell } from '@/components/Shell';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import React from 'react';

const TITLE = 'Text Processing Tools | textify';
const DESCRIPTION =
  'Discover our text processing tools for summarization, sentiment analysis, and OCR. Simplify your text-related tasks.';
const KEYWORDS = [
  'Text processing tools',
  'summarization',
  'sentiment analysis',
  'OCR',
];

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

export default function ToolsPage() {
  const data = [
    {
      href: '/tools/summary',
      title: 'Summary Tool',
      description: 'Summarize long text. Get key insights quickly.',
    },
    {
      href: '/tools/sentiment',
      title: 'Sentiment Analysis',
      description: 'Analyze text sentiment. Understand emotions within text.',
    },

    {
      href: '/tools/ocr',
      title: 'OCR (Optical Character Recognition)',
      description: 'Extract text from images. Transform visuals into text.',
    },
  ];

  return (
    <Shell>
      <PageTitle
        title='Text Processing Tools'
        description='Explore our powerful text processing tools for all your summarization, sentiment analysis, and OCR needs.'
      />
      <div className='grid justify-items-center gap-8 overflow-hidden md:grid-cols-2'>
        {data.map((d) => (
          <React.Fragment key={d.title}>
            <RainbowCard data={d} />
          </React.Fragment>
        ))}
      </div>
    </Shell>
  );
}
