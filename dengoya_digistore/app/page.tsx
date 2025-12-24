// Placeholder for Drive image if user provides one, otherwise a stylized div
import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag, ShieldCheck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock Data for "Latest Products"
const latestProducts = [
  { id: 1, name: 'Pack Design Ultime', price: '15,000 FCFA', category: 'Outils' },
  { id: 2, name: 'Masterclass Dev Web', price: '25,000 FCFA', category: 'Formation' },
  { id: 3, name: 'Template Pro', price: '10,000 FCFA', category: 'Logiciels' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50/30">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary font-bold text-sm">
                <ShoppingBag className="w-4 h-4" />
                <span>Nouveautés Disponibles</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Exclusive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Digital Sale</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Découvrez notre collection premium de formations, logiciels et ressources créatives pour booster votre carrière et vos projets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-300 hover:bg-orange-600 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Voir les Produits <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/support" className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-orange-100 hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                  Nous Contacter
                </Link>
              </div>

              {/* Trusted Users Block */}
              <div className="pt-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">Trusted Users</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">Over 10K happy users all over the world</p>
              </div>
            </div>

            {/* Right Column: Image & Side Content */}
            <div className="lg:col-span-5 relative">

              {/* Main Hero Image Wrapper */}
              <div className="relative z-10 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-[3rem] p-4 shadow-2xl overflow-hidden aspect-[4/5] flex items-end justify-center">
                {/*
                  NOTE: The user provided a Drive link for the Home Image:
                  https://drive.google.com/file/d/1uWWOHB22_1yISVuqkDoqa6eTfpvx5RWl/view?usp=drivesdk
                  Since we cannot fetch it directly without auth/interactivity, we use a placeholder styling
                  that matches the reference image (Woman with tablet).
                */}
                <div className="absolute inset-0 flex items-center justify-center text-orange-300 opacity-20">
                  <Users className="w-64 h-64" />
                </div>

                {/* Placeholder Content simulating the image subject */}
                <div className="relative z-20 text-center pb-10">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-xs mx-auto border border-white">
                    <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 text-lg">Qualité Garantie</h3>
                    <p className="text-gray-500 text-sm">Tous nos produits sont vérifiés par des experts.</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30"></div>
              </div>

              {/* "Latest Product" Sidebar (Floating or Absolute in reference, but Grid is safer for responsive) */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                 <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-orange-100 w-48">
                    <h4 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-2">Latest Product</h4>
                    <div className="space-y-3">
                      {latestProducts.map(product => (
                        <div key={product.id} className="bg-yellow-100 p-3 rounded-lg hover:bg-yellow-200 transition-colors cursor-pointer">
                          <p className="font-bold text-sm text-gray-800">{product.name}</p>
                          <p className="text-xs text-orange-600 font-semibold">{product.price}</p>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features / Categories Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Catégories</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Explorez nos différentes sections pour trouver exactement ce dont vous avez besoin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Formation & Éducation",
                  desc: "Apprenez de nouvelles compétences.",
                  color: "bg-blue-50 text-blue-600",
                  link: "/products/formation"
                },
                {
                  title: "Logiciels & Apps",
                  desc: "Des outils puissants pour vos tâches.",
                  color: "bg-purple-50 text-purple-600",
                  link: "/products/logiciels"
                },
                {
                  title: "Ressources Créatives",
                  desc: "Assets, templates et plus.",
                  color: "bg-orange-50 text-orange-600",
                  link: "/products/outils"
                }
              ].map((cat, idx) => (
                <Link href={cat.link} key={idx} className="group p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-orange-100 transition-all bg-white">
                  <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-gray-500">{cat.desc}</p>
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
