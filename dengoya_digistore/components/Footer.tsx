import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">DeNgoya Digistore</h3>
            <p className="text-gray-500 leading-relaxed">
              Votre plateforme de référence pour l'achat de produits digitaux de qualité. Formation, logiciels, et outils créatifs.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-800">Liens Rapides</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Tous les Produits</Link></li>
              <li><Link href="/achats" className="hover:text-primary transition-colors">Mon Panier</Link></li>
              <li><Link href="/compte" className="hover:text-primary transition-colors">Mon Compte</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-800">Catégories</h4>
            <ul className="space-y-3 text-gray-500">
              <li><Link href="/products/formation" className="hover:text-primary transition-colors">Formations</Link></li>
              <li><Link href="/products/logiciels" className="hover:text-primary transition-colors">Logiciels</Link></li>
              <li><Link href="/products/outils" className="hover:text-primary transition-colors">Ressources Créatives</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-800">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>123 Digital Avenue,<br />Tech City, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@dengoya.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+237 600 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DeNgoya Digistore. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
