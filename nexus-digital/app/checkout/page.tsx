'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Trash2, Lock, ArrowRight } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-white mb-8">Votre Panier</h1>

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            <section className="lg:col-span-7">
              <div className="bg-secondary-800 rounded-lg border border-secondary-700 overflow-hidden">
                <ul className="divide-y divide-secondary-700">
                  <li className="p-6 flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/product-course.jpg"
                        alt="Masterclass Flutter"
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href="#" className="font-medium text-white hover:text-primary-400">
                                Masterclass Flutter & Dart
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-400">Formation Vidéo</p>
                          </div>
                          <p className="mt-1 text-sm font-medium text-white">15 000 F CFA</p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="absolute top-0 right-0">
                            <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500">
                              <span className="sr-only">Supprimer</span>
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Item 2 */}
                   <li className="p-6 flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/product-software.jpg"
                        alt="Licence Antivirus"
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href="#" className="font-medium text-white hover:text-primary-400">
                                Licence Antivirus Pro (1 An)
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-400">Logiciel</p>
                          </div>
                          <p className="mt-1 text-sm font-medium text-white">8 000 F CFA</p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="absolute top-0 right-0">
                            <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500">
                              <span className="sr-only">Supprimer</span>
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Order Summary */}
            <section className="mt-16 bg-secondary-800 rounded-lg border border-secondary-700 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
              <h2 className="text-lg font-medium text-white">Récapitulatif de la commande</h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-400">Sous-total</dt>
                  <dd className="text-sm font-medium text-white">23 000 F CFA</dd>
                </div>
                <div className="flex items-center justify-between border-t border-secondary-700 pt-4">
                  <dt className="text-base font-medium text-white">Total</dt>
                  <dd className="text-base font-medium text-white">23 000 F CFA</dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  type="button"
                  className="w-full bg-primary-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-900 focus:ring-primary-500 flex items-center justify-center transition-colors"
                >
                  Payer avec Flutterwave <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

               <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500">
                    <Lock className="h-4 w-4" />
                    <span className="text-xs">Paiement 100% Sécurisé</span>
               </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
