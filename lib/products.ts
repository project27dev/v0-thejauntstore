import { editableProducts, Product } from "./products-data"

export type { Product }

// Use a fallback in case editableProducts is undefined
export const products: Product[] = Array.isArray(editableProducts) ? [...editableProducts] : []

// Filter by tag
export function getProductsByTag(tag: string): Product[] {
  return products.filter((product) => product.tags.includes(tag))
}

// Get all unique tags
export function getAllTags(): string[] {
  const allTags = products.flatMap((product) => product.tags)
  return [...new Set(allTags)]
}

// Filter by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
