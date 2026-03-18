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

export const TAG_GROUPS = {
  Category: ["rings", "necklaces", "earrings", "bracelets", "pendants", "jhumka", "bangles", "stone-bracelet", "matching-sets"],
  Collection: ["new-in", "bestseller", "iconic", "showpiece"],
  Material: ["gold", "silver", "pressed-flowers", "resin", "pearl", "metals", "natural-elements"],
  Style: ["botanical", "minimalist", "handmade"],
  Gender: ["for-her", "for-him"],
} as const

export type TagGroup = keyof typeof TAG_GROUPS

export interface FilterOptions {
  tags: string[]
  minPrice?: number
  maxPrice?: number
}

export function filterProducts({ tags, minPrice, maxPrice }: FilterOptions): Product[] {
  // Group selected tags by their group
  const selectedByGroup: Record<string, string[]> = {}
  for (const [group, groupTags] of Object.entries(TAG_GROUPS)) {
    const selected = tags.filter((t) => (groupTags as readonly string[]).includes(t))
    if (selected.length > 0) selectedByGroup[group] = selected
  }

  return products.filter((product) => {
    // Inter-group AND: product must match at least one tag from each active group
    for (const groupTags of Object.values(selectedByGroup)) {
      if (!groupTags.some((t) => product.tags.includes(t))) return false
    }
    // Price range
    if (minPrice !== undefined && product.price < minPrice) return false
    if (maxPrice !== undefined && product.price > maxPrice) return false
    return true
  })
}
