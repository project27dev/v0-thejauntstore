// products-data.ts
export interface Product {
  id: number
  name: string
  price: number
  images: string[]
  tags: string[]
  description: string
  category: string
}

export const editableProducts: Product[] = [
  // your product objects here
]
