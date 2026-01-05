import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function main() {
  const products = [
    {
      title: 'Masterclass Flutter & Dart',
      description: 'Apprenez à créer des applications mobiles performantes avec Flutter et Dart.',
      category: 'Formation Vidéo',
      price: 15000,
      image: '/images/product-course.jpg',
      rating: 5,
    },
    {
      title: 'Pack 1000+ Templates Instagram',
      description: 'Boostez votre engagement sur les réseaux sociaux avec ce pack de templates professionnels.',
      category: 'Ressources',
      price: 5000,
      image: '/images/product-marketing.jpg',
      rating: 4,
    },
    {
      title: 'Licence Antivirus Pro (1 An)',
      description: 'Protégez vos appareils contre les menaces en ligne avec cette licence premium.',
      category: 'Logiciel',
      price: 8000,
      image: '/images/product-software.jpg',
      rating: 5,
    },
    {
      title: 'E-book : Guide du Freelance',
      description: 'Tout ce que vous devez savoir pour réussir en tant que freelance.',
      category: 'E-book',
      price: 3000,
      image: '/images/product-course.jpg',
      rating: 4,
    },
     {
      title: 'UI Kit Dashboard Pro',
      description: 'Un kit UI complet pour créer des tableaux de bord modernes.',
      category: 'Design',
      price: 12000,
      image: '/images/product-marketing.jpg', // Placeholder
      rating: 4.5,
    },
    {
      title: 'Formation Photoshop Expert',
      description: 'Devenez un expert de la retouche photo avec cette formation complète.',
      category: 'Formation Vidéo',
      price: 10000,
      image: '/images/product-software.jpg', // Placeholder
      rating: 4.8,
    }
  ]

  for (const product of products) {
    const existing = await prisma.product.findFirst({
        where: { title: product.title }
    })

    if (!existing) {
        await prisma.product.create({
            data: product,
        })
    }
  }

  console.log('Database seeded!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
