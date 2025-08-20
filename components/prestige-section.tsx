import { Button } from "@/components/ui/button"

export default function PrestigeSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/elegant-woman-jewelry.png"
            alt="Model wearing prestige jewelry"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">The Prestige Collection</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Discover Exquisite Handcrafted Jewelry Made of Authentic 925 Sterling Silver
          </p>
          <Button className="bg-black text-white px-8 py-3 hover:bg-gray-800">Shop</Button>
        </div>
      </div>
    </section>
  )
}
