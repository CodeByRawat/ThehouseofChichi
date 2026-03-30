"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <Navbar />
      
      <div className="pt-32 pb-16 text-center container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4">The Boutique</h4>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6">Shop The Collection</h1>
          <div className="w-16 h-[2px] bg-[#C6A15B] mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Bring Imole’s world into your home. Each piece is crafted to inspire courage, creativity, and joy.
          </p>
        </motion.div>
      </div>

      <section className="pb-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
