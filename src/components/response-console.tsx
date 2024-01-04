import React from 'react';

export default function ResponseConsole({
  children,
  control,
}: {
  children: React.ReactNode;
  control: React.ReactNode;
}) {
  return (
    <div className='min-h-[300px] w-full rounded-base border'>
      <div className='flex flex-wrap justify-between rounded-t-base border-b bg-secondary/30 px-4 py-2'>
        <div className='hidden items-center gap-2 xs:flex'>
          <div className='h-3 w-3 rounded-full bg-foreground'></div>
          <div className='h-3 w-3 rounded-full bg-foreground/80'></div>
          <div className='h-3 w-3 rounded-full bg-foreground/60'></div>
        </div>
        {control}
      </div>
      {children}
    </div>
  );
}
