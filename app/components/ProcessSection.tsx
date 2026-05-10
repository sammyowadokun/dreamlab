"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Idea",
    description: "We start by understanding your vision and scoping the best technical path forward.",
    icon: <Lightbulb size={24} className="text-(--color-electric-green)" />
  },
  {
    id: "02",
    title: "MVP Build",
    description: "Rapid, agile development focused on building the core features your users need.",
    icon: <Wrench size={24} className="text-(--color-cobalt)" />
  },
  {
    id: "03",
    title: "Launch",
    description: "We handle the deployment, ensuring a smooth, secure, and successful release.",
    icon: <Rocket size={24} className="text-(--color-electric-green)" />
  },
  {
    id: "04",
    title: "Support",
    description: "Ongoing maintenance, bug fixes, and scaling infrastructure as you grow.",
    icon: <LifeBuoy size={24} className="text-(--color-cobalt)" />
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-white border-y border-gray-200">
      <div className="container max-w-6xl mx-auto px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2
            className="inline-flex items-center gap-2 px-10 py-3 rounded-full border-electric-green/40 text-electric-green text-2xl font-medium bg-electric-green/5"
          >
            How it works

          </h2>
          <p className="text-(--color-tech-gray) text-lg">
            A clear, structured pathway to turn your vision into a reality without the typical agency friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-11.25 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-[(--color-electric-green)/20] via-[(--color-cobalt)/50] to-[(--color-electric-green)/20] z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-6 shadow-xl relative">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-(--color-cobalt) text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-(--color-tech-gray) text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
