import { Zap, ShieldCheck, Headphones } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: "Livraison Instantanée",
      description: "Accédez à vos produits immédiatement après paiement."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary-600" />,
      title: "Paiement Sécurisé",
      description: "Transactions cryptées et 100% sécurisées via Flutterwave."
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary-600" />,
      title: "Support 24/7",
      description: "Une équipe dédiée pour vous accompagner."
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
