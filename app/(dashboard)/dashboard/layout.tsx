import Header from "@/components/layout/dashboard/Header";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpNext: Dashboard",
  description:
    "UpNext: Your Go-To NextJS Starter Boilerplate for Rapid, Efficient, and Quality Web Development",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">
          <div className="flex-1 space-y-2 p-2 pt-3 md:p-4">{children}</div>
        </main>
      </div>
    </>
  );
}
