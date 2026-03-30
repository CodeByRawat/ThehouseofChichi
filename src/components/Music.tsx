"use client";

import { motion } from "framer-motion";
import { Music as MusicIcon } from "lucide-react";

const tracks = [
  "Imole – He’s an Icon",
  "Imole – Paws & Pearls (Theme Tune)",
  "Imole – With Love from Mexico",
  "Imole – Light from Lagos",
  "Imole – Fashion, Friendship, Love & Light",
  "Imole – I Just Want to Try",
  "Gonna Shine Anyway"
];

export default function Music() {
  return (
    <section id="music" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4"
          >
            Soundtrack
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8"
          >
            The Music of Imole
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-[#C6A15B] mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed font-light"
          >
            A musical extension of Imole’s journey — capturing emotion, storytelling, and meaning through sound.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          {tracks.map((track, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center p-6 border-b border-gray-100 last:border-b-0 hover:bg-[#F5EFE6]/50 transition-colors group"
            >
              <span className="font-serif text-[#C6A15B] text-xl w-12 opacity-80">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              <span className="flex-1 font-medium text-[#1A1A1A] group-hover:text-[#C6A15B] transition-colors">
                {track}
              </span>
              <MusicIcon className="w-5 h-5 text-gray-300 group-hover:text-[#C6A15B] transition-colors" />
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500 italic font-light text-sm"
        >
          All lyrics written by Andrea Hayden
        </motion.p>
      </div>
    </section>
  );
}
