import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ALL_PRODUCTS, CATEGORIES } from '@/app/lib/data';

// Get 3 latest products
const latestProducts = ALL_PRODUCTS.slice(0, 3);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Full Background Image */}
        <section className="relative min-h-[90vh] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Text Content */}
              <div className="lg:col-span-8 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20 font-bold text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Nouveautés Disponibles</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight drop-shadow-lg">
                  Exclusive <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Digital Sale</span>
                </h1>

                <p className="text-xl text-gray-200 max-w-xl leading-relaxed font-medium drop-shadow-md">
                  Découvrez notre collection premium de formations, logiciels et ressources créatives pour booster votre carrière et vos projets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/products" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-105 transition-all flex items-center justify-center gap-2 border border-transparent">
                    Voir les Produits <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/support" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white transition-all flex items-center justify-center backdrop-blur-sm">
                    Nous Contacter
                  </Link>
                </div>

                {/* Trusted Users Block */}
                <div className="pt-8 border-t border-white/10 mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-white text-lg">Trusted Users</h3>
                    <div className="flex text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">Over 10K happy users all over the world</p>
                </div>
              </div>

              {/* Right Column: "Latest Product" Sidebar (Floating) */}
              <div className="lg:col-span-4 hidden lg:flex justify-end">
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 w-80">
                    <h4 className="font-bold text-white border-b border-white/20 pb-3 mb-4 text-lg">Latest Product</h4>
                    <div className="space-y-4">
                      {latestProducts.map(product => (
                        <div key={product.id} className="bg-black/20 p-4 rounded-xl hover:bg-black/30 transition-colors cursor-pointer border border-white/5 group">
                          <p className="font-bold text-base text-white group-hover:text-teal-300 transition-colors">{product.name}</p>
                          <p className="text-sm text-gray-300 font-semibold mt-1">{product.price.toLocaleString()} FCFA</p>
                          <div className="mt-2 text-xs text-gray-400 uppercase tracking-wider">{CATEGORIES.find(c => c.slug === product.categorySlug)?.title || 'Produit'}</div>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features / Categories Preview */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Nos Catégories</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Explorez nos différentes sections pour trouver exactement ce dont vous avez besoin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CATEGORIES.map((cat, idx) => (
                <Link href={`/products/${cat.slug}`} key={idx} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${cat.color} bg-opacity-10 text-opacity-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <ShoppingBag className={`w-8 h-8 text-${cat.color.replace('bg-', '')}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{cat.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
