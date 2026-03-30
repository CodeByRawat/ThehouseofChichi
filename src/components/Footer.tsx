export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="font-serif text-3xl mb-4">
            The House of <span className="text-[#C6A15B]">ChiChi</span>
          </h2>
          <p className="text-gray-400 max-w-sm mt-4 leading-relaxed tracking-wide">
            A luxury storytelling brand. Where elegance meets imagination.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold uppercase tracking-widest text-sm mb-6 text-[#C6A15B]">Visit</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/#discover" className="hover:text-white transition-colors">The Story</a></li>
            <li><a href="/#music" className="hover:text-white transition-colors">Music</a></li>
            <li><a href="/#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold uppercase tracking-widest text-sm mb-6 text-[#C6A15B]">Connect</h4>
          <p className="text-gray-400">Chelmsford, Essex<br/>United Kingdom</p>
          <div className="mt-6 flex space-x-5">
            <a href="https://www.instagram.com/thehouseofchichi_official" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C6A15B] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://tiktok.com/@thehouseofchichi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C6A15B] transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=7810547731" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C6A15B] transition-colors" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <p>&copy; 2026 The House of ChiChi.</p>
        <p className="mt-2 md:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
}
