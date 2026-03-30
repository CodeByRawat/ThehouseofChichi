"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? "bg-[#F5EFE6]/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-wide">
          The House of <span className="text-[#C6A15B]">ChiChi</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#discover" className="text-xs font-medium hover:text-[#C6A15B] transition-colors uppercase tracking-widest">Story</Link>
          <Link href="/#about" className="text-xs font-medium hover:text-[#C6A15B] transition-colors uppercase tracking-widest">About</Link>
          <Link href="/#music" className="text-xs font-medium hover:text-[#C6A15B] transition-colors uppercase tracking-widest">Music</Link>
          <Link href="/#reviews" className="text-xs font-medium hover:text-[#C6A15B] transition-colors uppercase tracking-widest">Reviews</Link>
          <Link href="/#gallery" className="text-xs font-medium hover:text-[#C6A15B] transition-colors uppercase tracking-widest">Gallery</Link>
          <Link href="/#contact" className="text-xs font-medium hover:text-[#C6A15B] transition-colors uppercase tracking-widest">Contact</Link>
          <Link href="/shop" className="bg-[#C6A15B] text-white px-5 py-2.5 rounded-sm text-xs font-medium hover:bg-[#b38f4d] transition-all transform hover:-translate-y-0.5 shadow-sm uppercase tracking-widest">
            Shop
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden relative z-[110] p-2 -mr-2" onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <Menu className={`w-7 h-7 transition-colors ${scrolled ? "text-[#1A1A1A]" : "text-[#1A1A1A]"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#F5EFE6] z-[120] p-6 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl font-semibold">
                The House of <span className="text-[#C6A15B]">ChiChi</span>
              </span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 items-start text-xl font-serif">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">Home</Link>
              <Link href="/#discover" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">Story</Link>
              <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">About</Link>
              <Link href="/#music" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">Music</Link>
              <Link href="/#reviews" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">Reviews</Link>
              <Link href="/#gallery" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">Gallery</Link>
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-[#C6A15B]">Contact</Link>
            </div>
            
            <Link 
              href="/shop" 
              onClick={() => setIsOpen(false)}
              className="mt-12 bg-[#C6A15B] text-white text-center py-4 rounded-sm text-lg uppercase tracking-wider font-semibold hover:bg-[#b38f4d] transition-colors"
            >
              Shop Collection
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
