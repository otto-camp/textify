/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
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
}
)
