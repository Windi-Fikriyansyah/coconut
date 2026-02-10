import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Process from "@/components/Process";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ShippingGallery from "@/components/ShippingGallery";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

import QualityCommitment from "@/components/QualityCommitment";

import {
  getProcessSteps,
  getProducts,
  getHeroData,
  getAboutData,
  getTrustData,
  getShippingGallery,
  getWhyChooseUsData,
  getContactData,
  getCertificates
} from "@/lib/data";

export const revalidate = 0;

export default async function Home() {
  const [
    processSteps,
    products,
    heroData,
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
      <About data={aboutData} />
      <ProductGrid data={products} />
      <QualityCommitment />
      {/* <Process data={processSteps} /> */}
      <ShippingGallery data={shippingGalleryData} />
      <WhyChooseUs data={whyChooseUsData} />
      {/* <TrustSection data={trustData} /> */}
      <Certificates data={certificatesData} />
      <Contact data={contactData} />
    </main>
  );
}

