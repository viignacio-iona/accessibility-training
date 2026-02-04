"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { useEffect, useState, Suspense } from "react"
import { useProducts } from "@/hooks/useProducts"
import ProductCard from "@/components/ProductCard"
import FilterSidebar from "@/components/FilterSidebar"
import SearchBar from "@/components/SearchBar"
import Breadcrumbs from "@/components/Breadcrumbs"
import EmptyState from "@/components/EmptyState"
import { Select } from "@/components/ui/select"

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const {
    products,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  } = useProducts()
  const [sortBy, setSortBy] = useState("name")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })

  useEffect(() => {
    const search = searchParams.get("search")
    const category = searchParams.get("category")
    if (search) setSearchQuery(search)
    if (category) setSelectedCategory(category)
  }, [searchParams, setSearchQuery, setSelectedCategory])

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const filteredProducts = sortedProducts.filter(
    (p) => p.price >= priceRange.min && p.price <= priceRange.max
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <h2 className="text-3xl font-bold mb-6">All Products</h2>

      <div className="mb-6 relative h-32 rounded-lg overflow-hidden">
        <Image
          src="https://dummyimage.com/1200x200/6366F1/FFFFFF.png?text=Special+Sale+Up+to+50%25+Off"
          fill
          className="object-cover"
          alt=""
          unoptimized
        />
      </div>

      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-48"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </Select>
            </div>
            <p className="text-gray-600">{filteredProducts.length} products</p>
          </div>

          {filteredProducts.length === 0 ? (
            <EmptyState
              title="No products found"
              message="Try adjusting your filters or search query."
              actionLabel="View All Products"
              actionHref="/products"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ProductsPageContent />
    </Suspense>
  )
}
