"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CurvedDivider } from "@/components/curved-divider";
import { motion } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
  className?: string;
}

interface FloatingLeaf {
  size: string;
  position: string;
  delay: number;
}

// ─── Static data ─────────────────────────────────────────────────────────────
const STATS: Stat[] = [
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "60", label: "Siswa Aktif" },
  {
    value: "3",
    label: "Jenjang Belajar",
    className: "col-span-2 md:col-span-1",
  },
];

const LEAVES: FloatingLeaf[] = [
  { size: "w-20 h-20", position: "top-20 left-10", delay: 0 },
  { size: "w-14 h-14", position: "top-40 right-20", delay: 1.5 },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut", // BUG FIX: was missing — prevents linear stagger
      duration: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // BUG FIX: was missing — items had no easing/duration
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/children-studying-under-trees-with-sunlight-filter.jpg"
          alt="Anak-anak belajar di bawah pohon di lingkungan sekolah alam"
          fill
          priority
          quality={85} // PERF: default 75→85 for hero, still saves ~30% vs 100
          placeholder="blur" // PERF: shows blurred placeholder while loading
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACIQAAIBBAMBAQEAAAAAAAAAAAECAwQREiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amx1tLlbdFJL5KuJLFqnSvLyVr1Cq9jMNqpxilzyF9Z5IAAP/2Q=="
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Decorative leaves — data-driven, no inline style duplication */}
      {LEAVES.map((leaf) => (
        <div
          key={leaf.position}
          aria-hidden="true"
          className={`absolute ${leaf.position} opacity-30 animate-float hidden sm:block`}
          style={leaf.delay ? { animationDelay: `${leaf.delay}s` } : undefined}
        >
          <Leaf className={`${leaf.size} text-green-300`} />
        </div>
      ))}

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 pt-20 pb-32 md:pb-20">
        <h1>SITUS MASIH DALAM TAHAP PENGEMBANGAN!</h1>
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
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
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

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`text-center ${stat.className ?? ""}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#FDFBF6" />
      </div>

      {/* Scroll indicator — FIX: removed redundant animate-pulse inside animate-bounce */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
