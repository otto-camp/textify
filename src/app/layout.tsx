import Analytics from '@/components/layout/analytics';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

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
