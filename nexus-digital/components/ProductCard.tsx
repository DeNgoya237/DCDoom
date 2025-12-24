import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  rating: number;
}

export default function ProductCard({ title, category, price, image, rating }: ProductCardProps) {
  return (
    <div className="group relative bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-700 flex flex-col h-full">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 group-hover:opacity-90 transition-opacity h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
         <div className="absolute top-2 right-2 bg-secondary-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded-md text-primary-300 uppercase tracking-wide">
          {category}
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            <Link href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
            </Link>
            </h3>
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                    />
                ))}
                <span className="ml-2 text-xs text-gray-400">({rating}.0)</span>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-primary-400">{price}</p>
          <button className="z-10 bg-white text-secondary-900 hover:bg-gray-100 p-2 rounded-full transition-colors flex items-center justify-center shadow-md">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Ajouter au panier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
