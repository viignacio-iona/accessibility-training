import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      
      <p className="text-xl text-gray-600 mb-8">
        Page not found
      </p>
      
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}
