"use client";

import Link from 'next/link';
import { ShoppingCart, Search, Menu, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <nav className="bg-background py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="text-primary font-bold text-2xl flex items-center gap-1">
          <ShoppingCart className="w-6 h-6" />
          <span>DeNgoya Digistore</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>

        {/* Products Dropdown */}
        <div className="relative group">
          <button
            className="flex items-center gap-1 hover:text-primary transition-colors"
            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            onMouseEnter={() => setIsProductDropdownOpen(true)}
          >
            Produits <ChevronDown className="w-4 h-4" />
          </button>

          {/* Dropdown Content */}
          <div
            className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-orange-100 transition-all duration-200 transform origin-top-left ${isProductDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100'}`}
          >
            <Link href="/products/formation" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary">
              Formation et Contenu éducatif
            </Link>
            <Link href="/products/logiciels" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary">
              Logiciels et Application
            </Link>
            <Link href="/products/outils" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary">
              Outils et Ressources pour les créatifs
            </Link>
            <div className="border-t border-gray-100 my-1"></div>
            <Link href="/products" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary font-semibold">
              Tout voir
            </Link>
          </div>
        </div>

        <Link href="/achats" className="hover:text-primary transition-colors">Achats</Link>
        <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
        <Link href="/compte" className="hover:text-primary transition-colors">Compte</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-orange-100 rounded-full transition-colors text-gray-600">
          <Search className="w-5 h-5" />
        </button>
        <Link href="/achats" className="p-2 hover:bg-orange-100 rounded-full transition-colors text-gray-600 relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
        </Link>
        <Link href="/compte" className="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold hover:bg-accent transition-colors shadow-md shadow-orange-200">
          <User className="w-4 h-4" />
          <span>Login</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-orange-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 border-t md:hidden z-40">
           <Link href="/" className="hover:text-primary p-2 border-b border-gray-100">Accueil</Link>
           <div className="flex flex-col gap-2 p-2 border-b border-gray-100">
             <span className="font-semibold text-gray-400 text-sm">PRODUITS</span>
             <Link href="/products/formation" className="pl-4 hover:text-primary">Formation et Contenu éducatif</Link>
             <Link href="/products/logiciels" className="pl-4 hover:text-primary">Logiciels et Application</Link>
             <Link href="/products/outils" className="pl-4 hover:text-primary">Outils et Ressources pour les créatifs</Link>
           </div>
           <Link href="/achats" className="hover:text-primary p-2 border-b border-gray-100">Achats</Link>
           <Link href="/support" className="hover:text-primary p-2 border-b border-gray-100">Support</Link>
           <Link href="/compte" className="hover:text-primary p-2">Compte</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
