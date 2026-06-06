import { X } from "lucide-react";
import { Product } from "../data/products";
import { motion, AnimatePresence } from "motion/react";

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
};

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#111827] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#111827] border-b border-white/10 p-4 flex items-center justify-between z-10">
                <h3 className="text-white">{product.category}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#1F2937] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-white mb-4">{product.name}</h2>
                    <p className="text-[#9CA3AF] mb-6 leading-relaxed">{product.description}</p>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-white">{product.price.toLocaleString()} Frw</span>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            onAddToCart(product);
                            onClose();
                          }}
                          className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2563EB]/50"
                        >
                          Add to Cart
                        </button>
                        <a
                          href={`https://wa.me/250794423984?text=Hi, I'm interested in ${product.name} (${product.price.toLocaleString()} Frw)`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-transparent border-2 border-[#2563EB] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg transition-all text-center"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
