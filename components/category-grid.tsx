const categories = [
  {
    name: "Rings",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Pendants",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Necklaces",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Earrings",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Bracelets",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Necklaces",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-medium text-lg">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
