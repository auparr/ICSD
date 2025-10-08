"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import hook usePathname
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);
  const [openProgramMenu, setOpenProgramMenu] = useState(false);

  // 2. Dapatkan path URL saat ini
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    // ... (useEffect Anda tidak perlu diubah)
    let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 30);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // 3. Buat link secara dinamis
  const navLinks = [
    {
      href: isHomePage ? "#profil" : "/#profil",
      label: "Profil",
    },
    {
      href: isHomePage ? "#program" : "/#program",
      label: "Program Pendidikan",
      isToggle: true,
    },
    {
      href: isHomePage ? "#galeri" : "/#galeri",
      label: "Galeri",
    },
    {
      href: isHomePage ? "#testimoni" : "/#testimoni",
      label: "Testimoni",
    },
    {
      href: isHomePage ? "#faq" : "/#faq",
      label: "Kontak dan FAQ",
    },
    {
      href: "/PPDB",
      label: "PPDB",
    },
    {
      href: "/prestasi",
      label: "Prestasi",
    },
  ];

  const programLinks = [
    {
      href: "/program-pendidikan/KB", // Ini sudah benar karena link ke halaman lain
      label: "Kelompok Bermain (KB)",
      description: "Rasa Ingin Tahu Pertama (3-4 Tahun)",
    },
    {
      href: "/program-pendidikan/TK", // Ini sudah benar
      label: "Taman Kanak-kanak (TK)",
      description: "Eksplorasi & Eksperimen (5-6 Tahun)",
    },
    {
      href: "/program-pendidikan/MI", // Ini sudah benar
      label: "Madrasah Ibtida'iyah (MI)",
      description: "Kemandirian & Kepemimpinan (7-12 Tahun)",
    },
  ];

  const glassmorphClass =
    "bg-[#FDFBF6]/60 backdrop-blur-xl border border-white/30 shadow-md";

  const closeAllMenus = () => {
    setIsMobileMenuMenuOpen(false);
    setOpenProgramMenu(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? glassmorphClass : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "w-12 h-12" : "w-14 h-14"
              }`}
            >
              <Image
                src="/school-logo.svg"
                alt="Salam ICSD Logo"
                fill
                sizes="(max-width: 768px) 15vw, 8vw"
                priority
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <div>
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

          {/* Navigasi Desktop akan menggunakan link dinamis */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative">
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

                {link.isToggle && (
                  <div className="absolute hidden group-hover:block top-full pt-4 min-w-[280px]">
                    <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 p-4">
                      <div className="space-y-2">
                        {programLinks.map((program) => (
                          <Link
                            key={program.label}
                            href={program.href}
                            className="block p-3 rounded-lg hover:bg-[#E8F5E9] transition-colors"
                          >
                            <div className="font-semibold text-md text-[#2E2E2E]">
                              {program.label}
                            </div>
                            <p className="text-sm text-[#5C5C5C]">
                              {program.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href={isHomePage ? "#faq" : "/#faq"}>Daftar Sekarang</Link>
            </Button>
          </div>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-[#2E2E2E]" : "text-white"
            }`}
            onClick={() => setIsMobileMenuMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigasi Mobile juga akan menggunakan link dinamis */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-[#FDFBF6] rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.isToggle ? (
                  <button
                    className="flex justify-between items-center w-full text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                    onClick={() => setOpenProgramMenu(!openProgramMenu)}
                  >
                    <span>Program Pendidikan</span>
                    {openProgramMenu ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </Link>
                )}
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
              <Link
                href={isHomePage ? "#faq" : "/#faq"}
                onClick={closeAllMenus}
              >
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
