import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Global Coco Prime | Premium Coconut Derivatives Exporter",
  description: "Global Coco Prime is a leading exporter of high-quality coconut derivatives including charcoal briquettes, virgin coconut oil, and desiccated coconut. Organic, sustainable, and ISO certified.",
  keywords: "coconut charcoal briquettes, virgin coconut oil, desiccated coconut, coconut exporter Indonesia, sustainable coconut products",
  openGraph: {
    title: "Global Coco Prime | Premium Coconut Derivatives",
    description: "Premium Coconut Derivatives for the Global Market. Sustainably sourced, industrially processed.",
    type: "website",
    locale: "en_US",
    siteName: "Global Coco Prime",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}
