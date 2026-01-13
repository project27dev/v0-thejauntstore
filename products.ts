// Products Configuration File
// Last updated: 2026-01-13T08:42:31.088Z

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
  {
    id: 999,
    name: "Test",
    price: 0.04,
    images: ["https://i.ibb.co/4RRqJ31s/istockphoto-814423752-612x612.jpg"],
    tags: ["earrings","rings"],
    description: "1234",
    category: "necklaces",
  },
  {
    id: 998,
    name: "asd",
    price: 0.03,
    images: ["https://i.ibb.co/wh8L7bNM/istockphoto-814423752-612x612.jpg"],
    tags: ["for-her","new-in","iconic"],
    description: "asd",
    category: "necklaces",
  }
];

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