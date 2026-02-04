"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, Search } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { useState } from "react"

export default function Header() {
  const { getItemCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartCount = getItemCount()

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://dummyimage.com/40x40/6366F1/FFFFFF.png?text=LOGO"
                width={40}
                height={40}
                className="rounded"
                alt=""
                unoptimized
              />
              <span className="text-2xl font-bold">Shop</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>

            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/products" className="block py-2">Products</Link>
            <Link href="/cart" className="block py-2">Cart</Link>
          </div>
        )}
      </div>
    </header>
  )
}
