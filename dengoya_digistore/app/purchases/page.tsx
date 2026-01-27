import { CreditCard, AlertCircle } from 'lucide-react';

export default function PurchasesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
            <CreditCard className="mr-3" size={32} />
            Mes Achats
        </h1>

        <div className="bg-white shadow rounded-lg p-10 text-center">
            <div className="flex justify-center mb-4 text-indigo-200">
                <CreditCard size={64} />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Historique des achats à venir</h2>
            <p className="text-gray-500 max-w-md mx-auto">
                Vous n'avez pas encore effectué d'achats. Une fois que vous aurez commandé des produits, ils apparaîtront ici pour un accès facile.
            </p>
        </div>
      </div>
    </div>
  );
}
