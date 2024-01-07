import React from 'react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { db } from '@/db';
import { texts } from '@/db/schema';
import PreviewCard from '@/components/preview-card';
import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import PreviewSearch from '@/components/preview-search';
import { like } from 'drizzle-orm';

const TITLE = 'Explore';
const DESCRIPTION =
  "Discover the cutting-edge capabilities of our text tools on the 'Explore' page. Stay informed with the latest text previews generated by our advanced text summarization, sentiment analysis, and OCR technologies. Explore the power of language processing and witness the real-time results of our innovative tools in action.";
const KEYWORDS = [
  'Explore',
  'Text Tools',
  'Latest Previews',
  'Text Summarization',
  'Sentiment Analysis',
  'OCR',
  'Language Processing',
  'Innovative Tools',
  'Real-time Results',
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
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
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

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: { search: string | undefined };
}) {
  const textData = searchParams.search
    ? await db
        .select()
        .from(texts)
        .where(like(texts.title, searchParams.search))
        .limit(20)
    : await db.select().from(texts).limit(20);

  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading>Explore</PageHeaderHeading>
        <PageHeaderDescription>
          Discover the cutting-edge capabilities of our text tools on the
          &apos;Explore&apos; page. Stay informed with the latest text previews
          generated by our advanced text summarization, sentiment analysis, and
          OCR technologies. Explore the power of language processing and witness
          the real-time results of our innovative tools in action.
        </PageHeaderDescription>
      </PageHeader>
      <PreviewSearch />
      {textData.length === 0 ? (
        <>Empty</>
      ) : (
        <div className='grid gap-8 lg:grid-cols-2'>
          {textData.map((data) => (
            <PreviewCard text={data} key={data.id} />
          ))}
        </div>
      )}
    </Shell>
  );
}