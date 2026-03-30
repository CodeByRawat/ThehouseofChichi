"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/about the author picture.webp", alt: "Andrea Hayden portraits" },
  { src: "/imole book photo.webp", alt: "Imole (Chihuahua) Fashion" },
  { src: "/review by christine 3.webp", alt: "Fashion and red carpet events" },
  { src: "/imole coloringbook photo.webp", alt: "Editorial-style imagery" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4"
          >
            Visuals
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8"
          >
            The Gallery
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-[#C6A15B] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-serif text-lg">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
