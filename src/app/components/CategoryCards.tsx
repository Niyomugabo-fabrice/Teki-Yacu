import { motion } from "motion/react";
import { Smartphone, Headphones, Speaker } from "lucide-react";

type CategoryCardsProps = {
  onCategorySelect: (category: string) => void;
};

export function CategoryCards({ onCategorySelect }: CategoryCardsProps) {
  const categories = [
    {
      name: "Smartphones",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
      count: "30+ Models",
    },
    {
      name: "Accessories",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80",
      count: "30+ Items",
    },
    {
      name: "Speakers",
      icon: Speaker,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
      count: "20+ Devices",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-white mb-2">Explore Our Top Categories</h2>
          <p className="text-[#9CA3AF]">Find the perfect tech for your lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onCategorySelect(category.name)}
              className="group relative bg-[#111827] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#2563EB]/20 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <category.icon className="w-6 h-6 text-[#2563EB]" />
                  <h3 className="text-white text-lg">{category.name}</h3>
                </div>
                <p className="text-[#9CA3AF] text-sm">{category.count}</p>
              </div>

              <div className="absolute top-4 right-4 bg-[#2563EB]/10 backdrop-blur-sm text-[#2563EB] px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View All
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
