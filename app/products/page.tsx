"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { products, getProductsByTag, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [sortBy, setSortBy] = useState<"relevance" | "price-low" | "price-high">("relevance")

  useEffect(() => {
    let filtered = products

    if (filter) {
      filtered = getProductsByTag(filter)
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "relevance":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(sorted)
  }, [filter, sortBy])

  const getPageTitle = () => {
    if (!filter) return "All Products"

    const titleMap: { [key: string]: string } = {
      "for-her": "For Her",
      "for-him": "For Him",
      "new-in": "New In",
      bestseller: "Bestsellers",
      iconic: "Iconic Collection",
      showcase: "Showcase",
      rings: "Rings",
      necklaces: "Necklaces",
      earrings: "Earrings",
      bracelets: "Bracelets",
      pendants: "Pendants",
      "matching-sets": "Matching Sets",
      gold: "Gold Jewelry",
      silver: "Silver Jewelry",
      "pressed-flowers": "Pressed Flower Jewelry",
      "natural-elements": "Natural Elements",
      resin: "Resin"
    }

    return titleMap[filter] || filter.charAt(0).toUpperCase() + filter.slice(1)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">{getPageTitle()}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted jewelry collection featuring pressed botanicals and natural elements
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-600">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "relevance" | "price-low" | "price-high")}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found for this filter.</p>
            <Button onClick={() => (window.location.href = "/products")} className="mt-4">
              View All Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
<div className="aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <p className="font-semibold text-gray-900">${product.price}</p>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <FloatingContact />
    </div>
  )
}
