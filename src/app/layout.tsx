import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";
import Script from "next/script";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://indonesiacoco.com'),
  title: "Indonesia Coconut Supplier | PT Sumber Niaga Alam Sejahtera",
  description: "Global exporter of premium coconut derivatives: Charcoal Briquettes, VCO, Desiccated Coconut, Cocopeat, and Organic Coconut Sugar. ISO Certified & Sustainable sourcing from Indonesia.",
  keywords: "Indonesia coconut exporter, coconut charcoal briquettes supplier, bulk virgin coconut oil, desiccated coconut factory, organic coconut sugar wholesale, cocopeat and cocofiber exporter, coconut milk distributor, copra supplier Indonesia",
  openGraph: {
    title: "Premium Coconut Derivatives Exporter | PT Sumber Niaga Alam Sejahtera",
    description: "Your trusted partner for high-quality coconut products from Indonesia. We supply Briquettes, VCO, Cocopeat, and more for global industrial needs.",
    url: "https://indonesiacoco.com", // Ganti dengan domain Anda
    type: "website",
    locale: "en_US",
    siteName: "PT Sumber Niaga Alam Sejahtera",
    images: [
      {
        url: "/og-image.webp", // Pastikan ada gambar menarik untuk share link
        width: 1200,
        height: 630,
        alt: "PT Sumber Niaga Alam Sejahtera Coconut Products",
      },
    ],
  },
};

import { getProducts, getContactData, getCertificates, getFooterData } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, contact, certificates, footerData] = await Promise.all([
    getProducts(),
    getContactData(),
    getCertificates(),
    getFooterData()
  ]);


  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RH8PHKT37C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RH8PHKT37C');
          `}
        </Script>
        <JsonLd />
        {children}
        <Certificates data={certificates} isGlobal={true} />
        <Contact data={contact} isGlobal={true} />
        <WhatsAppButton number={contact?.whatsapp} />

        <Footer products={products} data={footerData} />

      </body>
    </html>
  );
}
