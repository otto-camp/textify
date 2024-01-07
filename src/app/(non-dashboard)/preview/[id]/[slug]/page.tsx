import { Shell } from '@/components/shell';
import { Badge } from '@/components/ui/badge';
import { env } from '@/env.mjs';
import { getText } from '@/lib/fetchFromServer';
import { formatDate } from '@/lib/utils';
import { type Metadata } from 'next';
import OcrFilePreview from './ocr-file-preview';
import SentimentFetchResult from './sentiment-fetch-result';
import SummaryFetchResult from './summary-fetch-result';

type Props = {
  params: { id: string; slug: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const text = await getText(Number(id));
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

export default async function SlugPage({ params: { id } }: Props) {
  const text = await getText(Number(id));

  return (
    <>
      {text ? (
        <Shell
          variant='markdown'
          as='article'
          className='prose dark:prose-invert'
        >
          <div className='flex items-center justify-between gap-2'>
            {text.createdAt ? (
              <time dateTime={text.createdAt.toISOString()} className='block'>
                Published on {formatDate(text.createdAt)}
              </time>
            ) : null}
            <Badge>{text.label}</Badge>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl'>{text.title}</h1>
          <hr className='my-2' />
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
          {text.label === 'OCR' ? (
            <OcrFilePreview id={Number(text.fileId)} />
          ) : null}
        </Shell>
      ) : null}
    </>
  );
}
