"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ContactData, Product, Country } from "@/lib/data";

interface Props {
  data: ContactData;
  products: Product[];
  dbCountries: Country[];
}

const QuotePageClient = ({
  data,
  products,
  dbCountries,
}: {
  data: ContactData;
  products: Product[];
  dbCountries: Country[];
}) => {
  // State untuk form
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    town: "",
    currency: "",
    saleTerm: "",
    paymentTerm: "",
    message: "",
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Handler untuk input text/select/radio
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler untuk checkbox produk
  const handleProductChange = (title: string) => {
    setSelectedProducts((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.paymentTerm) {
      alert("Please select a Payment Term");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, selectedProducts }),
      });

      if (response.ok) {
        alert("Quote request sent successfully!");
        // Reset State agar form kosong kembali
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          country: "",
          town: "",
          currency: "",
          saleTerm: "",
          paymentTerm: "",
          message: "",
        });
        setSelectedProducts([]);
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#FDF8F1]">
      <Navbar solid />

      {/* Hero Header - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/background_hero.webp')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-widest"
          >
            Request A Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-lg text-white/90 leading-relaxed"
          >
            Get a best price quote for the products you need. Fill the form
            details, let us know and we will get back to you with our best deal.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <form onSubmit={handleSubmit} className="space-y-16">
            {/* PERSONAL DETAILS */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 bg-white border rounded-md outline-none focus:border-[#8B5E3C]"
                />
                <input
                  required
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-white border rounded-md outline-none focus:border-[#8B5E3C]"
                />
                <input
                  required
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone"
                  className="w-full p-4 bg-white border rounded-md outline-none focus:border-[#8B5E3C]"
                />
                <input
                  required
                  name="address"
                  onChange={handleChange}
                  type="text"
                  placeholder="Street Address"
                  className="w-full p-4 bg-white border rounded-md outline-none focus:border-[#8B5E3C]"
                />
                <select
                  required
                  name="country"
                  onChange={handleChange} // Kunci perbaikan
                  value={formData.country} // Sinkronisasi state
                  className="w-full p-4 bg-white border border-gray-200 rounded-md text-sm outline-none appearance-none text-gray-500 focus:border-[#8B5E3C]"
                >
                  <option value="">Country (Required)</option>
                  {dbCountries.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <input
                  required
                  name="town"
                  onChange={handleChange}
                  type="text"
                  placeholder="Town"
                  className="w-full p-4 bg-white border rounded-md outline-none focus:border-[#8B5E3C]"
                />
              </div>
            </div>

            {/* PRODUCT REQUESTED */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Product Requested
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <label
                    key={product.id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      onChange={() => handleProductChange(product.title)}
                      className="w-5 h-5 accent-[#8B5E3C]"
                    />
                    <span className="text-sm text-gray-600">
                      {product.title}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* CURRENCY & TERMS (Gunakan name yang sama untuk radio group) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bold mb-4">Currency</h3>
                {["USD", "EURO", "IDR"].map((curr) => (
                  <label key={curr} className="mr-4">
                    <input
                      type="radio"
                      name="currency"
                      value={curr}
                      onChange={handleChange}
                      className="mr-2 accent-[#8B5E3C]"
                    />
                    {curr}
                  </label>
                ))}
              </div>
              <div>
                <h3 className="font-bold mb-4">Sale Term</h3>
                {["FOB", "CIF", "EXW"].map((term) => (
                  <label key={term} className="mr-4">
                    <input
                      type="radio"
                      name="saleTerm"
                      value={term}
                      onChange={handleChange}
                      className="mr-2 accent-[#8B5E3C]"
                    />
                    {term}
                  </label>
                ))}
              </div>
            </div>

            {/* PAYMENT TERMS */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Payment Terms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "TT 100% Advance",
                  "T/T 30% Advance, Balance 70% Irrevocable Sight LC",
                  "TT 50%, Balance 50% TT After receiving copy of BL",
                  "100% Irrevocable Sight LC",
                ].map((pay) => (
                  <label
                    key={pay}
                    className="flex items-center space-x-3 cursor-pointer group p-2 hover:bg-white rounded transition-all"
                  >
                    <input
                      type="radio"
                      name="paymentTerm" // Sesuai dengan nama di state formData
                      value={pay}
                      onChange={handleChange}
                      checked={formData.paymentTerm === pay}
                      className="w-4 h-4 accent-[#8B5E3C]"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-black font-medium">
                      {pay}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {/* MESSAGE */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Notes Or Message
              </h2>
              <textarea
                name="message"
                onChange={handleChange}
                rows={6}
                className="w-full p-5 bg-white border rounded-md outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#F2B66D] hover:bg-[#e5a55b] text-white font-bold py-4 px-16 rounded-md shadow-lg transition-all uppercase disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default QuotePageClient;
