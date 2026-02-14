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
import Testimonials from "@/components/Testimonials";
import OurTeam from "@/components/OurTeam";

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
  getGalleryImages,
  getTestimonials,
  getTestimonialsMetadata,
  getTeamMembers,
  getTeamMetadata,
  getProductsPageData // Added
} from "@/lib/data";

export const revalidate = 0;

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
    galleryImages,
    testimonialsData,
    testimonialsMetadata,
    teamData,
    teamMetadata,
    productsPageData // Added
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
    getGalleryImages(),
    getTestimonials(),
    getTestimonialsMetadata(),
    getTeamMembers(),
    getTeamMetadata(),
    getProductsPageData() // Added
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
      <OurTeam
        data={teamData}
        title={teamMetadata?.title}
        subtitle={teamMetadata?.subtitle}
      />
      <Certificates data={certificatesData} />
      <Testimonials
        data={testimonialsData}
        title={testimonialsMetadata?.title}
        subtitle={testimonialsMetadata?.subtitle}
      />

      {/* Sustainable Quality Section */}
      <section className="py-16 md:py-24 bg-white border-t border-coco-forest/5">
        <div className="container mx-auto px-5 md:px-16">
          <div className="bg-[#eff6ff] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-xl md:text-3xl font-bold text-coco-forest mb-6">
                {productsPageData?.cta_title}
              </h2>
              <p className="text-coco-forest/70 text-sm md:text-base mb-8 md:mb-10">
                {productsPageData?.cta_description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/${(productsPageData?.cta_whatsapp || '').replace(/[^\d]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-[#25D366] transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {productsPageData?.cta_whatsapp_label || 'WhatsApp'}
                </a>
                <a
                  href={`mailto:${productsPageData?.cta_email}`}
                  className="flex items-center gap-3 bg-white text-coco-forest px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-coco-gold hover:text-coco-forest transition-all transform hover:scale-105 border border-white"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {productsPageData?.cta_email_label || 'Email Inquiry'}
                </a>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eff6ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#eff6ff]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      <Contact data={contactData} />
    </main>
  );
}





