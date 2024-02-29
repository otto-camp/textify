import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

export default function FaqSection() {
  return (
    <>
      <h2 className='text-balance text-center text-3xl font-black tracking-tight md:text-5xl lg:text-6xl lg:tracking-tighter'>
        Common Questions About textify.
      </h2>
      <p className='text-center text-lg text-gray-700 dark:text-gray-300 md:px-16 lg:text-2xl lg:leading-normal'>
        Get answers to frequently asked questions to maximize your textify
        experience.
      </p>
      <Accordion type='single' collapsible>
        <AccordionItem value='faq-1'>
          <AccordionTrigger>How does textify work?</AccordionTrigger>
          <AccordionContent>
            textify uses advanced natural language processing algorithms to
            analyze and condense lengthy texts into concise summaries while
            retaining key insights.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='faq-2'>
          <AccordionTrigger>
            How accurate are the generated summaries?
          </AccordionTrigger>
          <AccordionContent>
            textify strives for accuracy by focusing on key points. While the
            tool may not capture every detail, it ensures that essential
            insights are presented effectively.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='faq-3'>
          <AccordionTrigger>Is textify free to use?</AccordionTrigger>
          <AccordionContent>textify is completely free.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='faq-4'>
          <AccordionTrigger>Is my data secure with textify?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We prioritize data security and privacy. Your texts and
            summarized content are processed securely, adhering to strict
            privacy standards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='faq-5'>
          <AccordionTrigger>
            Are there limitations to the types of content I can summarize?
          </AccordionTrigger>
          <AccordionContent>
            While textify is versatile, it&apos;s most effective with textual
            content. It may not work optimally with highly technical or
            specialized language.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
