'use client';
import React from 'react';

export default function SummaryCardSection() {
  const originalString =
    'Efficiently summarize extensive texts for quick insights. Rapidly extract key information, enhancing comprehension. Streamline the process to save time and focus on essential details.';

  const words = originalString.split(' ');
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < words.length; i++) {
    // Generate a random word of the same length as the current word
    const randomWord = Array.from({ length: words[i]!.length }, () =>
      characters.charAt(Math.floor(Math.random() * charactersLength))
    ).join('');
    result += randomWord;
    // Add space after each word except the last one
    if (i < words.length - 1) {
      result += ' ';
    }
  }

  const [randomString, setRandomString] = React.useState<string>(result);

  React.useEffect(() => {
    let interval = 50; // Initial interval duration in milliseconds
    let index = 0;

    const updateRandomText = () => {
      if (index >= originalString.length) {
        clearInterval(intervalId);
      } else {
        const newRandomText =
          randomString.substr(0, index) +
          originalString.charAt(index) +
          randomString.substr(index + 1);
        setRandomString(newRandomText);
        index++;
        interval += 5; // Increase interval duration for slower transition
      }
    };

    const intervalId = setInterval(updateRandomText, interval);

    return () => clearInterval(intervalId);
  }, [randomString]);

  return (
    <div className=''>
      <p className='text-xl'>{randomString}</p>
    </div>
  );
}
