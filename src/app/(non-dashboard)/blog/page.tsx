import { Shell } from '@/components/Shell';
import { AspectRatio } from '@/components/ui/AspectRatio';
import { Separator } from '@/components/ui/Separator';
import { env } from '@/env.mjs';
import { formatDate } from '@/utils/formatDate';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <Shell className='p-4'>
      <h1 className='text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>
        Blog
      </h1>

      <Separator className='mb-2.5' />
      <section className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {posts.map((post, i) => (
          <Link key={post.slug} href={post.path}>
            <article className='flex flex-col gap-2.5'>
              <AspectRatio ratio={16 / 9}>
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    // fill
                    sizes='(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw'
                    className='rounded-lg object-cover'
                    // priority={i <= 1}
                  />
                ) : (
                  <Image
                    src={new URL(
                      `${
                        env.NEXT_PUBLIC_APP_URL
                      }/api/og?title=${encodeURIComponent(
                        post.title
                      )}&mode=dark`
                    ).toString()}
                    alt={post.title}
                    fill
                    sizes='(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw'
                    className='rounded-lg object-cover'
                    priority={i <= 1}
                  />
                )}
              </AspectRatio>
              <h2 className='line-clamp-1 text-xl font-semibold'>
                {post.title}
              </h2>
              <p className='line-clamp-2 text-muted-foreground'>
                {post.description}
              </p>
              {post.date ? (
                <p className='text-sm text-muted-foreground'>
                  {formatDate(post.date)}
                </p>
              ) : null}
            </article>
          </Link>
        ))}
      </section>
    </Shell>
  );
}
