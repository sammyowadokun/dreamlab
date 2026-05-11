"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isOpen) {
      // Close the mobile menu first, then scroll after it collapses.
      // Without the delay, the menu's layout shift causes smooth scroll to overshoot.
      setIsOpen(false);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ];

  //   onClick={(e) => {
  //   e.preventDefault();
  //   setIsOpen(false);
  //   Calendly.initPopupWidget({
  //     url: "https://calendly.com/trydreamlab/consultation-with-dreamlab"
  //   });
  // }}

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-navy">
            DreamLab
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-navy font-medium hover:text-(--color-electric-green) transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://forms.gle/V9c1UfxCQk1sez4z6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-(--color-electric-green) 
                    hover:bg-(--color-electric-green-hover) text-navy font-semibold rounded-lg transition-transform 
                    hover:scale-105"
            >
              Book a call
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-navy hover:bg-gray-100 transition-colors"
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-navy font-medium py-3 px-2 rounded-lg hover:bg-gray-50 
                hover:text-(--color-electric-green) transition-colors border-b border-gray-100 last:border-none"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-2 pb-1">
              <a
                href="https://forms.gle/V9c1UfxCQk1sez4z6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-(--color-electric-green) 
                hover:bg-(--color-electric-green-hover) text-navy font-semibold rounded-lg transition-all"
              >
                Book a call
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
