import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <Shell>
      {/* <BentoGrid className='md:grid-cols-3 lg:grid-cols-5'>
        <Card className='duration-200 hover:bg-accent/40 md:col-span-1 lg:col-span-2'>
          <Link href='/tools/ocr'>
            <CardContent className='p-0 px-4 pt-4 sm:px-6 sm:pt-6'>
              <LottieWrapper src='/ocr-anim.json' />
            </CardContent>
            <CardHeader className='p-4 sm:p-6'>
              <CardTitle>Image to Text (Ocr)</CardTitle>
            </CardHeader>
          </Link>
        </Card>
        <Card className='duration-200 hover:bg-accent/40 md:col-span-2 lg:col-span-3'>
          <Link href='/tools/summary'>
            <CardContent className=' p-0 px-4 pt-4 sm:px-6 sm:pt-6'>
              <SummaryCardSection />
            </CardContent>
            <CardHeader className='isolate bg-card p-4 sm:p-6'>
              <CardTitle>Summarization Tool</CardTitle>
            </CardHeader>
          </Link>
        </Card>

        <Card className='duration-200 hover:bg-accent/40 md:col-span-2 lg:col-span-3'>
          <Link href='/tools/sentiment'>
            <CardContent className='p-0'>
              <div className='flex h-full flex-col justify-center'>
                <SentimentCardSection />
              </div>
            </CardContent>
            <CardHeader className='p-4 sm:p-6'>
              <CardTitle>Sentiment Analysis</CardTitle>
            </CardHeader>
          </Link>
        </Card>
        <Card className='duration-200 hover:bg-accent/40 md:col-span-1 lg:col-span-2'></Card>
      </BentoGrid> */}
      <PageHeader
        as='div'
        className='justify-items-center text-balance text-center'
      >
        <PageHeaderHeading as='h2' size='lg'>
          Unlock the textify Advantage.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Explore the features that make textify a text processing powerhouse.
        </PageHeaderDescription>
      </PageHeader>
      <div className='grid min-h-screen grid-rows-3 gap-12 text-balance'>
        <div className='grid items-center gap-4 lg:grid-cols-2'>
          <div className='order-2 space-y-3 md:space-y-6 lg:order-none'>
            <h3 className='text-3xl font-medium md:text-5xl'>Summary Tool</h3>
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
            <h3 className='text-3xl font-medium md:text-5xl'>
              Sentiment Analysis
            </h3>
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
            <h3 className='text-3xl font-medium md:text-5xl'>
              Image to Text (OCR)
            </h3>
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
