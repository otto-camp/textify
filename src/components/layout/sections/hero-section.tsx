import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className='space-y-12 py-24 text-center dark:bg-radial'>
      <h1 className='text-center text-4xl font-black tracking-tight md:text-6xl lg:text-8xl lg:tracking-tighter'>
        Elevate Your Text Experience
      </h1>
      <p className='mt-4 text-center text-lg text-gray-700 dark:text-gray-300 md:px-20 lg:text-2xl lg:leading-normal'>
        At textify, we believe in the magic of words. Welcome to a world where
        text transforms into a playground of possibilities. Discover our
        cutting-edge text tools designed to elevate your experience
        effortlessly.
      </p>

      <Link href='/tools' className={buttonVariants({ size: 'lg' })}>
        Get Started
      </Link>
    </div>
  );
}
