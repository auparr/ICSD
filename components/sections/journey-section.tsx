"use client";

import { useState } from "react";
import { Sparkles, Compass, Trophy, Check } from "lucide-react"; // <-- Added Check
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // <-- Added motion

export function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    // ... (unchanged data)
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
    },
  ];

  const activeData = journeySteps[activeStep];

  return (
    <section id="perjalanan" className="relative bg-[#E8F5E9] py-15 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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

        {/* Journey Timeline - Mobile stacking enforced */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-center w-full md:w-auto">
                {" "}
                {/* <-- Added w-full for mobile */}
                <button
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all w-full text-left ${
                    // <-- Added w-full
                    activeStep === index
                      ? "bg-white shadow-xl scale-[1.01] md:scale-105" // Slightly less scale on mobile
                      : "bg-white/50 hover:bg-white/80 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0`}
                    style={{
                      backgroundColor:
                        activeStep === index ? `${step.color}20` : "#f0f0f0",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="font-semibold text-[#2E2E2E]">
                      {step.title}
                    </div>
                    <div className="text-xs text-[#5C5C5C]">{step.age}</div>
                  </div>
                </button>
                {/* Connector line only on desktop */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-[#5BAA6A]/30 mx-2" />
                )}
              </div>
            );
          })}
        </div>

        {/* Active Step Content - Wrapped in motion.div for animation */}
        <motion.div
          key={activeData.id} // <-- KEY: Triggers animation on change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-auto">
              <Image
                src={activeData.image || "/placeholder.svg"}
                alt={activeData.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                style={{
                  background: `linear-gradient(to top, ${activeData.color}40, transparent)`,
                }}
              />
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-[#2E2E2E]">
                  {activeData.age}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${activeData.color}20`,
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: activeData.color, // Simplified inner color
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
                    {activeData.title}
                  </h3>
                  <p className="text-[#5C5C5C]">{activeData.subtitle}</p>
                </div>
              </div>

              <p className="text-[#5C5C5C] leading-relaxed mb-6">
                {activeData.description}
              </p>

              {/* Highlights - Changed to Checkmarks */}
              <div className="space-y-3 mb-8">
                {activeData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${activeData.color}20`,
                        color: activeData.color, // Set checkmark color
                      }}
                    >
                      <Check className="w-4 h-4" /> {/* Use Check icon */}
                    </div>
                    <span className="text-[#2E2E2E]">{highlight}</span>
                  </div>
                ))}
              </div>

              <Button
                className="rounded-full px-8 hover:opacity-90 transition-opacity" // Added hover effect
                style={{
                  backgroundColor: activeData.color,
                }}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
