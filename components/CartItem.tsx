"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { CartItem as CartItemType } from "@/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface CartItemProps {
  item: CartItemType
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <tr className="border-b">
      <td className="py-4">
        <Link href={`/products/${item.product.id}`} className="flex items-center gap-4">
          <div className="relative w-20 h-20 bg-gray-100 rounded">
            <Image
              src={item.product.image}
              alt=""
              fill
              className="object-cover rounded"
              unoptimized
            />
          </div>
          <div>
            <Link href={`/products/${item.product.id}`} className="font-semibold">
              {item.product.name}
            </Link>
            {item.selectedVariation && (
              <div className="text-sm text-gray-600">
                {item.selectedVariation.size && `Size: ${item.selectedVariation.size}`}
                {item.selectedVariation.size && item.selectedVariation.color && ", "}
                {item.selectedVariation.color && `Color: ${item.selectedVariation.color}`}
              </div>
            )}
          </div>
        </Link>
      </td>
      <td className="py-4">
        ${item.product.price.toFixed(2)}
      </td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
            className="w-20"
          />
        </div>
      </td>
      <td className="py-4">
        ${(item.product.price * item.quantity).toFixed(2)}
      </td>
      <td className="py-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </td>
    </tr>
  )
}
