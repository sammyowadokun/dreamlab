"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-1 pb-21 bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cobalt/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-electric-green/10 blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center w-full px-7">
        <div className="max-w-4xl mx-auto text-left flex flex-col items-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-left gap-2 px-4 py-2 w-fit rounded-full glass mb-8 border border-electric-green/30 text-electric-green text-sm font-medium"
          >
            <Sparkles size={16} />
            <span>The product studio for ambitious founders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-navy leading-[1.1]"
          >
            Build fast. <br className="hidden md:block" />
            Stay supported. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-electric-green) to-(--color-cobalt)">
              Grow securely.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-(--color-tech-gray) mb-10 max-w-2xl leading-relaxed"
          >
            DreamLab is the product studio that helps startups move from idea to launch — fast. We build MVPs, mobile apps, and platforms with ongoing support.
          </motion.p>

        </div>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row items-center gap-4 w-full"
          >
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-(--color-electric-green) hover:bg-(--color-electric-green-hover) text-navy font-semibold rounded-full transition-all flex items-center justify-center gap-2 transform hover:scale-105">
              Book a free consultation
              <ArrowRight size={18} />
            </button>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 text-white bg-black hover:bg-navy/70 border border-navy/20 font-semibold rounded-full transition-all flex items-center justify-center transform">
              Start your MVP
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
