import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import DevConsoleMessage from "@/components/dev-console-message";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nhung le",
  description: "aka eri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased w-full overflow-x-hidden overflow-y-auto no-scrollbar`}
      >
        <DevConsoleMessage/>
        {children}
      </body>
    </html>
  );
}
