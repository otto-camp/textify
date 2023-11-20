import { Shell } from '@/components/Shell';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'textify | Transforming Text with Ease';
const DESCRIPTION =
  'Unlock the potential of text processing with textify. Summarize, analyze sentiments, perform OCR, and more – all for free. Experience the speed and ease of transforming text. Share your results effortlessly.';
const KEYWORDS = [
  'text processing',
  'text transformation',
  'online tools',
  'free tools',
  'summarization',
  'sentiment analysis',
  'OCR',
  'user-friendly',
  'speed',
  'ease of use',
  'shareable',
  'textify platform',
  'text processing tools',
  'rapid text transformation',
  'accessible text tools',
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

export default function HomePage() {
  return (
    <Shell className='p-0'>
      <div className='mx-auto w-full max-w-6xl px-4'>
        <div className='space-y-12 py-24 text-center dark:bg-radial'>
          <h1 className='text-center text-4xl font-black tracking-tight md:text-6xl lg:text-8xl lg:tracking-tighter'>
            Unleash the Power of Text with textify
          </h1>
          <p className='mt-4 text-center text-lg text-gray-700 dark:text-gray-300 md:px-20 lg:text-2xl lg:leading-normal'>
            Transform text effortlessly with textify&apos;s suite of free and fast
            online tools. From summarization to sentiment analysis and OCR,
            experience the speed and ease of text processing.
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
              textify condenses lengthy text into concise summaries, saving time
              and helping users extract key insights.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Sentiment Analysis</h3>
            <p className='text-sm font-light'>
              textify analyzes the emotional tone within text content,
              categorizing it as positive, negative, or neutral.
            </p>
          </div>
          <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>OCR (Optical Character Recognition)</h3>
            <p className='text-sm font-light'>
              textify extracts text from images, converting visual content into
              editable text.
            </p>
          </div>
          {/* <div className='space-y-3 rounded-base border p-4'>
            <h3 className='font-bold'>Concept Maps</h3>
            <p className='text-sm font-light'>
              textify creates visual concept maps illustrating connections
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
              textify supports team collaboration, enabling users to share and
              refine summaries for enhanced productivity.
            </p>
          </div> */}
        </div>
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
          Common Questions About textify.
        </h2>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
          Get answers to frequently asked questions to maximize your textify
          experience.
        </p>
        <Accordion type='single' collapsible>
          <AccordionItem value='faq-1'>
            <AccordionTrigger>How does textify work?</AccordionTrigger>
            <AccordionContent>
              textify uses advanced natural language processing algorithms to
              analyze and condense lengthy texts into concise summaries while
              retaining key insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-2'>
            <AccordionTrigger>
              How accurate are the generated summaries?
            </AccordionTrigger>
            <AccordionContent>
              textify strives for accuracy by focusing on key points. While the
              tool may not capture every detail, it ensures that essential
              insights are presented effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='faq-3'>
            <AccordionTrigger>Is textify free to use?</AccordionTrigger>
            <AccordionContent>
              textify is completely free.
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
          At textify, we are dedicated to making information accessible and
          understandable. Our suite of text processing and analysis tools is
          designed to simplify your interactions with textual content. Whether
          you&apos;re a student, researcher, professional, or avid learner,
          textify empowers you with tools such as text summarization, sentiment
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
