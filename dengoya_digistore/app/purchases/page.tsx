'use client';

import { useState } from 'react';
import { getUserOrders, requestRefund } from '@/app/actions/orderActions';
import { Package, Truck, Clock, AlertTriangle, CheckCircle, Search, CreditCard, Download } from 'lucide-react';
import Image from 'next/image';

type Order = {
  id: string;
  customerEmail: string;
  amount: number;
  status: string;
  items: string; // JSON string
  proofPath: string | null;
  transactionId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

export default function PurchasesPage() {
  const [email, setEmail] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [processingRefund, setProcessingRefund] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const results = await getUserOrders(email);
      setOrders(results as unknown as Order[]);
      setHasSearched(true);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefundRequest = async (orderId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir demander un remboursement ?')) return;

    setProcessingRefund(orderId);
    try {
      const result = await requestRefund(orderId);
      if (result.success) {
        alert('Demande de remboursement envoyée avec succès.');
        const results = await getUserOrders(email);
        setOrders(results as unknown as Order[]);
      } else {
        alert('Erreur: ' + result.error);
      }
    } catch (error) {
      console.error('Error requesting refund:', error);
      alert('Une erreur est survenue.');
    } finally {
      setProcessingRefund(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PAID':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 flex items-center gap-1"><Clock size={12} /> En attente de livraison</span>;
      case 'DELIVERED':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 flex items-center gap-1"><CheckCircle size={12} /> Livré</span>;
      case 'REFUND_REQUESTED':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800 flex items-center gap-1"><AlertTriangle size={12} /> Remboursement demandé</span>;
      case 'REFUNDED':
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 flex items-center gap-1"><AlertTriangle size={12} /> Remboursé</span>;
      default:
        return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  const canRequestRefund = (order: Order) => {
    if (order.status === 'DELIVERED' || order.status === 'REFUND_REQUESTED' || order.status === 'REFUNDED') return false;

    const now = new Date();
    const orderDate = new Date(order.createdAt);
    const diffHours = (now.getTime() - orderDate.getTime()) / (1000 * 60 * 60);

    return diffHours >= 72;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 py-12 mb-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/purchases-bg.jpg"
              alt="Achats Background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-indigo-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white gap-6">
            <div className="flex items-center">
                <Package className="mr-4 text-indigo-300" size={48} />
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight">Mes Commandes</h1>
                    <p className="text-indigo-200 mt-1">Suivez vos achats et téléchargements.</p>
                </div>
            </div>

            <div className="w-full md:w-auto">
                <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Entrez votre email..."
                        className="px-4 py-2 rounded-lg text-gray-900 w-full md:w-64 focus:ring-2 focus:ring-teal-400 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
                    >
                        {loading ? '...' : <Search size={20} />}
                        <span className="hidden sm:inline">Rechercher</span>
                    </button>
                </form>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

        {!hasSearched && (
             <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-slate-100">
                <CreditCard className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune commande affichée</h3>
                <p className="mt-1 text-sm text-gray-500">Entrez votre adresse email ci-dessus pour voir votre historique d&apos;achats.</p>
             </div>
        )}

        {hasSearched && orders.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-slate-100">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune commande trouvée</h3>
                <p className="mt-1 text-sm text-gray-500">Aucune commande associée à l&apos;email {email}.</p>
            </div>
        )}

        <div className="space-y-6">
            {orders.map((order) => {
                let items: CartItem[] = [];
                try {
                    items = JSON.parse(order.items);
                } catch {
                    items = [];
                }

                return (
                    <div key={order.id} className="bg-white shadow rounded-lg overflow-hidden border border-slate-200">
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Commande effectuée le</p>
                                <p className="font-medium text-gray-900">{new Date(order.createdAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total</p>
                                <p className="font-medium text-gray-900">{order.amount.toLocaleString('fr-FR')} FCFA</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">N° de Commande</p>
                                <p className="font-medium text-gray-900 text-xs font-mono">{order.id.substring(0, 8)}...</p>
                            </div>
                            <div className="ml-auto">
                                {getStatusBadge(order.status)}
                            </div>
                        </div>

                        <div className="p-6">
                            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                <Package size={18} className="text-indigo-600" />
                                Articles
                            </h4>
                            <ul className="divide-y divide-slate-100 mb-6">
                                {items.map((item, idx) => (
                                    <li key={idx} className="py-2 flex justify-between">
                                        <span className="text-gray-700">{item.name} <span className="text-gray-400 text-sm">x{item.quantity}</span></span>
                                        <span className="text-gray-900 font-medium">{(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-slate-100 pt-4">
                                <div>
                                    {order.status === 'DELIVERED' && order.proofPath && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm font-medium text-green-700 flex items-center gap-1">
                                                <CheckCircle size={16} /> Produit livré
                                            </span>
                                            <a
                                                href={order.proofPath}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                                            >
                                                <Download size={16} /> Télécharger / Voir la preuve
                                            </a>
                                        </div>
                                    )}

                                    {order.status !== 'DELIVERED' && order.status !== 'REFUND_REQUESTED' && order.status !== 'REFUNDED' && (
                                        <div className="text-sm text-gray-500 flex items-center gap-1">
                                            <Truck size={16} />
                                            Livraison en cours... (Max 72h)
                                        </div>
                                    )}
                                </div>

                                {canRequestRefund(order) && (
                                    <button
                                        onClick={() => handleRefundRequest(order.id)}
                                        disabled={processingRefund === order.id}
                                        className="text-red-600 hover:text-red-800 text-sm font-medium border border-red-200 hover:bg-red-50 px-4 py-2 rounded transition-colors flex items-center gap-2"
                                    >
                                        {processingRefund === order.id ? 'Traitement...' : 'Produit non reçu ? Demander un remboursement'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}
