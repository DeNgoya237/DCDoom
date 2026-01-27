import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { CATEGORIES } from "./lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Bienvenue sur DeNgoya Digistore
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto">
            Votre plateforme de référence pour l'achat de produits digitaux de qualité : formations, logiciels et outils créatifs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Voir les produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                  <Star className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité Garantie</h3>
              <p className="text-gray-600">
                Nous sélectionnons rigoureusement chaque produit pour vous offrir le meilleur contenu.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                  <Zap className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison Instantanée</h3>
              <p className="text-gray-600">
                Recevez vos produits digitaux immédiatement après votre achat, sans attente.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-violet-100 rounded-full text-violet-600">
                  <ShieldCheck className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paiement Sécurisé</h3>
              <p className="text-gray-600">
                Transactions cryptées et sécurisées via nos partenaires de confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Explorez nos catégories
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for category image */}
                    <span className="text-4xl text-gray-400 font-bold uppercase">{category.name.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 flex items-center">
                    Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
