import PageTitle from '@/components/PageTitle';
import { Shell } from '@/components/Shell';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import OcrWrapper from './OcrWrapper';
import { currentUser } from '@clerk/nextjs';

const TITLE = 'OCR Tool | textify';
const DESCRIPTION =
  "Extract text from images effortlessly with textify's OCR tool. Transform visuals into text.";
const KEYWORDS = ['OCR', 'optical character recognition', 'text extraction'];

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

export default async function page() {
  const user = await currentUser();
  return (
    <Shell>
      <PageTitle
        title='OCR Tool'
        description='Easily convert text from images using our efficient OCR tool.'
      />
      <div>
        <OcrWrapper userId={user?.id!} />
      </div>
    </Shell>
  );
}
