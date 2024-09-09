import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkLink - Connect and Collaborate with Your Team",
  description: "Connect and collaborate with your team seamlessly using WorkLink. Experience real-time messaging, file sharing, and task management all in one place, designed to boost productivity and streamline communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
