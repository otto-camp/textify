import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full border-t bg-background'>
      <div className='container mx-auto flex flex-col items-center justify-between space-y-1 p-4 py-5 md:h-16 md:flex-row md:py-0'>
        <div className='text-center text-sm leading-loose text-muted-foreground'>
          Built by{' '}
          <a
            href='https://yarar.dev'
            target='_blank'
            rel='noreferrer'
            className='font-semibold transition-colors hover:text-slate-950 dark:hover:text-slate-200'
          >
            yarar.dev
          </a>
        </div>
        <div className='flex items-center space-x-1'>
          <Link
            href='https://github.com/otto-camp'
            target='_blank'
            rel='noreferrer'
          >
            <div
              className={cn(
                buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })
              )}
            >
              <Github className='h-4 w-4' aria-hidden='true' />
              <span className='sr-only'>GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
