import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    image: string;
    cta: string;
    link: string;
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2 border border-gray-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Image 
          src={product.image} 
          alt={product.title} 
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl mb-4 text-[#1A1A1A]">{product.title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
          {product.description}
        </p>
        
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#C6A15B] text-white py-4 px-6 rounded-sm uppercase tracking-widest font-semibold hover:bg-[#1A1A1A] transition-colors duration-300"
        >
          {product.cta}
        </a>
      </div>
    </div>
  );
}
