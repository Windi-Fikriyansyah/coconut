"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Product, Country } from "@/lib/data";

interface Props {
  products: Product[];
  dbCountries: Country[];
}

const SamplePageClient = ({ data, products, dbCountries }: Props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    town: "",
    companyName: "", // Tambahan baru
    businessType: "", // Tambahan baru
    paymentMethod: "", // Tambahan baru
    quantity: "", // Tambahan baru (Quantity kg)
    message: "",
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (title: string) => {
    setSelectedProducts((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProducts.length === 0)
      return alert("Please select at least one product sample.");
    setLoading(true);

    try {
      const response = await fetch("/api/sample", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, selectedProducts }),
      });

      if (response.ok) {
        alert(
          "Sample request submitted! We will contact you regarding shipping costs.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          country: "",
          town: "",
          courier: "",
          message: "",
        });
        setSelectedProducts([]);
      }
    } catch (error) {
      alert("Error submitting request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDF8F1]">
      <Navbar solid />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/background_hero.webp')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest"
          >
            Request A Sample
          </motion.h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/80">
            Curious about our quality? Request a product sample and we will
            deliver it to your doorstep.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <form onSubmit={handleSubmit} className="space-y-16">
            {/* PERSONAL DETAILS */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3 text-left">
                Personal <span className="text-gray-400">Details</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Name (Required)"
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
                <input
                  required
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email (Required)"
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
                <input
                  required
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone (Required)"
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
                <input
                  required
                  name="address"
                  onChange={handleChange}
                  type="text"
                  placeholder="Street Address (Required)"
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
                <select
                  required
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                  className="w-full p-4 bg-white border rounded-md text-gray-500"
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
                  placeholder="Town / City (Required)"
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
              </div>
            </div>

            {/* COMPANY DETAILS */}
            <div className="space-y-8 mt-12">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Company <span className="text-gray-400">Details</span>
              </h2>
              <div className="space-y-6">
                <input
                  name="companyName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
                <textarea
                  name="businessType"
                  onChange={handleChange}
                  placeholder="Short description of your business"
                  rows={3}
                  className="w-full p-4 bg-white border rounded-md outline-none"
                />
              </div>
            </div>

            {/* PRODUCT SAMPLE */}
            <div className="space-y-8 mt-12">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Product <span className="text-gray-400">Sample</span>
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

            {/* SELECT PAYMENT METHOD */}
            <div className="space-y-6 mt-12">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Select <span className="text-gray-400">Payment Method</span>
              </h2>
              <div className="flex space-x-12">
                {["Paypal", "Other"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#8B5E3C]"
                    />
                    <span className="text-gray-600">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="space-y-6 mt-12">
              <h2 className="text-2xl font-bold text-[#8B5E3C] uppercase border-b pb-3">
                Quantity
              </h2>
              <input
                name="quantity"
                onChange={handleChange}
                type="text"
                placeholder="Quantity (kg)"
                className="w-full p-4 bg-white border rounded-md outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-[#8B5E3C] hover:bg-[#6F4A2F] text-white font-bold py-4 px-20 rounded-md shadow-lg transition-all uppercase disabled:opacity-50"
            >
              {loading ? "Processing..." : "Request Sample"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SamplePageClient;
