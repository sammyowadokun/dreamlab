"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DreamLab completely changed the trajectory of our startup. They built our MVP in record time and the code quality was exceptional.",
    author: "Sarah J.",
    role: "Founder & CEO, TechFlow",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "Unlike other agencies, they actually stuck around after launch to ensure our infrastructure could handle the sudden spike in users.",
    author: "Michael T.",
    role: "CTO, HealthSync",
    avatar: "https://i.pravatar.cc/150?img=11"
  }
];

export default function SocialProofSection() {
  return (
    <section className=" py-20 relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-cobalt)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0A0F1C]">Trusted by Founders</h2>
          <p className="text-[var(--color-tech-gray)] text-lg">
            Don't just take our word for it. Here is what ambitious teams have to say about building with DreamLab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[var(--color-cobalt)] p-8 rounded-2xl relative group hover:border-[var(--color-electric-green)]/50 transition-colors"
            >
              <Quote className="absolute top-6 right-8 text-white/10 group-hover:text-[var(--color-electric-green)]/100 transition-colors" size={64} />

              <div className="mb-6 relative z-10">
                <p className="text-lg text-white leading-relaxed italic">
                  "{testi.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                {/* Simulated generated avatar placeholder */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-tech-gray-light)]">
                  <img src={testi.avatar} alt={testi.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testi.author}</h4>
                  <p className="text-[var(--color-tech-gray)] text-sm">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
