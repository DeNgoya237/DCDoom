'use client';

import { Star } from 'lucide-react';
import { formatPrice } from '@/app/lib/utils';
// Note: In a real app, this would use the next/image component with proper config.
// For now, standard img or div is safer if we don't have the files.

interface ProductProps {
  product: {
    id: number;
    title: string;
    category: string;
    price: number;
    author: string;
    rating: number;
    type: string;
  };
}

export default function ProductCard({ product }: ProductProps) {

  const handleBuyClick = () => {
    // Redirect to Flutterwave Link (Placeholder)
    // In a real scenario, this would be a dynamic link based on product ID
    window.open('https://flutterwave.com/pay', '_blank');
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        {/* Placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400 font-medium">
          {product.category} Image
        </div>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary-700 uppercase tracking-wide">
          {product.type}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-1">{product.author}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 flex-grow">{product.title}</h3>

        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400 ml-2">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="text-xl font-bold text-primary-700">
            {formatPrice(product.price)}
          </div>
          <button
            onClick={handleBuyClick}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
