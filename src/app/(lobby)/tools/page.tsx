import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { env } from '@/env.mjs';
import { Lightbulb } from 'lucide-react';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const title = 'Text Processing Tools';
const description =
  'Discover our text processing tools for summarization, sentiment analysis, and OCR. Simplify your text-related tasks.';
const keywords = [
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&mode=dark`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&mode=dark`,
        alt: description,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ToolsPage() {
  return (
    <Shell>
      <PageHeader as="header">
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
      <Separator className='my-4 md:my-12' />
      <div className='grid min-h-screen grid-rows-3 gap-12 text-balance'>
        <div className='grid items-center gap-4 lg:grid-cols-2'>
          <div className='order-2 space-y-3 md:space-y-6 lg:order-none'>
            <h2 className='text-3xl font-medium md:text-5xl'>Summary Tool</h2>
            <p className='text-sm text-muted-foreground md:text-base'>
              Efficiently summarize extensive texts for quick insights. Rapidly
              extract key information, enhancing comprehension. Streamline the
              process to save time and focus on essential details.
            </p>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Grasp key points of long texts quickly.
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Save time by focusing on essentials.
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Understand better with concise summaries.
              </span>
            </div>

            <Link href='/tools/summary' className={buttonVariants()}>
              Summarize Text Now
            </Link>
          </div>

          <Image
            src='/summary.webp'
            alt=''
            aria-hidden
            width={1000}
            height={1000}
            className='aspect-square rounded-2xl object-cover'
          />
        </div>
        <div className='grid items-center gap-4 lg:grid-cols-2'>
          <Image
            src='/sentiment.webp'
            alt=''
            aria-hidden
            width={1000}
            height={1000}
            className='aspect-square rounded-2xl object-cover'
          />

          <div className='space-y-3 md:space-y-6'>
            <h2 className='text-3xl font-medium md:text-5xl'>
              Sentiment Analysis
            </h2>
            <p className='text-sm text-muted-foreground md:text-base'>
              Conduct a comprehensive analysis of the sentiment expressed in a
              given text, delving into the nuanced realm of emotions
              encapsulated within the written content. Explore and discern the
              subtle shades of feelings, uncovering the intricate emotional
              landscape embedded within the textual context.
            </p>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Uncover emotions and opinions in text.
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Go beyond basic sentiment detection.
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Make informed decisions based on insights.
              </span>
            </div>
            <Link href='/tools/sentiment' className={buttonVariants()}>
              Analyze Sentiment Now
            </Link>
          </div>
        </div>
        <div className='grid items-center gap-4 lg:grid-cols-2'>
          <div className='order-2 space-y-3 md:space-y-6 lg:order-none'>
            <h2 className='text-3xl font-medium md:text-5xl'>
              Image to Text (OCR)
            </h2>
            <p className='text-sm text-muted-foreground md:text-base'>
              Capture and convert the information present in images into written
              text. Change what you see in pictures into words for better
              understanding.
            </p>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Turn images into text for easy use.
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Unlock information from any image.
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Lightbulb className='size-8' />
              <span className='text-muted-foreground'>
                Automate text extraction to save time.
              </span>
            </div>
            <Link href='/tools/ocr' className={buttonVariants()}>
              Extract Text From Image Now
            </Link>
          </div>

          <Image
            src='/ocr.webp'
            alt=''
            aria-hidden
            width={1000}
            height={1000}
            className='aspect-square rounded-2xl object-cover'
          />
        </div>
      </div>
    </Shell>
  );
}
