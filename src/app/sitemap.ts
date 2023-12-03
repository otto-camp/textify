import { env } from '@/env.mjs';
import { type MetadataRoute } from 'next';
import { allBlogs } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
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

  const postRoutes = allBlogs.map((post) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...postRoutes];
}
