"use client";

import { Button } from "@/components/ui/button";
// Import motion from framer-motion
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import { CurvedDivider } from "@/components/curved-divider";
import { motion } from "framer-motion"; // <-- NEW

// Define variants for the stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/children-studying-under-trees-with-sunlight-filter.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/10" />
      </div>

      {/* Floating Leaf Decorations */}
      {/* Increased the size and opacity of the floating elements slightly for more presence */}
      <div className="absolute top-20 left-10 opacity-30 animate-float">
        <Leaf className="w-20 h-20 text-green-300" />
      </div>
      <div
        className="absolute top-40 right-20 opacity-30 animate-float"
        style={{ animationDelay: "1.5s" }} // Increased delay for variety
      >
        <Leaf className="w-14 h-14 text-green-300" />
      </div>

      {/* Content - Wrapped in motion.div */}
      <div className="container mx-auto px-4 z-10 pt-20 pb-32 md:pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants} // Apply container variant
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight"
            variants={itemVariants} // Apply item variant
          >
            Belajar Bersama Alam,
            <br />
            <span className="text-[#F4C27F]">Tumbuh dengan Iman</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
            variants={itemVariants} // Apply item variant
          >
            Membangun karakter, rasa ingin tahu, dan kepemimpinan melalui alam
            dan nilai-nilai Islam
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants} // Apply item variant
          >
            <Button
              asChild
              size="lg"
              className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto" // Added active scale for button press feel
            >
              <Link href="#daftar" className="flex items-center">
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />{" "}
                {/* Arrow on primary only */}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/90 hover:bg-white text-[#2E2E2E] border-2 border-white rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto" // Added active scale
            >
              <Link href="#filosofi">Jelajahi Cerita Kami</Link>
            </Button>
          </motion.div>

          {/* Stats - Changed to 2 columns on mobile (default) and 3 on medium screens (md) */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={itemVariants} // Apply item variant
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                5+
              </div>
              <div className="text-sm md:text-base text-white/80">
                Tahun Pengalaman
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                60
              </div>
              <div className="text-sm md:text-base text-white/80">
                Siswa Aktif
              </div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                3
              </div>
              <div className="text-sm md:text-base text-white/80">
                Jenjang Belajar
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#FDFBF6" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
