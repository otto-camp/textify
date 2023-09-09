import { Shell } from '@/components/Shell';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { env } from '@/env.mjs';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'textify | Effortless Text Summarization Tool',
  description:
    'Transform lengthy texts into clear summaries with textify. Save time and understand key points quickly. Get started now!',
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
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.NEXT_PUBLIC_APP_URL,
    title: 'textify | Effortless Text Summarization Tool',
    description:
      'Transform lengthy texts into clear summaries with textify. Save time and understand key points quickly. Get started now!',
    siteName: 'textify',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
        alt: 'Transform lengthy texts into clear summaries with textify. Save time and understand key points quickly. Get started now!',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'textify | Effortless Text Summarization Tool',
    description:
      'Transform lengthy texts into clear summaries with textify. Save time and understand key points quickly. Get started now!',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
        alt: 'Transform lengthy texts into clear summaries with textify. Save time and understand key points quickly. Get started now!',
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
            Textify: Transforming Text Processing
          </h1>
          <p className='mt-4 text-center text-lg text-gray-700 dark:text-gray-300 md:px-20 lg:text-2xl lg:leading-normal'>
            Experience the ultimate text processing solution with powerful tools
            for effortless summarization, sentiment analysis, emotion analysis,
            OCR, and seamless text extraction, making it your one-stop
            destination for all your text processing needs.
          </p>
          <Button size='lg' asChild>
            <Link href='/tools'>Get Started</Link>
          </Button>
        </div>
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
          Unlock the textify Advantage.
        </h2>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
          Explore the features that make textify a text processing powerhouse.
        </p>
        <div className='grid justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Text Summarization</h3>
            <p className='text-sm font-light'>
              Textify condenses lengthy text into concise summaries, saving time
              and helping users extract key insights.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Sentiment Analysis</h3>
            <p className='text-sm font-light'>
              Textify analyzes the emotional tone within text content,
              categorizing it as positive, negative, or neutral.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>OCR (Optical Character Recognition)</h3>
            <p className='text-sm font-light'>
              Textify extracts text from images and PDF files, converting visual
              content into editable text.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Concept Maps</h3>
            <p className='text-sm font-light'>
              Textify creates visual concept maps illustrating connections
              between key concepts in text, enhancing understanding.
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
            <h3 className='font-bold'>Team Collaboration</h3>
            <p className='text-sm font-light'>
              Textify supports team collaboration, enabling users to share and
              refine summaries for enhanced productivity.
            </p>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
          Common Questions About Textify.
        </h2>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
          Get answers to frequently asked questions to maximize your Textify
          experience.
        </p>
        <Accordion type='single' collapsible>
          <AccordionItem value='faq-1'>
            <AccordionTrigger>How does textify work?</AccordionTrigger>
            <AccordionContent>
              Textify uses advanced natural language processing algorithms to
              analyze and condense lengthy texts into concise summaries while
              retaining key insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-2'>
            <AccordionTrigger>
              How accurate are the generated summaries?
            </AccordionTrigger>
            <AccordionContent>
              Textify strives for accuracy by focusing on key points. While the
              tool may not capture every detail, it ensures that essential
              insights are presented effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-3'>
            <AccordionTrigger>Is Textify free to use?</AccordionTrigger>
            <AccordionContent>
              Textify offers both free and premium subscription options, with
              premium users enjoying additional features and benefits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-4'>
            <AccordionTrigger>Is my data secure with textify?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We prioritize data security and privacy. Your texts
              and summarized content are processed securely, adhering to strict
              privacy standards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-5'>
            <AccordionTrigger>
              Are there limitations to the types of content I can summarize?
            </AccordionTrigger>
            <AccordionContent>
              While textify is versatile, it&apos;s most effective with textual
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
          At Textify, we are dedicated to making information accessible and
          understandable. Our suite of text processing and analysis tools is
          designed to simplify your interactions with textual content. Whether
          you&apos;re a student, researcher, professional, or avid learner, Textify
          empowers you with tools such as text summarization, sentiment
          analysis, OCR (Optical Character Recognition), concept mapping, and
          more. Quickly grasp essential insights, save valuable time, and join
          us on a journey to streamline your understanding of complex
          information with ease.
        </p>
      </div>
      {/* Email section */}
      {/* Blog section */}
    </Shell>
  );
}
