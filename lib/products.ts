// products.ts — never overwritten

import { Product, editableProducts } from "./products-data"

// Use editableProducts as the main products array
export const products: Product[] = [...editableProducts]

export function getProductsByTag(tag: string): Product[] {
  return products.filter((product) => product.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allTags = products.flatMap((product) => product.tags)
  return [...new Set(allTags)]
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
