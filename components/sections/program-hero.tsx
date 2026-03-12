"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Footprints, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CurvedDivider } from "@/components/curved-divider";
import type { LucideIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FeatureHighlight {
  icon: LucideIcon;
  text: string;
}

// ─── Static data outside component ───────────────────────────────────────────
const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  { icon: Sparkles, text: "Pembelajaran Berbasis Permainan" },
  { icon: Footprints, text: "Eksplorasi Sensorik & Motorik" },
  { icon: Heart, text: "Fondasi Akhlak & Sosialisasi" },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // BUG FIX: was "easeInOut" — easeOut is correct for entrances
  },
};

const featuresVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kb.jpg"
          alt="Anak-anak Kelompok Bermain di Sekolah Alam Insan Cendekia"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight tracking-tight">
            Kelompok Bermain (KB)
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-balance">
            Membuka gerbang petualangan pertama anak Anda, tempat rasa ingin
            tahu bertemu dengan kegembiraan belajar melalui permainan dan alam.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={featuresVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8"
        >
          {FEATURE_HIGHLIGHTS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-white/80" aria-hidden="true" />
              <span className="font-semibold">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-7 text-lg shadow-lg w-full sm:w-auto"
          >
            <Link href="/ppdb" className="flex items-center gap-2">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/50 hover:bg-white/20 text-white rounded-full px-8 py-7 text-lg w-full sm:w-auto"
          >
            <Link href="#kegiatan-harian">Lihat Kegiatan Harian</Link>
          </Button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#FDFBF6" />
      </div>
    </section>
  );
}
