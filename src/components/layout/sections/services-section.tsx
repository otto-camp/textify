import React from 'react';

export default function ServicesSection() {
  return (
    <>
      <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
        Unlock the textify Advantage.
      </h2>
      <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
        Explore the features that make textify a text processing powerhouse.
      </p>
      <div className='grid justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='space-y-3 rounded-base border p-4'>
          <h3 className='font-bold'>Text Summarization</h3>
          <p className='text-sm font-light'>
            textify condenses lengthy text into concise summaries, saving time
            and helping users extract key insights.
          </p>
        </div>
        <div className='space-y-3 rounded-base border p-4'>
          <h3 className='font-bold'>Sentiment Analysis</h3>
          <p className='text-sm font-light'>
            textify analyzes the emotional tone within text content,
            categorizing it as positive, negative, or neutral.
          </p>
        </div>
        <div className='space-y-3 rounded-base border p-4'>
          <h3 className='font-bold'>OCR (Optical Character Recognition)</h3>
          <p className='text-sm font-light'>
            textify extracts text from images, converting visual content into
            editable text.
          </p>
        </div>
      </div>
    </>
  );
}
