"use client";

import { motion } from "framer-motion";
import { Send, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactCTASection() {
  return (
    <section id="contact" className="py-24 relative bg-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: CTA Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy leading-tight">
              Ready to turn your idea into a <span className="text-(--color-electric-green)">launchable product?</span>
            </h2>
            <p className="text-(--color-tech-gray) text-lg mb-8 leading-relaxed">
              Whether you need a full MVP, a complex platform, or an infrastructure overhaul, we're here to help you build fast and grow securely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="https://calendly.com/trydreamlab/consultation-with-dreamlab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-(--color-electric-green) hover:bg-(--color-electric-green-hover) text-navy font-semibold rounded-full transition-all transform hover:scale-105"
              >
                <Calendar size={20} />
                Book a Consultation
              </Link>
            </div>


          </motion.div>

          {/* Right Side: Custom Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-xl border border-gray-100 p-8 md:p-10 rounded-2xl relative"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-(--color-electric-green) transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-(--color-electric-green) transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-(--color-electric-green) transition-colors"
                  placeholder="john@startup.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Tell us about your project</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/50 border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-(--color-electric-green) transition-colors resize-none"
                  placeholder="We are building a platform for..."
                ></textarea>
              </div>

              <Link href="#" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white hover:bg-(--color-electric-green-hover) font-bold rounded-lg transition-colors">
                <Send size={18} />
                Submit Idea
              </Link>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
