import { useState, useMemo } from "react"
import { Product } from "@/types"
import { products, getProductById, getProductsByCategory, searchProducts } from "@/data/products"

export function useProducts() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = useMemo(() => {
    let result: Product[] = products

    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory)
    }

    if (searchQuery) {
      result = searchProducts(searchQuery).filter((product) =>
        selectedCategory ? product.category === selectedCategory : true
      )
    }

    return result
  }, [searchQuery, selectedCategory])

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)))
  }, [])

  return {
    products: filteredProducts,
    allProducts: products,
    getProductById,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  }
}
