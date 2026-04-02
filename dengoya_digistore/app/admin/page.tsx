'use client';

import { useState, useEffect } from 'react';
import { getAllOrders, updateOrderToDelivered } from '../actions/orderActions';
import { Loader2, CheckCircle, AlertTriangle, Package, DollarSign, Calendar } from 'lucide-react';

type Order = {
  id: string;
  customerEmail: string;
  amount: number;
  status: string;
  items: string;
  proofPath: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchOrders = async () => {
    setLoading(true);
    const data = await getAllOrders();
    setOrders(data);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const handleUploadProof = async (e: React.FormEvent<HTMLFormElement>, orderId: string) => {
    e.preventDefault();
    setUploading(orderId);

    const formData = new FormData(e.currentTarget);
    formData.append('orderId', orderId);

    const result = await updateOrderToDelivered(formData);

    if (result.success) {
      alert('Preuve envoyée et commande marquée comme livrée !');
      fetchOrders();
    } else {
      alert('Erreur lors de l\'envoi : ' + result.error);
    }
    setUploading(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-red-600"
          >
            Déconnexion
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center p-12">
            <Loader2 className="animate-spin text-indigo-600" size={48} />
          </div>
        ) : (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">Aucune commande trouvée.</p>
            ) : (
              orders.map((order) => {
                const items = JSON.parse(order.items);
                const isDelivered = order.status === 'DELIVERED';
                const isRefundRequested = order.status === 'REFUND_REQUESTED';

                return (
                  <div key={order.id} className={`bg-white rounded-xl shadow-sm overflow-hidden border ${isRefundRequested ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-200'}`}>
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                                    order.status === 'PAID' ? 'bg-green-100 text-green-800' :
                                    order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                    order.status === 'DELIVERED' ? 'bg-blue-100 text-blue-800' :
                                    'bg-red-100 text-red-800'
                                }`}>
                                    {order.status}
                                </span>
                                <span className="text-gray-500 text-sm">#{order.id.slice(0, 8)}</span>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{order.customerEmail}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <Calendar size={14} />
                                {new Date(order.createdAt).toLocaleString()}
                            </p>
                        </div>
                        <div className="text-right">
                             <p className="text-2xl font-bold text-gray-900 flex items-center justify-end gap-1">
                                <DollarSign size={20} />
                                {order.amount.toLocaleString()} FCFA
                             </p>
                        </div>
                      </div>

                      <div className="border-t border-b border-gray-100 py-4 my-4">
                         <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
                            <Package size={16} /> Articles
                         </h4>
                         <ul className="space-y-2">
                            {items.map((item: CartItem, idx: number) => (
                                <li key={idx} className="flex justify-between text-sm">
                                    <span className="text-gray-900">{item.name} (x{item.quantity})</span>
                                    <span className="text-gray-600">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                                </li>
                            ))}
                         </ul>
                      </div>

                      <div className="flex flex-col md:flex-row gap-6 mt-6 items-end">
                        <div className="flex-1 w-full">
                            {isDelivered ? (
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <div className="flex items-center gap-2 text-green-800 font-medium mb-2">
                                        <CheckCircle size={18} /> Commande Livrée
                                    </div>
                                    {order.proofPath && (
                                        <div className="mt-2">
                                            <p className="text-xs text-green-700 mb-1">Preuve de livraison :</p>
                                            <a href={order.proofPath} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm truncate block max-w-xs">
                                                Voir la preuve
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <h4 className="font-medium text-gray-900 mb-3">Valider la livraison</h4>
                                    <form onSubmit={(e) => handleUploadProof(e, order.id)} className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="file"
                                            name="proof"
                                            accept="image/*"
                                            required
                                            className="block w-full text-sm text-gray-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-indigo-50 file:text-indigo-700
                                                hover:file:bg-indigo-100
                                            "
                                        />
                                        <button
                                            type="submit"
                                            disabled={uploading === order.id}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 whitespace-nowrap"
                                        >
                                            {uploading === order.id ? 'Envoi...' : 'Envoyer Preuve & Valider'}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                        {isRefundRequested && !isDelivered && (
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200 max-w-xs">
                                <div className="flex items-start gap-2 text-red-800">
                                    <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="font-bold">Demande de remboursement !</p>
                                        <p className="text-sm mt-1">Le client n&apos;a pas reçu sa commande après 72h.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
