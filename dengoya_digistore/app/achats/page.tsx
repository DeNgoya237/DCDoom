import Link from 'next/link';
import { ShoppingCart, Trash2, ArrowRight, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  // Mock Cart Items
  const cartItems = [
    { id: 1, name: 'Formation Python Complet', price: 25000, quantity: 1, image: '🐍' },
    { id: 3, name: 'Pack Icons 3D', price: 5000, quantity: 2, image: '🧊' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1925; // Example VAT (19.25% in Cameroon)
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="container mx-auto px-6 py-12 flex-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-primary" />
          Votre Panier
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center text-3xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.price.toLocaleString()} FCFA / unité</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-600">-</button>
                    <span className="px-2 font-medium text-gray-900">{item.quantity}</span>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-600">+</button>
                  </div>
                  <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 mb-4">Votre panier est vide.</p>
                <Link href="/products" className="text-primary font-bold hover:underline">Découvrir nos produits</Link>
              </div>
            )}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Résumé de la commande</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>TVA (estimée)</span>
                  <span>{Math.round(tax).toLocaleString()} FCFA</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-gray-900">
                  <span>Total</span>
                  <span className="text-primary">{Math.round(total).toLocaleString()} FCFA</span>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payer maintenant
              </button>

              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Paiement sécurisé via Flutterwave
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { ShieldCheck } from 'lucide-react';
