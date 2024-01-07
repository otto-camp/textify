'use client';
import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PreviewSearch() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    params.set('search', term);
    router.replace(`${pathName}?${params.toString()}`);
  }, 500);

  return (
    <>
      <Label htmlFor='search' className='sr-only'>
        Search
      </Label>
      <Input
        id='search'
        placeholder='Search...'
        onChange={(e) => handleSearch(e.target.value)}
        className='h-12 xs:w-[250px]'
        defaultValue={searchParams.get('search')?.toString()}
      />
    </>
  );
}
