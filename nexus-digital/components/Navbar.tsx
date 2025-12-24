'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, User, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <nav className="bg-secondary-900 border-b border-secondary-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white tracking-wider">
                DENGOYA<span className="text-primary-500">Digitals</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Accueil
              </Link>

              {/* Dropdown Menu */}
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    type="button"
                    className="group inline-flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                >
                  Produits
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-secondary-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-secondary-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      <Link href="/products?category=formation" className="text-gray-300 hover:bg-secondary-700 hover:text-white block px-4 py-2 text-sm" role="menuitem">
                        Formations Vidéo
                      </Link>
                      <Link href="/products?category=ressources" className="text-gray-300 hover:bg-secondary-700 hover:text-white block px-4 py-2 text-sm" role="menuitem">
                        Ressources Graphiques
                      </Link>
                      <Link href="/products?category=logiciel" className="text-gray-300 hover:bg-secondary-700 hover:text-white block px-4 py-2 text-sm" role="menuitem">
                        Logiciels & Outils
                      </Link>
                      <Link href="/products?category=ebook" className="text-gray-300 hover:bg-secondary-700 hover:text-white block px-4 py-2 text-sm" role="menuitem">
                        E-books
                      </Link>
                      <div className="border-t border-secondary-700 my-1"></div>
                       <Link href="/products" className="text-primary-400 hover:bg-secondary-700 hover:text-primary-300 block px-4 py-2 text-sm font-semibold" role="menuitem">
                        Voir tout le catalogue
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
               <Link href="/account" className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">Compte</span>
                <User className="h-6 w-6" />
              </Link>
              <Link href="/checkout" className="p-1 rounded-full text-gray-400 hover:text-primary-500 focus:outline-none transition-colors relative">
                <span className="sr-only">Panier</span>
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-secondary-900 bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-800 border-t border-secondary-700">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Accueil
            </Link>
             <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Produits
            </Link>
            <div className="pl-6 space-y-1 border-l-2 border-secondary-700 ml-3">
                 <Link href="/products?category=formation" className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                    - Formations
                 </Link>
                  <Link href="/products?category=ressources" className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                    - Ressources
                 </Link>
                  <Link href="/products?category=logiciel" className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                    - Logiciels
                 </Link>
            </div>

            <Link href="/checkout" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Panier
            </Link>
             <Link href="/account" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Mon Compte
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
