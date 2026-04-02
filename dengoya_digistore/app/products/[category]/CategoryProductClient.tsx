'use client';

import { Product } from '../../lib/data';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CategoryProductClientProps {
    products: Product[];
}

export default function CategoryProductClient({ products }: CategoryProductClientProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    {products.map((product) => (
      <div key={product.id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="mt-4 flex justify-between px-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
        <div className="mt-auto p-4 flex items-center justify-between">
           <p className="text-lg font-bold text-indigo-600">{product.price.toLocaleString('fr-FR')} FCFA</p>
           <button
              onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
              }}
              className="z-10 p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
              title="Ajouter au panier"
           >
              <ShoppingCart size={20} />
           </button>
        </div>
      </div>
    ))}
  </div>
  );
}
