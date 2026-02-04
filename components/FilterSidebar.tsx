"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface FilterSidebarProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  priceRange: { min: number; max: number }
  onPriceRangeChange: (range: { min: number; max: number }) => void
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true)
  const [isPriceOpen, setIsPriceOpen] = useState(true)
  const [minPrice, setMinPrice] = useState(priceRange.min.toString())
  const [maxPrice, setMaxPrice] = useState(priceRange.max.toString())

  return (
    <aside className="w-full md:w-64">
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Category Filter */}
        <div className="mb-6">
          <button
            className="flex items-center justify-between w-full font-semibold mb-4"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            Category
            {isCategoryOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {isCategoryOpen && (
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === null}
                  onChange={() => onCategoryChange(null)}
                  className="mr-2"
                />
                All Categories
              </label>
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => onCategoryChange(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter */}
        <div>
          <button
            className="flex items-center justify-between w-full font-semibold mb-4"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            Price Range
            {isPriceOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          {isPriceOpen && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <Button
                onClick={() =>
                  onPriceRangeChange({
                    min: parseFloat(minPrice) || 0,
                    max: parseFloat(maxPrice) || 1000,
                  })
                }
                className="w-full"
              >
                Apply
              </Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
