export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  tags: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount?: number
  variations?: {
    size?: string[]
    color?: string[]
  }
}

export interface CartItem {
  product: Product
  quantity: number
  selectedVariation?: {
    size?: string
    color?: string
  }
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  shippingAddress: {
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod: {
    type: string
    last4?: string
  }
  status: "pending" | "success" | "failed"
  createdAt: string
}
