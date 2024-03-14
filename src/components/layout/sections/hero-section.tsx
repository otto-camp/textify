import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <Shell className='space-y-12 py-24 text-center dark:bg-radial'>
      <PageHeader as='header' className='justify-items-center text-center'>
        <PageHeaderHeading size='title'>
          Elevate Your Text Experience
        </PageHeaderHeading>
        <PageHeaderDescription
          size='lg'
          className='text-gray-600 dark:text-gray-400'
        >
          At textify, we believe in the magic of words. Welcome to a world where
          text transforms into a playground of possibilities. Discover our
          cutting-edge text tools designed to elevate your experience
          effortlessly.
        </PageHeaderDescription>
      </PageHeader>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Link href='/tools' className={buttonVariants({ size: 'lg' })}>
          Get Started
        </Link>
        <Link
          href='/learn-more'
          className={buttonVariants({ size: 'lg', variant: 'outline' })}
        >
          Learn More
        </Link>
      </div>
    </Shell>
  );
}
