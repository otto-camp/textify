import { Shell } from '@/components/Shell';
import { db } from '@/db';
import { Texts, texts } from '@/db/schema';
import { env } from '@/env.mjs';
import { eq } from 'drizzle-orm';

type Props = {
  params: { id: string };
};

async function getText(id: string) {
  const res = await db
    .select()
    .from(texts)
    .where(eq(texts.id, Number(id)));
  return res.at(0) as Texts | undefined;
}

export async function generateMetadata({ params: { id } }: Props) {
  const text = await getText(id);
  return {
    title: `${text?.title} | textify`,
    description: text?.title,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: env.NEXT_PUBLIC_APP_URL,
      title: `${text?.title} | textify`,
      description: text?.title,
      siteName: 'textify',
      images: [
        {
          url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
          alt: text?.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${text?.title} | textify`,
      description: text?.title,
      images: [
        {
          url: `${env.NEXT_PUBLIC_APP_URL}/api/og/`,
          alt: text?.title,
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
    <Shell variant='markdown' className='prose dark:prose-invert'>
      {text ? (
        <>
          <h1>{text.title}</h1>
          <h2>Content</h2>
          <p>{text.content}</p>
        </>
      ) : null}
    </Shell>
  );
}
