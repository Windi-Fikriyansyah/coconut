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
  getWhyChooseUsData,
  getWhyChooseUsMetadata,
  getContactData,
  getCertificates,
  getQualityCommitmentData,
  getQualityCommitmentItems,
  getGalleryMetadata,
  getGalleryImages
} from "@/lib/data";

export const revalidate = 60;

export default async function Home() {
  const [
    processSteps,
    products,
    heroData,
    aboutData,
    trustData,
    whyChooseUsData,
    whyChooseUsMetadata,
    contactData,
    certificatesData,
    qualityCommitmentData,
    qualityCommitmentItems,
    galleryMetadata,
    galleryImages
  ] = await Promise.all([
    getProcessSteps(),
    getProducts(),
    getHeroData(),
    getAboutData(),
    getTrustData(),
    getWhyChooseUsData(),
    getWhyChooseUsMetadata(),
    getContactData(),
    getCertificates(),
    getQualityCommitmentData(),
    getQualityCommitmentItems(),
    getGalleryMetadata(),
    getGalleryImages()
  ]);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero data={heroData} />
      <About data={aboutData} />
      <ProductGrid data={products} />
      <QualityCommitment data={qualityCommitmentData} items={qualityCommitmentItems} />
      {/* <Process data={processSteps} /> */}
      <ShippingGallery data={galleryImages} section={galleryMetadata} />
      <WhyChooseUs
        data={whyChooseUsData}
        title={whyChooseUsMetadata?.title}
        subtitle={whyChooseUsMetadata?.subtitle}
        image={whyChooseUsMetadata?.image}
      />
      {/* <TrustSection data={trustData} /> */}
      <Certificates data={certificatesData} />
      <Contact data={contactData} />
    </main>
  );
}

