import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from './ui/Button';
import { Check, ClipboardCopy } from 'lucide-react';

//TODO: refactor as skateshop copybutton
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
      <Button disabled={text.length === 0}>
        {isCopied ? (
          <Check className='mr-2 h-4 w-4 opacity-100 transition-all duration-300' />
        ) : (
          <ClipboardCopy className='mr-2 h-4 w-4 opacity-100 transition-all duration-300' />
        )}
        {children}
      </Button>
    </CopyToClipboard>
  );
}
