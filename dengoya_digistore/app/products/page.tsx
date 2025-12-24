// Placeholder for Drive image if user provides one, otherwise a stylized div
import Link from 'next/link';
import { Filter, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock Data
const ALL_PRODUCTS = [
  { id: 1, name: 'Formation Python Complet', price: 25000, category: 'formation', image: '🐍' },
  { id: 2, name: 'Adobe Photoshop 2024', price: 15000, category: 'logiciels', image: '🎨' },
  { id: 3, name: 'Pack Icons 3D', price: 5000, category: 'outils', image: '🧊' },
  { id: 4, name: 'Marketing Digital 101', price: 12000, category: 'formation', image: '📈' },
  { id: 5, name: 'VS Code Pro', price: 0, category: 'logiciels', image: '💻' },
  { id: 6, name: 'Fonts Premium Bundle', price: 8000, category: 'outils', image: '🔤' },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Header / Banner */}
      <div className="bg-primary py-12 px-6 text-center text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <h1 className="text-4xl font-bold mb-2 relative z-10">Nos Produits</h1>
        <p className="opacity-90 max-w-xl mx-auto relative z-10">Parcourez notre catalogue complet de solutions digitales.</p>
      </div>

      <main className="container mx-auto px-6 py-12 flex-1">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Link href="/products" className="px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm whitespace-nowrap">Tout</Link>
            <Link href="/products/formation" className="px-4 py-2 bg-gray-100 hover:bg-orange-50 text-gray-700 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">Formation</Link>
            <Link href="/products/logiciels" className="px-4 py-2 bg-gray-100 hover:bg-orange-50 text-gray-700 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">Logiciels</Link>
            <Link href="/products/outils" className="px-4 py-2 bg-gray-100 hover:bg-orange-50 text-gray-700 rounded-lg font-medium text-sm whitespace-nowrap transition-colors">Outils</Link>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ALL_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all border border-gray-100 flex flex-col group">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-orange-50 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {product.image}
              </div>

              <div className="flex-1">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{product.category}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">Description courte du produit pour donner un aperçu...</p>
              </div>

              <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="font-bold text-xl text-primary">{product.price.toLocaleString()} FCFA</span>
                <button className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-lg">+</span>
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
