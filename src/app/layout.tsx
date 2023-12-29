import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-provider';
import Analytics from '@/components/layout/analytics';
import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${inter.className} min-h-screen scroll-smooth bg-background antialiased`}
        >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}