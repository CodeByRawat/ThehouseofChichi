"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutAuthor() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5EFE6]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
        >
          <Image 
            src="/about the author picture.webp" 
            alt="Andrea Hayden"
            fill
            className="object-cover border-4 border-[#C6A15B]/20"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h4 className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4">About the Author</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8">
            Andrea Hayden
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
            Hello, and welcome. My name is Andrea Hayden, author of <em>Imole – Paws & Pearls</em> and founder of The House of ChiChi.
          </p>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
            My inspiration comes from my loyal companion, Imole, whose name means <em>light</em> — a light that brings joy. Together, we’ve created a world that blends storytelling, fashion, and heart.
          </p>
          
          <h4 className="font-sans font-medium text-[#1A1A1A] uppercase tracking-widest text-sm mb-4">Through my writing, I aim to inspire children to:</h4>
          <ul className="space-y-3 mb-8 text-gray-600 font-light">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" /> Dream big
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" /> Believe in themselves
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" /> Embrace their uniqueness
            </li>
          </ul>

          <div className="border-l-2 border-[#C6A15B] pl-6 py-2">
            <p className="font-serif italic text-xl text-[#C6A15B]">
              &quot;I choose to try — because with courage and creativity, even the smallest steps can lead to the brightest journeys.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
