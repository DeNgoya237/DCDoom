'use client';

import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import { useState } from 'react';

const allProducts = [
  {
    id: 1,
    title: 'Masterclass Flutter & Dart',
    category: 'Formations',
    price: '15 000 F CFA',
    image: '/images/product-course.jpg',
    rating: 5,
  },
  {
    id: 2,
    title: 'Devenir Expert en Marketing Digital',
    category: 'Formations',
    price: '10 000 F CFA',
    image: '/images/product-course.jpg',
    rating: 4,
  },
  {
    id: 3,
    title: 'Montage Vidéo avec Premiere Pro',
    category: 'Formations',
    price: '12 500 F CFA',
    image: '/images/product-course.jpg',
    rating: 5,
  },
  {
    id: 4,
    title: 'Pack 1000+ Templates Instagram',
    category: 'Ressources',
    price: '5 000 F CFA',
    image: '/images/product-marketing.jpg',
    rating: 5,
  },
  {
    id: 5,
    title: 'E-book : Guide du Freelance',
    category: 'E-book',
    price: '3 000 F CFA',
    image: '/images/product-marketing.jpg',
    rating: 4,
  },
   {
    id: 6,
    title: 'UI Kit Mobile App - Figma',
    category: 'Ressources',
    price: '7 500 F CFA',
    image: '/images/product-software.jpg',
    rating: 5,
  },
  {
    id: 7,
    title: 'Licence Antivirus Pro (1 An)',
    category: 'Logiciels',
    price: '8 000 F CFA',
    image: '/images/product-software.jpg',
    rating: 5,
  },
  {
    id: 8,
    title: 'Abonnement Streaming Premium',
    category: 'Logiciels',
    price: '4 500 F CFA',
    image: '/images/product-software.jpg',
    rating: 4,
  },
  {
    id: 9,
    title: 'VPN Illimité - Accès à vie',
    category: 'Logiciels',
    price: '20 000 F CFA',
    image: '/images/product-software.jpg',
    rating: 5,
  },
];

const categories = ['Tous', 'Formations', 'Ressources', 'Logiciels', 'E-book'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProducts = activeCategory === 'Tous'
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Nos Produits
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Explorez notre sélection de produits digitaux de haute qualité.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-800 text-gray-300 hover:bg-secondary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
