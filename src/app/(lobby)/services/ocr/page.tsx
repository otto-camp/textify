import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { env } from '@/env.mjs';
import { BookOpenText, Key, ScanSearch } from 'lucide-react';
import { type Metadata } from 'next';
import OcrWrapper from './ocr-wrapper';

const title = ' Extract Text from Images with Speed and Precision';
const description =
  "textify's OCR tool transforms images into editable text swiftly and precisely. Unlock the text within images for free, and share the results seamlessly. Elevate your OCR experience with textify.";
const keywords = [
  'OCR',
  'text extraction',
  'image text conversion',
  'image to text',
  'free OCR',
  'textify OCR',
  'image processing',
  'text recognition',
  'extract text from images',
  'online OCR tool',
  'swift OCR',
  'accurate OCR',
  'precise text extraction',
  'image text conversion utility',
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=OCR&mode=dark`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=OCR&mode=dark`,
        alt: description,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function page() {
  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading>Image to Text (OCR)</PageHeaderHeading>
        <PageHeaderDescription>
          Transform images into editable text with textify&apos;s OCR tool.
          Swift and precise, our OCR tool provides free access to extract text
          effortlessly. Elevate your OCR experience with textify.
        </PageHeaderDescription>
      </PageHeader>

      <div>
        <OcrWrapper />
      </div>
      <div className='space-y-12 py-12 md:py-24'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-[-10%] hidden size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:block'></div>
          <div className='absolute inset-y-0 right-0 hidden size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] md:block'></div>

          <PageHeaderHeading
            as='h2'
            size='lg'
            className='text-balance text-center'
          >
            Extract. Understand. Empower with Text.
          </PageHeaderHeading>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <BookOpenText className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Effortless Text Extraction
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Liberate text trapped within images. Seamlessly extract and
                access information for further use, saving you time and effort.
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-xl'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <ScanSearch className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Discover Hidden Insights
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Uncover valuable insights that would otherwise remain hidden
                within images. Search, analyze, and act on text-based
                information you couldn&apos;t access before.
              </p>
            </CardContent>
          </Card>
          <Card className='backdrop-blur-xl md:col-span-2 lg:col-span-1'>
            <CardHeader className='space-0 flex-row items-center gap-8'>
              <Key className='size-8 sm:size-12' />
              <h3 className='text-xl font-semibold sm:text-2xl'>
                Unlock Information Potential
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Transform images into usable text data. Unlock new possibilities
                for research, knowledge sharing, accessibility, and countless
                other applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='max-w-[850px] space-y-8 md:space-y-16'>
          <div className='space-y-6'>
            <PageHeaderHeading as='h3'>How textify works?</PageHeaderHeading>
            <p>
              We utilize cutting-edge technology to unlock information trapped
              within images. Imagine a magic decoder ring that instantly
              converts text from photos, scans, or documents into editable
              digital data. This empowers you to access, analyze, and leverage
              valuable information that was previously inaccessible
            </p>
          </div>
          <Separator className='bg-primary' />
          <h3 className='text-lg font-semibold sm:text-xl md:text-2xl'>
            How to Use Our OCR
          </h3>
          <ul className='list-disc space-y-8'>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Click the &quot;Upload Image&quot; button or drag and drop your
                image file directly into the designated area. We accept various
                image formats like JPG, PNG, and BMP.
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                You can crop or adjust the area of your image that contains the
                text you want to extract using the selection tool that appears
                after uploading your image.
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                Once you&apos;re ready, click the &quot;Extract Text&quot;
                button to start the OCR process. We will analyze your image and
                convert the text into editable digital data.
              </p>
            </li>
            <li>
              <p className='text-balance text-sm md:text-base'>
                The extracted text will be displayed in an area below. You can
                then copy, edit, or download the text for further use.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
