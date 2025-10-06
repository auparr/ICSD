"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to 20 or 30 for a quicker transition
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#filosofi", label: "Filosofi" },
    { href: "#perjalanan", label: "Perjalanan Belajar" },
    { href: "#galeri", label: "Galeri" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#kontak", label: "Kontak" },
  ];

  // Define Glassmorphism Class
  const glassmorphClass =
    "bg-[#FDFBF6]/60 backdrop-blur-xl border border-white/30 shadow-md ring-1 ring-white/20";
  // bg-[#FDFBF6]/60: Translucent light background
  // backdrop-blur-xl: Strong blur effect
  // border border-white/30: Subtle light border
  // shadow-md ring-1 ring-white/20: Adds depth and a final shine/ring effect

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? glassmorphClass // Apply glassmorphism effect
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#5BAA6A] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden md:block">
              {/* Text color changes based on scroll state for contrast */}
              <div
                className={`font-semibold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-[#2E2E2E]" : "text-white"
                }`}
              >
                Salam ICSD
              </div>
              <div
                className={`text-xs transition-colors ${
                  isScrolled ? "text-[#5C5C5C]" : "text-white/80"
                }`}
              >
                Sekolah Alam
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-[#2E2E2E] hover:text-[#5BAA6A]"
                    : "text-white hover:text-[#F4C27F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#daftar">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-[#2E2E2E]" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile menu stays solid for readability, but uses the same background color */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-[#FDFBF6] rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full shadow-lg"
            >
              <Link href="#daftar" onClick={() => setIsMobileMenuOpen(false)}>
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
