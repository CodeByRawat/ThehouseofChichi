import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutAuthor from "@/components/AboutAuthor";
import BehindStory from "@/components/BehindStory";
import Music from "@/components/Music";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#C6A15B] selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Intro Section */}
      <section id="discover" className="py-24 md:py-32 bg-white flex flex-col items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/imole book photo.webp" 
              alt="Imole Book"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h4 className="text-[#C6A15B] uppercase tracking-[0.2em] font-medium text-sm mb-4">Welcome to The House of ChiChi</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
              A world of color and encouragement
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
              What began as a heartfelt children’s book has blossomed into a lifestyle brand celebrating love, courage, and the beauty of true friendship.
            </p>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
              In a quiet town under the warm Mexican sun, a little dog named Imole dreams of something more. While the other dogs chase and bark, Imole sits quietly, drawing pictures in the dust — pictures of faraway places, elegant designs, and sparkling pearls. When an unexpected adventure leads him across the world to London, Imole discovers that being different is not something to hide — it is something to celebrate.
            </p>
            <div className="border-l-2 border-[#C6A15B] pl-6 py-2 mt-4">
              <p className="font-serif italic text-xl text-[#C6A15B]">
                &quot;I choose to try — because with courage and creativity, even the smallest steps can lead to the brightest journeys.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <AboutAuthor />
      <BehindStory />
      <Music />
      <Reviews />
      <Gallery />
      <Contact />
      
      <Footer />
    </main>
  );
}
