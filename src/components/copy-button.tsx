'use client';

import React from 'react';

import { Button, type ButtonProps } from '@/components/ui/button';
import { Check, ClipboardCopy } from 'lucide-react';

export function CopyButton({ value, ...props }: ButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <Button
      variant='outline'
      size='sm'
      onClick={() => {
        if (typeof window === 'undefined') return;
        setIsCopied(true);
        void window.navigator.clipboard.writeText(value?.toString() ?? '');
        setTimeout(() => setIsCopied(false), 2000);
      }}
      {...props}
    >
      {isCopied ? (
        <Check className='size-4' aria-hidden='true' />
      ) : (
        <ClipboardCopy className='size-4' aria-hidden='true' />
      )}
      <span className='sr-only'>
        {isCopied ? 'Copied' : 'Copy to clipboard'}
      </span>
    </Button>
  );
}
