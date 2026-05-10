"use client";

import { motion } from "framer-motion";
import { Rocket, Users, ShieldCheck, Zap } from "lucide-react";

const values = [
  {
    icon: <Zap className="text-(--color-electric-green)" size={28} />,
    title: "Speed Without Compromise",
    description:
      "We move at startup pace — rapid prototyping, accelerated development cycles, and validated launches that get you to market before the window closes.",
  },
  {
    icon: <Users className="text-(--color-electric-green)" size={28} />,
    title: "Built for Founders",
    description:
      "We understand the founder journey because we live it. Every decision we make is designed to stretch your runway and amplify your early traction.",
  },
  {
    icon: <ShieldCheck className="text-(--color-electric-green)" size={28} />,
    title: "Enterprise-Grade Security",
    description:
      "From day one, your product is built on secure, scalable cloud architecture — AWS, PostgreSQL, and best-in-class practices baked in from the start.",
  },
  {
    icon: <Rocket className="text-(--color-electric-green)" size={28} />,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. Post-release maintenance, bug fixes, scalability planning — we stay in your corner as you grow.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[35%] h-[50%] rounded-full bg-cobalt/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] rounded-full bg-electric-green/8 blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-10 py-3 rounded-full border-electric-green/40 text-electric-green text-2xl font-medium bg-electric-green/5"
          >
            Who We Are
          </span>
        </motion.div>

        {/* Headline + intro */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.15] mb-6">
              The product studio <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-electric-green) to-(--color-cobalt)">
                behind ambitious startups.
              </span>
            </h2>
            <p className="text-(--color-navy) text-lg leading-relaxed mb-4">
              DreamLab is a dynamic hub of innovation and expertise dedicated to
              empowering startups worldwide. Founded with a passion for driving
              entrepreneurial success, we have established ourselves as the
              go-to partner for founders seeking to overcome challenges, achieve
              sustainable growth, and make a lasting impact in their industries.
            </p>
            <p className="text-(--color-navy) text-lg leading-relaxed">
              We believe every startup has the potential to thrive. From
              ideation and MVP design to full-scale product launches and
              post-release support, our team of seasoned experts guides you at
              every step of the journey — so you can focus on building something
              that truly matters.
            </p>
          </motion.div>

          {/* Stats block */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { stat: "48 hrs", label: "Average kickoff to first prototype" },
              { stat: "3 Tiers", label: "Flexible packages for every stage" },
              { stat: "100%", label: "Post-launch support included" },
              { stat: "1 Team", label: "Dedicated partner, not a vendor" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 flex flex-col gap-2 hover:-translate-y-1 transition-transform"
              >
                <span className="text-3xl font-bold text-(--color-navy)">
                  {item.stat}
                </span>
                <span className="text-(--color-navy) text-sm leading-snug">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core values grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-(--color-navy)">
            What drives us
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-2 transition-transform group"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold text-(--color-navy)">
                {value.title}
              </h4>
              <p className="text-(--color-navy) text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
