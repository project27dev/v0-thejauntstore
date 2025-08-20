import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Golden Groove Band",
    price: "3,850 RON",
    image: "/gold-grooved-wedding-band.png",
  },
  {
    name: "Ovals Aura",
    price: "5,850 RON",
    image: "/gold-oval-ruby-ring.png",
  },
  {
    name: "Geometric Botanical Collection",
    price: "8,950 RON",
    image: "/jewelry-geometric-collection.jpeg", // replaced placeholder with geometric jewelry collection
  },
  {
    name: "Capsule Botanical Pendants",
    price: "6,950 RON",
    image: "/jewelry-capsule-pendants.jpeg", // replaced placeholder with capsule-shaped pendants
  },
]

export default function IconicSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl font-light mb-12 text-left">Iconic</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-100 rounded-full aspect-square mb-4 overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium text-sm mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="link" className="text-sm underline">
          View all
        </Button>
      </div>
    </section>
  )
}
