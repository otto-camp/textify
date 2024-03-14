'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { cn } from '@/lib/utils';

interface LottieWrapperProps {
  src: string | URL | object;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export default function LottieWrapper({
  src,
  autoplay = true,
  loop = true,
  className,
}: LottieWrapperProps) {
  return (
    <Player
      src={src}
      autoplay={autoplay}
      loop={loop}
      className={cn('aspect-square max-h-96', className)}
    />
  );
}
