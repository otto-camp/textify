import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/PageHeader';
import { Shell } from '@/components/Shell';
import { env } from '@/env.mjs';
import { currentUser } from '@clerk/nextjs';
import { Metadata } from 'next';
import SummaryWrapper from './SummaryWrapper';

const TITLE = 'Fast, Accurate, and Free Summarization Tool';
const DESCRIPTION =
  "Experience the speed and accuracy of textify's Summarization Tool. Condense lengthy text with ease, share the essence effortlessly. Transforming text has never been this quick and accessible. Try it for free now!";
const KEYWORDS = [
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=Summary%20Tool&mode=dark`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=Summary%20Tool&mode=dark`,
        alt: DESCRIPTION,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function SummaryPage() {
  const user = await currentUser();

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

      <SummaryWrapper userId={user?.id!} />
    </Shell>
  );
}
