import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';
import SummaryWrapper from './summary-wrapper';
import { HelpCircle, Share2, Timer } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
      <PageHeader as='header' separated>
        <PageHeaderHeading>Summary Tool</PageHeaderHeading>
        <PageHeaderDescription>
          Experience the speed and accuracy of textify&apos;s Summarization
          Tool. Condense lengthy text with ease and share the distilled essence
          effortlessly. Elevate your summarization game with textify.
        </PageHeaderDescription>
      </PageHeader>
      <SummaryWrapper />
      <div className='space-y-12 py-12 md:py-24'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-[-10%] hidden size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:block'></div>
          <div className='absolute inset-y-0 right-0 hidden size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:block'></div>

          <PageHeaderHeading
            as='h2'
            size='lg'
            className='text-balance text-center'
          >
            Simplify. Process. Absorb knowledge quickly.
          </PageHeaderHeading>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <Timer className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>Saves Time</h3>
            </CardHeader>
            <CardContent>
              <p>
                Quickly grasp the main points of lengthy documents and articles,
                freeing up valuable time for other tasks.
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <HelpCircle className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Enhanced Understanding
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Ensure you haven&apos;t missed any crucial details.
                textify&apos;s summaries highlight key points, facilitating
                better information retention.
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <Share2 className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Simplified Information Sharing
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Share concise summaries with colleagues, classmates, or anyone
                who needs a quick overview of lengthy text.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='max-w-[850px] space-y-4'>
          <PageHeaderHeading as='h3'>How textify works?</PageHeaderHeading>
          <p>
            We leverage advanced algorithms to analyze your text. Imagine it as
            a super reader that condenses lengthy content into a concise
            summary, highlighting the essential information. This way, you can
            quickly grasp the main ideas and save valuable time.
          </p>
          <Separator className='bg-primary' />
          <h3 className='text-lg font-semibold sm:text-xl md:text-2xl'>
            How to Use Our Text Summarizer
          </h3>
          <ul className='list-disc space-y-8'>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Copy and paste your text directly into the designated area
                below.{' '}
                <span className='line-through'>
                  Alternatively, you can upload documents like articles,
                  research papers, or book excerpts (coming soon!).
                </span>
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Hit the big &quot;Summarize&quot; button, and we&apos;ll analyze
                your text in seconds.
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                We&apos;ll generate a concise summary that captures the key
                points of your content, saving you valuable time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
