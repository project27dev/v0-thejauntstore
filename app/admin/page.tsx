"use client"

import { useState, useMemo } from "react"
import { products as initialProducts, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Search, ChevronLeft, ChevronRight, Trash2, X, Plus, Loader2 } from "lucide-react"

const categories = ["rings", "necklaces", "earrings", "bracelets", "pendants", "jhumka", "pearl", "bangles", "stone-bracelet"]

const tagOptions: { [key: string]: string } = {
  "for-her": "For Her",
  "for-him": "For Him",
  "new-in": "New In",
  bestseller: "Bestsellers",
  iconic: "Iconic Collection",
  showpiece: "Show Piece",
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
  pearl: "Pearl",
  metals: "Metals",
  bangles: "Bangles",
  "stone-bracelet": "Stone Bracelet",
}

const PAGE_SIZE = 12

export default function AdminProductsGrid() {
  const [products, setProducts] = useState<Product[]>([...initialProducts])
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [saving, setSaving] = useState(false)

  const [showAddModal, setShowAddModal] = useState(false)
  const [addingProduct, setAddingProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0, category: "rings", tags: [] as string[], imageFile: null as File | null, imagePreview: "" })

  const updateProduct = (id: number, field: keyof Product, value: any) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    )
  }

  const deleteProduct = async (product: Product) => {
    if (!confirm(`Delete "${product.name}" (#${product.id})? This will also delete its images from GitHub.`)) return
    const filtered = products.filter((p) => p.id !== product.id)
    setProducts(filtered)
    try {
      const response = await fetch("/api/delete-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, images: product.images, editableProducts: filtered }),
      })
      const data = await response.json()
      if (!data.success) {
        setProducts(products) // restore on failure
        alert("Failed to delete: " + data.error)
      }
    } catch (err) {
      setProducts(products) // restore on failure
      alert("Error: " + (err as Error).message)
    }
  }


  const addProduct = async () => {
    if (!newProduct.name.trim()) return alert("Product name is required.")
    setAddingProduct(true)
    try {
      let imagePath = ""
      if (newProduct.imageFile) {
        const formData = new FormData()
        formData.append("file", newProduct.imageFile)
        formData.append("category", newProduct.category)
        const res = await fetch("/api/upload-image", { method: "POST", body: formData })
        const data = await res.json()
        if (!data.success) { alert("Image upload failed: " + data.error); return }
        imagePath = data.path
      }
      const newId = Math.max(0, ...products.map((p) => p.id)) + 1
      const product = { id: newId, name: newProduct.name, description: newProduct.description, price: newProduct.price, category: newProduct.category, tags: newProduct.tags, images: imagePath ? [imagePath] : [] }
      const updatedProducts = [...products, product]

      // Commit to GitHub immediately
      const res = await fetch("/api/update-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ editableProducts: updatedProducts }),
      })
      const data = await res.json()
      if (!data.success) { alert("Failed to save to GitHub: " + data.error); return }

      setProducts(updatedProducts)
      setNewProduct({ name: "", description: "", price: 0, category: "rings", tags: [], imageFile: null, imagePreview: "" })
      setShowAddModal(false)
    } catch (err) {
      alert("Error: " + (err as Error).message)
    } finally {
      setAddingProduct(false)
    }
  }

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === "all" || p.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [products, search, activeCategory])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const handleFilterChange = (cat: string) => {
    setActiveCategory(cat)
    setPage(1)
  }

  const handleSearch = (val: string) => {
    setSearch(val)
    setPage(1)
  }

  const handleSave = async () => {
    if (!confirm("Commit these updates to GitHub?")) return
    setSaving(true)
    try {
      const response = await fetch("/api/update-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ editableProducts: products }),
      })
      const data = await response.json()
      if (data.success) {
        alert("✅ Products updated on GitHub!")
      } else {
        alert("❌ Update failed: " + data.error)
      }
    } catch (err) {
      alert("❌ Error: " + (err as Error).message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setShowAddModal(true)}>
                <Plus className="h-4 w-4 mr-1" /> Add Product
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save & Commit to GitHub"}
              </Button>
            </div>
          </div>

          {/* Search + count */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <span className="text-sm text-gray-500">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
            {["all", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                <span className="ml-1 text-xs opacity-70">
                  ({cat === "all"
                    ? products.length
                    : products.filter((p) => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {paginated.length === 0 ? (
          <div className="text-center py-24 text-gray-400">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-sm overflow-hidden bg-white flex flex-col"
              >
                {/* Main image */}
                {product.images[0] && (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />
                )}

                <div className="p-4 flex flex-col gap-3 flex-1">
                  {/* ID badge + delete */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">#{product.id}</span>
                    <button
                      type="button"
                      onClick={() => deleteProduct(product)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                      title="Delete product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">NAME</label>
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => updateProduct(product.id, "name", e.target.value)}
                      className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">DESCRIPTION</label>
                    <textarea
                      value={product.description}
                      onChange={(e) => updateProduct(product.id, "description", e.target.value)}
                      rows={2}
                      className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 resize-none"
                    />
                  </div>

                  {/* Price + Category row */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">PRICE (BDT)</label>
                      <input
                        type="number"
                        value={product.price}
                        onChange={(e) => updateProduct(product.id, "price", Number(e.target.value))}
                        className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">CATEGORY</label>
                      <select
                        value={product.category}
                        onChange={(e) => updateProduct(product.id, "category", e.target.value)}
                        className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c.charAt(0).toUpperCase() + c.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">TAGS</label>
                    <div className="flex flex-wrap gap-1">
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
                            className={`px-2 py-0.5 rounded text-xs border transition-colors ${
                              selected
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
                            }`}
                          >
                            {label}
                          </button>
                        )
                      })}
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="p-2 rounded border border-gray-300 disabled:opacity-40 hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded text-sm font-medium border transition-colors ${
                    p === safePage
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="p-2 rounded border border-gray-300 disabled:opacity-40 hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Add New Product</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">IMAGE</label>
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500 transition-colors overflow-hidden">
                {newProduct.imagePreview ? (
                  <img src={newProduct.imagePreview} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <Plus className="h-8 w-8" />
                    <span className="text-sm">Click to upload image</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) setNewProduct((p) => ({ ...p, imageFile: file, imagePreview: URL.createObjectURL(file) }))
                  }}
                />
              </label>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">NAME *</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct((p) => ({ ...p, name: e.target.value }))}
                placeholder="Product name"
                className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">DESCRIPTION</label>
              <textarea
                value={newProduct.description}
                onChange={(e) => setNewProduct((p) => ({ ...p, description: e.target.value }))}
                rows={2}
                placeholder="Product description"
                className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 resize-none"
              />
            </div>

            {/* Price + Category */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1">PRICE (BDT)</label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct((p) => ({ ...p, price: Number(e.target.value) }))}
                  className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-500 mb-1">CATEGORY</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct((p) => ({ ...p, category: e.target.value }))}
                  className="border rounded px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">TAGS</label>
              <div className="flex flex-wrap gap-1">
                {Object.entries(tagOptions).map(([key, label]) => {
                  const selected = newProduct.tags.includes(key)
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setNewProduct((p) => ({ ...p, tags: selected ? p.tags.filter((t) => t !== key) : [...p.tags, key] }))}
                      className={`px-2 py-0.5 rounded text-xs border transition-colors ${selected ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setShowAddModal(false)} disabled={addingProduct}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={addProduct} disabled={addingProduct}>
                {addingProduct ? <><Loader2 className="h-4 w-4 mr-1 animate-spin" /> Adding...</> : "Add Product"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
