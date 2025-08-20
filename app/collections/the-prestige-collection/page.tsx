"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import NewsletterPopup from "@/components/newsletter-popup"
import { ChevronDown } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Botanical Signet Ring",
    price: "6,550 BDT",
    image: "/jewelry-collection-1.jpeg",
  },
  {
    id: 2,
    name: "Pressed Flower Pendant",
    price: "From 3,250 BDT",
    image: "/jewelry-pendants-oval.jpeg",
  },
  {
    id: 3,
    name: "Nature Earrings",
    price: "5,650 BDT",
    image: "/jewelry-colorful-flowers.jpeg",
  },
  {
    id: 4,
    name: "Gold Necklace",
    price: "From 6,750 BDT",
    image: "/jewelry-stone-necklace.jpeg",
  },
  {
    id: 5,
    name: "Botanical Stacking Ring",
    price: "7,600 BDT",
    image: "/jewelry-dark-botanicals.jpeg",
  },
  {
    id: 6,
    name: "Floral Ring",
    price: "5,600 BDT",
    image: "/jewelry-heart-pendants.jpeg",
  },
  {
    id: 7,
    name: "Organic Signet Ring",
    price: "6,500 BDT",
    image: "/jewelry-capsule-pendants.jpeg",
  },
  {
    id: 8,
    name: "Unity Ring",
    price: "8,600 BDT",
    image: "/jewelry-geometric-collection.jpeg",
  },
  {
    id: 9,
    name: "Oryx Ring",
    price: "5,200 BDT",
    image: "/jewelry-collection-1.jpeg",
  },
  {
    id: 10,
    name: "Cobalt Ring",
    price: "5,800 BDT",
    image: "/jewelry-pendants-oval.jpeg",
  },
  {
    id: 11,
    name: "Verdant Ring",
    price: "5,450 BDT",
    image: "/jewelry-colorful-flowers.jpeg",
  },
  {
    id: 12,
    name: "Scarlet Ring",
    price: "5,650 BDT",
    image: "/jewelry-dark-botanicals.jpeg",
  },
  {
    id: 13,
    name: "Coral Ring",
    price: "5,450 BDT",
    image: "/jewelry-heart-pendants.jpeg",
  },
  {
    id: 14,
    name: "Palladium Ring",
    price: "5,900 BDT",
    image: "/jewelry-stone-necklace.jpeg",
  },
  {
    id: 15,
    name: "Black Signet Ring",
    price: "5,950 BDT",
    image: "/jewelry-capsule-pendants.jpeg",
  },
  {
    id: 16,
    name: "Oceana Pendant",
    price: "4,100 BDT",
    image: "/jewelry-geometric-collection.jpeg",
  },
]

export default function PrestigeCollectionPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortBy, setSortBy] = useState("Featured")

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-4">The Prestige Collection</h1>

            {/* Sort and Filter */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">23 products</div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border-none text-sm text-gray-900 pr-8 focus:outline-none cursor-pointer"
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-full overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-sm md:text-base text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <NewsletterPopup />
    </div>
  )
}
