import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-1 gap-4',
        className
      )}
    >
      {children}
    </div>
  );
};
