import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';
import SummaryWrapper from './summary-wrapper';

const title = 'Fast, Accurate, and Free Summarization Tool';
const description =
  "Experience the speed and accuracy of textify's Summarization Tool. Condense lengthy text with ease, share the essence effortlessly. Transforming text has never been this quick and accessible. Try it for free now!";
const keywords = [
  'summarization tool',
  'text summarization',
  'rapid summarization',
  'accurate summarization',
  'free summarization',
  'text transformation',
  'condense text',
  'efficient summarization',
  'online tool',
  'quick text processing',
  'textify summarization',
  'summary generation',
  'text compression',
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=Summary%20Tool&mode=dark`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=Summary%20Tool&mode=dark`,
        alt: description,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function SummaryPage() {
  return (
    <Shell>
      <div className='flex flex-wrap justify-between gap-4'>
        <PageHeader>
          <PageHeaderHeading>Summary Tool</PageHeaderHeading>
          <PageHeaderDescription>
            Experience the speed and accuracy of textify&apos;s Summarization
            Tool. Condense lengthy text with ease and share the distilled
            essence effortlessly. Elevate your summarization game with textify.
          </PageHeaderDescription>
        </PageHeader>
      </div>

      <SummaryWrapper />
    </Shell>
  );
}
