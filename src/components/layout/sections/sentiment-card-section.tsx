'use client';
import LottieWrapper from '@/components/lottie-wrapper';
import { motion } from 'framer-motion';
import React from 'react';

type AnimationType = 'pos' | 'neg';

export default function SentimentCardSection() {
  const [animationSeq, setAnimationSeq] = React.useState<AnimationType>('pos');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationSeq(animationSeq === 'pos' ? 'neg' : 'pos');
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [animationSeq]);

  return (
    <>
      {animationSeq === 'pos' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='grid grid-cols-2 items-center gap-4 p-4 sm:p-6'>
            <p className='text-medium scan-animation tracking-wide'>
              The sun&apos;s warm rays brightened up the entire garden, filling
              it with vibrant colors and life.
            </p>
            <LottieWrapper src='/sen-pos-anim.json' className='max-h-40' />
          </div>
        </motion.div>
      ) : null}

      {animationSeq === 'neg' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div className='p4- grid grid-cols-2 items-center gap-4 sm:p-6'>
            <p className='text-medium scan-animation tracking-wide'>
              The sudden downpour flooded the streets, causing chaos and
              disrupting daily routines.
            </p>
            <LottieWrapper src='/sen-neg-anim.json' className='max-h-40' />
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
