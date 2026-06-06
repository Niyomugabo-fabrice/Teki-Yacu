import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Truck, Award, Headphones } from "lucide-react";

type HeroProps = {
  onCategorySelect: (category: string) => void;
};

export function Hero({ onCategorySelect }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1200&q=80",
    "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1200&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Shield, title: "100% Authentic", subtitle: "Verified products" },
    { icon: Truck, title: "Fast Delivery", subtitle: "Quick & reliable" },
    { icon: Award, title: "Best Quality", subtitle: "Premium selection" },
    { icon: Headphones, title: "24/7 Support", subtitle: "Always here" },
  ];

  return (
    <div className="bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-12 bg-[#2563EB]" />
                <span className="text-[#2563EB] uppercase tracking-wider text-sm">Tech Store</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                TEK-YACU
              </h1>
              <p className="text-xl text-[#9CA3AF] mb-2">Premium Devices.</p>
              <p className="text-xl mb-8">
                <span className="text-white">Powerful</span>{" "}
                <span className="text-[#2563EB]">Possibilities.</span>
              </p>
            </div>
            <p className="text-[#9CA3AF] mb-8 leading-relaxed">
              Discover the latest smartphones, premium accessories, and powerful speakers.
              Experience technology that transforms your world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onCategorySelect("All")}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2563EB]/50"
              >
                Shop Now
              </button>
              <a
                href="https://wa.me/250794423984"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-3 rounded-lg transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={heroImages[currentSlide]}
                  alt="Featured product"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all ${
                      currentSlide === index ? "bg-[#2563EB] w-8" : "bg-white/30 w-4"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111827]/50 border border-white/5 rounded-xl p-4 text-center hover:border-[#2563EB]/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
              <h4 className="text-white text-sm mb-1">{feature.title}</h4>
              <p className="text-[#9CA3AF] text-xs">{feature.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
