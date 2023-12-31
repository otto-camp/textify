import { db } from '@/db';
import { type SentimentResults, sentimentResults } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Frown, Meh, Smile } from 'lucide-react';

export default async function SentimentFetchResult({ id }: { id: number }) {
  const response = (
    await db.select().from(sentimentResults).where(eq(sentimentResults.id, id))
  ).at(0) as SentimentResults;

  return (
    <>
      <div className='flex justify-center gap-4 p-4 sm:gap-8'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Frown className='text-red-700 sm:h-16 sm:w-16 dark:text-red-400' />
          <span className='sm:text-2xl'>
            %{(response.negative! * 100).toFixed()}
          </span>
        </div>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Meh className='sm:h-16 sm:w-16' />
          <span className='sm:text-2xl'>
            %{(response.neutral! * 100).toFixed()}
          </span>
        </div>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Smile className='text-green-700 sm:h-16 sm:w-16 dark:text-green-400' />
          <span className='sm:text-2xl'>
            %{(response.positive! * 100).toFixed()}
          </span>
        </div>
      </div>
      <h2 className='text-center text-2xl font-bold capitalize sm:text-3xl md:text-4xl lg:text-5xl'>
        {response.result}
      </h2>
    </>
  );
}
