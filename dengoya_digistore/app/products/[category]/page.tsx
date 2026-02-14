"use client";

import Link from 'next/link';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound, useParams } from 'next/navigation';
import { getProductsByCategory, getCategoryBySlug, CATEGORIES } from '@/app/lib/data';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';

// Use a client component wrapper or just standard client component logic since we need CartContext
// For App Router dynamic pages, we can use `useParams`.

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const categoryData = getCategoryBySlug(categorySlug);

  if (!categoryData) {
     // Check if it's not mapped yet or just invalid
     // In a real app we might want to return notFound() but since this is client side now,
     // we can just render a not found state or redirect.
     // To keep it simple and safe for "valid" slugs:
     return <div className="p-10 text-center">Catégorie non trouvée. <Link href="/products" className="text-indigo-600 underline">Retour aux produits</Link></div>;
  }

  const products = getProductsByCategory(categorySlug).filter(product =>
     product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Header / Banner */}
      <div className={`relative py-12 px-6 text-center text-white overflow-hidden bg-slate-900`}>
         <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: "url('/images/products-bg.jpg')" }}
          ></div>

        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{categoryData.title}</h1>
            <p className="opacity-90 max-w-xl mx-auto text-lg">
            {categoryData.description}
            </p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12 flex-1 bg-slate-50">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Link href="/products" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">Tout</Link>

            {CATEGORIES.map(cat => (
                <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${categorySlug === cat.slug ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                >
                {cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1)}
                </Link>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-slate-50 focus:bg-white"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all border border-slate-100 flex flex-col group">
                <div className="aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span>📦</span>
                </div>

                <div className="flex-1 space-y-1">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{categoryData.title}</span>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{product.name}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{product.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="font-bold text-xl text-slate-900">{product.price.toLocaleString()} FCFA</span>
                    <button
                        onClick={() => addToCart(product)}
                        className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"
                    >
                    <span className="text-lg">+</span>
                    </button>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <p className="text-slate-500">Aucun produit trouvé dans cette catégorie.</p>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
