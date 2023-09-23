import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';
import Analytics from '@/layouts/Analytics';
import { Toaster } from '@/components/ui/Toast';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${inter.className} min-h-screen scroll-smooth bg-background antialiased`}
        >
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
          <Analytics />
          {/* <LoaderComponent /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
