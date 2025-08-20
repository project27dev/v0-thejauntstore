"use client"

import Image from "next/image"

export default function GridScrollSection() {
  const images = [
    { src: "/hero-woman-rings.jpeg", alt: "Rings" },
    { src: "/hero-woman-pearls.jpeg", alt: "Pearls" },
  ]

  return (
    <section className="w-full">

      {/* Mobile: stacked 1x4 */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {[images[0], images[1], images[1], images[0]].map((img, i) => (
          <div key={i} className="relative w-full aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Desktop: 2x2 with sticky top row */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 h-[200vh]">
        {/* Top row sticky */}
        <div className="col-span-2 sticky top-0 grid grid-cols-2 h-screen">
          <div className="relative h-screen">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-screen">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row scrolls up */}
        <div className="relative h-screen">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-screen">
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
