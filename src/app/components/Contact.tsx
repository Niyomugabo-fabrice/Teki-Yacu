import { MessageCircle, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0B0F19] to-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Get in Touch</h2>
          <p className="text-[#9CA3AF]">We're here to help you find the perfect device</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            href="https://wa.me/250794423984"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] rounded-xl p-6 text-center hover:shadow-xl hover:shadow-green-500/20 transition-all border border-white/5"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-white mb-2">WhatsApp</h4>
            <p className="text-[#9CA3AF] text-sm">+250 794 423 984</p>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/tek_yacu/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111827] rounded-xl p-6 text-center hover:shadow-xl hover:shadow-pink-500/20 transition-all border border-white/5"
          >
            <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-pink-500" />
            </div>
            <h4 className="text-white mb-2">Instagram</h4>
            <p className="text-[#9CA3AF] text-sm">@tek_yacu</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111827] rounded-xl p-6 text-center border border-white/5"
          >
            <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#2563EB]" />
            </div>
            <h4 className="text-white mb-2">Phone</h4>
            <p className="text-[#9CA3AF] text-sm">+250 794 423 984</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#111827] rounded-xl p-6 text-center border border-white/5"
          >
            <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#2563EB]" />
            </div>
            <h4 className="text-white mb-2">Location</h4>
            <p className="text-[#9CA3AF] text-sm">Kigali, Rwanda</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-2xl p-8 text-center"
        >
          <h3 className="text-white mb-4">Ready to Find Your Perfect Device?</h3>
          <p className="text-white/80 mb-6">
            Contact us today and our team will help you choose the best technology for your needs
          </p>
          <a
            href="https://wa.me/250794423984"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#2563EB] px-8 py-3 rounded-lg transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
