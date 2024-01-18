import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { env } from '@/env.mjs';
import { type Metadata } from 'next';
import OcrWrapper from './ocr-wrapper';

const TITLE = ' Extract Text from Images with Speed and Precision';
const DESCRIPTION =
  "textify's OCR tool transforms images into editable text swiftly and precisely. Unlock the text within images for free, and share the results seamlessly. Elevate your OCR experience with textify.";
const KEYWORDS = [
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
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,

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
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'textify',
    images: [
      {
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=OCR&mode=dark`,
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
        url: `${env.NEXT_PUBLIC_APP_URL}/api/og?title=textify&type=OCR&mode=dark`,
        alt: DESCRIPTION,
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
        <PageHeaderHeading>OCR Tool</PageHeaderHeading>
        <PageHeaderDescription>
          Transform images into editable text with textify&apos;s OCR tool.
          Swift and precise, our OCR tool provides free access to extract text
          effortlessly. Elevate your OCR experience with textify.
        </PageHeaderDescription>
      </PageHeader>

      <div>
        <OcrWrapper />
      </div>
    </Shell>
  );
}