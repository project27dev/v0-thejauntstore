import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "Botanical Pendant Collection",
    price: "6,550 RON",
    image: "/3.jpg", // replaced placeholder with actual botanical jewelry image
  },
  {
    name: "Pressed Flower Ovals",
    price: "From 5,250 RON",
    image: "/4.jpg", // replaced placeholder with oval pendants image
  },
  {
    name: "Colorful Flower Pendants",
    price: "5,950 RON",
    image: "/5.jpg", // replaced placeholder with colorful flower jewelry
  },
  {
    name: "Heart & Nature Pendants",
    price: "From 6,750 RON",
    image: "/6.jpg", // replaced placeholder with heart-shaped pendants
  },
]

export default function NewInSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-8xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-100 rounded-md aspect-square mb-4 overflow-hidden">
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
        <Link href="/products?filter=new-in">
          <Button variant="link" className="text-sm underline">
            View all
          </Button>
        </Link>
      </div>
    </section>
  )
}
