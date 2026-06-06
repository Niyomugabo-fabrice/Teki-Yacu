import { Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

type FooterProps = {
  onNavigate: (section: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const mainLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/tek_yacu/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/250794423984", label: "WhatsApp" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold text-white">TEK-YACU</span>
            </div>
            <p className="text-[#9CA3AF] mb-4">
              Your trusted destination for premium smartphones, accessories, and speakers. We bring
              you the latest technology at competitive prices with exceptional service.
            </p>
            <p className="text-[#9CA3AF] text-sm">Kigali, Rwanda</p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#111827] hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-white" />
                </a>
              ))}
            </div>
            <p className="text-[#9CA3AF] text-sm mb-2">WhatsApp: +250 794 423 984</p>
            <p className="text-[#9CA3AF] text-sm">Instagram: @tek_yacu</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9CA3AF] text-sm">
              &copy; {new Date().getFullYear()} TEK-YACU. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
