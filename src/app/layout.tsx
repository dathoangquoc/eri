import type { Metadata } from "next";
import { Geist_Mono, Gentium_Plus } from "next/font/google";
import "./globals.css";
import DevConsoleMessage from "@/components/dev-console-message";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gentiumPlus = Gentium_Plus({
  variable: "--font-gentium-plus",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${geistMono.variable} ${gentiumPlus.variable} antialiased w-full overflow-x-hidden overflow-y-auto no-scrollbar`}
      >
        <DevConsoleMessage/>
        {children}
      </body>
    </html>
  );
}
