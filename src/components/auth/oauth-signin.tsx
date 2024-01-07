'use client';

import * as React from 'react';
import { isClerkAPIResponseError, useSignIn } from '@clerk/nextjs';
import { toast } from 'sonner';

import { Button } from '../ui/button';
import { type OAuthStrategy } from '@clerk/nextjs/server';
import { Loader2 } from 'lucide-react';

const oauthProviders = [
  {
    name: 'Google',
    strategy: 'oauth_google',
    icon: (
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix='fab'
        data-icon='google'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 488 512'
        className='mr-2 h-4 w-4'
      >
        <path
          fill='currentColor'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
        ></path>
      </svg>
    ),
  },
] satisfies {
  name: string;
  icon: React.ReactNode;
  strategy: OAuthStrategy;
}[];

export default function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  const { signIn, isLoaded: signInLoaded } = useSignIn();

  async function oauthSignIn(provider: OAuthStrategy) {
    if (!signInLoaded) return null;
    try {
      setIsLoading(provider);
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/',
      });
    } catch (error) {
      setIsLoading(null);

      const unknownError = 'Something went wrong, please try again.';

      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError);
    }
  }
  return (
    <div className='grid gap-4'>
      {oauthProviders.map((provider) => {
        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.strategy}
            variant='outline'
            className='w-full bg-background sm:w-auto'
            onClick={() => void oauthSignIn(provider.strategy)}
            disabled={isLoading !== null}
          >
            {isLoading === provider.strategy ? (
              <Loader2
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            ) : (
              <>{provider.icon}</>
            )}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
}
