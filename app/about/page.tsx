import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "About Us | TheJauntStore",
  description:
    "Discover the story behind TheJauntStore — handcrafted botanical jewelry made with pressed flowers and natural elements.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-50 py-24 px-4 text-center overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Worn with intention,
              <br />
              <span className="italic">made with love.</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              We create handcrafted botanical jewelry that captures the quiet beauty of nature — pressed flowers, natural
              elements, and resin — transformed into pieces you'll treasure forever.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Label */}
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 text-center mb-14">The person behind it all</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
              {/* Portrait */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-full max-w-sm mx-auto md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src="/owner.jpeg"
                    alt="Founder of TheJauntStore"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-serif text-xl text-gray-900">MD Ibne Omar Jishan</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Artist & Owner · TheJauntStore</p>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-6 pt-0 md:pt-4">
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 leading-snug">
                    One person,
                    <br />
                    <span className="italic">one pair of hands.</span>
                  </h2>
                  <div className="mt-4">
                    <p className="font-serif text-lg text-gray-900">MD Ibne Omar Jishan</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Artist & Owner</p>
                  </div>
                </div>
                <div className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    TheJauntStore is the work of a single person — someone who started pressing flowers out of pure
                    curiosity and ended up building an entire jewelry studio from the ground up. No team, no factory.
                    Just a workbench, the right tools, and a deep love for what nature leaves behind.
                  </p>
                  <p>
                    It started simply: collecting flowers on walks, drying them between the pages of old books, and
                    wondering what it would feel like to carry that beauty every day. The first pieces were made for
                    friends and family. Then strangers started asking. And TheJauntStore was born.
                  </p>
                  <p>
                    Every ring, necklace, and earring is still made by hand — personally. Each petal is placed with
                    intention, each resin pour is timed carefully, each setting is polished before it ships. There are
                    no shortcuts, because the whole point is the process.
                  </p>
                  <p className="text-gray-800 font-medium italic border-l-2 border-gray-300 pl-4">
                    "I make jewelry because I want people to wear something that feels alive — something that started
                    as a wildflower and ended up close to your soul."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">What we stand for</p>
              <h2 className="font-serif text-4xl font-light text-gray-900">Our values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Handcrafted with care",
                  description:
                    "Every piece is made by hand in our studio. We take pride in the slow, intentional process that goes into each creation — no mass production, ever.",
                },
                {
                  title: "Nature, preserved",
                  description:
                    "We source our botanicals responsibly and sustainably, working in harmony with the seasons. Each petal and leaf is treated with the reverence it deserves.",
                },
                {
                  title: "Uniquely yours",
                  description:
                    "Because natural materials are inherently varied, your piece will never look exactly like anyone else's. We celebrate that imperfection as the point.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center space-y-4 p-8 bg-white rounded-2xl">
                  <h3 className="font-serif text-xl font-light text-gray-900">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craft Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">The process</p>
              <h2 className="font-serif text-4xl font-light text-gray-900 leading-snug">
                From garden to gold
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Our materials tell their own story. We work with pressed wildflowers, dried petals, and carefully
                  collected natural elements — each one selected for its color, shape, and character.
                </p>
                <p>
                  These are set alongside sterling silver and gold-plated metals using artisan techniques refined over
                  years of practice. The result is jewelry that bridges the natural world and fine craftsmanship.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {["Pressed Flowers", "Natural Elements", "Gold & Silver", "Resin"].map((material) => (
                  <div key={material} className="border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 text-center">
                    {material}
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 order-1 md:order-2">
              <img
                src="/about2.jpg"
                alt="Our materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-black text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Pieces crafted" },
                { number: "1200+", label: "Botanicals used" },
                { number: "100%", label: "Handmade" },
                { number: "1", label: "Of a kind each" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="font-serif text-4xl md:text-5xl font-light">{stat.number}</p>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Ready to explore?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900">
              Find your piece of nature.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Browse our collections and discover jewelry that carries a little piece of the natural world with you
              wherever you go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/products"
                className="inline-block bg-black text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-gray-800 transition-colors"
              >
                Shop All Jewelry
              </Link>
              <Link
                href="/products?filter=new-in"
                className="inline-block border border-black text-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-black hover:text-white transition-colors"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
