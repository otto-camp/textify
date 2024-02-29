import Analytics from '@/components/layout/analytics';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen scroll-smooth bg-background antialiased scrollbar-thin scrollbar-track-accent scrollbar-thumb-primary`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
