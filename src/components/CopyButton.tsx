import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from './ui/Button';
import { Transition } from '@headlessui/react';
import { Check, ClipboardCopy } from 'lucide-react';

export default function CopyButton({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Button className='overflow-hidden'>
        <Transition
          as={React.Fragment}
          show={isCopied}
          enter='transition duration-300'
          enterFrom='opacity-0 rotate-[-360deg]'
          enterTo='opacity-100 rotate-0'
          leave='transition duration-300'
          leaveFrom='opacity-100 rotate-0'
          leaveTo='opacity-0 rotate-[360deg]'
        >
          <Check className='mr-2 h-4 w-4' />
        </Transition>
        <Transition
          as={React.Fragment}
          show={!isCopied}
          enter='transition duration-300'
          enterFrom='opacity-0 rorate-[360deg]'
          enterTo='opacity-100 rotate-0'
          leave='transition duration-300'
          leaveFrom='opacity-0 rotate-0'
          leaveTo='opacity-100 rotate-[360deg]'
        >
          <ClipboardCopy className='mr-2 h-4 w-4' />
        </Transition>
        {children}
      </Button>
    </CopyToClipboard>
  );
}
