// Products Configuration File
// Last updated: 2026-01-13T08:43:31.888Z

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
