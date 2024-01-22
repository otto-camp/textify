import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'textify | %s',
    default: 'textify',
  },
};

export default function NonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
