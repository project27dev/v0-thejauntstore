"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { products, filterProducts, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X, ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import FilterPanel from "@/components/filter-panel"

const PAGE_SIZE = 20

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Initialize selected tags from URL (?tags=gold,rings or legacy ?filter=rings)
  const getInitialTags = () => {
    const tags = searchParams.get("tags")
    if (tags) return tags.split(",").filter(Boolean)
    const legacy = searchParams.get("filter")
    if (legacy) return [legacy]
    return []
  }

  const [selectedTags, setSelectedTags] = useState<string[]>(getInitialTags)
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "")
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "")
  const [sortBy, setSortBy] = useState<"relevance" | "price-low" | "price-high">("relevance")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [page, setPage] = useState(Number(searchParams.get("page") ?? 1))
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync filters + page to URL
  const syncToUrl = useCallback(
    (tags: string[], min: string, max: string, p: number) => {
      const params = new URLSearchParams()
      if (tags.length > 0) params.set("tags", tags.join(","))
      if (min) params.set("minPrice", min)
      if (max) params.set("maxPrice", max)
      if (p > 1) params.set("page", String(p))
      const query = params.toString()
      router.replace(query ? `/products?${query}` : "/products", { scroll: false })
    },
    [router]
  )

  // Re-filter whenever state changes
  useEffect(() => {
    const min = minPrice !== "" ? Number(minPrice) : undefined
    const max = maxPrice !== "" ? Number(maxPrice) : undefined

    let result =
      selectedTags.length > 0 || min !== undefined || max !== undefined
        ? filterProducts({ tags: selectedTags, minPrice: min, maxPrice: max })
        : [...products]

    result = result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(result)
  }, [selectedTags, minPrice, maxPrice, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE)
  const pagedProducts = filteredProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleTagToggle = (tag: string) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    setSelectedTags(next)
    setPage(1)
    syncToUrl(next, minPrice, maxPrice, 1)
  }

  const handleMinPrice = (val: string) => {
    setMinPrice(val)
    setPage(1)
    syncToUrl(selectedTags, val, maxPrice, 1)
  }

  const handleMaxPrice = (val: string) => {
    setMaxPrice(val)
    setPage(1)
    syncToUrl(selectedTags, minPrice, val, 1)
  }

  const handleClearAll = () => {
    setSelectedTags([])
    setMinPrice("")
    setMaxPrice("")
    setPage(1)
    syncToUrl([], "", "", 1)
  }

  const handlePageChange = (p: number) => {
    setPage(p)
    syncToUrl(selectedTags, minPrice, maxPrice, p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const activeFilterCount = selectedTags.length + (minPrice ? 1 : 0) + (maxPrice ? 1 : 0)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedTags.length > 0 ? "Browse Products" : "All Products"}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted jewelry collection featuring pressed botanicals and natural elements
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toolbar: count + mobile filter toggle + sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <p className="text-gray-600">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={handleClearAll}
                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 border border-gray-300 rounded-full px-2 py-0.5 transition-colors"
              >
                <X className="h-3 w-3" />
                Clear {activeFilterCount} filter{activeFilterCount !== 1 ? "s" : ""}
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden flex items-center gap-2"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </Button>

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

        <div className="flex gap-8">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterPanel
              selectedTags={selectedTags}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onTagToggle={handleTagToggle}
              onMinPriceChange={handleMinPrice}
              onMaxPriceChange={handleMaxPrice}
              onClearAll={handleClearAll}
            />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products match your filters.</p>
                <Button onClick={handleClearAll} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {pagedProducts.map((product) => (
                    <div key={product.id} className="group">
                      <div className="aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-serif text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                        <p className="font-semibold text-gray-900">{product.price} BDT</p>
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                      className="p-2 rounded-md border border-gray-300 disabled:opacity-40 hover:bg-gray-50 transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                      .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                        if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("…")
                        acc.push(p)
                        return acc
                      }, [])
                      .map((p, idx) =>
                        p === "…" ? (
                          <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 select-none">…</span>
                        ) : (
                          <button
                            key={p}
                            onClick={() => handlePageChange(p as number)}
                            className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                              page === p
                                ? "bg-gray-900 text-white"
                                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {p}
                          </button>
                        )
                      )}

                    <button
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === totalPages}
                      className="p-2 rounded-md border border-gray-300 disabled:opacity-40 hover:bg-gray-50 transition-colors"
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

                <p className="text-center text-sm text-gray-500 mt-3">
                  Page {page} of {totalPages} &mdash; {filteredProducts.length} products
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-gray-900 text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <FilterPanel
              selectedTags={selectedTags}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onTagToggle={(tag) => { handleTagToggle(tag) }}
              onMinPriceChange={handleMinPrice}
              onMaxPriceChange={handleMaxPrice}
              onClearAll={handleClearAll}
            />
            <div className="mt-6">
              <Button className="w-full" onClick={() => setMobileFiltersOpen(false)}>
                View {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingContact />
    </div>
  )
}
