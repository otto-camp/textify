'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { cn } from '@/lib/utils';

const links = [
  {
    href: '/tools/summary',
    text: 'Summary Tool',
    description:
      'Summarize text quickly and effectively with our intuitive summarization tool.',
  },
  {
    href: '/tools/sentiment',
    text: 'Sentiment Analysis',
    description:
      'Gain insights into text emotions with our powerful sentiment analysis tool.',
  },
  {
    href: '/tools/ocr',
    text: 'OCR Tool',
    description:
      'Easily convert text from images using our efficient OCR tool.',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const segment = useSelectedLayoutSegment();

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between p-4'>
        <Link href='/' className='relative flex items-center gap-2 '>
          <Image
            src='/logo.webp'
            alt='textify'
            width={32}
            height={32}
            aria-hidden
          />
          <span className='text-2xl font-black'>textify</span>
        </Link>

        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {links.map((link) => (
                    <ListItem
                      key={link.href}
                      title={link.text}
                      href={link.href}
                    >
                      {link.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/blog' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/tools' className={buttonVariants()}>
                Get Started
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-4 lg:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                className='p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
              >
                <Menu />
                <span className='sr-only'>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='flex flex-col'>
              <Accordion
                type='single'
                defaultValue='Tools'
                collapsible
                className='w-full'
              >
                <AccordionItem value='Tools'>
                  <AccordionTrigger className='text-sm capitalize'>
                    Tools
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-2'>
                      {links.map((link) => (
                        <Link
                          key={link.text}
                          href={link.href}
                          className={cn(
                            'text-foreground/70 transition-colors hover:text-foreground',
                            link.href.includes(String(segment))
                              ? 'text-foreground'
                              : 'text-foreground/70'
                          )}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href='/blog'>Blog</Link>
              <Link href='/tools' className={buttonVariants()}>
                Get Started
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
