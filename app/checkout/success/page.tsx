import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Checkout", href: "/checkout" },
          { label: "Success" },
        ]}
      />

      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        
        <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
        
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed and you will receive a confirmation email shortly.
        </p>

        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/products">Continue Shopping</Link>
          </Button>
          
          <div>
            <Link href="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
