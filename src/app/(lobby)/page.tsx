import AboutSection from '@/components/layout/sections/about-section';
import FaqSection from '@/components/layout/sections/faq-section';
import HeroSection from '@/components/layout/sections/hero-section';
import ServicesSection from '@/components/layout/sections/services-section';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';

const title = 'textify | Transforming Text with Ease';
const description =
  'Unlock the potential of text processing with textify. Summarize, analyze sentiments, perform OCR, and more – all for free. Experience the speed and ease of transforming text. Share your results effortlessly.';
const keywords = [
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
  title,
  description,
  keywords,
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

export default function HomePage() {
  return (
    <Shell className='p-0'>
      <div className='mx-auto w-full max-w-6xl px-4'>
        <HeroSection />
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <ServicesSection />
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <FaqSection />
      </div>
      <div className='mx-auto max-w-5xl space-y-12 px-4 py-12'>
        <AboutSection />
      </div>
      {/* Email section */}
      {/* Blog section */}
    </Shell>
  );
}
