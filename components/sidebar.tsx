"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        shadow-lg
      `}
      >
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/bee-logo.png" alt="The Jaunt Store" className="h-6 w-6" />
                <h2 className="font-serif text-lg font-bold">THEJAUNTSTORE</h2>
              </Link>

            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">SHOP BY</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/products?filter=for-her"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    For Her
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=for-him"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    For Him
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">COLLECTIONS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/products?filter=new-in"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    New In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=bestseller"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=iconic"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Iconic
                  </Link>
                  
                </li>
                      <li>
                  <Link
                    href="/products?filter=showcase"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Showcase
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">JEWELRY</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/products?filter=rings"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Rings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=necklaces"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Necklaces
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=earrings"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Earrings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=bracelets"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Bracelets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=pendants"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Pendants
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">MATERIALS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/products?filter=gold"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Gold
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=silver"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Silver
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=pressed-flowers"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Pressed Flowers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=natural-elements"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Natural Elements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?filter=resin"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={onClose}
                  >
                    Resin
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={onClose}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={onClose}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={onClose}>
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={onClose}>
                    Care Instructions
                  </Link>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
