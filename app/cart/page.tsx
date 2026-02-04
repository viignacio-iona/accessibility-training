"use client"

import Link from "next/link"
import { useCart } from "@/hooks/useCart"
import CartItem from "@/components/CartItem"
import EmptyState from "@/components/EmptyState"
import Breadcrumbs from "@/components/Breadcrumbs"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Cart" },
          ]}
        />
        <EmptyState
          title="Your cart is empty"
          message="Add some products to your cart to get started."
          actionLabel="Browse Products"
          actionHref="/products"
        />
      </div>
    )
  }

  const total = getTotal()

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cart" },
        ]}
      />
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4">Product</th>
                <th className="text-left py-4">Price</th>
                <th className="text-left py-4">Quantity</th>
                <th className="text-left py-4">Total</th>
                <th className="text-left py-4"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${JSON.stringify(item.selectedVariation)}`}
                  item={item}
                  onQuantityChange={(quantity) =>
                    updateQuantity(item.product.id, quantity)
                  }
                  onRemove={() => removeItem(item.product.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            <Link href="/products" className="block text-center mt-4 text-blue-600">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
