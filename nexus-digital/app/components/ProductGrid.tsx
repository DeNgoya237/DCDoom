'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '@/app/data/products';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredProducts = activeCategory === "Tout"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Produits
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explorez notre sélection de produits digitaux de haute qualité.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            Aucun produit trouvé dans cette catégorie.
          </div>
        )}

      </div>
    </section>
  );
}
