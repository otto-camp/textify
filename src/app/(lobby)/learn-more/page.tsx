import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const title = 'Learn More About Us';
const description =
  'Dive deeper into how Textify empowers you to unlock valuable insights from your text data. Explore our powerful text processing tools for summarization, sentiment analysis, and OCR. Learn how Textify can simplify your workflow and save you valuable time.';

const keywords = [
  'save time',
  'improve efficiency',
  'gain insights',
  'understand sentiment',
  'extract text from images',
  'easy to use',
  'fast and reliable',
  'transform your text data',
  'powerful text analysis',
  'summarize documents',
  'analyze customer reviews',
  'digitize scanned documents',
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

export default function LearnMorePage() {
  return (
    <Shell>
      <PageHeader
        as='header'
        className='justify-items-center text-balance py-16 text-center'
      >
        <PageHeaderHeading size='lg' className='font-black lg:text-6xl'>
          Ready to Harness the Power of Text Tools?
          <br /> Learn More About textify
        </PageHeaderHeading>
        <PageHeaderDescription size='lg'>
          Explore our tools and discover how Textify can transform your
          workflow.
        </PageHeaderDescription>
        <Link href='/tools' className={buttonVariants()}>
          Explore Our Tools
        </Link>
      </PageHeader>
      <PageHeader as='div' className='py-12'>
        <PageHeaderHeading as='h2'>
          What is Text Analysis and Why is it Important?
        </PageHeaderHeading>
        <p className='text-balance text-sm md:text-base'>
          In today&apos;s data-driven world, businesses are drowning in textual
          information. Text analysis empowers you to transform this raw data
          into actionable insights that can inform critical decisions and
          optimize your operations.
        </p>
      </PageHeader>
      <div className='max-w-[850px] space-y-4 py-12'>
        <PageHeaderHeading as='h3'>
          Dive Deeper into textify&apos;s Toolkit:
        </PageHeaderHeading>
        <Separator className='bg-primary' />
        <ul className='space-y-8 md:space-y-16'>
          <li className='grid justify-items-start gap-3'>
            <h4 className='text-lg font-semibold sm:text-xl md:text-2xl'>
              Summarization
            </h4>
            <p className='text-balance text-sm md:text-base'>
              Struggling to wade through lengthy research papers, articles, or
              dissertations? textify&apos;s summarization tool condenses large
              texts into concise summaries, helping you grasp key points quickly
              and efficiently. Save valuable time and ensure you never miss
              important information.
            </p>
            <Link href='/tools/summary' className={buttonVariants()}>
              Summarize Now!
            </Link>
          </li>
          <li className='grid justify-items-start gap-3'>
            <h4 className='text-lg font-semibold sm:text-xl md:text-2xl'>
              Sentiment Analysis
            </h4>
            <p className='text-balance text-sm md:text-base'>
              Go beyond the surface meaning of text. textify&apos;s sentiment
              analysis tool helps you understand the emotional tone behind
              written content. Analyze feedback, reviews, or social media data
              to identify areas of praise or dissatisfaction, gauge audience
              reception, and gain deeper insights into human sentiment.
            </p>
            <Link href='/tools/sentiment' className={buttonVariants()}>
              Analyze Emotions Now!
            </Link>
          </li>
          <li className='grid justify-items-start gap-3'>
            <h4 className='text-lg font-semibold sm:text-xl md:text-2xl'>
              Image to Text (OCR)
            </h4>
            <p className='text-balance text-sm md:text-base'>
              Transform scanned documents, handwritten notes, or images into
              editable text with ease. textify&apos;s OCR technology empowers
              you to digitize historical data, convert screenshots, and unlock
              the information trapped within physical documents. Enhance your
              research workflow and information accessibility.
            </p>
            <Link href='/tools/ocr' className={buttonVariants()}>
              Extract Text Now!
            </Link>
          </li>
          {/* <li className='grid gap-3'>
            <h4 className='text-lg font-semibold sm:text-xl md:text-2xl'>
              API Access
            </h4>
            <p className='text-balance text-sm md:text-base'>
              Need to analyze text data programmatically? textify offers a
              robust API that allows you to seamlessly integrate our text
              analysis tools into your applications, research projects, or
              custom workflows. Automate tasks, build powerful text-driven
              solutions, and unlock the potential of your text data at scale.
            </p>
          </li> */}
        </ul>
      </div>
      <div className='max-w-[850px] space-y-4 py-12'>
        <PageHeaderHeading as='h3'>Why Choose textify?</PageHeaderHeading>
        <p className='text-balance text-sm md:text-base'>
          We empower you to transform your text data into actionable insights.
          Our industry-leading accuracy ensures reliable and trustworthy results
          you can confidently use to guide critical decisions.
        </p>
        <p className='text-balance text-sm md:text-base'>
          We make text analysis effortless. Our intuitive interface is designed
          for users of all technical backgrounds, allowing you to unlock the
          power of your text data with ease. We offer flexible pricing plans to
          fit your budget, and our comprehensive toolkit provides advanced
          features to tackle any text analysis challenge.
        </p>
        <p className='text-balance text-sm md:text-base'>
          Don&apos;t just manage your text data, let us empower it with you.
        </p>
      </div>
      <Separator />
      <div className='flex items-center justify-between gap-4 py-12'>
        <Link href='/' className='flex items-center gap-4'>
          <Image src='/logo.webp' alt='textify' width={64} height={64} />
          <span className='text-2xl font-black underline'>textify</span>
        </Link>
        <Link href='/tools' className={buttonVariants()}>
          Explore Our Tools
        </Link>
      </div>
    </Shell>
  );
}
