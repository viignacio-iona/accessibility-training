import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function CheckoutFailurePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Checkout", href: "/checkout" },
          { label: "Error" },
        ]}
      />

      <div className="max-w-2xl mx-auto text-center">
        <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        
        <h2 className="text-3xl font-bold mb-4">Payment Failed</h2>
        
        <p className="text-red-600 mb-8">
          We encountered an issue processing your payment. Please try again or use a different payment method.
        </p>

        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/checkout">Try Again</Link>
          </Button>
          
          <div>
            <Link href="/cart" className="text-blue-600 hover:underline">
              Return to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
