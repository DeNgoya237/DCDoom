import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-secondary-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/images/hero-bg.jpg"
          alt="Digital Technology Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/40" aria-hidden="true"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Propulsez votre avenir <br className="hidden sm:block" />
          <span className="text-primary-500">avec nos produits digitaux.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Découvrez une collection premium de logiciels, formations vidéo, e-books et templates pour accélérer votre business et votre apprentissage. Qualité garantie.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-start">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link
              href="/products"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 sm:px-8 transition-colors"
            >
              Voir les produits
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-200 bg-primary-900/50 hover:bg-primary-900/70 sm:px-8 transition-colors backdrop-blur-sm"
            >
              Nos Formations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
