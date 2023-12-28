import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "textify | %s",
    default: "textify",
  },
};

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
