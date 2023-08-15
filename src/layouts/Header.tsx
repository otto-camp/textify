'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button, buttonVariants } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { LayoutDashboard, LogOut, Menu, User2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const data = [{ href: '/', text: 'Link' }];

export default function Header({
  firstName,
  lastName,
  imageUrl,
  email,
}: {
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  email: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const initials = `${firstName?.charAt(0) ?? ''} ${lastName?.charAt(0) ?? ''}`;

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between p-4'>
        <Link href='/' className='flex items-center gap-2 text-2xl font-black'>
          <Image
            src='/logo.svg'
            alt='Title'
            width={32}
            height={32}
            aria-hidden
          />
          <span>Title</span>
        </Link>
        <nav className='hidden items-center gap-4 lg:flex'>
          {data.map((x) => (
            <Link
              key={x.text}
              href={x.href}
              className='text-foreground/60 transition-colors hover:text-foreground/80'
            >
              {x.text}
            </Link>
          ))}
          {email ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='secondary'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar className='h-8 w-8'>
                    <AvatarImage src={imageUrl!} alt={firstName ?? ''} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {firstName} {lastName}
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      {email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href='/dashboard'>
                      <LayoutDashboard
                        className='mr-2 h-4 w-4'
                        aria-hidden='true'
                      />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='/dashboard/account'>
                      <User2 className='mr-2 h-4 w-4' aria-hidden='true' />
                      Account
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href='/signout'>
                    <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href='/signin'>
              <div
                className={buttonVariants({
                  size: 'sm',
                })}
              >
                Sign In
                <span className='sr-only'>Sign In</span>
              </div>
            </Link>
          )}
        </nav>
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
                {data.map((x) => (
                  <Link
                    key={x.text}
                    href={x.href}
                    className='text-foreground/60 transition-colors hover:text-foreground/80'
                  >
                    {x.text}
                  </Link>
                ))}
              </nav>
              {email ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='justify-start'>
                      <Avatar className='h-8 w-8'>
                        <AvatarImage src={imageUrl!} alt={firstName ?? ''} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <DropdownMenuLabel className='font-normal'>
                        <div className='flex flex-col items-start gap-1'>
                          <p className='text-sm font-medium leading-none'>
                            {firstName} {lastName}
                          </p>
                          <p className='text-xs leading-none text-muted-foreground'>
                            {email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56' align='end' forceMount>
                    <DropdownMenuItem asChild>
                      <Link href='/dashboard'>
                        <LayoutDashboard
                          className='mr-2 h-4 w-4'
                          aria-hidden='true'
                        />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href='/dashboard/account'>
                        <User2 className='mr-2 h-4 w-4' aria-hidden='true' />
                        Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href='/signout'>
                        <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
                        Log out
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href='/signin'>
                  <div
                    className={buttonVariants({
                      size: 'sm',
                    })}
                  >
                    Sign In
                    <span className='sr-only'>Sign In</span>
                  </div>
                </Link>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
