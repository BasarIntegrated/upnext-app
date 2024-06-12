"use client";
import { SessionProviderProps } from "next-auth/react";
import React from "react";
import ThemeProvider from "../theme-toggle/ThemeProvider";
export default function Providers({
  children,
}: {
  session?: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <SessionProvider session={session}>{children}</SessionProvider> */}
        {children}
      </ThemeProvider>
    </>
  );
}
