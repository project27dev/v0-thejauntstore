"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />}

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
              <img src="/bee-logo.png" alt="The Jaunt Store" className="h-6 w-6" />
              <h2 className="font-serif text-lg font-bold">THEJAUNTSTORE</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">COLLECTIONS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    New In
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/the-prestige-collection"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    The Prestige Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Iconic
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">JEWELRY</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Rings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Necklaces
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Earrings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Bracelets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Pendants
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold text-gray-900 mb-3">MATERIALS</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Gold
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Silver
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Pressed Flowers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Natural Elements
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Care Instructions
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
