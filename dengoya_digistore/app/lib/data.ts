
export interface Product {
  id: number;
  name: string;
  price: number;
  categorySlug: 'formation' | 'logiciels' | 'outils';
  description: string;
}

export const CATEGORIES = [
  {
    slug: 'formation',
    title: 'Formation et Contenu éducatif',
    description: 'Boostez vos compétences avec nos cours experts',
    icon: 'BookOpen',
    color: 'bg-blue-500'
  },
  {
    slug: 'logiciels',
    title: 'Logiciels et Application',
    description: 'Solutions logicielles pour votre productivité',
    icon: 'Cpu',
    color: 'bg-purple-500'
  },
  {
    slug: 'outils',
    title: 'Outils et Ressources pour les créatifs',
    description: 'Assets et outils pour vos projets créatifs',
    icon: 'Palette',
    color: 'bg-pink-500'
  }
] as const;

export const ALL_PRODUCTS: Product[] = [
  // Formation
  { id: 1, name: "Masterclass Web Design", price: 45000, categorySlug: 'formation', description: "Devenez expert en UI/UX design en 4 semaines." },
  { id: 2, name: "Formation Marketing Digital", price: 30000, categorySlug: 'formation', description: "Apprenez à vendre en ligne efficacement." },
  { id: 3, name: "Guide Freelance 2024", price: 15000, categorySlug: 'formation', description: "Comment trouver vos premiers clients." },

  // Logiciels
  { id: 4, name: "Gestion Pro V2", price: 75000, categorySlug: 'logiciels', description: "Gérez votre business tout-en-un." },
  { id: 5, name: "AutoPost Social", price: 25000, categorySlug: 'logiciels', description: "Automatisez vos réseaux sociaux." },
  { id: 6, name: "SecureBackup Cloud", price: 40000, categorySlug: 'logiciels', description: "Sauvegarde sécurisée de vos données." },

  // Outils
  { id: 7, name: "Pack Icônes Premium", price: 12000, categorySlug: 'outils', description: "2000+ icônes vectorielles." },
  { id: 8, name: "Templates Notion", price: 8000, categorySlug: 'outils', description: "Organisez votre vie pro." },
  { id: 9, name: "UI Kit Mobile App", price: 20000, categorySlug: 'outils', description: "Kit complet pour apps iOS/Android." },
];

export const getProductsByCategory = (slug: string) => {
  return ALL_PRODUCTS.filter(p => p.categorySlug === slug);
};

export const getCategoryBySlug = (slug: string) => {
  return CATEGORIES.find(c => c.slug === slug);
};
