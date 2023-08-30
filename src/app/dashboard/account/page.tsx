'use client';
import { UserProfile } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Shell } from '@/components/Shell';
import { useTheme } from 'next-themes';
import { type Theme } from '@clerk/types';

const appearance: Theme = {
  baseTheme: undefined,
  variables: {
    borderRadius: '0.25rem',
  },
  elements: {
    card: 'shadow-none',
    navbar: 'hidden',
    navbarMobileMenuButton: 'hidden',
    headerTitle: 'hidden',
    headerSubtitle: 'hidden',
  },
};

export default function AccountPage() {
  const { theme } = useTheme();
  return (
    <Shell>
      <div>
        <h1 className='line-clamp-1 text-3xl font-bold tracking-tight'>
          Account
        </h1>
        <p className='line-clamp-2 text-muted-foreground'>
          Manage your account settings
        </p>
      </div>

      <div className='mx-auto overflow-hidden rounded-lg'>
        <UserProfile
          appearance={{
            ...appearance,
            baseTheme: theme === 'dark' ? dark : appearance.baseTheme,
            variables: {
              ...appearance.variables,
              colorBackground: theme === 'light' ? '#fafafa' : undefined,
            },
          }}
        />
      </div>
    </Shell>
  );
}
