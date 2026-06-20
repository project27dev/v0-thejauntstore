import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { products } from "@/lib/products"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ProductGallery from "@/components/product-gallery"
import OrderWhatsAppButton from "@/components/order-whatsapp-button"

// Pre-render a static page for every product (data is bundled, no runtime fetch).
export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => String(p.id) === id)
  if (!product) return { title: "Product not found — The Jaunt Store" }
  return {
    title: `${product.name} — The Jaunt Store`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => String(p.id) === id)
  if (!product) notFound()

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb / back */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to products
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div>
            <h1 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">{product.name}</h1>
            <p className="mt-3 text-2xl font-semibold text-gray-900">{product.price} BDT</p>

            {product.description && (
              <p className="mt-6 leading-relaxed text-gray-600">{product.description}</p>
            )}

            {product.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/products?tags=${encodeURIComponent(tag)}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-200"
                  >
                    {tag.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-8">
              <OrderWhatsAppButton product={product} className="w-full sm:w-auto" />
              <p className="mt-3 text-sm text-gray-500">
                No online checkout — tap above to order or ask about this piece on WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-light text-gray-900">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} className="group block">
                  <div className="aspect-[2/3] overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={p.images[0] || "/placeholder.svg"}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 text-center font-serif text-base font-medium text-gray-900">{p.name}</h3>
                  <p className="text-center text-sm text-gray-600">{p.price} BDT</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <FloatingContact />
    </div>
  )
}
