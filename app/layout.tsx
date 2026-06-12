import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import { QueryProvider } from "@/components/QueryProvider";
import { NavBar } from "@/components/global-components/NavBar";

export const metadata: Metadata = {
  title: "GitHub User Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>
          <QueryProvider>
            <NavBar />
            <main style={{ paddingTop: "76px", width: "100%" }}>
              {children}
            </main>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
