"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TAG_GROUPS, type TagGroup } from "@/lib/products"

const TAG_LABELS: Record<string, string> = {
  rings: "Rings",
  necklaces: "Necklaces",
  earrings: "Earrings",
  bracelets: "Bracelets",
  pendants: "Pendants",
  jhumka: "Jhumka",
  bangles: "Bangles",
  "stone-bracelet": "Stone Bracelet",
  "matching-sets": "Matching Sets",
  "new-in": "New In",
  bestseller: "Bestseller",
  iconic: "Iconic",
  showpiece: "Show Piece",
  gold: "Gold",
  silver: "Silver",
  "pressed-flowers": "Pressed Flowers",
  resin: "Resin",
  pearl: "Pearl",
  metals: "Metals",
  "natural-elements": "Natural Elements",
  botanical: "Botanical",
  minimalist: "Minimalist",
  handmade: "Handmade",
  "for-her": "For Her",
  "for-him": "For Him",
}

interface FilterPanelProps {
  selectedTags: string[]
  minPrice: string
  maxPrice: string
  onTagToggle: (tag: string) => void
  onMinPriceChange: (val: string) => void
  onMaxPriceChange: (val: string) => void
  onClearAll: () => void
}

function FilterSection({
  title,
  tags,
  selectedTags,
  onTagToggle,
}: {
  title: string
  tags: readonly string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-sm font-medium text-gray-900 mb-2"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && (
        <div className="space-y-2">
          {tags.map((tag) => (
            <label key={tag} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => onTagToggle(tag)}
                className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {TAG_LABELS[tag] ?? tag}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function FilterPanel({
  selectedTags,
  minPrice,
  maxPrice,
  onTagToggle,
  onMinPriceChange,
  onMaxPriceChange,
  onClearAll,
}: FilterPanelProps) {
  const hasFilters = selectedTags.length > 0 || minPrice !== "" || maxPrice !== ""

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-gray-900">Filters</h2>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-xs text-gray-500 hover:text-gray-900 underline transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Active filter chips */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs bg-gray-900 text-white px-2 py-1 rounded-full"
            >
              {TAG_LABELS[tag] ?? tag}
              <button onClick={() => onTagToggle(tag)} className="hover:opacity-70 transition-opacity">
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Tag groups */}
      {(Object.entries(TAG_GROUPS) as [TagGroup, readonly string[]][]).map(([group, tags]) => (
        <FilterSection
          key={group}
          title={group}
          tags={tags}
          selectedTags={selectedTags}
          onTagToggle={onTagToggle}
        />
      ))}

      {/* Price range */}
      <div className="border-b border-gray-200 py-4">
        <p className="text-sm font-medium text-gray-900 mb-3">Price (BDT)</p>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <span className="text-gray-400 text-sm">–</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
      </div>
    </div>
  )
}
