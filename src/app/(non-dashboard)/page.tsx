import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='space-y-24'>
      <section className='mx-auto max-w-6xl space-y-12 px-4 py-32 text-center'>
        <h1 className='text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl'>
          Lorem ipsum dolor sit, amet consectetur.
        </h1>
        <p className='mx-auto max-w-4xl md:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ex
          doloremque qui asperiores iure. Nesciunt!
        </p>
        <Button size='lg'>
          <Link href='/dashboard'>Get Started</Link>
        </Button>
      </section>
    </div>
  );
}
