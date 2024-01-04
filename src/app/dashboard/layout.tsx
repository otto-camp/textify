import { currentUser } from '@clerk/nextjs';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <>
      <Header email={user?.emailAddresses.at(0)?.emailAddress} />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
}
