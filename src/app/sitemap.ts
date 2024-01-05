import { db } from '@/db';
import { texts } from '@/db/schema';
import { env } from '@/env.mjs';
import { allBlogs } from 'contentlayer/generated';
import { type MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/tools',
    '/tools/ocr',
    '/tools/sentiment',
    '/tools/summary',
  ].map((url) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}/${url}`,
    lastModified: new Date().toISOString(),
  }));

  const previewRoutes = (
    await db.select({ id: texts.id, slug: texts.slug }).from(texts)
  ).map((id) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}/preview/${id.id}/${
      id.slug ? id.slug : ''
    }`,
    lastModified: new Date().toISOString(),
  }));

  const postRoutes = allBlogs.map((post) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...postRoutes, ...previewRoutes];
}
