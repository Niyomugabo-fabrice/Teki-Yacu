import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "../data/products";
import { motion } from "motion/react";

type FeaturedProductsProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
};

export function FeaturedProducts({ products, onProductClick, onAddToCart }: FeaturedProductsProps) {
  const [startIndex, setStartIndex] = useState(0);
  const featuredProducts = products.filter((p) => p.featured);
  const itemsToShow = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % Math.max(1, featuredProducts.length - itemsToShow + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % Math.max(1, featuredProducts.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) =>
        (prev - 1 + Math.max(1, featuredProducts.length - itemsToShow + 1)) %
        Math.max(1, featuredProducts.length - itemsToShow + 1)
    );
  };

  const visibleProducts = featuredProducts.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white mb-2">Featured Products</h2>
            <p className="text-[#9CA3AF]">Hand-picked premium devices just for you</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-[#111827] hover:bg-[#1F2937] text-white rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-[#111827] hover:bg-[#1F2937] text-white rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
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
                <div className="absolute top-2 right-2 bg-[#2563EB] text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-3">
                <span className="text-[#9CA3AF] text-xs">{product.category}</span>
                <h4 className="text-white text-sm mt-1 mb-2 line-clamp-1">{product.name}</h4>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-white text-sm">{product.price.toLocaleString()} Frw</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-3 py-1.5 rounded-lg text-xs transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
