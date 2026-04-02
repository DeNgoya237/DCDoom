
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export const CATEGORIES = [
  { id: 'formation', name: 'Formation et Contenu éducatif' },
  { id: 'logiciels', name: 'Logiciels et Application' },
  { id: 'outils', name: 'Outils et Ressources pour les créatifs' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cours Complet de Marketing Digital',
    description: 'Apprenez à maîtriser le marketing en ligne de A à Z.',
    price: 15000,
    category: 'formation',
    imageUrl: 'https://via.placeholder.com/300?text=Marketing',
  },
  {
    id: '2',
    name: 'Pack Suite Adobe 2024',
    description: 'Licence annuelle pour tous les logiciels Adobe.',
    price: 45000,
    category: 'logiciels',
    imageUrl: 'https://via.placeholder.com/300?text=Adobe',
  },
  {
    id: '3',
    name: 'Kit de Pinceaux Procreate',
    description: 'Plus de 50 pinceaux exclusifs pour vos illustrations.',
    price: 5000,
    category: 'outils',
    imageUrl: 'https://via.placeholder.com/300?text=Pinceaux',
  },
   {
    id: '4',
    name: 'Formation React Avancé',
    description: 'Devenez expert en React et Next.js.',
    price: 20000,
    category: 'formation',
    imageUrl: 'https://via.placeholder.com/300?text=React',
  },
    {
    id: '5',
    name: 'Antivirus Premium',
    description: 'Protection complète pour votre ordinateur.',
    price: 10000,
    category: 'logiciels',
    imageUrl: 'https://via.placeholder.com/300?text=Antivirus',
  },
    {
    id: '6',
    name: 'Banque d\'Images HD',
    description: 'Accès à 1000 images haute résolution libres de droits.',
    price: 8000,
    category: 'outils',
    imageUrl: 'https://via.placeholder.com/300?text=Images',
  },
];
