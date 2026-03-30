"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#F5EFE6]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4"
          >
            Testimonials
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8"
          >
            Words of Praise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-[#C6A15B] mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center bg-white p-12 shadow-sm rounded-xl border border-gray-100 relative"
          >
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#C6A15B] text-[#C6A15B]" />
              ))}
            </div>
            
            <p className="font-serif text-[#1A1A1A] text-2xl mb-8 leading-snug italic">
              "London Fashion Week has always been about bold statements and unexpected encounters. This story delivers something truly special — a meeting between elegance, storytelling, and purpose."
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600 font-light text-sm">
                <strong className="text-[#1A1A1A]">Two Voices, One Truth:</strong> The message resonates equally with children and adults.
              </p>
              <p className="text-gray-600 font-light text-sm">
                <strong className="text-[#1A1A1A]">Courage:</strong> The quiet decision to try — even when uncertain — is where transformation begins.
              </p>
              <p className="text-gray-600 font-light text-sm">
                <strong className="text-[#1A1A1A]">Belonging:</strong> Being different is not a disadvantage; it is often the very thing that allows us to shine.
              </p>
            </div>
            
            <div className="border-l-2 border-[#C6A15B] pl-4 py-1">
              <h5 className="font-semibold text-lg text-[#1A1A1A] uppercase tracking-widest text-sm">Christine Marsh</h5>
              <p className="text-gray-500 font-light text-sm">London Fashion Week</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="relative h-full rounded-xl overflow-hidden shadow-md">
              <Image 
                src="/review by christine marsh .webp" 
                alt="Christine Marsh Testimonial Image 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-full rounded-xl overflow-hidden shadow-md pt-12">
              <Image 
                src="/review by christine marsh second image.webp" 
                alt="Christine Marsh Testimonial Image 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
