import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "mdg40/kerberos - Password Generator for Cloud Operations",
  description: "Kerberos Pasword Generator for Cloud Operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen font-sans antialiased bg-muted/40", fontSans.variable
      )}>{children}
        <Toaster />
      </body>
    </html>
  );
}
