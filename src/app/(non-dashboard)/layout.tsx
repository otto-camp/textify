import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function NonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <>
      <Header
        firstName={user?.firstName!}
        lastName={user?.lastName!}
        imageUrl={user?.imageUrl!}
        email={user?.emailAddresses[0].emailAddress!}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
