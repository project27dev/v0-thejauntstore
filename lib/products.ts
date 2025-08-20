// Products Configuration File
// Instructions for non-technical users:
// 1. Add new images to the /public folder
// 2. Add new products to the array below
// 3. Make sure to include all relevant tags for filtering
// 4. Price should be a number (without currency symbol)
// 5. Images should reference the path starting with "/"

export interface Product {
  id: number
  name: string
  price: number
  images: string[]
  tags: string[]
  description: string
  category: string
}

export const products: Product[] = [
  // New In Collection
  {
    id: 1,
    name: "Botanical Ring Collection",
    price: 89,
    images: ["/jewelry-collection-1.jpeg"],
    tags: ["new-in", "rings", "gold", "pressed-flowers", "for-her", "bestseller"],
    description: "Beautiful collection of pressed flower rings in gold settings",
    category: "rings",
  },
  {
    id: 2,
    name: "Oval Botanical Pendants",
    price: 65,
    images: ["/jewelry-pendants-oval.jpeg"],
    tags: ["new-in", "pendants", "gold", "pressed-flowers", "for-her"],
    description: "Elegant oval pendants featuring pressed purple flowers",
    category: "pendants",
  },
  {
    id: 3,
    name: "Dark Rose Collection",
    price: 95,
    images: ["/jewelry-dark-botanicals.jpeg"],
    tags: ["new-in", "rings", "gold", "pressed-flowers", "for-her"],
    description: "Sophisticated dark botanical jewelry with rose elements",
    category: "rings",
  },
  {
    id: 4,
    name: "Heart Botanical Pendants",
    price: 75,
    images: ["/jewelry-heart-pendants.jpeg"],
    tags: ["new-in", "pendants", "gold", "pressed-flowers", "for-her"],
    description: "Heart-shaped pendants with pressed flowers and gold chains",
    category: "pendants",
  },

  // Iconic Collection
  {
    id: 5,
    name: "Natural Stone Necklace",
    price: 120,
    images: ["/jewelry-stone-necklace.jpeg"],
    tags: ["iconic", "necklaces", "natural-elements", "for-her", "bestseller"],
    description: "Handcrafted natural stone bead necklace",
    category: "necklaces",
  },
  {
    id: 6,
    name: "Colorful Flower Pendants",
    price: 85,
    images: ["/jewelry-colorful-flowers.jpeg"],
    tags: ["iconic", "pendants", "gold", "pressed-flowers", "for-her"],
    description: "Vibrant collection of colorful pressed flower pendants",
    category: "pendants",
  },

  // Bestsellers
  {
    id: 7,
    name: "Capsule Botanical Collection",
    price: 70,
    images: ["/jewelry-capsule-pendants.jpeg"],
    tags: ["bestseller", "pendants", "gold", "pressed-flowers", "for-her"],
    description: "Unique capsule-shaped pendants with botanical elements",
    category: "pendants",
  },
  {
    id: 8,
    name: "Geometric Botanical Set",
    price: 110,
    images: ["/jewelry-geometric-collection.jpeg"],
    tags: ["bestseller", "rings", "pendants", "gold", "pressed-flowers", "for-her"],
    description: "Modern geometric shapes featuring pressed botanicals",
    category: "rings",
  },

  // For Him Collection
  {
    id: 9,
    name: "Minimalist Gold Ring",
    price: 95,
    images: ["/jewelry-collection-1.jpeg"],
    tags: ["for-him", "rings", "gold", "minimalist"],
    description: "Simple and elegant gold ring for men",
    category: "rings",
  },
  {
    id: 10,
    name: "Natural Elements Pendant",
    price: 80,
    images: ["/jewelry-geometric-collection.jpeg"],
    tags: ["for-him", "pendants", "natural-elements", "gold"],
    description: "Masculine pendant with natural botanical elements",
    category: "pendants",
  },
]

// Helper function to filter products by tag
export function getProductsByTag(tag: string): Product[] {
  return products.filter((product) => product.tags.includes(tag))
}

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const allTags = products.flatMap((product) => product.tags)
  return [...new Set(allTags)]
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
