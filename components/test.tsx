"use client"

import Image from "next/image"

export default function GridScrollSection() {
  const images = [
    { src: "/hero-woman-rings.jpeg", alt: "Rings" },
    { src: "/hero-woman-pearls.jpeg", alt: "Pearls" },
  ]

  return (
    <section className="w-full">
      {/* Outer grid takes 200vh so bottom row can scroll up */}
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[100vh] h-[200vh] md:h-[200vh]">
        
        {/* Top row (2 images side by side) → sticky as one unit */}
        <div className="md:col-span-2 sticky top-0 grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="relative">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row (2 images side by side) → scroll up */}
        <div className="relative">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
