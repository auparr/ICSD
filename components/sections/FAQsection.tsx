"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      value: "item-1",
      question: "Apa perbedaan Sekolah Alam dengan sekolah formal lainnya?",
      answer:
        "Sekolah Alam fokus pada pembelajaran berbasis pengalaman dan eksplorasi langsung di alam terbuka (outdoor learning). Kami mengintegrasikan kurikulum nasional dengan nilai-nilai Islam dan pengembangan karakter, menjadikannya kontekstual dan menyenangkan, bukan hanya berfokus pada teori di kelas.",
    },
    {
      value: "item-2",
      question: "Bagaimana integrasi nilai-nilai Islam dalam kegiatan belajar?",
      answer:
        "Nilai-nilai Islam (akhlak mulia, ibadah, kepemimpinan) diintegrasikan dalam setiap kegiatan, bukan hanya pelajaran agama. Contohnya, kegiatan berkebun diajarkan sebagai bentuk syukur, dan proyek sosial diajarkan sebagai penerapan empati dan tolong-menolong.",
    },
    {
      value: "item-3",
      question:
        "Apakah kurikulum Sekolah Alam Insan Cendekia Sunan Drajat sesuai Kurikulum Nasional?",
      answer:
        "Ya, kurikulum kami mengacu pada Kurikulum Nasional yang diperkaya dengan metode pembelajaran alam dan karakter Islami. Lulusan kami memiliki kompetensi akademik yang setara sekaligus memiliki kematangan emosional dan spiritual.",
    },
    {
      value: "item-4",
      question: "Berapa biaya pendaftaran dan SPP di Sekolah Alam?",
      answer:
        "Informasi detail mengenai biaya pendaftaran, SPP bulanan, dan potensi beasiswa tersedia di halaman pendaftaran. Silakan klik tombol 'Daftar Sekarang' di navigasi untuk melihat rincian biaya terbaru untuk setiap jenjang (KB, TK, MI).",
    },
    {
      value: "item-5",
      question:
        "Apakah tersedia program penyesuaian untuk anak berkebutuhan khusus (ABK)?",
      answer:
        "Kami memiliki tim pendampingan dan konseling untuk mendukung perkembangan setiap anak. Program penyesuaian akan dievaluasi secara individual melalui proses asesmen dan diskusi dengan orang tua untuk memastikan lingkungan belajar yang optimal.",
    },
  ];

  return (
    <section id="faq" className="bg-[#FDFBF6] py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-4 text-balance leading-tight">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Temukan jawaban atas pertanyaan yang paling sering diajukan oleh
            calon wali murid kami.
          </p>
        </div>

        {/* Accordion List with custom styling */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          defaultValue="item-1"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border-b border-gray-200/50"
            >
              <AccordionTrigger className="text-left font-semibold text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors group text-md hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#5C5C5C] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Hubungi Kami CTA Button */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#5C5C5C] mb-8 max-w-2xl mx-auto">
            Punya pertanyaan lain? Jangan ragu untuk menghubungi kami!
          </p>
          <Button
            asChild
            className="
              bg-transparent
              border border-[#5BAA6A]
              text-[#5BAA6A]
              hover:bg-[#5BAA6A]
              hover:text-white
              rounded
              px-12 md:px-16
              py-6 md:py-7
              text-xl md:text-2xl
              font-extrabold
              shadowhover:shadow-xl
              transition-all duration-300
              scale-100 hover:scale-[1.03] active:scale-[0.98]
              w-full sm:w-auto
            "
          >
            <Link
              href="#kontak"
              className="flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7" />
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
