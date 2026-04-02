import { User, Settings, LogOut } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center">
            <User className="mr-3" size={32} />
            Mon Compte
        </h1>

        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-8 border-b border-gray-200 flex items-center">
                <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold mr-6">
                    JD
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                    <p className="text-gray-500">john.doe@example.com</p>
                </div>
            </div>

            <div className="p-8">
                 <div className="space-y-4">
                    <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center">
                            <Settings className="mr-3 text-gray-500" size={20} />
                            <span className="text-gray-700 font-medium">Paramètres du compte</span>
                        </div>
                    </button>

                    <button className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-red-600">
                         <div className="flex items-center">
                            <LogOut className="mr-3" size={20} />
                            <span className="font-medium">Déconnexion</span>
                        </div>
                    </button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
