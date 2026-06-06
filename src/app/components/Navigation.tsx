import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";

type NavigationProps = {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
};

export function Navigation({ cartCount, onCartClick, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "Products", "Services", "About", "Contact"];

  const handleNavClick = (item: string) => {
    onNavigate(item.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2"
            >
              <div className="w-15 h-15 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"   // 👈 replace with your image path
                  alt="TEK-YACU Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[20px] font-bold text-white font-sans">TEK-YACU
                <span className="text-[9px] text-[#FFF]/60 block">OUR TECH OUR FUTURE</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-[#9CA3AF] hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#9CA3AF] hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 text-[#9CA3AF] hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2563EB] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="https://wa.me/250794423984"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#9CA3AF] hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-2 text-[#9CA3AF] hover:text-white hover:bg-[#1F2937] rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/250794423984"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
