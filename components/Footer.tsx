import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold mb-4">About</div>
            <Link href="/about" className="block text-gray-600 mb-2">About Us</Link>
            <Link href="/contact" className="block text-gray-600 mb-2">Contact</Link>
            <Link href="/careers" className="block text-gray-600">Careers</Link>
          </div>
          <div>
            <div className="font-semibold mb-4">Customer Service</div>
            <Link href="/shipping" className="block text-gray-600 mb-2">Shipping</Link>
            <Link href="/returns" className="block text-gray-600 mb-2">Returns</Link>
            <Link href="/faq" className="block text-gray-600">FAQ</Link>
          </div>
          <div>
            <div className="font-semibold mb-4">Legal</div>
            <Link href="/privacy" className="block text-gray-600 mb-2">Privacy Policy</Link>
            <Link href="/terms" className="block text-gray-600 mb-2">Terms of Service</Link>
            <Link href="/cookies" className="block text-gray-600">Cookie Policy</Link>
          </div>
          <div>
            <div className="font-semibold mb-4">Follow Us</div>
            <div className="flex gap-3 mb-4">
              <Link href="https://twitter.com">
                <Image
                  src="https://dummyimage.com/24x24/1DA1F2/FFFFFF.png?text=TW"
                  width={24}
                  height={24}
                  className="rounded"
                  unoptimized
                />
              </Link>
              <Link href="https://facebook.com">
                <Image
                  src="https://dummyimage.com/24x24/1877F2/FFFFFF.png?text=FB"
                  width={24}
                  height={24}
                  className="rounded"
                  unoptimized
                />
              </Link>
              <Link href="https://instagram.com">
                <Image
                  src="https://dummyimage.com/24x24/E4405F/FFFFFF.png?text=IG"
                  width={24}
                  height={24}
                  className="rounded"
                  unoptimized
                />
              </Link>
            </div>
            <Link href="https://twitter.com" className="block text-gray-600 mb-2">Twitter</Link>
            <Link href="https://facebook.com" className="block text-gray-600 mb-2">Facebook</Link>
            <Link href="https://instagram.com" className="block text-gray-600">Instagram</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© 2024 Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
