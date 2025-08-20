"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white z-50 rounded-lg shadow-lg border border-gray-800 w-1/4 min-w-80">
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <div className="text-sm font-medium">Subscribe to Get 10% OFF</div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-gray-800 h-6 w-6 p-0 flex-shrink-0"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
