'use client';

import { cn } from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const breadcrumbsVariants = cva(
  'py-2 px-4 flex rounded-base items-center flex-wrap w-fit',
  {
    variants: {
      variant: {
        default: 'bg-accent/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface Breadcrumbs {
  data?: { href: string; text: string }[];
}

const Breadcrumbs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof breadcrumbsVariants> &
    Breadcrumbs
>(({ className, children, variant, data, ...props }, ref) => {
  const pathName = usePathname();
  return (
    <nav
      ref={ref}
      className={cn(breadcrumbsVariants({ variant }), className)}
      {...props}
    >
      <Link href='/'>
        <Home className='h-4 w-4' />
        <span className='sr-only'>Home</span>
      </Link>
      <span className='mx-2'>/</span>
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            href={item.href}
            className='text-foreground/70 duration-200 hover:text-foreground/80 hover:underline'
          >
            {item.text}
          </Link>
          {index < data.length - 1 && <span className='mx-2'>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
