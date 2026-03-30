"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BehindStory() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 flex flex-col justify-center"
        >
          <h4 className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4">The Inspiration</h4>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Behind The Story
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
            Imole is named in honour of the late Nigerian singer Mohbad, who was lovingly known as Imole — a name that means <em>light</em>.
          </p>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
            Through his music, Mohbad brought light to countless hearts. Though his life was tragically cut short, his brightness continues to shine.
          </p>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
            Not long after his passing, a little chihuahua came into my life — full of warmth, joy, and spirit. I named him Imole to carry that same meaning of light. His presence not only changed my life, but his gentle energy continues to touch everyone he meets.
          </p>

          <div className="bg-white/5 border border-[#C6A15B]/30 p-8 rounded-lg">
            <h4 className="font-serif text-[#C6A15B] text-xl mb-4">Imole&apos;s journey reminds us:</h4>
            <ul className="space-y-3 text-gray-300 font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C6A15B]" /> Our light is meant to be shared</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C6A15B]" /> True friendship can appear in unexpected places</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C6A15B]" /> Being different is often our greatest strength</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden"
        >
          <Image 
            src="/behind the story image.webp" 
            alt="Behind the Story"
            fill
            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
