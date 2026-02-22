"use client"

import { useState } from "react"
import { products as initialProducts, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"

const categories = ["rings", "necklaces", "earrings", "bracelets", "pendants", "jhumka"]

const tagOptions: { [key: string]: string } = {
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
  jhumka: "Jhumka",
  "matching-sets": "Matching Sets",
  gold: "Gold Jewelry",
  silver: "Silver Jewelry",
  "pressed-flowers": "Pressed Flower Jewelry",
  "natural-elements": "Natural Elements",
  resin: "Resin",
  minimalist: "Minimalist",
  botanical: "Botanical",
  handmade: "Handmade",
}

export default function AdminProductsGrid() {
  const [products, setProducts] = useState<Product[]>([...initialProducts])

  const updateProduct = (id: number, field: keyof Product, value: any) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel: Edit Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm overflow-hidden p-4 bg-white flex flex-col"
          >
            {/* Image Preview */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover rounded mb-4 border"
            />

            {/* Name */}
            <div className="mb-2">
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            {/* Description */}
            <div className="mb-2">
              <label className="block font-medium mb-1">Description</label>
              <textarea
                value={product.description}
                onChange={(e) =>
                  updateProduct(product.id, "description", e.target.value)
                }
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            {/* Price */}
            <div className="mb-2">
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  updateProduct(product.id, "price", Number(e.target.value))
                }
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            {/* Category */}
            <div className="mb-2">
              <label className="block font-medium mb-1">Category</label>
              <select
                value={product.category}
                onChange={(e) => updateProduct(product.id, "category", e.target.value)}
                className="border rounded px-2 py-1 w-full"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div className="mb-2">
              <label className="block font-medium mb-1">Tags</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(tagOptions).map(([key, label]) => {
                  const selected = product.tags.includes(key)
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        const newTags = selected
                          ? product.tags.filter((t) => t !== key)
                          : [...product.tags, key]
                        updateProduct(product.id, "tags", newTags)
                      }}
                      className={`px-3 py-1 rounded text-sm border ${
                        selected
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-700 border-gray-300"
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

<Button
  onClick={async () => {
    if (!confirm("Commit these updates to GitHub?")) return

    console.log("Sending products:", products)

    try {
      const response = await fetch("/api/update-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ editableProducts: products }),
      })

      console.log("Response status:", response.status)
      const data = await response.json()
      console.log("Response data:", data)
      
      if (data.success) {
        alert("✅ Products updated on GitHub!")
      } else {
        alert("❌ Update failed: " + data.error)
      }
    } catch (err) {
      console.error("Error:", err)
      alert("❌ Error updating GitHub: " + (err as Error).message)
    }
  }}
  className="mt-6"
>
  Save & Commit to GitHub
</Button>



    </div>
  )
}