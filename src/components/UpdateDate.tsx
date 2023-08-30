'use client';

import React from 'react';
import { DateRangePicker } from './ui/DateRangePicker';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { format, subDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

export default function UpdateDate() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: subDays(new Date(), 30),
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  React.useEffect(() => {
    router.push(
      pathname +
        '?' +
        createQueryString(
          'from',
          format(date?.from ?? new Date(), 'yyyy-MM-dd')
        )
    );
  }, [createQueryString, date, pathname, router]);

  return <DateRangePicker date={date} setDate={setDate} />;
}
