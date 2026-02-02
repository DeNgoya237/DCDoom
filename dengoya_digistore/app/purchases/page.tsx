import { CreditCard, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function PurchasesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 py-16 mb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/purchases-bg.jpg"
              alt="Achats"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-white">
            <CreditCard className="mr-4 text-indigo-300" size={48} />
            <div>
                <h1 className="text-4xl font-extrabold tracking-tight">Mes Achats</h1>
                <p className="text-indigo-200 mt-1">Gérez vos commandes et téléchargements.</p>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

        <div className="bg-white shadow rounded-lg p-10 text-center">
            <div className="flex justify-center mb-4 text-indigo-200">
                <CreditCard size={64} />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Historique des achats à venir</h2>
            <p className="text-gray-500 max-w-md mx-auto">
                Vous n&apos;avez pas encore effectué d&apos;achats. Une fois que vous aurez commandé des produits, ils apparaîtront ici pour un accès facile.
            </p>
        </div>
      </div>
    </div>
  );
}
