"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Import ChevronDown/Up for the toggle icon
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);
  // NEW STATE for the mobile program menu toggle
  const [openProgramMenu, setOpenProgramMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to 20 or 30 for a quicker transition
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define main navigation links
  const navLinks = [
    { href: "#filosofi", label: "Filosofi" },
    { href: "#perjalanan", label: "Program Pendidikan", isToggle: true }, // <-- Mark as toggle
    { href: "#galeri", label: "Galeri" },
    { href: "#prestasi", label: "Prestasi" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#faq", label: "Kontak dan FAQ" },
  ];

  // New section links for the dropdown (KB, TK, MI)
  const programLinks = [
    { href: "#perjalanan", label: "Kelompok Bermain (KB)" },
    { href: "#perjalanan", label: "Taman Kanak-kanak (TK)" },
    { href: "#perjalanan", label: "Madrasah Ibtida'iyah (MI)" },
  ];

  // Define Glassmorphism Class
  const glassmorphClass =
    "bg-[#FDFBF6]/60 backdrop-blur-xl border border-white/30 shadow-md ring-1 ring-white/20";

  // Helper function to close both menus and reset the program toggle
  const closeAllMenus = () => {
    setIsMobileMenuMenuOpen(false);
    setOpenProgramMenu(false);
  };

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
          {/* Logo (unchanged) */}
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

          {/* Desktop Navigation (Dropdown remains for desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`font-medium transition-colors flex items-center gap-1 ${
                    isScrolled
                      ? "text-[#2E2E2E] hover:text-[#5BAA6A]"
                      : "text-white hover:text-[#F4C27F]"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Dropdown Menu (only for Program Pendidikan) */}
                {link.label === "Program Pendidikan" && (
                  <div className="absolute hidden group-hover:block top-full pt-4 min-w-40">
                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black/5 p-2 transition-all duration-300">
                      {programLinks.map((program) => (
                        <Link
                          key={program.label}
                          href={program.href} // Point back to the journey section
                          className="block px-3 py-2 text-sm text-[#2E2E2E] hover:bg-[#E8F5E9] hover:text-[#5BAA6A] rounded-md whitespace-nowrap"
                        >
                          {program.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button (unchanged) */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#daftar">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button (unchanged) */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-[#2E2E2E]" : "text-white"
            }`}
            onClick={() => {
              setIsMobileMenuMenuOpen(!isMobileMenuOpen);
              setOpenProgramMenu(false); // Close sub-menu when main menu is toggled
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-[#FDFBF6] rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.isToggle ? (
                  // PROGRAM PENDIDIKAN TOGGLE BUTTON
                  <button
                    className="flex justify-between items-center w-full text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                    onClick={() => setOpenProgramMenu(!openProgramMenu)}
                  >
                    <span>{link.label}</span>
                    {openProgramMenu ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                ) : (
                  // REGULAR LINK
                  <Link
                    href={link.href}
                    className="block text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Sub-menu items for Program Pendidikan on Mobile (Conditionally rendered) */}
                {link.isToggle && openProgramMenu && (
                  <div className="pl-4 space-y-1 border-l border-[#5BAA6A]/50 ml-4 py-1">
                    {programLinks.map((program) => (
                      <Link
                        key={program.label}
                        href={program.href}
                        className="block text-sm text-[#5C5C5C] hover:text-[#5BAA6A] py-1 transition-colors"
                        onClick={closeAllMenus}
                      >
                        — {program.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              asChild
              className="w-full bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full shadow-lg mt-4"
            >
              <Link href="#daftar" onClick={closeAllMenus}>
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
