"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <-- 1. Import Next.js Image
import { CurvedDivider } from "@/components/curved-divider";
import { motion } from "framer-motion";

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- 3. Stats data moved for easier maintenance ---
const stats = [
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "60", label: "Siswa Aktif" },
  {
    value: "3",
    label: "Jenjang Belajar",
    className: "col-span-2 md:col-span-1",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* --- 1. Performance Fix: Use Next.js Image for LCP --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/children-studying-under-trees-with-sunlight-filter.jpg"
          alt="Anak-anak belajar di bawah pohon di lingkungan sekolah alam"
          fill
          priority // Ensures the image loads first
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- 2. Accessibility Fix: Hide decorative elements --- */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-10 opacity-30 animate-float sm:block hidden"
      >
        <Leaf className="w-20 h-20 text-green-300" />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-40 right-20 opacity-30 animate-float sm:block hidden"
        style={{ animationDelay: "1.5s" }}
      >
        <Leaf className="w-14 h-14 text-green-300" />
      </div>

      {/* Content (unchanged) */}
      <div className="container mx-auto px-4 z-10 pt-20 pb-32 md:pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight"
            variants={itemVariants}
          >
            Belajar Bersama Alam,
            <br />
            <span className="text-[#F4C27F]">Tumbuh dengan Iman</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
            variants={itemVariants}
          >
            Membangun karakter, rasa ingin tahu, dan kepemimpinan melalui alam
            dan nilai-nilai Islam
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <Link href="#daftar" className="flex items-center">
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/90 hover:bg-white text-[#2E2E2E] border-2 border-white rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
            >
              <Link href="#profil">Jelajahi Cerita Kami</Link>
            </Button>
          </motion.div>

          {/* --- 3. Stats now mapped from data array --- */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`text-center ${stat.className || ""}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Divider and Scroll Indicator (unchanged) */}
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#FDFBF6" />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
