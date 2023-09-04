import { Shell } from '@/components/Shell';
import SummaryWrapper from './SummaryWrapper';
import PageTitle from '@/components/PageTitle';
import { currentUser } from '@clerk/nextjs';
import { Metadata } from 'next';
import { env } from '@/env.mjs';

export const metadata: Metadata = {
  title: 'Summary Tool | SummariX',
  description:
    'Generate concise summaries of lengthy texts with TextSummarizer. Highlight key points for better comprehension. Try now for efficient information retrieval.',
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
    title: 'Summary Tool | SummariX',
    description:
      'Generate concise summaries of lengthy texts with TextSummarizer. Highlight key points for better comprehension. Try now for efficient information retrieval.',
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
    title: 'Summary Tool | SummariX',
    description:
      'Generate concise summaries of lengthy texts with TextSummarizer. Highlight key points for better comprehension. Try now for efficient information retrieval.',
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

export default async function SummaryPage() {
  const user = await currentUser();

  return (
    <Shell>
      <div className='flex flex-wrap justify-between gap-4'>
        <PageTitle
          title='Summary Tool'
          description='Generate a concise summary of your lengthy text and highlight key
        points.'
        />
      </div>

      <SummaryWrapper userId={user?.id!} />
    </Shell>
  );
}
