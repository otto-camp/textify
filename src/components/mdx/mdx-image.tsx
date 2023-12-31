'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface MdxImageProps extends React.ComponentProps<typeof Image> {}

export function MdxImage({ className, ...props }: MdxImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt ?? 'Uncaptioned'}
      className={cn(className)}
    />
  );
}
