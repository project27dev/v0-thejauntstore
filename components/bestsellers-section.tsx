const bestsellers = [
  {
    name: "Dark Botanical Collection",
    image: "/bestseller1.jpeg", // replaced placeholder with dark botanical jewelry
  },
  {
    name: "Stone Bead Necklace",
    image: "/bestseller2.jpeg", // replaced placeholder with stone necklace
  },
  {
    name: "Pressed Flower Pendants",
    image: "/bestseller3.jpeg", // replaced placeholder with colorful flower jewelry
  },
]

export default function BestsellersSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl font-light mb-12 text-left">Bestsellers</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bestsellers.map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-100 rounded-lg aspect-square mb-4 overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-medium text-lg">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
