// products-data.ts — editable via admin UI

export interface Product {
  id: number
  name: string
  price: number
  images: string[]
  tags: string[]
  description: string
  category: string
}

// Only this array will be updated via admin UI
export const editableProducts: Product[] = [
  {
    "id": 100,
    "name": "Botanical Gold Ring ",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.49 AM.jpeg"
    ],
    "tags": [
      "for-her",
      "minimalist",
      "botanical",
      "new-in",
      "rings"
    ],
    "description": "A simple handcrafted botanical ring featuring natural elements.",
    "category": "rings"
  },
  {
    "id": 101,
    "name": "Minimal Bloom Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.50 AM.jpeg"
    ],
    "tags": [
      "new-in",
      "rings",
      "for-her",
      "bestseller"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 102,
    "name": "Vintage Botanical Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.51 AM.jpeg"
    ],
    "tags": [
      "new-in",
      "minimalist",
      "botanical",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 103,
    "name": "Garden Essence Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.52 AM (1).jpeg"
    ],
    "tags": [
      "new-in",
      "minimalist",
      "gold",
      "botanical",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 104,
    "name": "Floral Resin Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.52 AM.jpeg"
    ],
    "tags": [
      "botanical",
      "for-her",
      "gold",
      "pressed-flowers",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 105,
    "name": "Floral Resin Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.54 AM.jpeg"
    ],
    "tags": [
      "bestseller",
      "botanical",
      "rings",
      "for-her"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 106,
    "name": "Wildflower Gold Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.55 AM.jpeg"
    ],
    "tags": [
      "gold",
      "handmade",
      "rings",
      "for-her"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 107,
    "name": "Floral Resin Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.57 AM.jpeg"
    ],
    "tags": [
      "handmade",
      "gold",
      "minimalist",
      "new-in",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 108,
    "name": "Botanical Gold Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.58 AM.jpeg"
    ],
    "tags": [
      "botanical",
      "gold",
      "minimalist",
      "bestseller",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 109,
    "name": "rose Flower petals  Gold Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.08.59 AM.jpeg"
    ],
    "tags": [
      "new-in",
      "bestseller",
      "botanical",
      "for-her",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 110,
    "name": "Real flower ring ",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.00 AM.jpeg"
    ],
    "tags": [
      "minimalist",
      "pressed-flowers",
      "for-her",
      "botanical",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 111,
    "name": "Vintage Botanical Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.01 AM.jpeg"
    ],
    "tags": [
      "botanical",
      "minimalist",
      "handmade",
      "rings",
      "for-her"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 112,
    "name": "Pressed Flower Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.03 AM.jpeg"
    ],
    "tags": [
      "bestseller",
      "botanical",
      "pressed-flowers",
      "for-her",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 113,
    "name": "Minimal Bloom Ring",
    "price": 349,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.14 AM (1).jpeg"
    ],
    "tags": [
      "new-in",
      "botanical",
      "pressed-flowers",
      "minimalist",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 114,
    "name": "Minimal Bloom Ring",
    "price": 349,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.14 AM.jpeg"
    ],
    "tags": [
      "new-in",
      "bestseller",
      "botanical",
      "pressed-flowers",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 115,
    "name": "Floral Resin Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.15 AM (1).jpeg"
    ],
    "tags": [
      "pressed-flowers",
      "minimalist",
      "handmade",
      "gold",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 116,
    "name": "Botanical Gold Ring",
    "price": 349,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.15 AM.jpeg"
    ],
    "tags": [
      "rings",
      "new-in",
      "minimalist",
      "gold"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 117,
    "name": "Vintage Botanical Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.16 AM.jpeg"
    ],
    "tags": [
      "gold",
      "minimalist",
      "handmade",
      "pressed-flowers"
    ],
    "description": "",
    "category": "rings"
  },
  {
    "id": 118,
    "name": "Floral Resin Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.17 AM.jpeg"
    ],
    "tags": [
      "rings",
      "pressed-flowers",
      "minimalist",
      "new-in",
      "for-her"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 119,
    "name": "Botanical Gold Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.18 AM (1).jpeg"
    ],
    "tags": [
      "botanical",
      "handmade",
      "new-in",
      "gold",
      "for-her"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 120,
    "name": "Garden Essence Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.18 AM.jpeg"
    ],
    "tags": [
      "pressed-flowers",
      "minimalist",
      "for-her",
      "gold"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 121,
    "name": "Pressed Flower Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.19 AM.jpeg"
    ],
    "tags": [
      "handmade",
      "gold",
      "for-her",
      "rings"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 122,
    "name": "Botanical Gold Ring",
    "price": 249,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.21 AM.jpeg"
    ],
    "tags": [
      "rings",
      "pressed-flowers",
      "botanical",
      "bestseller"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 123,
    "name": "Vintage Botanical Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.22 AM.jpeg"
    ],
    "tags": [
      "rings",
      "minimalist",
      "pressed-flowers",
      "new-in"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 124,
    "name": "Pressed Flower Ring",
    "price": 299,
    "images": [
      "/rings/WhatsApp Image 2025-12-29 at 7.09.23 AM.jpeg"
    ],
    "tags": [
      "new-in",
      "pressed-flowers",
      "minimalist",
      "handmade"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 200,
    "name": "Wildflower Gold Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.24 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "minimalist",
      "gold",
      "pressed-flowers"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 201,
    "name": "Garden Essence Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.25 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "handmade",
      "minimalist",
      "pressed-flowers"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 202,
    "name": "Minimal Bloom Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.27 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "bestseller",
      "handmade",
      "for-her"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 203,
    "name": "Vintage Botanical Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.28 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "gold",
      "bestseller",
      "minimalist"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 204,
    "name": "Botanical Gold Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.29 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "gold",
      "botanical",
      "bestseller"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 205,
    "name": "Pressed Flower Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.30 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "handmade",
      "gold",
      "for-her"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 206,
    "name": "Minimal Bloom Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.31 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "bestseller",
      "pressed-flowers",
      "handmade"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 207,
    "name": "Wildflower Gold Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.32 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "for-her",
      "bestseller",
      "minimalist"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 208,
    "name": "Floral Resin Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.33 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "gold",
      "handmade",
      "bestseller"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 209,
    "name": "Wildflower Gold Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.34 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "minimalist",
      "new-in",
      "gold"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 210,
    "name": "Minimal Bloom Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.37 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "minimalist",
      "new-in",
      "gold"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 211,
    "name": "Botanical Gold Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.38 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "handmade",
      "minimalist",
      "for-her"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 212,
    "name": "Garden Essence Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.41 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "pressed-flowers",
      "for-her",
      "new-in"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 213,
    "name": "Pressed Flower Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.42 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "gold",
      "pressed-flowers",
      "handmade"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 214,
    "name": "Floral Resin Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.36.30 PM.jpeg"
    ],
    "tags": [
      "pendants",
      "for-her",
      "botanical",
      "minimalist"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 215,
    "name": "Vintage Botanical Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.36.31 PM.jpeg"
    ],
    "tags": [
      "pendants",
      "pressed-flowers",
      "bestseller",
      "new-in"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 216,
    "name": "Wildflower Gold Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.36.32 PM.jpeg"
    ],
    "tags": [
      "pendants",
      "new-in",
      "gold",
      "botanical"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 217,
    "name": "Garden Essence Pendant",
    "price": 4,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.36.33 PM.jpeg"
    ],
    "tags": [
      "pendants",
      "botanical",
      "bestseller",
      "pressed-flowers"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 218,
    "name": "Pressed Flower ring ",
    "price": 299,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.37.17 PM.jpeg"
    ],
    "tags": [
      "pressed-flowers",
      "minimalist",
      "for-her",
      "rings",
      "resin",
      "handmade"
    ],
    "description": "Handmade ring with real flower stainless & adjustable ",
    "category": "rings"
  },
  {
    "id": 219,
    "name": "Rose flower Jhumka ",
    "price": 699,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.37.55 PM.jpeg"
    ],
    "tags": [
      "pendants",
      "pressed-flowers",
      "for-her",
      "gold",
      "resin",
      "handmade",
      "iconic"
    ],
    "description": "A simple handcrafted resin Jhumka for deshi outfits stainless & natural elements.",
    "category": "earrings"
  },
  {
    "id": 220,
    "name": "Wildflower Gold Jhumka ",
    "price": 699,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.37.56 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "bestseller",
      "gold"
    ],
    "description": "A simple handcrafted resin Jhumka for deshi outfits stainless & natural elements.",
    "category": "earrings"
  },
  {
    "id": 221,
    "name": "Real Flower Jhumka ",
    "price": 699,
    "images": [
      "/pendent/WhatsApp Image 2026-02-09 at 4.37.57 PM.jpeg"
    ],
    "tags": [
      "botanical",
      "bestseller",
      "for-her",
      "iconic",
      "handmade",
      "resin"
    ],
    "description": "A simple handcrafted resin Jhumka for deshi outfits stainless & natural elements.",
    "category": "earrings"
  }
]