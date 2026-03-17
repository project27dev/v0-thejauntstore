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
    "price": 299,
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
    "price": 299,
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
    "price": 249,
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
    "price": 249,
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
    "price": 299,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.29 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "gold",
      "botanical",
      "bestseller",
      "for-her"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 205,
    "name": "Pressed Flower Pendant",
    "price": 249,
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
    "price": 249,
    "images": [
      "/pendent/WhatsApp Image 2025-12-30 at 7.05.31 AM.jpeg"
    ],
    "tags": [
      "pendants",
      "bestseller",
      "pressed-flowers",
      "handmade",
      "for-her"
    ],
    "description": "A simple handcrafted botanical pendant featuring natural elements.",
    "category": "pendants"
  },
  {
    "id": 207,
    "name": "Wildflower Gold Pendant",
    "price": 299,
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
    "price": 299,
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
    "price": 249,
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
    "price": 299,
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
    "price": 299,
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
    "name": "Vintage flower lockets",
    "price": 299,
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
    "name": "Vintage flower lockets",
    "price": 299,
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
    "price": 249,
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
    "name": "Yellow rose lockets ",
    "price": 249,
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
    "price": 299,
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
    "price": 249,
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
      "iconic",
      "jhumka",
      "earrings"
    ],
    "description": "A simple handcrafted resin Jhumka for deshi outfits stainless & natural elements.",
    "category": "jhumka"
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
    "category": "jhumka"
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
    "category": "jhumka"
  },
  {
    "id": 300,
    "name": "Rose flower Pakistani jhumka ",
    "price": 649,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 3.53.09 PM.jpeg"
    ],
    "tags": [
      "jhumka",
      "for-her",
      "iconic"
    ],
    "description": "Handmade real rose flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 301,
    "name": "Baby pink Pakistani Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 3.53.10 PM (1).jpeg"
    ],
    "tags": [
      "jhumka",
      "for-her",
      "iconic"
    ],
    "description": "Handmade real baby pink flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 302,
    "name": "Baby pink and lavender Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 3.53.10 PM (2).jpeg"
    ],
    "tags": [
      "jhumka",
      "for-her"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 303,
    "name": "Yellow & green Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 3.53.10 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 304,
    "name": "Lavender with baby pink stone jhumka",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 3.53.11 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 305,
    "name": "Deshi Jhumka with real flower ",
    "price": 299,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.37 PM (1).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 306,
    "name": "Baby pink Jhumka ",
    "price": 629,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.37 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real baby pink & green flower Jhumka also stainless ",
    "category": "jhumka"
  },
  {
    "id": 307,
    "name": "Vintage white flower Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.38 PM (1).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 308,
    "name": "Vintage golden & white flower Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.38 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 309,
    "name": "Deshi real flower Jhumka ",
    "price": 349,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.39 PM (1).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 310,
    "name": "Vintage Jhumka ",
    "price": 449,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.39 PM (2).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 311,
    "name": "Deshi Jhumka with rose petals ",
    "price": 349,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.39 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 312,
    "name": "Egypt Jhumka ",
    "price": 499,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.40 PM (1).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 313,
    "name": "Deshi Jhumka with rose flowers ",
    "price": 499,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.40 PM (2).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 314,
    "name": "vintage jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.40 PM (3).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 315,
    "name": "Deshi Jhumka ",
    "price": 349,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.40 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real rose flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 316,
    "name": "Vintage Jhumka ",
    "price": 299,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.41 PM (1).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 317,
    "name": "Baby pink Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.41 PM (2).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 318,
    "name": "Deshi Jhumka ",
    "price": 349,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.41 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 319,
    "name": "Pakistani jhumka in white ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.42 PM (1).jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 320,
    "name": "Shun flower Jhumka ",
    "price": 599,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.42 PM.jpeg"
    ],
    "tags": [
      "jhumka",
      "for-her"
    ],
    "description": "Handmade real  flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 321,
    "name": "Pink sunflower Jhumka ",
    "price": 399,
    "images": [
      "/jhumka/WhatsApp Image 2026-03-05 at 5.02.43 PM.jpeg"
    ],
    "tags": [
      "jhumka"
    ],
    "description": "Handmade real flower Jhumka & stainless ",
    "category": "jhumka"
  },
  {
    "id": 400,
    "name": "Green resin locket ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.07.54 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and real flower Jhumka also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 401,
    "name": "Vintage resin locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.07.55 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and real flower Jhumka also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 402,
    "name": "Green & light blue matching lockets ",
    "price": 549,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.12.54 PM (1).jpeg"
    ],
    "tags": [
      "pendants",
      "for-her",
      "for-him",
      "matching-sets"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 403,
    "name": "Navy Blue flower in silver ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.12.54 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "for-him",
      "pendants"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 404,
    "name": "Blue moon ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.39 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 405,
    "name": "The Green classy locket ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.39 PM (2).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 406,
    "name": "Rose locket in every shape ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.39 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "pendants",
      "matching-sets"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 407,
    "name": "Vintage locket",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.40 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 408,
    "name": "Rose and golden moon ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.40 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "necklaces"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 409,
    "name": "Green in locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.41 PM (1).jpeg"
    ],
    "tags": [],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 410,
    "name": "Lavender locket ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.41 PM (2).jpeg"
    ],
    "tags": [
      "pendants"
    ],
    "description": "Handmade with care and real flower also stainless chain ",
    "category": "pendants"
  },
  {
    "id": 411,
    "name": "Sky locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.41 PM.jpeg"
    ],
    "tags": [
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 412,
    "name": "Blue sky ",
    "price": 2490,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.42 PM (1).jpeg"
    ],
    "tags": [
      "pendants",
      "matching-sets"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 413,
    "name": "Matching lockets ",
    "price": 499,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.42 PM (2).jpeg"
    ],
    "tags": [
      "for-her",
      "for-him",
      "pendants",
      "matching-sets"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 414,
    "name": "Baby pink moon ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.42 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 415,
    "name": "Blue space ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.43 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 416,
    "name": "Blue silver moon ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.43 PM (2).jpeg"
    ],
    "tags": [
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 417,
    "name": "Small garden locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.43 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 418,
    "name": "The blue flower locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.44 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain \nYou can make it as a locket & bracelet as well",
    "category": "pendants"
  },
  {
    "id": 419,
    "name": "Vintage flower locket ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.44 PM (2).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 421,
    "name": "Any colour locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.45 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with real flowers and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 422,
    "name": "White sunflower locket ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.45 PM.jpeg"
    ],
    "tags": [
      "necklaces",
      "for-her"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 423,
    "name": "Baby pink locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.46 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "necklaces"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 424,
    "name": "The rose heart locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.46 PM (2).jpeg"
    ],
    "tags": [
      "for-her",
      "iconic",
      "new-in",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 425,
    "name": "Sky design moon locket ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.46 PM.jpeg"
    ],
    "tags": [
      "for-him",
      "for-her",
      "new-in",
      "necklaces"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 426,
    "name": "The garden lockets",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.47 PM (1).jpeg"
    ],
    "tags": [
      "for-her",
      "necklaces",
      "new-in"
    ],
    "description": "Handmade with real flowers and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 427,
    "name": "Ocean locket ",
    "price": 299,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.47 PM.jpeg"
    ],
    "tags": [
      "for-him",
      "for-her"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 429,
    "name": "Rose lockets for your love one",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.48 PM (2).jpeg"
    ],
    "tags": [
      "for-her",
      "for-him",
      "new-in",
      "necklaces"
    ],
    "description": "Available in every shape handmade with real rose flower and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 430,
    "name": "Rose in heart ",
    "price": 249,
    "images": [
      "/locket/WhatsApp Image 2026-03-05 at 4.20.48 PM.jpeg"
    ],
    "tags": [
      "for-her",
      "pendants"
    ],
    "description": "Handmade with care and stainless chain ",
    "category": "pendants"
  },
  {
    "id": 500,
    "name": "Flower garden bracelet ",
    "price": 249,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.11.24 PM (1).jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 501,
    "name": "White flower bracelet ",
    "price": 299,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.11.24 PM.jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her",
      "new-in"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 502,
    "name": "Rise heart bracelet ",
    "price": 249,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.11.25 PM (1).jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her",
      "new-in"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 503,
    "name": "Flower garden bracelet ",
    "price": 249,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.11.25 PM.jpeg"
    ],
    "tags": [
      "bracelets",
      "new-in"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 504,
    "name": "Garden bracelets",
    "price": 249,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.26.04 PM.jpeg"
    ],
    "tags": [
      "bracelets"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 505,
    "name": "Flower garden bracelet ",
    "price": 349,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.26.05 PM (1).jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her",
      "new-in"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 507,
    "name": "Sunflowers bracelets",
    "price": 299,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.26.05 PM (3).jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 508,
    "name": "Green flower bracelet ",
    "price": 249,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.26.05 PM.jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her",
      "new-in"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 509,
    "name": "Vintage bracelet ",
    "price": 299,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.26.06 PM (1).jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 510,
    "name": "Vintage bracelets",
    "price": 299,
    "images": [
      "/bracelet/WhatsApp Image 2026-03-05 at 4.26.06 PM.jpeg"
    ],
    "tags": [
      "bracelets",
      "for-her"
    ],
    "description": "Handmade with real flower and stainless chain also adjustable ",
    "category": "bracelets"
  },
  {
    "id": 600,
    "name": "Necklace ",
    "price": 1899,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 4.50.31 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "necklaces"
    ],
    "description": "Choice your design ",
    "category": "pearl"
  },
  {
    "id": 601,
    "name": "Pearl bracelet ",
    "price": 349,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.01 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "bracelets"
    ],
    "description": "Handmade bracelets with real pearl ",
    "category": "pearl"
  },
  {
    "id": 602,
    "name": "Pearl in golden ",
    "price": 349,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.03 PM (1).jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bracelets"
    ],
    "description": "Handmade bracelets with real pearl ",
    "category": "pearl"
  },
  {
    "id": 603,
    "name": "Pearl in silver ",
    "price": 349,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.03 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bracelets"
    ],
    "description": "Handmade bracelets with real pearl ",
    "category": "pearl"
  },
  {
    "id": 604,
    "name": "Mother of the pearl bracelet ",
    "price": 349,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.04 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bracelets",
      "new-in"
    ],
    "description": "Handmade bracelets with real pearl ",
    "category": "pearl"
  },
  {
    "id": 605,
    "name": "Mother of the pearl locket ",
    "price": 299,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.05 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "for-him",
      "new-in",
      "pendants"
    ],
    "description": "Real mother of the pearl locket in golden and silver ",
    "category": "pearl"
  },
  {
    "id": 606,
    "name": "Pearl necklace ",
    "price": 2789,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.06 PM (1).jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "necklaces"
    ],
    "description": "Handmade necklace with real pearl ",
    "category": "pearl"
  },
  {
    "id": 607,
    "name": "Pearl necklace ",
    "price": 2999,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.06 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "new-in",
      "necklaces"
    ],
    "description": "Handmade necklace with real pearl ",
    "category": "pearl"
  },
  {
    "id": 608,
    "name": "Pearl bracelet ",
    "price": 399,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.09 PM (1).jpeg"
    ],
    "tags": [
      "pearl"
    ],
    "description": "Made with real pearl with care and love ",
    "category": "pearl"
  },
  {
    "id": 609,
    "name": "Pearl bracelet ",
    "price": 399,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.09 PM (2).jpeg"
    ],
    "tags": [
      "pearl"
    ],
    "description": "Made with real pearl with care and love ",
    "category": "pearl"
  },
  {
    "id": 610,
    "name": "Rice pearl ring & bracelet ",
    "price": 898,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.09 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "new-in",
      "rings"
    ],
    "description": "Real rice pearl bracelet and ring you guys can make custom too !",
    "category": "pearl"
  },
  {
    "id": 611,
    "name": "Pearl in both silver & golden ",
    "price": 349,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.11 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bracelets"
    ],
    "description": "Handmade bracelets with real pearl ",
    "category": "pearl"
  },
  {
    "id": 612,
    "name": "",
    "price": 0,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.12 PM.jpeg"
    ],
    "tags": [
      "pearl"
    ],
    "description": "",
    "category": "pearl"
  },
  {
    "id": 613,
    "name": "",
    "price": 0,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.14 PM.jpeg"
    ],
    "tags": [
      "pearl"
    ],
    "description": "",
    "category": "pearl"
  },
  {
    "id": 614,
    "name": "",
    "price": 0,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.15 PM.jpeg"
    ],
    "tags": [
      "pearl"
    ],
    "description": "",
    "category": "pearl"
  },
  {
    "id": 615,
    "name": "White and rainbow pearl ",
    "price": 399,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.19 PM (1).jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bestseller",
      "pendants"
    ],
    "description": "Mother of the pearl lockets ",
    "category": "pearl"
  },
  {
    "id": 616,
    "name": "Rice pearl bracelet ",
    "price": 999,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.19 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bracelets"
    ],
    "description": "Natural rice pearl bracelet ",
    "category": "pearl"
  },
  {
    "id": 617,
    "name": "Mother of the pearl ",
    "price": 748,
    "images": [
      "/pearl/WhatsApp Image 2026-03-05 at 5.10.20 PM.jpeg"
    ],
    "tags": [
      "pearl",
      "for-her",
      "bracelets",
      "earrings"
    ],
    "description": "Earrings and bracelets with stainless chain ",
    "category": "pearl"
  },
  {
    "id": 700,
    "name": "Green stone bracelet ",
    "price": 299,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.53.56 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 701,
    "name": "Pearl bracelet ",
    "price": 399,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.53.57 PM (1).jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with pearl and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 702,
    "name": "Green stone bracelet ",
    "price": 299,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.53.57 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 703,
    "name": "Pearl bracelet ",
    "price": 399,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.53.58 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with pearls and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 704,
    "name": "Pearl bracelet ",
    "price": 399,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.53.59 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with pearl and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 705,
    "name": "",
    "price": 0,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.00 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "",
    "category": "stone-bracelet"
  },
  {
    "id": 706,
    "name": "Stone bracelets ",
    "price": 299,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.01 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 707,
    "name": "Box stone bracelet ",
    "price": 329,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.02 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 708,
    "name": "Stone bracelet ",
    "price": 599,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.04 PM (1).jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade stone bracelet ",
    "category": "stone-bracelet"
  },
  {
    "id": 709,
    "name": "Classic stone bracelet ",
    "price": 199,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.04 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone ",
    "category": "stone-bracelet"
  },
  {
    "id": 710,
    "name": "Pearl bracelet ",
    "price": 399,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.05 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with pearl and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 711,
    "name": "Pearl bracelet in silver & golden ",
    "price": 399,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.06 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets",
      "for-her"
    ],
    "description": "Handmade bracelets with pearl and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 712,
    "name": "Diamond cut stone bracelet ",
    "price": 349,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.07 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 713,
    "name": "Stone and Pearl bracelet ",
    "price": 349,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.09 PM (1).jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone, pearl and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 714,
    "name": "Mother of the pearl",
    "price": 3499,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.09 PM (2).jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "for-her",
      "iconic",
      "bestseller",
      "necklaces"
    ],
    "description": "Bracelet and necklace set ",
    "category": "stone-bracelet"
  },
  {
    "id": 715,
    "name": "Diamond cut bracelet ",
    "price": 349,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.09 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 716,
    "name": "Light Green stone bracelet ",
    "price": 299,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.12 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 717,
    "name": "Lavender stone bracelet ",
    "price": 299,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.14 PM (1).jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 718,
    "name": "Baby pink bracelet ",
    "price": 299,
    "images": [
      "/stone-bracelet/WhatsApp Image 2026-03-05 at 4.54.14 PM.jpeg"
    ],
    "tags": [
      "stone-bracelet",
      "bracelets"
    ],
    "description": "Handmade bracelets with stone and stainless chain ",
    "category": "stone-bracelet"
  },
  {
    "id": 800,
    "name": "Tree stone earring",
    "price": 499,
    "images": [
      "/earring/WhatsApp Image 2026-03-05 at 4.58.10 PM (1).jpeg"
    ],
    "tags": [
      "earrings",
      "for-her"
    ],
    "description": "Handmade with stone tree design earring ",
    "category": "earrings"
  },
  {
    "id": 801,
    "name": "Baby pink earring ",
    "price": 399,
    "images": [
      "/earring/WhatsApp Image 2026-03-05 at 4.58.10 PM.jpeg"
    ],
    "tags": [
      "earrings",
      "for-her"
    ],
    "description": "Handmade with real flower and stainless base earring ",
    "category": "earrings"
  },
  {
    "id": 802,
    "name": "",
    "price": 0,
    "images": [
      "/earring/WhatsApp Image 2026-03-05 at 4.58.11 PM (1).jpeg"
    ],
    "tags": [
      "earrings"
    ],
    "description": "",
    "category": "earrings"
  },
  {
    "id": 803,
    "name": "",
    "price": 0,
    "images": [
      "/earring/WhatsApp Image 2026-03-05 at 4.58.11 PM (2).jpeg"
    ],
    "tags": [
      "earrings"
    ],
    "description": "",
    "category": "earrings"
  },
  {
    "id": 804,
    "name": "Baby pink earring ",
    "price": 349,
    "images": [
      "/earring/WhatsApp Image 2026-03-05 at 4.58.11 PM.jpeg"
    ],
    "tags": [
      "earrings"
    ],
    "description": "Handmade with real flower with stainless earring ",
    "category": "earrings"
  },
  {
    "id": 805,
    "name": "",
    "price": 0,
    "images": [
      "/earring/WhatsApp Image 2026-03-05 at 4.58.12 PM.jpeg"
    ],
    "tags": [
      "earrings"
    ],
    "description": "",
    "category": "earrings"
  },
  {
    "id": 900,
    "name": "Sunflower petals bangles ",
    "price": 499,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.25 PM.jpeg"
    ],
    "tags": [
      "bangles",
      "for-her",
      "bestseller"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 901,
    "name": "Yellow rose and petals ",
    "price": 499,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.26 PM (1).jpeg"
    ],
    "tags": [
      "bangles"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 902,
    "name": "Rose flowers bangles ",
    "price": 549,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.26 PM (2).jpeg"
    ],
    "tags": [
      "bangles",
      "for-her"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 903,
    "name": "Rose petals with glitter",
    "price": 499,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.26 PM.jpeg"
    ],
    "tags": [
      "bangles"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 904,
    "name": "Rose with golden glitter",
    "price": 599,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.27 PM (1).jpeg"
    ],
    "tags": [
      "bangles",
      "for-her"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 905,
    "name": "Mix flower bangles ",
    "price": 549,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.27 PM (2).jpeg"
    ],
    "tags": [
      "bangles"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 906,
    "name": "Green flower bangles ",
    "price": 499,
    "images": [
      "/bangles/WhatsApp Image 2026-03-05 at 5.06.27 PM.jpeg"
    ],
    "tags": [
      "bangles"
    ],
    "description": "Handmade with real flower and resin ",
    "category": "bangles"
  },
  {
    "id": 907,
    "name": "Stone bracelet ",
    "description": "Cute handmade stone bracelet for everyday wear ",
    "price": 199,
    "category": "stone-bracelet",
    "tags": [
      "bracelets"
    ],
    "images": [
      "/stone-bracelet/DF255509-477F-491B-9596-23A2C4EF8150_Original.jpeg"
    ]
  },
  {
    "id": 908,
    "name": "Green stone bracelet ",
    "description": "Handmade stone bracelet for everyday wear ",
    "price": 199,
    "category": "stone-bracelet",
    "tags": [
      "bracelets"
    ],
    "images": [
      "/stone-bracelet/IMG_0371_Original.jpeg"
    ]
  },
  {
    "id": 909,
    "name": "Baby pink stone necklace ",
    "description": "Handmade stone necklace for everyday wear ",
    "price": 249,
    "category": "necklaces",
    "tags": [
      "for-her",
      "necklaces"
    ],
    "images": [
      "/necklaces/IMG_3185.jpeg"
    ]
  },
  {
    "id": 910,
    "name": "Stone necklaces ",
    "description": "Handmade stone necklace for every fits",
    "price": 249,
    "category": "necklaces",
    "tags": [
      "for-her",
      "necklaces"
    ],
    "images": [
      "/necklaces/IMG_3182.jpeg"
    ]
  },
  {
    "id": 911,
    "name": "Resin necklace ",
    "description": "Handmade with stainless chain and resin lockets ",
    "price": 499,
    "category": "necklaces",
    "tags": [
      "for-her",
      "necklaces"
    ],
    "images": [
      "/necklaces/IMG_3179.jpeg"
    ]
  },
  {
    "id": 912,
    "name": "Stone necklace ",
    "description": "Pick the colour for your fit ",
    "price": 599,
    "category": "necklaces",
    "tags": [
      "for-her",
      "necklaces",
      "stone-bracelet"
    ],
    "images": [
      "/necklaces/IMG_3181.jpeg"
    ]
  },
  {
    "id": 913,
    "name": "Pearl necklace ",
    "description": "Real pearl necklace for simple and classy look",
    "price": 3000,
    "category": "pearl",
    "tags": [
      "for-her",
      "necklaces",
      "pearl"
    ],
    "images": [
      "/pearl/IMG_3180.jpeg"
    ]
  },
  {
    "id": 914,
    "name": "Mother of the pearl set ",
    "description": "Earrings and bracelet ",
    "price": 1148,
    "category": "pearl",
    "tags": [
      "for-her",
      "iconic",
      "pearl",
      "earrings",
      "bracelets"
    ],
    "images": [
      "/rings/IMG_3291_Original.jpeg"
    ]
  },
  {
    "id": 915,
    "name": "Red garden lockets",
    "description": "Handmade with real flower and stainless chain",
    "price": 299,
    "category": "pendants",
    "tags": [
      "for-her",
      "new-in",
      "bestseller",
      "pendants"
    ],
    "images": [
      "/pendants/IMG_3314.jpeg"
    ]
  },
  {
    "id": 916,
    "name": "Lavender flower earrings ",
    "description": "Handmade with real lavender flower ",
    "price": 399,
    "category": "earrings",
    "tags": [
      "for-her",
      "new-in",
      "earrings"
    ],
    "images": [
      "/earrings/IMG_3052.jpeg"
    ]
  }
]