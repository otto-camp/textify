import { Shell } from '@/components/Shell';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Badge, badgeVariants } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { env } from '@/env.mjs';
import { cn } from '@/utils/cn';
import { Asterisk, Clock, FileSearch, Sparkle } from 'lucide-react';
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
    <Shell className='p-0'>
      <div className='mx-auto w-full max-w-6xl px-4'>
        <div className='space-y-12 py-24 text-center dark:bg-radial'>
          {/* <Link
            href='/dashboard'
            className={cn(
              badgeVariants({ variant: 'default' }),
              'hover:underline'
            )}
          >
            <Asterisk className='mr-2 h-4 w-4' />
            New PDF Download Option
          </Link> */}
          <h1 className='text-center text-4xl font-black tracking-tight md:text-6xl lg:text-8xl lg:tracking-tighter'>
            Effortless Summarization of Lengthy Texts
          </h1>
          <p className='mt-4 text-center text-lg text-gray-700 dark:text-gray-300 md:px-20 lg:text-2xl lg:leading-normal'>
            Experience effortless text summarization with SummariX. Transform
            lengthy content into clear insights with our intuitive tool. Get
            started now!
          </p>
          <Button size='lg' asChild>
            <Link href='/summary'>Get Started</Link>
          </Button>
        </div>
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
          Discover the Power of SummariX
        </h2>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
          Unlock a world of efficient text summarization with SummariX. Our tool
          is designed to simplify your reading experience, saving you time and
          helping you grasp essential information quickly.
        </p>
        <div className='grid justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Smart Extract</h3>
            <p className='text-sm font-light'>
              SummariX extracts key insights from long texts, providing relevant
              information without extra details.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Tailored Points</h3>
            <p className='text-sm font-light'>
              Customize summaries to focus on specific important points.
              Highlight what matters to you.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Merge Summaries</h3>
            <p className='text-sm font-light'>
              Combine information from different sources into a coherent
              summary. Get a unified overview of articles, research, and
              reports.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Concept Maps</h3>
            <p className='text-sm font-light'>
              SummariX creates visual concept maps that show connections between
              key concepts, enhancing understanding of complex topics.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Quick Learn</h3>
            <p className='text-sm font-light'>
              Engage with summarized content in efficient learning mode. Grasp
              main ideas rapidly for optimized study sessions.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Team Summarize</h3>
            <p className='text-sm font-light'>
              Collaborate seamlessly by sharing summaries with your team.
              Jointly generate and refine summaries for enhanced productivity on
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
          Frequently Asked Questions
        </h2>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
          Explore common questions about SummariX and find answers to help you
          make the most of our text summarization tool.
        </p>
        <Accordion type='single' collapsible>
          <AccordionItem value='faq-1'>
            <AccordionTrigger>How does SummariX work?</AccordionTrigger>
            <AccordionContent>
              SummariX uses advanced natural language processing algorithms to
              analyze and condense lengthy texts into concise summaries while
              retaining key insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-2'>
            <AccordionTrigger>
              How accurate are the generated summaries?
            </AccordionTrigger>
            <AccordionContent>
              SummariX strives for accuracy by focusing on key points. While the
              tool may not capture every detail, it ensures that essential
              insights are presented effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-3'>
            <AccordionTrigger>
              Is my data secure with SummariX??
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We prioritize data security and privacy. Your texts
              and summarized content are processed securely, adhering to strict
              privacy standards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-4'>
            <AccordionTrigger>
              Are there limitations to the types of content I can summarize?
            </AccordionTrigger>
            <AccordionContent>
              While SummariX is versatile, it&apos;s most effective with textual
              content. It may not work optimally with highly technical or
              specialized language.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
          About Us
        </h2>
        <p className='text-center text-gray-700 dark:text-gray-300 md:px-16 lg:text-lg lg:leading-normal'>
          At SummariX, we believe that information should be accessible and
          comprehensible. Our text summarization tool is designed to simplify
          your reading experience by condensing lengthy content into clear and
          concise summaries. Whether you&apos;re a student, researcher,
          professional, or avid learner, SummariX empowers you to quickly grasp
          essential insights and save valuable time. Join us on a journey to
          streamline your understanding of complex information with ease.
        </p>
      </div>
      {/* Email section */}
      {/* Blog section */}
    </Shell>
  );
}
