import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import SearchBar from "@/components/SearchBar"

export default function HomePage() {
  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative overflow-hidden">
        <Image
          src="https://dummyimage.com/1920x400/4F46E5/FFFFFF.png?text=Hero+Banner"
          fill
          className="object-cover opacity-20 -z-10"
          alt=""
          unoptimized
        />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Store</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover amazing products at unbeatable prices
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Clothing", "Electronics", "Home & Kitchen", "Accessories"].map(
              (category) => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
