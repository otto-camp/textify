import { cn } from '@/utils/cn';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-base bg-primary/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
