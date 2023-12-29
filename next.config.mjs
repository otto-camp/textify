/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

export default withContentlayer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '**'
      }
    ]
  }
});
