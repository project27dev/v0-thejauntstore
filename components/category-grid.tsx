import Link from "next/link"

const categories = [
  {
    name: "Rings",
    image: "/cat_ring.jpeg",
    href: "/products?filter=rings",
  },
  {
    name: "Pendants",
    image: "/cat_pendent.jpeg",
    href: "/products?filter=pendants",
  },
  {
    name: "Necklaces",
    image: "/cat_necklace.jpeg",
    href: "/products?filter=necklaces",
  },
  {
    name: "Earrings",
    image: "/cat_earring.jpeg",
    href: "/products?filter=earrings",
  },
  {
    name: "Bracelets",
    image: "/cat_bracelet.jpeg",
    href: "/products?filter=bracelets",
  },
  {
    name: "Jhumpka",
    image: "/cat_jhumpka.jpeg",
    href: "/products?filter=jhumka",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="relative group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-medium text-lg">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
