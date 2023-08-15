import { currentUser } from '@clerk/nextjs';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default async function DashboardLayout({
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
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
}
