import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Spectral } from "next/font/google";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FooterInfo from "@/components/FooterInfo";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-roboto",
});
const montserrat_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-montserrat_init",
});
const spectral_init = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "700"],
  variable: "--font-spectral_init",
});

export const metadata: Metadata = {
  title: "Maksimilijan Wine Room",
  description: "Generated by InnovaTech Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spectral_init.variable}>
        <NavBar />
        {children}
        <FooterInfo />
        <Footer />
      </body>
    </html>
  );
}
