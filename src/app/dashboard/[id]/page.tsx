import { Shell } from '@/components/Shell';
import { Badge } from '@/components/ui/Badge';
import { db } from '@/db';
import { Texts, texts } from '@/db/schema';
import { env } from '@/env.mjs';
import { formatDate } from '@/utils/formatDate';
import { eq } from 'drizzle-orm';
import { Calendar } from 'lucide-react';
import { Metadata } from 'next';
import SentimentFetchResult from './SentimentFetchResult';
import SummaryFetchResult from './SummaryFetchResult';
import OcrFilePreview from './OcrFilePreview';

type Props = {
  params: { id: string };
};

async function getText(id: string) {
  const res = await db
    .select()
    .from(texts)
    .where(eq(texts.id, Number(id)));
  return res.at(0) as Texts | undefined;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const text = await getText(id);
  return {
    title: `${text?.title}`,
    description: text?.title,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: env.NEXT_PUBLIC_APP_URL,
      title: `${text?.title}`,
      description: text?.title,
      siteName: 'textify',
      images: [
        {
          url: new URL(
            `${env.NEXT_PUBLIC_APP_URL}/api/og?title=${encodeURIComponent(
              text?.title ?? 'textify'
            )}&mode=dark`
          ),
          alt: text?.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${text?.title}`,
      description: text?.title,
      images: [
        {
          url: new URL(
            `${env.NEXT_PUBLIC_APP_URL}/api/og?title=${encodeURIComponent(
              text?.title ?? 'textify'
            )}&mode=dark`
          ),
          alt: text?.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function SummaryPage({ params: { id } }: Props) {
  const text = await getText(id);

  return (
    <>
      {text ? (
        <Shell variant='markdown' className='prose dark:prose-invert'>
          <h1>{text.title}</h1>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <Calendar />
              <time>{formatDate(text.createdAt!)}</time>
            </div>

            <Badge>{text.label}</Badge>
          </div>
          <h2>Content</h2>
          <p>{text.content}</p>
          {text.label === 'OCR' ? (
            <></>
          ) : (
            <h2 className='capitalize'>{text.label}</h2>
          )}
          {text.label === 'Summary' ? (
            <SummaryFetchResult id={Number(id)} />
          ) : null}
          {text.label === 'Sentiment Analysis' ? (
            <SentimentFetchResult id={Number(id)} />
          ) : null}
          {text.label === 'OCR' ? <OcrFilePreview id={Number(id)} /> : null}
        </Shell>
      ) : null}
    </>
  );
}
