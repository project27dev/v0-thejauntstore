"use client"

import Image from "next/image"

export default function GridScrollSection() {
  const images = [
    { src: "/animation_image1.jpg", alt: "Rings" },
      { src: "/animation_image2.jpg", alt: "Rings" },
        { src: "/animation_image3.jpg", alt: "Rings" },
          { src: "/animation_image4.jpg", alt: "Rings" }
  ]

  return (
    <section className="w-full">

      {/* Mobile: stacked 1x4 */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {[images[0], images[1], images[2], images[3]].map((img, i) => (
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
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-screen">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
