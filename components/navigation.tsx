"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Static data outside component — never recreated ───────────────────────
const PROGRAM_LINKS = [
  {
    href: "/program-pendidikan/KB",
    label: "Kelompok Bermain (KB)",
    description: "Rasa Ingin Tahu Pertama (3-4 Tahun)",
  },
  {
    href: "/program-pendidikan/TK",
    label: "Taman Kanak-kanak (TK)",
    description: "Eksplorasi & Eksperimen (5-6 Tahun)",
  },
  {
    href: "/program-pendidikan/MI",
    label: "Madrasah Ibtida'iyah (MI)",
    description: "Kemandirian & Kepemimpinan (7-12 Tahun)",
  },
] as const;

const NAV_LINK_TEMPLATES = [
  { anchor: "profil", label: "Profil" },
  { anchor: "program", label: "Program Pendidikan", isToggle: true },
  { anchor: "galeri", label: "Galeri" },
  { anchor: "testimoni", label: "Testimoni" },
  { anchor: "faq", label: "Kontak dan FAQ" },
  { href: "/PPDB", label: "PPDB" },
  { href: "/prestasi", label: "Prestasi" },
] as const;

// ─── Types ──────────────────────────────────────────────────────────────────
type MenuState = {
  mobile: boolean;
  program: boolean;
};

// ─── Component ───────────────────────────────────────────────────────────────
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuState>({
    mobile: false,
    program: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  // Memoized nav links — recomputes only when isHome changes
  const navLinks = useMemo(
    () =>
      NAV_LINK_TEMPLATES.map((link) => ({
        ...link,
        href:
          "href" in link
            ? link.href
            : isHome
              ? `#${link.anchor}`
              : `/#${link.anchor}`,
      })),
    [isHome],
  );

  const ctaHref = isHome ? "#faq" : "/#faq";

  // Stable scroll handler
  const handleScroll = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => setIsScrolled(window.scrollY > 30),
      100,
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [handleScroll]);

  const closeAll = useCallback(
    () => setMenu({ mobile: false, program: false }),
    [],
  );

  const toggleMobile = useCallback(
    () => setMenu((prev) => ({ ...prev, mobile: !prev.mobile })),
    [],
  );

  const toggleProgram = useCallback(
    () => setMenu((prev) => ({ ...prev, program: !prev.program })),
    [],
  );

  // ─── Derived class strings ────────────────────────────────────────────────
  const navTextClass = isScrolled
    ? "text-[#2E2E2E] hover:text-[#5BAA6A]"
    : "text-white hover:text-[#F4C27F]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFBF6]/60 backdrop-blur-xl border border-white/30 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        {/* ── Top bar ────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          {/* Logo */}
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
              <p
                className={`font-semibold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-[#2E2E2E]" : "text-white"
                }`}
              >
                Salam ICSD
              </p>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? "text-[#5C5C5C]" : "text-white/80"
                }`}
              >
                Sekolah Alam
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className={`font-medium transition-colors flex items-center gap-1 ${navTextClass}`}
                >
                  {link.label}
                </Link>

                {"isToggle" in link && link.isToggle && (
                  <div className="absolute hidden group-hover:block top-full pt-4 min-w-[280px]">
                    <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 p-4 space-y-2">
                      {PROGRAM_LINKS.map((program) => (
                        <Link
                          key={program.href}
                          href={program.href}
                          className="block p-3 rounded-lg hover:bg-[#E8F5E9] transition-colors"
                        >
                          <p className="font-semibold text-[#2E2E2E]">
                            {program.label}
                          </p>
                          <p className="text-sm text-[#5C5C5C]">
                            {program.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href={ctaHref}>Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-[#2E2E2E]" : "text-white"
            }`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-expanded={menu.mobile}
          >
            {menu.mobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Mobile menu ────────────────────────────────────────────────── */}
        {menu.mobile && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-[#FDFBF6] rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <div key={link.label}>
                {"isToggle" in link && link.isToggle ? (
                  <>
                    <button
                      className="flex justify-between items-center w-full text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                      onClick={toggleProgram}
                      aria-expanded={menu.program}
                    >
                      <span>{link.label}</span>
                      {menu.program ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>

                    {menu.program && (
                      <div className="pl-4 space-y-1 border-l border-[#5BAA6A]/50 ml-4 py-1">
                        {PROGRAM_LINKS.map((program) => (
                          <Link
                            key={program.href}
                            href={program.href}
                            className="block text-sm text-[#5C5C5C] hover:text-[#5BAA6A] py-1 transition-colors"
                            onClick={closeAll}
                          >
                            — {program.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors font-medium py-2"
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <Button
              asChild
              className="w-full bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full shadow-lg mt-4"
            >
              <Link href={ctaHref} onClick={closeAll}>
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
