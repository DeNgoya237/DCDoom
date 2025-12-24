import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-950 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white tracking-wider">
                DENGOYA<span className="text-primary-500">Digitals</span>
              </span>
            </Link>
            <p className="text-gray-400 text-base">
              Votre plateforme de référence pour l'achat de produits digitaux de qualité. Formations, ressources créatives et logiciels en un clic.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Liens Rapides
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/" className="text-base text-gray-400 hover:text-white">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-base text-gray-400 hover:text-white">
                      Formations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-white">
                      Ressources
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-white">
                      Logiciels
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Support Client
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-white">
                      Conditions Générales
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-white">
                      Politique de Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-white">
                      Retour & Remboursement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Restez informé
                </h3>
                <p className="mt-4 text-base text-gray-400">
                  Recevez nos dernières offres directement dans votre boîte mail.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">Adresse Email</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-secondary-800 border border-secondary-700 rounded-md py-2 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-900 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs"
                    placeholder="Votre email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-primary-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-900 focus:ring-primary-500"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 DENGOYA Digitals. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
