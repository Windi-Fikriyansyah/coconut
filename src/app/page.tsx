import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Process from "@/components/Process";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ShippingGallery from "@/components/ShippingGallery";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

import {
  getProcessSteps,
  getProducts,
  getHeroData,
  getStatsData,
  getAboutData,
  getTrustData,
  getShippingGallery,
  getWhyChooseUsData,
  getContactData,
  getCertificates
} from "@/lib/data";

export const revalidate = 3600;

export default async function Home() {
  const [
    processSteps,
    products,
    heroData,
    statsData,
    aboutData,
    trustData,
    shippingGalleryData,
    whyChooseUsData,
    contactData,
    certificatesData
  ] = await Promise.all([
    getProcessSteps(),
    getProducts(),
    getHeroData(),
    getStatsData(),
    getAboutData(),
    getTrustData(),
    getShippingGallery(),
    getWhyChooseUsData(),
    getContactData(),
    getCertificates()
  ]);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero data={heroData} />
      <Stats data={statsData} />
      <ProductGrid data={products} />
      <About data={aboutData} />
      <Process data={processSteps} />
      <ShippingGallery data={shippingGalleryData} />
      <WhyChooseUs data={whyChooseUsData} />
      <TrustSection data={trustData} />
      <Certificates data={certificatesData} />
      <Contact data={contactData} />
    </main>
  );
}

