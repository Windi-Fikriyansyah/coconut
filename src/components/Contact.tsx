"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { ContactData } from "@/lib/data";

interface ContactProps {
  data?: ContactData | null;
  isGlobal?: boolean;
}

const Contact = ({ data, isGlobal }: ContactProps) => {
  const subtitle = data?.subtitle || "Get In Touch";
  const title = data?.title || "Let's Discuss Your <br />Industrial Needs";
  const description =
    data?.description ||
    "Ready to elevate your supply chain? Reach out to our team for export inquiries, samples, or customized specifications.";
  const email = data?.email || "hello@globalcocoprime.com";
  const phone = data?.phone || "+6281234567890"; // Pastikan format tanpa spasi untuk WA link
  const address = data?.address || "HQ Jakarta, Indonesia";

  // Membersihkan nomor telepon untuk link WhatsApp (menghapus spasi dan karakter non-digit)
  const whatsappNumber = phone.replace(/[^0-9]/g, "");

  const pathname = usePathname();

  if (pathname === "/contact") return null;
  if (isGlobal && (pathname === "/" || pathname === "/gallery")) return null;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT COLUMN: INFORMATION CARD (#0f2922) */}
          <div className="lg:col-span-6">
            <div className="h-full bg-[#0f2922] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />

              <div className="relative z-10">
                <span className="text-coco-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">
                  {subtitle}
                </span>
                <h2
                  className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 leading-[1.2] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p className="text-white/70 text-base md:text-lg mb-12 max-w-md leading-relaxed">
                  {description}
                </p>

                {/* Contact Details List with Links */}
                <div className="space-y-8 border-t border-white/10 pt-10">
                  {/* Email Link */}
                  <a
                    href={`mailto:${email}`}
                    className="flex gap-6 items-center group cursor-pointer w-fit"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-coco-gold/20 group-hover:border-coco-gold/50 transition-all">
                      <Mail className="text-coco-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                        Email Address
                      </p>
                      <p className="text-base md:text-lg font-medium group-hover:text-coco-gold transition-colors">
                        {email}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp Link */}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-6 items-center group cursor-pointer w-fit"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-coco-gold/20 group-hover:border-coco-gold/50 transition-all">
                      <Phone className="text-coco-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                        WhatsApp Support
                      </p>
                      <p className="text-base md:text-lg font-medium group-hover:text-coco-gold transition-colors">
                        {phone}
                      </p>
                    </div>
                  </a>

                  {/* Address (Non-link or keep as is) */}
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="text-coco-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                        Our Office
                      </p>
                      <p className="text-base md:text-lg font-medium">
                        {address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <span className="w-2 h-2 bg-coco-gold rounded-full animate-pulse" />
                  <p className="text-xs italic text-white/60">
                    Click to connect with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INPUT CARD (#fcf9f0) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full bg-[#fcf9f0] p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-[#0f2922]/5 shadow-sm flex flex-col justify-center"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#0f2922]/60 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-[#0f2922]/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coco-gold/20 outline-none transition-all shadow-sm text-[#0f2922]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#0f2922]/60 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white border border-[#0f2922]/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coco-gold/20 outline-none transition-all shadow-sm text-[#0f2922]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#0f2922]/40 ml-1">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-[#0f2922]/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coco-gold/20 outline-none transition-all shadow-sm text-[#0f2922]"
                    placeholder="Your Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#0f2922]/40 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-white border border-[#0f2922]/5 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coco-gold/20 outline-none transition-all shadow-sm text-[#0f2922]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#0f2922] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1a3d34] transition-all shadow-xl shadow-[#0f2922]/10 active:scale-[0.98]"
                >
                  Send Inquiry
                  <Send className="w-5 h-5 text-coco-gold" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
