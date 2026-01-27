import { PRODUCTS, CATEGORIES, Product } from '../../lib/data';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import CategoryProductClient from './CategoryProductClient';

// This function generates the static params for the dynamic routes
export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.id === categorySlug);
  const products = PRODUCTS.filter((p) => p.category === categorySlug);

  if (!category) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900">Catégorie non trouvée</h1>
                <Link href="/products" className="text-indigo-600 hover:underline mt-4 block">Retour aux produits</Link>
            </div>
        </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
             <Link href="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1"/> Retour à tous les produits
             </Link>
             <h1 className="text-3xl font-extrabold text-gray-900">{category.name}</h1>
        </div>

        {/* Category Filters (Active state for current category) */}
        <div className="flex flex-wrap gap-4 mb-10">
            <Link
                href="/products"
                className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
            >
                Tout
            </Link>
            {CATEGORIES.map(cat => (
                 <Link
                 key={cat.id}
                 href={`/products/${cat.id}`}
                 className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    cat.id === categorySlug
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-600'
                 }`}
             >
                 {cat.name}
             </Link>
            ))}
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
           <CategoryProductClient products={products} />
        ) : (
             <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Aucun produit disponible dans cette catégorie pour le moment.</p>
             </div>
        )}
      </div>
    </div>
  );
}
