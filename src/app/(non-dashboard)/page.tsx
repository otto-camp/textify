import { Shell } from '@/components/Shell';
import { Button } from '@/components/ui/Button';
import { env } from '@/env.mjs';
import { Clock, FileSearch, Sparkle } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SummariX | Effortless Text Summarization Tool',
  description:
    'Transform lengthy texts into clear summaries with SummariX. Save time and understand key points quickly. Get started now!',
  keywords: [
    'text summarization',
    'generate summaries',
    'efficient information retrieval',
    'key insights',
    'concise content',
    'time-saving tool',
    'effortless comprehension',
    'understand quickly',
    'highlight important points',
    'quick overview',
    'streamlined content',
    'grasp essentials',
    'essential information',
    'simplify reading',
    'clear insights',
    'comprehend efficiently',
    'extract key ideas',
    'summarize texts',
    'highlight key concepts',
    'simplify complex content',
    'distilled insights',
    'summarize efficiently',
    'condense information',
    'effective summarization',
    'digest information',
    'key takeaways',
    'main points',
    'extract core details',
    'summary tool',
    'save time',
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
    title: 'SummariX | Effortless Text Summarization Tool',
    description:
      'Transform lengthy texts into clear summaries with SummariX. Save time and understand key points quickly. Get started now!',
    siteName: 'SummariX',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
        alt: 'Transform lengthy texts into clear summaries with SummariX. Save time and understand key points quickly. Get started now!',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SummariX | Effortless Text Summarization Tool',
    description:
      'Transform lengthy texts into clear summaries with SummariX. Save time and understand key points quickly. Get started now!',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
        alt: 'Transform lengthy texts into clear summaries with SummariX. Save time and understand key points quickly. Get started now!',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <Shell className='gap-24 p-0'>
      <section className='mx-auto max-w-6xl px-4 py-24'>
        <div className='space-y-12 bg-radial py-12 text-center '>
          <h1 className='text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl'>
            Effortless Summarization of Lengthy Texts
          </h1>
          <p className='mx-auto max-w-4xl md:text-xl'>
            Experience effortless text summarization with SummariX. Transform
            lengthy content into clear insights with our intuitive tool. Get
            started now!
          </p>
          <Button size='lg' asChild>
            <Link href='/summary'>Get Started</Link>
          </Button>
        </div>
      </section>
      <section className='space-y-12 px-4 py-24'>
        <h2 className='text-xl font-semibold md:text-2xl lg:text-3xl'>
          Why Choose Us
        </h2>
        <div className='grid justify-center gap-12 sm:grid-cols-2 md:grid-cols-3'>
          <div className='space-y-6 rounded-base border p-4'>
            <FileSearch className='h-8 w-8' />
            <h3>Quickly extract essential information from large texts.</h3>
          </div>
          <div className='space-y-6 rounded-base border p-4'>
            <Clock className='h-8 w-8' />
            <h3>
              Save time by getting concise summaries without reading every word.
            </h3>
          </div>
          <div className='space-y-6 rounded-base border p-4'>
            <Sparkle className='h-8 w-8' />
            <h3>Understand complex topics at a glance.</h3>
          </div>
        </div>
      </section>
      {/* How it works section */}
      {/* Email section */}
      {/* Featured section */}
    </Shell>
  );
}
