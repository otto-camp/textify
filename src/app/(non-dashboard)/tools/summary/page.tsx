import { Shell } from '@/components/Shell';
import SummaryWrapper from './SummaryWrapper';
import PageTitle from '@/components/PageTitle';
import { currentUser } from '@clerk/nextjs';
import { Metadata } from 'next';
import { env } from '@/env.mjs';

const TITLE = 'Text Summarization Tool | textify';
const DESCRIPTION =
  "Effortlessly summarize lengthy text with TextVerse Hub's summarization tool. Get key insights in seconds.";
const KEYWORDS = ['Text summarization', 'summary tool', 'text analysis'];

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

export default async function SummaryPage() {
  const user = await currentUser();

  return (
    <Shell>
      <div className='flex flex-wrap justify-between gap-4'>
        <PageTitle
          title='Summary Tool'
          description='Summarize text quickly and effectively with our intuitive summarization tool.'
        />
      </div>

      <SummaryWrapper userId={user?.id!} />
    </Shell>
  );
}
