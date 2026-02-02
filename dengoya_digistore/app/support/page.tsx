import { LifeBuoy, Mail, Phone } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
            <LifeBuoy className="mr-3" size={32} />
            Support Client
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
                <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                        <Mail className="mr-3 text-indigo-600" size={20} />
                        <span>support@dengoya-digistore.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                         <Phone className="mr-3 text-indigo-600" size={20} />
                        <span>+237 6XX XXX XXX</span>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-gray-900">Comment télécharger mes produits ?</h3>
                        <p className="text-sm text-gray-500 mt-1">Vos liens de téléchargement sont envoyés par email immédiatement après l&apos;achat.</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-900">Quels modes de paiement acceptez-vous ?</h3>
                        <p className="text-sm text-gray-500 mt-1">Nous acceptons Mobile Money (Orange, MTN) et les cartes bancaires via Flutterwave.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
