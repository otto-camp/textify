'use client';
import { UserProfile } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Shell } from '@/components/Shell';
import { useTheme } from 'next-themes';
import { type Theme } from '@clerk/types';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/PageHeader';

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
      <PageHeader>
        <PageHeaderHeading>Account</PageHeaderHeading>
        <PageHeaderDescription>
          Manage your account settings
        </PageHeaderDescription>
      </PageHeader>

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
