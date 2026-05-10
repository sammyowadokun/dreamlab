"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "MVP Development",
    description: "Product scoping, tech stack consulting, and rapid MVP design to get your idea into the hands of users.",
    icon: <Code className="text-(--color-electric-green) mb-4" size={32} />
  },
  {
    title: "Software & Apps",
    description: "Full-scale web and mobile app builds, landing pages, and digital platforms built for scale.",
    icon: <Smartphone className="text-(--color-electric-green) mb-4" size={32} />
  },
  {
    title: "Ongoing Support",
    description: "Post-launch maintenance, bug fixing, scalability planning, and top-tier cybersecurity setup.",
    icon: <ShieldCheck className="text-(--color-electric-green) mb-4" size={32} />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative bg-slate-100">
      <div className="container max-w-6xl mx-auto px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="inline-flex items-center gap-2 px-10 py-3 rounded-full border-electric-green/40 text-electric-green text-2xl font-medium bg-electric-green/5"
          >
            What we do

          </h2>
          <p className="text-(--color-tech-gray) text-lg">
            We specialize in accelerated product development, helping founders move from idea to execution securely and with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-start transition-all hover:-translate-y-2 group"
            >
              <div className="p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-(--color-navy) mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
