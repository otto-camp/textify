'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// const data = [
//   {
//     href: '/tools/summary',
//     text: 'Summary Tool',
//     description:
//       'Summarize text quickly and effectively with our intuitive summarization tool.',
//   },
//   {
//     href: '/tools/sentiment',
//     text: 'Sentiment Analysis',
//     description:
//       'Gain insights into text emotions with our powerful sentiment analysis tool.',
//   },
//   {
//     href: '/tools/ocr',
//     text: 'OCR Tool',
//     description:
//       'Easily convert text from images using our efficient OCR tool.',
//   },
// ];

export default function Header({
  email,
}: {
  email: string | null | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between p-4'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='relative flex items-center gap-2 '>
            <Image
              src='/logo.webp'
              alt='textify'
              width={32}
              height={32}
              aria-hidden
            />
            <span className='text-2xl font-black'>textify</span>
            {/* <span className='absolute bottom-0'>by yarar.dev</span> */}
          </Link>

          <Link href='/tools' className='hidden text-sm font-semibold lg:block'>
            Tools
          </Link>
          <Link href='/blog' className='hidden text-sm font-semibold lg:block'>
            Blog
          </Link>
          <Link href='/preview' className='hidden text-sm font-semibold lg:block'>
            Explore
          </Link>
        </div>

        {/* FIX WIDTH */}
        {/* <NavigationMenu className='hidden gap-8 lg:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid grid-cols-2 gap-3 p-4 lg:w-[500px]'>
                  {data.map((x) => (
                    <ListItem key={x.text} title={x.text} href={x.href}>
                      {x.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        {email ? (
          <div className='hidden items-center justify-between gap-4 lg:flex'>
            <Link href='/dashboard'>
              <Button>Dashboard</Button>
            </Link>

            <Link href='/signout'>
              <Button variant='ghost'>Sign Out</Button>
            </Link>
          </div>
        ) : (
          <Link
            href='/signin'
            className={cn(
              buttonVariants({
                size: 'sm',
              }),
              'hidden lg:inline-flex'
            )}
          >
            Sign In
          </Link>
        )}

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
              {email ? (
                <div className='flex flex-col gap-4'>
                  <Link
                    href='/dashboard'
                    className={buttonVariants({ size: 'sm' })}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href='/signout'
                    className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                  >
                    Sign Out
                  </Link>
                </div>
              ) : (
                // <DropdownMenu>
                //   <DropdownMenuTrigger asChild>
                //     <Button variant='ghost' className='justify-start'>
                //       <Avatar className='h-8 w-8'>
                //         <AvatarImage src={imageUrl!} alt={firstName ?? ''} />
                //         <AvatarFallback>{initials}</AvatarFallback>
                //       </Avatar>
                //       <DropdownMenuLabel className='font-normal'>
                //         <div className='flex flex-col items-start gap-1'>
                //           <p className='text-sm font-medium leading-none'>
                //             {firstName} {lastName}
                //           </p>
                //           <p className='text-xs leading-none text-muted-foreground'>
                //             {email}
                //           </p>
                //         </div>
                //       </DropdownMenuLabel>
                //     </Button>
                //   </DropdownMenuTrigger>
                //   <DropdownMenuContent className='w-56' align='end' forceMount>
                //     <DropdownMenuItem asChild>
                //       <Link href='/dashboard'>
                //         <LayoutDashboard
                //           className='mr-2 h-4 w-4'
                //           aria-hidden='true'
                //         />
                //         Dashboard
                //       </Link>
                //     </DropdownMenuItem>
                //     <DropdownMenuItem asChild>
                //       <Link href='/dashboard/account'>
                //         <User2 className='mr-2 h-4 w-4' aria-hidden='true' />
                //         Account
                //       </Link>
                //     </DropdownMenuItem>
                //     <DropdownMenuSeparator />
                //     <DropdownMenuItem asChild>
                //       <Link href='/signout'>
                //         <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
                //         Log out
                //       </Link>
                //     </DropdownMenuItem>
                //   </DropdownMenuContent>
                // </DropdownMenu>
                <Link
                  href='/signin'
                  className={buttonVariants({
                    size: 'sm',
                  })}
                >
                  Sign In
                </Link>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
