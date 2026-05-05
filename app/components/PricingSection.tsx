"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Lite",
    description: "Perfect for validating your idea with early users.",
    price: "$4,999",
    features: ["Core MVP features", "Basic UI/UX design", "Standard deployment", "1 month bug-fix support"],
    highlight: false
  },
  {
    name: "Standard",
    description: "The ideal package for most startups ready to launch.",
    price: "$9,999",
    features: ["Advanced feature set", "Premium UI/UX design", "Scalable cloud architecture", "3 months ongoing support", "Basic security audit"],
    highlight: true
  },
  {
    name: "Pro",
    description: "For complex platforms and hardware integrations.",
    price: "$14,999",
    features: ["Complex logic & integrations", "Hardware & software sync", "Enterprise-grade security", "Dedicated support team", "SLA guarantees"],
    highlight: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A0F1C]">MVP Packages</h2>
          <p className="text-[var(--color-tech-gray)] text-lg">
            Transparent, predictable scoping for startups at any stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col h-full ${pkg.highlight
                ? 'bg-white border border-[var(--color-electric-green)] shadow-[0_0_30px_rgba(0,255,102,0.15)] relative scale-100 md:scale-105 z-10'
                : 'bg-white border border-gray-200 hover:border-[var(--color-electric-green-hover)]'
                }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--color-electric-green)] text-[#0A0F1C] px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#0A0F1C] mb-2">{pkg.name}</h3>
              <p className="text-[var(--color-tech-gray)] text-sm mb-6 min-h-[40px]">{pkg.description}</p>


              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="text-[var(--color-electric-green)] mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="#contact" className={`w-full py-4 rounded-full text-xl font-bold text-center block transition-all ${pkg.highlight
                ? 'bg-[var(--color-electric-green)] text-[#0A0F1C] hover:bg-[var(--color-electric-green-hover)]'
                : 'bg-gray-300 text-[#0A0F1C] hover:bg-gray-200'
                }`}>
                {pkg.price}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
