'use client';

import { PRODUCTS, CATEGORIES, Product } from '../lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductsPage() {
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
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-indigo-800 py-16 mb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/products-bg.jpg"
              alt="Products"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Nos Produits</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Explorez notre catalogue de solutions digitales.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
            <Link
                href="/products"
                className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
                Tout
            </Link>
            {CATEGORIES.map(cat => (
                 <Link
                 key={cat.id}
                 href={`/products/${cat.id}`}
                 className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
             >
                 {cat.name}
             </Link>
            ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                 <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {CATEGORIES.find(c => c.id === product.category)?.name}
                 </div>
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
      </div>
    </div>
  );
}
