import Link from 'next/link';
import { User, Lock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-orange-100 border border-gray-100 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Bienvenue</h1>
            <p className="text-gray-500">Connectez-vous pour accéder à vos achats.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="votre@email.com"
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Mot de passe</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="••••••••"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <div className="text-right">
                <a href="#" className="text-xs text-primary font-medium hover:underline">Mot de passe oublié ?</a>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group">
              Se connecter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Pas encore de compte ? <Link href="#" className="text-primary font-bold hover:underline">Créer un compte</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
