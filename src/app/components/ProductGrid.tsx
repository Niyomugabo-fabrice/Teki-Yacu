import { useState } from "react";
import { Product } from "../data/products";
import { motion } from "motion/react";
import { Filter } from "lucide-react";

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export function ProductGrid({
  products,
  onProductClick,
  onAddToCart,
  selectedCategory,
  onCategoryChange,
}: ProductGridProps) {
  const categories = ["All", "Smartphones", "Accessories", "Speakers"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-white mb-2">Our Products</h2>
            <p className="text-[#9CA3AF]">Explore our complete collection</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/50"
                    : "bg-[#111827] text-[#9CA3AF] hover:bg-[#1F2937] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#111827] rounded-lg overflow-hidden hover:shadow-xl hover:shadow-[#2563EB]/20 transition-all group"
            >
              <div
                className="relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-[#111827]/80 backdrop-blur-sm text-[#9CA3AF] text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-white text-sm mb-2 line-clamp-2 h-10">{product.name}</h4>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-white text-sm">{product.price.toLocaleString()} Frw</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-3 py-1.5 rounded-lg text-xs transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4" />
            <h3 className="text-white mb-2">No products found</h3>
            <p className="text-[#9CA3AF]">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}
