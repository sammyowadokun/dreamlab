"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-[#0A0F1C]">
            DreamLab
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#0A0F1C] font-medium hover:text-[var(--color-electric-green)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-electric-green)] hover:bg-[var(--color-electric-green-hover)] text-[#0A0F1C] font-semibold rounded-full transition-transform hover:scale-105"
            >
              Book a call
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#0A0F1C] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-6 max-w-6xl py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#0A0F1C] font-medium py-3 px-2 rounded-lg hover:bg-gray-50 hover:text-[var(--color-electric-green)] transition-colors border-b border-gray-100 last:border-none"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-2 pb-1">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[var(--color-electric-green)] hover:bg-[var(--color-electric-green-hover)] text-[#0A0F1C] font-semibold rounded-full transition-all"
              >
                Book a call
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
