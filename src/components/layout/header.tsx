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

        <NavigationMenu>
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
            <Link href='/tools' className={buttonVariants()}>
              Get Started
            </Link>
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
            <SheetContent
              side='right'
              className='flex flex-col justify-between'
            >
              <nav className='flex flex-col gap-4 lg:hidden'>
                <Link
                  href='/tools'
                  className='text-lg underline-offset-2 hover:underline'
                >
                  Tools
                </Link>
                <Link
                  href='/blog'
                  className='text-lg underline-offset-2 hover:underline'
                >
                  Blog
                </Link>
                <Link
                  href='/preview'
                  className='text-lg underline-offset-2 hover:underline'
                >
                  Explore
                </Link>
                {/* {data.map((x) => (
                  <Link key={x.text} href={x.href} className='group'>
                    <span className='transition-colors group-hover:text-foreground/80'>
                      {x.text}
                    </span>
                    <p className='text-muted-foreground'>{x.description}</p>
                  </Link>
                ))} */}
              </nav>
            </SheetContent>
          </Sheet>
          N
        </div>
      </div>
    </header>
  );
}
