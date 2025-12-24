'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const featuredProducts = [
  {
    id: 1,
    title: 'Masterclass Flutter & Dart',
    category: 'Formation Vidéo',
    price: '15 000 F CFA',
    image: '/images/product-course.jpg',
    rating: 5,
  },
  {
    id: 2,
    title: 'Pack 1000+ Templates Instagram',
    category: 'Ressources',
    price: '5 000 F CFA',
    image: '/images/product-marketing.jpg',
    rating: 4,
  },
  {
    id: 3,
    title: 'Licence Antivirus Pro (1 An)',
    category: 'Logiciel',
    price: '8 000 F CFA',
    image: '/images/product-software.jpg',
    rating: 5,
  },
   {
    id: 4,
    title: 'E-book : Guide du Freelance',
    category: 'E-book',
    price: '3 000 F CFA',
    image: '/images/product-course.jpg',
    rating: 4,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Featured Products Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-primary-500 tracking-wide uppercase">Nos Produits</h2>
            <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
              Les plus populaires
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
              Explorez notre sélection de produits digitaux de haute qualité, plébiscités par nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
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

           <div className="mt-12 text-center">
            <a href="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 transition-colors">
              Voir tout le catalogue
            </a>
          </div>
        </section>

        {/* Features/Trust Section */}
        <section className="bg-secondary-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="text-center p-6 bg-secondary-900 rounded-xl border border-secondary-700">
                        <div className="mx-auto h-12 w-12 text-primary-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">Livraison Instantanée</h3>
                        <p className="mt-2 text-base text-gray-400">Accédez à vos produits immédiatement après paiement.</p>
                    </div>
                     <div className="text-center p-6 bg-secondary-900 rounded-xl border border-secondary-700">
                        <div className="mx-auto h-12 w-12 text-primary-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">Paiement Sécurisé</h3>
                        <p className="mt-2 text-base text-gray-400">Transactions cryptées et 100% sécurisées via Flutterwave.</p>
                    </div>
                     <div className="text-center p-6 bg-secondary-900 rounded-xl border border-secondary-700">
                        <div className="mx-auto h-12 w-12 text-primary-500 mb-4">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white">Support 24/7</h3>
                        <p className="mt-2 text-base text-gray-400">Une équipe dédiée pour vous accompagner.</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
