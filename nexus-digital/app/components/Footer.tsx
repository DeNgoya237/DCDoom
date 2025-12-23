import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              DENGOYA <span className="text-primary-500">Digitals</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre plateforme de référence pour l'achat de produits digitaux de qualité. Formations, ressources créatives et logiciels en un clic.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Accueil</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Formations</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Ressources</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Logiciels</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support Client</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Conditions Générales</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Retour & Remboursement</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Restez informé</h4>
            <p className="text-gray-400 text-sm mb-4">Recevez nos dernières offres directement dans votre boîte mail.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DENGOYA Digitals. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
