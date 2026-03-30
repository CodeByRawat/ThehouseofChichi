"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful submission for the frontend UX
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5EFE6]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-[#C6A15B] mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 rounded-xl"
          >
            <h3 className="font-serif text-2xl mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input required type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-[#C6A15B] focus:border-[#C6A15B] outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input required type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-[#C6A15B] focus:border-[#C6A15B] outline-none transition-colors" placeholder="Your Email Address" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required id="message" rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-[#C6A15B] focus:border-[#C6A15B] outline-none transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 uppercase tracking-widest font-semibold text-white rounded-sm transition-all duration-300
                  ${success ? 'bg-green-600' : 'bg-[#C6A15B] hover:bg-[#b38f4d]'}
                  ${loading ? 'opacity-70 cursor-wait' : ''}
                `}
              >
                {loading ? 'Sending...' : success ? 'Message Sent' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h3 className="font-serif text-3xl mb-8 text-[#1A1A1A]">The House of <span className="text-[#C6A15B]">ChiChi</span></h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5EFE6] rounded-full flex items-center justify-center text-[#C6A15B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg text-[#1A1A1A] mb-1">Location</h5>
                  <p className="text-gray-600 font-light leading-relaxed">Chelmsford, Essex<br/>United Kingdom</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-lg text-[#1A1A1A] mb-4">Connect With Us</h5>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/thehouseofchichi_official" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#C6A15B] hover:text-white hover:border-[#C6A15B] transition-all" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://tiktok.com/@thehouseofchichi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#C6A15B] hover:text-white hover:border-[#C6A15B] transition-all" aria-label="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
                <a href="https://api.whatsapp.com/send?phone=7810547731" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#C6A15B] hover:text-white hover:border-[#C6A15B] transition-all" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
