"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Lite",
    description: "First-time founders. Perfect for validating your idea with early users.",
    price: "₦1,000,000",
    features: [
      "Simple web app",
      "Authentication",
      "1 core feature",
      "Basic database",
      "Basic dashboard",
      "Deployment",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    description: "The ideal package for most startups ready to launch.",
    price: "₦3,000,000",
    features: [
      "Full web app (frontend + backend)",
      "Authentication system",
      "Cloud architecture",
      "2–5 core features",
      "Admin dashboard",
      "PostgreSQL Database",
      "API Integration",
      "PWA",
      "Notification",
      "Deployment",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    description: "Best for funded startups.",
    price: "₦7,500,000",
    features: [
      "Full system",
      "API integrations",
      "Scalable architecture",
      "Role-based access (admin/users)",
      "Cloud deployment (AWS)",
      "Analytics (monitoring + logging + cloud-front)",
      "Enterprise-grade security",
      "Post-launch support (30–90 days)",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy">MVP Packages</h2>
          <p className="text-(--color-tech-gray) text-lg">
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
              className={`rounded-2xl p-8 flex flex-col h-full ${
                pkg.highlight
                  ? "bg-white border border-(--color-electric-green) shadow-[0_0_30px_rgba(0,255,102,0.15)] relative scale-100 md:scale-105 z-10"
                  : "bg-white border border-gray-200 hover:border-(--color-electric-green-hover)"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-(--color-electric-green) text-navy px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-navy mb-2">{pkg.name}</h3>
              <p className="text-(--color-tech-gray) text-sm mb-4 min-h-10">{pkg.description}</p>

              {/* Price */}
              <p className="text-3xl font-extrabold text-navy mb-6">{pkg.price}</p>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="text-(--color-electric-green) mt-1 shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleGetStarted}
                className={`w-full py-4 rounded-full text-base font-bold text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.highlight
                    ? "bg-(--color-electric-green) text-navy hover:bg-(--color-electric-green-hover)"
                    : "bg-gray-200 text-navy hover:bg-gray-300"
                }`}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
