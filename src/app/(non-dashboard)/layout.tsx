import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { currentUser } from '@clerk/nextjs';

export default async function NonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <>
      <Header email={user?.emailAddresses.at(0)?.emailAddress!} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
