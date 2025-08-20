"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    { src: "/hero-woman-rings.jpeg", alt: "Woman showing gold rings" },
    { src: "/hero-woman-pearls.jpeg", alt: "Woman wearing pearl necklace" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load image: ${image.src}`)
                e.currentTarget.style.display = "none"
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16">
        <div className="text-white">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4">New In</h2>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
