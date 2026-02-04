"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { getProductById, products } from "@/data/products"
import { useCart } from "@/hooks/useCart"
import { useState } from "react"
import ProductGallery from "@/components/ProductGallery"
import Breadcrumbs from "@/components/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Star } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import Toast from "@/components/Toast"
import Link from "next/link"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    const variation: { size?: string; color?: string } = {}
    if (selectedSize) variation.size = selectedSize
    if (selectedColor) variation.color = selectedColor

    addItem(product, quantity, Object.keys(variation).length > 0 ? variation : undefined)
    setToastMessage("Product added to cart!")
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const images = product.images || [product.image]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <ProductGallery images={images} productName={product.name} />

        {/* Product Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Variations */}
          {product.variations && (
            <div className="space-y-4 mb-6">
              {product.variations.size && (
                <div>
                  <Select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full"
                  >
                    <option value="">Select Size</option>
                    {product.variations.size.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </div>
              )}
              {product.variations.color && (
                <div>
                  <Select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full"
                  >
                    <option value="">Select Color</option>
                    {product.variations.color.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </Select>
                </div>
              )}
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 mb-6">
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-24"
            />
            <Button onClick={handleAddToCart} className="flex-1">
              Add to Cart
            </Button>
          </div>

          {/* Stock Status */}
          {product.inStock ? (
            <div className="mb-4">
              <p className="text-green-600 mb-2">In Stock</p>
              <Image
                src="https://dummyimage.com/100x30/10B981/FFFFFF.png?text=IN+STOCK"
                width={100}
                height={30}
                className="mb-2"
                alt=""
                unoptimized
              />
            </div>
          ) : (
            <p className="text-red-600 mb-4">Out of Stock</p>
          )}

          {/* Trust Badges */}
          <div className="flex gap-4 mb-4">
            <Image
              src="https://dummyimage.com/80x40/6366F1/FFFFFF.png?text=SECURE"
              width={80}
              height={40}
              className="opacity-70"
              alt=""
              unoptimized
            />
            <Image
              src="https://dummyimage.com/80x40/6366F1/FFFFFF.png?text=FAST+SHIP"
              width={80}
              height={40}
              className="opacity-70"
              alt=""
              unoptimized
            />
            <Image
              src="https://dummyimage.com/80x40/6366F1/FFFFFF.png?text=RETURNS"
              width={80}
              height={40}
              className="opacity-70"
              alt=""
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}

      {showToast && <Toast message={toastMessage} type="success" />}
    </div>
  )
}
