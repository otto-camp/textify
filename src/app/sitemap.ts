import { env } from '@/env.mjs';
import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/tools', '/tools/ocr', '/tools/sentiment', '/tools/summary'].map(
    (url) => ({
      url: `${env.NEXT_PUBLIC_APP_URL}/${url}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes];
}
