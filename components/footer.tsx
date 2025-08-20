import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-4">THEJAUNTSTORE</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Handcrafted botanical jewelry featuring pressed flowers and natural elements, creating unique pieces that
              celebrate nature's beauty.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=new-in" className="text-gray-300 hover:text-white transition-colors">
                  New In
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=bestsellers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/the-prestige-collection"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  The Prestige Collection
                </Link>
              </li>
              <li>
                <Link href="/products?category=iconic" className="text-gray-300 hover:text-white transition-colors">
                  Iconic
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=rings" className="text-gray-300 hover:text-white transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/products?category=necklaces" className="text-gray-300 hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/products?category=earrings" className="text-gray-300 hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="text-gray-300 hover:text-white transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-gray-300 hover:text-white transition-colors">
                  Care Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 TheJauntStore. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
