import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite & Beyond | Premium Cocopeat Manufacturer & Exporter",
  description: "Leading manufacturer and exporter of premium cocopeat products. Sustainable, high-quality growing mediums for agriculture, horticulture, and hydroponics. Shipping to 20+ countries worldwide.",
  keywords: ["cocopeat", "coco peat", "coir pith", "coconut peat", "growing medium", "hydroponics", "horticulture", "agriculture", "export", "India", "sustainable farming"],
  authors: [{ name: "Elite and Beyond" }],
  openGraph: {
    title: "Elite & Beyond | Premium Cocopeat Manufacturer & Exporter",
    description: "Sustainable cocopeat solutions for modern agriculture. Premium quality, globally trusted.",
    url: "https://eliteandbeyond.com",
    siteName: "Elite & Beyond",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite & Beyond | Premium Cocopeat",
    description: "Sustainable cocopeat solutions for modern agriculture.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ebicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
