"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Sparkles, Compass, Trophy, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface JourneyStep {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  age: string;
  description: string;
  highlights: readonly string[];
  image: string;
  color: string;
  href: string;
}

// ─── Static data outside component ───────────────────────────────────────────
const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "kb",
    icon: Sparkles,
    title: "KB Alam",
    subtitle: "Rasa Ingin Tahu Pertama",
    age: "3-4 Tahun",
    description:
      "Anak-anak menemukan dunia melalui bermain, bercerita, dan interaksi alami. Mereka belajar mengenal diri sendiri, teman-teman, dan lingkungan sekitar dengan penuh kegembiraan.",
    highlights: [
      "Bermain dan eksplorasi sensorik",
      "Pengenalan huruf dan angka melalui alam",
      "Pengembangan motorik halus dan kasar",
      "Pembiasaan nilai-nilai Islam dasar",
    ],
    image: "/kb.jpg",
    color: "#F4C27F",
    href: "/program-pendidikan/KB",
  },
  {
    id: "tk",
    icon: Compass,
    title: "TK Alam",
    subtitle: "Eksplorasi & Eksperimen",
    age: "5-6 Tahun",
    description:
      "Belajar melalui proyek, kerja sama tim, dan kegiatan outdoor yang menyenangkan. Anak-anak mulai mengembangkan kemampuan berpikir kritis dan kreativitas mereka.",
    highlights: [
      "Pembelajaran berbasis proyek alam",
      "Pengembangan kemampuan sosial",
      "Pengenalan sains dan matematika kontekstual",
      "Praktik ibadah dan akhlak sehari-hari",
    ],
    image: "/gallery-art-craft.jpg",
    color: "#6BB9E0",
    href: "/program-pendidikan/TK",
  },
  {
    id: "mi",
    icon: Trophy,
    title: "MI Alam",
    subtitle: "Kemandirian & Kepemimpinan",
    age: "7-12 Tahun",
    description:
      "Mengembangkan logika, tanggung jawab, dan kepemimpinan dalam lingkungan alami dan Islami. Siswa dipersiapkan menjadi pemimpin masa depan yang berakhlak mulia.",
    highlights: [
      "Kurikulum terintegrasi dengan alam",
      "Pengembangan kepemimpinan dan karakter",
      "Pembelajaran Al-Quran dan Hadits mendalam",
      "Proyek sosial dan lingkungan",
    ],
    image: "/gallery-learning-outdoor.jpg",
    color: "#5BAA6A",
    href: "/program-pendidikan/MI",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  // PERF: stable callback, avoids inline arrow in JSX
  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const active = JOURNEY_STEPS[activeStep];

  return (
    <section id="program" className="relative bg-[#E8F5E9] py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Perjalanan Belajar
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Tumbuh Bersama di Setiap Tahap
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Dari rasa ingin tahu pertama hingga kepemimpinan yang matang, kami
            mendampingi setiap langkah perjalanan anak Anda
          </p>
        </div>

        {/* Timeline tabs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <div key={step.id} className="flex items-center w-full md:w-auto">
                <button
                  onClick={() => handleStepClick(index)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all w-full text-left ${
                    isActive
                      ? "bg-white shadow-xl scale-[1.01] md:scale-105"
                      : "bg-white/50 hover:bg-white/80 hover:shadow-lg"
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                    style={{
                      backgroundColor: isActive ? `${step.color}20` : "#f0f0f0",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: step.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#2E2E2E]">{step.title}</p>
                    <p className="text-xs text-[#5C5C5C]">{step.age}</p>
                  </div>
                </button>

                {index < JOURNEY_STEPS.length - 1 && (
                  <div
                    className="hidden md:block w-8 h-0.5 bg-[#5BAA6A]/30 mx-2"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Active card */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // BUG FIX: missing ease
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-auto min-h-[320px]">
              {/* BUG FIX: was using width/height props but treating as fill — use fill+sizes instead */}
              <Image
                src={active.image}
                alt={`${active.title} - ${active.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${active.color}40, transparent)`,
                }}
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-[#2E2E2E]">
                  {active.age}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${active.color}20` }}
                >
                  {/* BUG FIX: original rendered an empty div inside icon wrapper — now renders the icon */}
                  {(() => {
                    const Icon = active.icon;
                    return (
                      <Icon
                        className="w-7 h-7"
                        style={{ color: active.color }}
                        aria-hidden="true"
                      />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
                    {active.title}
                  </h3>
                  <p className="text-[#5C5C5C]">{active.subtitle}</p>
                </div>
              </div>

              <p className="text-[#5C5C5C] leading-relaxed mb-6">
                {active.description}
              </p>

              <ul className="space-y-3 mb-8">
                {active.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${active.color}20`,
                        color: active.color,
                      }}
                    >
                      <Check className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-[#2E2E2E]">{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="rounded-full px-8 hover:opacity-90 transition-opacity text-white"
                style={{ backgroundColor: active.color }}
              >
                <Link href={active.href}>Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
