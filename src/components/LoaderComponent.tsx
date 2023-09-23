'use client';
import React from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

export default function LoaderComponent() {
  const ref = React.useRef<LoadingBarRef | null>(null);

  React.useEffect(() => {
    ref.current?.continuousStart();
    document.addEventListener('load', (e) => {
      console.log(e);
      ref.current?.complete();
    });
    return () => {
      document.removeEventListener('load', (e) => {
        console.log(e);
      });
    };
  }, []);
  return <LoadingBar ref={ref} />;
}
