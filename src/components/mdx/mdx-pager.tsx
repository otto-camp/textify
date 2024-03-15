import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { truncate } from '@/lib/utils';

interface MdxPagerItem {
  title: string;
  slug: string;
}

interface MdxPagerProps extends React.HTMLAttributes<HTMLDivElement> {
  currentItem: MdxPagerItem;
  allItems: MdxPagerItem[];
}

export function MdxPager({
  currentItem,
  allItems,
  className,
  ...props
}: MdxPagerProps) {
  const pager = getPager(currentItem, allItems);

  if (!pager) {
    return null;
  }

  return (
    <div
      className={cn('grid sm:grid-cols-2 gap-4', className)}
      {...props}
    >
      {pager?.prev ? (
        <Link
          aria-label='Previous post'
          href={pager.prev.slug}
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <ChevronLeftIcon className='mr-2 size-4' aria-hidden='true' />
          {truncate(pager.prev.title, 20)}
        </Link>
      ) : null}
      {pager?.next ? (
        <Link
          aria-label='Next post'
          href={pager.next.slug}
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          {truncate(pager.next.title, 20)}
          <ChevronRightIcon className='ml-2 size-4' aria-hidden='true' />
        </Link>
      ) : null}
    </div>
  );
}

export function getPager(currentItem: MdxPagerItem, allItems: MdxPagerItem[]) {
  const flattenedLinks = allItems.flat();
  const activeIndex = flattenedLinks.findIndex(
    (link) => currentItem.slug === link?.slug
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}
