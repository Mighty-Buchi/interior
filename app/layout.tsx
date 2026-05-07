import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./sections/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const poppins = Poppins({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Great interior Designs",
  description: "Best interior Designer, best interior design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.className} h-full antialiased`}
    >
      <body   >
        <Header />
        <main className={` ${poppins.className} overflow-x-hidden m-auto  relative `}>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
      
    </html>
  );
}
