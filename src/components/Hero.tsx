"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F5EFE6]">
      {/* Background with luxury gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/behind the story image.webp"
          alt="Luxury background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE6] via-[#F5EFE6]/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl pt-20">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-6"
        >
          The House of ChiChi Presents
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] mb-8 leading-tight tracking-tight"
        >
          Imole <span className="text-[#C6A15B]">Paws & Pearls</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-gray-600 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A story-inspired world where elegance meets imagination.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            href="#discover"
            className="px-10 py-4 bg-[#1A1A1A] text-white rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-[#333] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Discover the Story
          </Link>
          <Link 
            href="/shop"
            className="px-10 py-4 border border-[#C6A15B] text-[#C6A15B] rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-[#C6A15B] hover:text-white transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
