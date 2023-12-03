import { Shell } from '@/components/Shell';
import { Mdx } from '@/components/mdx/Mdx';
import { MdxPager } from '@/components/mdx/MdxPager';
import { AspectRatio } from '@/components/ui/AspectRatio';
import { buttonVariants } from '@/components/ui/Button';
import { Separator } from '@/components/ui/Separator';
import { env } from '@/env.mjs';
import { cn } from '@/utils/cn';
import { formatDate } from '@/utils/formatDate';
import { allBlogs } from 'contentlayer/generated';
import { ChevronLeft } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params.slug);

  if (!post) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;
  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set('title', post.title);
  ogUrl.searchParams.set('type', 'Blog Post');
  ogUrl.searchParams.set('mode', 'dark');

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: post.author,
      url: `https://www.github.com/${post.author}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${url}/blog/${post.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

async function getPostFromParams(slug: PostPageProps['params']['slug']) {
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    null;
  }

  return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params.slug);

  if (!post) {
    notFound();
  }
  const url = env.NEXT_PUBLIC_APP_URL;
  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set('title', post.title);
  ogUrl.searchParams.set('type', 'Blog Post');
  ogUrl.searchParams.set('mode', 'dark');

  return (
    <Shell as='article' variant='markdown'>
      <Link
        href='/blog'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <ChevronLeft className='mr-2 h-4 w-4' />
        See all posts
      </Link>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
          {post.date && (
            <time dateTime={post.date} className='block'>
              Published on {formatDate(post.date)}
            </time>
          )}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className='inline-block text-4xl font-bold leading-tight lg:text-5xl'>
          {post.title}
        </h1>
      </div>
      <div className='flex items-center space-x-4'>
        <Link
          key={post.author}
          href={`https://www.github.com/${post.author}`}
          target='_blank'
        >
          <p className='font-medium leading-tight'>@{post.author}</p>
        </Link>
      </div>
      {post.image ? (
        <AspectRatio ratio={16 / 9}>
          {/* TODO: Replace img with <Image/> and don't use og image for this purpose. */}
          <img
            src={post.image}
            alt={post.title}
            
            className='rounded-md border bg-muted'
            
          />
        </AspectRatio>
      ) : (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={ogUrl.toString()}
            alt={post.title}
            fill
            className='rounded-md border bg-muted'
            priority
          />
        </AspectRatio>
      )}
      <Mdx code={post.body.code} />
      <Separator className='my-4' />
      <MdxPager currentItem={post} allItems={allBlogs} />
      <Link
        href='/blog'
        className={cn(
          buttonVariants({ variant: 'ghost', className: 'mx-auto mt-4 w-fit' })
        )}
      >
        <ChevronLeft className='mr-2 h-4 w-4' aria-hidden='true' />
        See all posts
        <span className='sr-only'>See all posts</span>
      </Link>
    </Shell>
  );
}
