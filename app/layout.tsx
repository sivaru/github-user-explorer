import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import { QueryProvider } from "@/components/QueryProvider";

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
          <QueryProvider>{children}</QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
