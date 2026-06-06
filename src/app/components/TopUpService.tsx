import { RefreshCw, ArrowRight, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export function TopUpService() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#111827] to-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-2 rounded-full mb-4">
              Phone Exchange Service
            </div>
            <h2 className="text-white mb-4">Upgrade Your Device Today</h2>
            <p className="text-[#9CA3AF] text-lg mb-6 leading-relaxed">
              Bring your current phone and add some money to upgrade to a better device. Our phone
              top-up service makes it easy and affordable to get the latest technology.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2563EB]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Bring Your Phone</h4>
                  <p className="text-[#9CA3AF] text-sm">
                    We accept all smartphone brands in good working condition
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2563EB]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Get Instant Valuation</h4>
                  <p className="text-[#9CA3AF] text-sm">
                    We'll assess your phone and give you a fair trade-in value
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2563EB]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Top Up & Upgrade</h4>
                  <p className="text-[#9CA3AF] text-sm">
                    Add the difference and walk away with your new device
                  </p>
                </div>
              </li>
            </ul>
            <a
              href="https://wa.me/250794423984?text=Hi, I want to learn more about the phone exchange service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2563EB]/50"
            >
              Contact Us for Exchange
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-2xl p-8 border border-[#2563EB]/20">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#1F2937] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="w-16 h-16 text-[#9CA3AF]" />
                  </div>
                  <p className="text-[#9CA3AF]">Your Old Phone</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <RefreshCw className="w-8 h-8 text-[#2563EB] animate-spin" style={{ animationDuration: "3s" }} />
                  <span className="text-[#2563EB] text-sm">Exchange</span>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-[#2563EB]/50">
                    <Smartphone className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white">New Device</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0B0F19]/50 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#9CA3AF]">Your Phone Value</span>
                  <span className="text-white">XXX,XXX Frw</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#9CA3AF]">New Device Price</span>
                  <span className="text-white">XXX,XXX Frw</span>
                </div>
                <div className="border-t border-white/10 my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-white">Amount to Pay</span>
                  <span className="text-[#2563EB]">XXX,XXX Frw</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
