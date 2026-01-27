'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Home, Package, CreditCard, LifeBuoy, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../app/context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Produits', href: '/products', icon: Package },
    { name: 'Achats', href: '/purchases', icon: CreditCard },
    { name: 'Support', href: '/support', icon: LifeBuoy },
    { name: 'Compte', href: '/account', icon: User },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                DeNgoya Digistore
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => {
               const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
               const Icon = item.icon;
               return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            )})}

            {/* Cart Icon */}
            <div className="relative ml-4">
                <button className="p-2 text-gray-700 hover:text-indigo-600">
                    <ShoppingCart size={24} />
                    {cartItemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
             {/* Cart Icon Mobile */}
             <div className="relative mr-4">
                <button className="p-2 text-gray-700 hover:text-indigo-600">
                    <ShoppingCart size={24} />
                    {cartItemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => {
               const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
               const Icon = item.icon;
               return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            )})}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
