"use client";

import Link from 'next/link';
import { ShoppingCart, Trash2, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/app/context/CartContext';
import { CATEGORIES } from '@/app/lib/data';

export default function CartPage() {
  const { items, removeFromCart, total, addToCart } = useCart();

  // Simple VAT calculation for demo
  const subtotal = total;
  const tax = subtotal * 0; // Keeping it simple or add if needed
  const finalTotal = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Header Section with Background */}
        <section className="relative py-20 px-6 overflow-hidden">
             {/* Background Image */}
             <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://drive.google.com/uc?export=view&id=1CxPR07Fe9GSFy5hh5Yoic-sJM3p_FCKx')" }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-indigo-900/80"></div>
              </div>

            <div className="container mx-auto relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-4">
                <ShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-teal-300" />
                Votre Panier
                </h1>
                <p className="text-indigo-100 text-lg">Finalisez votre commande et accédez à vos produits instantanément.</p>
            </div>
        </section>

        <section className="container mx-auto px-6 py-12 -mt-10 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
                {items.length > 0 ? (
                    items.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-24 h-24 bg-slate-50 rounded-xl flex items-center justify-center text-4xl shadow-inner">
                        {/* Simple icon logic based on category */}
                        {(() => {
                             const cat = CATEGORIES.find(c => c.slug === item.categorySlug);
                             return cat ? <span>📦</span> : <span>📦</span>;
                        })()}
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{item.name}</h3>
                        <p className="text-indigo-600 font-semibold">{item.price.toLocaleString()} FCFA <span className="text-slate-400 font-normal">/ unité</span></p>
                        </div>
                        <div className="flex items-center gap-4">
                        <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200">
                             {/* Quantity is hardcoded in the context add logic to increment, but here we just show it.
                                 A real cart would have updateQuantity logic. For now, simplistic view. */}
                            <span className="w-10 text-center font-bold text-slate-900 px-3 py-1">x{item.quantity}</span>
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                        </div>
                    </div>
                    ))
                ) : (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                    <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <ShoppingCart className="w-10 h-10" />
                    </div>
                    <p className="text-slate-500 mb-6 text-lg">Votre panier est vide.</p>
                    <Link href="/products" className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                        Découvrir nos produits <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                )}
            </div>

            {/* Checkout Summary */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                <h3 className="font-bold text-xl text-slate-900 mb-6 pb-4 border-b border-slate-100">Résumé de la commande</h3>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-slate-600">
                    <span>Sous-total</span>
                    <span className="font-medium">{subtotal.toLocaleString()} FCFA</span>
                    </div>
                    {/*
                    <div className="flex justify-between text-slate-600">
                    <span>TVA (estimée)</span>
                    <span className="font-medium">{Math.round(tax).toLocaleString()} FCFA</span>
                    </div>
                    */}
                    <div className="border-t border-dashed border-slate-200 pt-4 flex justify-between items-end">
                    <span className="font-bold text-lg text-slate-900">Total</span>
                    <span className="font-black text-3xl text-indigo-600">{Math.round(finalTotal).toLocaleString()} <span className="text-sm font-medium text-slate-400">FCFA</span></span>
                    </div>
                </div>

                <button className="w-full py-4 bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group">
                    <CreditCard className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Payer maintenant
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-xs font-medium bg-slate-50 py-2 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>Paiement sécurisé via Flutterwave</span>
                </div>
                </div>
            </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
