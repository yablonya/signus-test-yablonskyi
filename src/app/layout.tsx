import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/footer";
import Providers from "@/providers";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test task",
  description: "Test task",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <Providers>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
