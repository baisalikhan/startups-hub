import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css"
import { Toaster } from "@/components/ui/toaster";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}