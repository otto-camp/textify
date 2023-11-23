import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { notFound } from 'next/navigation';

export const dymaic = "force-dynamic"

export default async function BlogPostPage({
  params: { uid },
}: {
  params: { uid: string };
}) {
  const client = createClient();
  const post = await client.getByUID('blog', uid).catch(() => notFound());
  console.log(post.data.slices);

  return (
    <div className='prose mx-auto min-h-screen p-4 dark:prose-invert'>
      {/* <Link href='/' className='font-semibold tracking-tight text-slate-400'>
        &larr; Back to articles
      </Link> */}

      <article>
        <SliceZone slices={post.data.slices} components={components} />
      </article>
    </div>
  );
}
