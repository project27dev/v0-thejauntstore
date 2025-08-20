"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const images = [
    { src: "/hero-woman-rings.jpeg", alt: "Woman showing gold rings" },
    { src: "/hero-woman-pearls.jpeg", alt: "Woman wearing pearl necklace" },
  ]

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      5000
    )
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background slideshow */}
      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
          {/* optional dark overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16">
        <div className="text-white">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4">
            New In
          </h2>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
