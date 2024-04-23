"use client";

import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import Nav from "@/components/Nav";
import { Reach } from "@/components/Reach";
import Footer from "@/components/Footer";
import Animations from "@/components/support/Animations";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <NextUIProvider>{children}</NextUIProvider>
        <Reach />
        <Footer />
        <Animations />
      </body>
    </html>
  );
}
