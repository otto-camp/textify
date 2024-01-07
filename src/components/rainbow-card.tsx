'use client';
import Link from 'next/link';
import React from 'react';

export default function RainbowCard({
  data,
}: {
  data: {
    href: string;
    title: string;
    description: string;
  };
}) {
  const [subtitleWords, setSubtitleWords] = React.useState<string[]>([]);
  const subtitleRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setSubtitleWords(data.description.split(' '));
  }, [data.description]);

  return (
    <>
      <Link href={data.href} className='card block'>
        <div className='card-content'>
          <h3 className='card-title text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
            {data.title}
          </h3>
          <p className='card-subtitle' ref={subtitleRef}>
            {subtitleWords.map((word, index) => (
              <span
                key={index}
                className='card-subtitle-word mt-12 lg:text-lg xl:text-xl'
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </Link>
    </>
  );
}
