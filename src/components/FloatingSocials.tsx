"use client";

import { motion } from "framer-motion";

export default function FloatingSocials() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="fixed z-50 right-4 lg:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl border border-gray-100"
    >
      <a 
        href="https://www.instagram.com/thehouseofchichi_official" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#C6A15B] hover:text-white transition-colors duration-300 group" 
        aria-label="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      
      <a 
        href="https://tiktok.com/@thehouseofchichi" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#C6A15B] hover:text-white transition-colors duration-300 group" 
        aria-label="TikTok"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
      </a>
      
      <a 
        href="https://api.whatsapp.com/send?phone=7810547731" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#C6A15B] hover:text-white transition-colors duration-300 group" 
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </motion.div>
  );
}
