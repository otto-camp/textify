import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const shellVariants = cva('grid items-center gap-8 py-8 px-4', {
  variants: {
    variant: {
      default: 'container mx-auto',
      sidebar: '',
      centered: 'mb-16 mt-20 max-w-md justify-center',
      markdown: 'container max-w-3xl gap-0 py-8 md:py-10 lg:py-10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

function Shell({
  className,
  as: Comp = 'section',
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}

export { Shell, shellVariants };
