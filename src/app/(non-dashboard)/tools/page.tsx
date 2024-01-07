import React from 'react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import RainbowCard from '@/components/rainbow-card';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';

const TITLE = 'Text Processing Tools';
const DESCRIPTION =
  'Discover our text processing tools for summarization, sentiment analysis, and OCR. Simplify your text-related tasks.';
const KEYWORDS = [
  'text processing tools',
  'free tools',
  'summarization',
  'sentiment analysis',
  'OCR',
  'ease of use',
  'speed',
  'text transformation',
  'online utilities',
  'textify tools',
  'user-friendly',
  'rapid summarization',
  'accurate sentiment analysis',
  'efficient OCR',
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&mode=dark`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&mode=dark`,
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
      <PageHeader>
        <PageHeaderHeading>
          Empower Your Text Processing Journey with textify Tools
        </PageHeaderHeading>
        <PageHeaderDescription>
          Welcome to textify, where powerful text processing tools meet
          user-friendly design. Dive into a world of free tools, from
          summarization to sentiment analysis and OCR, designed for speed and
          accuracy.
        </PageHeaderDescription>
      </PageHeader>

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
