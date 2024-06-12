import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpNext:",
  description:
    "UpNext: Your Go-To NextJS Starter Boilerplate for Rapid, Efficient, and Quality Web Development",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <NextTopLoader />
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
