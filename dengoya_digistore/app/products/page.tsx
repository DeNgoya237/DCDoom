"use client";

import Link from 'next/link';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ALL_PRODUCTS, CATEGORIES, Product } from '@/app/lib/data';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = ALL_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Header / Banner with Background Image */}
      <div className="relative py-24 px-6 text-center text-white overflow-hidden">
         {/* Background Image */}
         <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://drive.google.com/uc?export=view&id=1ucjxJ3MCfZaPlCAKm-QbuhyKbCg52xXs')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>

        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-lg">Nos Produits</h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium drop-shadow-md">Parcourez notre catalogue complet de solutions digitales pour créatifs et professionnels.</p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12 flex-1 bg-slate-50">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Link href="/products" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm whitespace-nowrap shadow-md shadow-indigo-200">Tout</Link>
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/products/${cat.slug}`} className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm whitespace-nowrap transition-colors">
                {cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1)}
              </Link>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all bg-slate-50 focus:bg-white"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-100 flex flex-col group">
              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-slate-50 rounded-2xl flex items-center justify-center text-5xl mb-5 group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 {/* Icon based on category */}
                 {(() => {
                    const cat = CATEGORIES.find(c => c.slug === product.categorySlug);
                    return cat ? <span className="text-4xl">📦</span> : <span>📦</span>; // Simplified icon logic
                 })()}
              </div>

              <div className="flex-1 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">{CATEGORIES.find(c => c.slug === product.categorySlug)?.title}</span>
                <h3 className="font-bold text-slate-900 text-xl leading-tight group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">{product.description}</p>
              </div>

              <div className="mt-5 flex items-center justify-between pt-5 border-t border-slate-50">
                <span className="font-black text-2xl text-slate-900">{product.price.toLocaleString()} <span className="text-sm font-semibold text-slate-500">FCFA</span></span>
                <button
                  onClick={() => addToCart(product)}
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-indigo-600 hover:scale-110 hover:rotate-90 transition-all shadow-lg shadow-slate-900/20 hover:shadow-indigo-600/30 cursor-pointer"
                  aria-label="Add to cart"
                >
                  <span className="text-xl leading-none mb-0.5">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
