"use client"

import { useState } from "react"

// Image gallery for a product detail page: large active image + thumbnail strip.
export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const imgs = images.length > 0 ? images : ["/placeholder.svg"]
  const [active, setActive] = useState(0)
  const activeSrc = imgs[active] ?? imgs[0]

  return (
    <div>
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={activeSrc || "/placeholder.svg"}
          alt={name}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {imgs.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {imgs.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                i === active ? "border-gray-900" : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`View image ${i + 1} of ${imgs.length}`}
              aria-current={i === active}
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`${name} thumbnail ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
