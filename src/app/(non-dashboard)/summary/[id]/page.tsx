import { Shell } from '@/components/Shell';
import { db } from '@/db';
import { Texts, texts } from '@/db/schema';
import { env } from '@/env.mjs';
import { eq } from 'drizzle-orm';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

async function getText(id: string) {
  const res = await db
    .select()
    .from(texts)
    .where(eq(texts.id, Number(id)));
  return res.at(0);
}

export async function generateMetadata({ params: { id } }: Props) {
  const text = await getText(id);
  return {
    title: `${text?.title} | SummariX`,
    description: text?.summaryContent,
    // keywords: [
    //   'text summary',
    //   'concise insights',
    //   'key points',
    //   'summarization tool',
    //   'efficient understanding',
    //   'highlight content',
    //   'information extraction',
    //   'quick comprehension',
    //   'effective summarization',
    //   'essential details',
    //   'main ideas',
    //   'clear overview',
    //   'condensed content',
    //   'efficient reading',
    //   'distilled information',
    //   'simplify text',
    //   'comprehend quickly',
    //   'summarized content',
    //   'focused information',
    //   'main takeaways',
    //   'core concepts',
    //   'key takeouts',
    //   'summary creation',
    //   'essential concepts',
    //   'quick overview',
    // ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: env.NEXT_PUBLIC_APP_URL,
      title: `${text?.title} | SummariX`,
      description: text?.summaryContent,
      siteName: 'SummariX',
      images: [
        {
          url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
          alt: text?.summaryContent,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${text?.title} | SummariX`,
      description: text?.summaryContent,
      images: [
        {
          url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
          alt: text?.summaryContent,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function SummaryPage({ params: { id } }: Props) {
  const text = await getText(id);
  return (
    <>
      {text ? (
        <Shell variant='markdown' className='prose dark:prose-invert'>
          <h1>{text.title}</h1>
          <h2>Content</h2>
          <p>{text.content}</p>
          <h2>Summary</h2>
          <p>{text.summaryContent}</p>
        </Shell>
      ) : (
        <Shell></Shell>
      )}
    </>
  );
}
