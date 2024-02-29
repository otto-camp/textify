import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { env } from '@/env.mjs';
import { ArrowBigRight, ImageIcon } from 'lucide-react';
import { type Metadata } from 'next';
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
  // const data = [
  //   {
  //     href: '/tools/summary',
  //     title: 'Summary Tool',
  //     description: 'Summarize long text. Get key insights quickly.',
  //   },
  //   {
  //     href: '/tools/sentiment',
  //     title: 'Sentiment Analysis',
  //     description: 'Analyze text sentiment. Understand emotions within text.',
  //   },

  //   {
  //     href: '/tools/ocr',
  //     title: 'OCR (Optical Character Recognition)',
  //     description: 'Extract text from images. Transform visuals into text.',
  //   },
  // ];

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

      <div className='relative grid justify-items-stretch gap-8'>
        <div className='absolute -z-20 size-full bg-radial' />
        <Card>
          <CardHeader className='items-center justify-between xs:flex-row'>
            <CardTitle className='md:text-3xl lg:text-4xl'>
              Summary Tool
            </CardTitle>
            <Link href='/tools/summary' className={buttonVariants()}>
              Use This Tool
            </Link>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col justify-between gap-4 sm:flex-row'>
              <p className='basis-1/2 text-sm md:text-lg'>
                Efficiently summarize extensive texts for quick insights.
                Rapidly extract key information, enhancing comprehension.
                Streamline the process to save time and focus on essential
                details.
              </p>
              <div className='flex items-center justify-center'>
                <ArrowBigRight className='size-8 rotate-90 sm:rotate-0' />
              </div>
              <p className='basis-1/2 text-sm md:text-lg'>
                Summarize long text. Get key insights quickly.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='items-center justify-between xs:flex-row'>
            <CardTitle className='md:text-3xl lg:text-4xl'>
              Sentiment Analysis
            </CardTitle>
            <Link href='/tools/sentiment' className={buttonVariants()}>
              Use This Tool
            </Link>
          </CardHeader>
          <CardContent>
            <p>
              Conduct a comprehensive analysis of the sentiment expressed in a
              given text, delving into the nuanced realm of emotions
              encapsulated within the written content. Explore and discern the
              subtle shades of feelings, uncovering the intricate emotional
              landscape embedded within the textual context.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='items-center justify-between xs:flex-row'>
            <CardTitle className='md:text-3xl lg:text-4xl'>Ocr</CardTitle>
            <Link href='/tools/ocr' className={buttonVariants()}>
              Use This Tool
            </Link>
          </CardHeader>
          <CardContent className='flex flex-col items-center justify-between gap-8 md:flex-row'>
            <p className='basis-1/2'>
              Capture and convert the information present in images into written
              text. Change what you see in pictures into words for better
              understanding.
            </p>
            <div className='flex basis-1/2 items-center justify-between gap-8'>
              <ImageIcon className='size-12' />
              <ArrowBigRight className='size-12' />
              <p>Capture and convert the information </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
}
