'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface User {
  id: string;
  email: string;
  name: string | null;
}

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Not authenticated');
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        router.push('/auth/login');
      });
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  if (loading) {
    return (
        <div className="min-h-screen bg-secondary-900 flex items-center justify-center">
            <div className="text-white">Chargement...</div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-secondary-800 shadow overflow-hidden sm:rounded-lg border border-secondary-700">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
                <h3 className="text-lg leading-6 font-medium text-white">Mon Compte</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-400">Informations personnelles et commandes.</p>
            </div>
            <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
                Déconnexion
            </button>
          </div>
          <div className="border-t border-secondary-700 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-secondary-700">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-400">Nom complet</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{user?.name || 'Non renseigné'}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-400">Adresse Email</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{user?.email}</dd>
              </div>
               <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-400">Historique des commandes</dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    <p className="text-gray-500 italic">Aucune commande pour le moment.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
