// Central place for the store's contact details so links stay consistent.
import type { Product } from "./products-data"

// Bangladesh WhatsApp number in international format, no "+" (wa.me expects digits only).
export const WHATSAPP_NUMBER = "8801328225528"

// Build a wa.me deep link with a prefilled order message for a given product.
export function whatsappOrderLink(product: Product): string {
  const message = `Hi! I'm interested in "${product.name}" (#${product.id}) — ${product.price} BDT. Is it available?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
