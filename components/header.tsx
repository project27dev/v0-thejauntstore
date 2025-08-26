"use client"

import { Search, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Sidebar from "./sidebar"
import Link from "next/link"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Top banner */}
      <div className="bg-gray-100 text-center py-2 text-sm text-gray-600">5% DISCOUNT FOR EMAIL SUBSCRIBERS</div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/bee-logo.png" alt="The Jaunt Store" className="h-8 w-8" />
                <h1 className="font-serif text-2xl font-bold tracking-wider">
                  THEJAUNTSTORE
                </h1>
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <span>RON $</span>
                <span>|</span>
                <span>United States</span>
              </div>
              <Button variant="ghost" size="sm">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
