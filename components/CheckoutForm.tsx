"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/useCart"

export default function CheckoutForm() {
  const router = useRouter()
  const { getTotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Form state
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  })

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!shipping.name) newErrors.name = "Name is required"
    if (!shipping.email) newErrors.email = "Email is required"
    if (!shipping.address) newErrors.address = "Address is required"
    if (!shipping.city) newErrors.city = "City is required"
    if (!shipping.state) newErrors.state = "State is required"
    if (!shipping.zip) newErrors.zip = "ZIP code is required"
    if (!payment.cardNumber) newErrors.cardNumber = "Card number is required"
    if (!payment.expiryDate) newErrors.expiryDate = "Expiry date is required"
    if (!payment.cvv) newErrors.cvv = "CVV is required"
    if (!payment.cardName) newErrors.cardName = "Cardholder name is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shipping,
          payment,
          total: getTotal(),
        }),
      })

      const data = await response.json()

      if (data.success) {
        clearCart()
        router.push("/checkout/success")
      } else {
        router.push("/checkout/failure")
      }
    } catch (error) {
      router.push("/checkout/failure")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Full Name"
              value={shipping.name}
              onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={shipping.email}
              onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Input
              placeholder="Address"
              value={shipping.address}
              onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">{errors.address}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="City"
              value={shipping.city}
              onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
            />
            {errors.city && (
              <p className="text-red-600 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="State"
              value={shipping.state}
              onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
            />
            {errors.state && (
              <p className="text-red-600 text-sm mt-1">{errors.state}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="ZIP Code"
              value={shipping.zip}
              onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
            />
            {errors.zip && (
              <p className="text-red-600 text-sm mt-1">{errors.zip}</p>
            )}
          </div>
          <div>
            <Select
              value={shipping.country}
              onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </Select>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Cardholder Name"
              value={payment.cardName}
              onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
            />
            {errors.cardName && (
              <p className="text-red-600 text-sm mt-1">{errors.cardName}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Input
              placeholder="Card Number"
              value={payment.cardNumber}
              onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
            />
            {errors.cardNumber && (
              <p className="text-red-600 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="MM/YY"
              value={payment.expiryDate}
              onChange={(e) => setPayment({ ...payment, expiryDate: e.target.value })}
            />
            {errors.expiryDate && (
              <p className="text-red-600 text-sm mt-1">{errors.expiryDate}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="CVV"
              value={payment.cvv}
              onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
            />
            {errors.cvv && (
              <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Image
            src="https://dummyimage.com/60x30/10B981/FFFFFF.png?text=SECURE"
            width={60}
            height={30}
            alt=""
            unoptimized
          />
          <div className="flex gap-2">
            <Image
              src="https://dummyimage.com/40x25/1A1F71/FFFFFF.png?text=VISA"
              width={40}
              height={25}
              alt=""
              unoptimized
            />
            <Image
              src="https://dummyimage.com/40x25/EB001B/FFFFFF.png?text=MC"
              width={40}
              height={25}
              alt=""
              unoptimized
            />
            <Image
              src="https://dummyimage.com/40x25/FF5F00/FFFFFF.png?text=AMEX"
              width={40}
              height={25}
              alt=""
              unoptimized
            />
          </div>
          <p className="text-sm text-gray-600">
            🔒 Your payment information is secure
          </p>
        </div>
      </section>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </form>
  )
}
