"use client";

import { ChevronDown, HelpCircle, Phone, Mail } from "lucide-react"; // Added Phone, Mail for potential future use
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- Placeholder for a basic Accordion component (unchanged logic) ---
interface AccordionProps {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<{
  activeItem: string;
  onItemChange: (value: string) => void;
  type: "single" | "multiple";
}>({ activeItem: "", onItemChange: () => {}, type: "single" });

const Accordion = ({
  children,
  value,
  onValueChange,
  type = "single",
}: AccordionProps) => {
  return (
    <AccordionContext.Provider
      value={{ activeItem: value, onItemChange: onValueChange, type }}
    >
      <div className="space-y-4">{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
}

const AccordionItem = ({ children, value }: AccordionItemProps) => (
  <div className="border-b border-gray-200/50" data-value={value}>
    {children}
  </div>
);

interface AccordionTriggerProps {
  children: React.ReactNode;
  itemValue: string;
}

const AccordionTrigger = ({ children, itemValue }: AccordionTriggerProps) => {
  const { activeItem, onItemChange } = React.useContext(AccordionContext);
  const isOpen = activeItem === itemValue;

  return (
    <button
      className="flex justify-between items-center w-full py-4 text-left font-semibold text-[#2E2E2E] hover:text-[#5BAA6A] transition-colors group"
      onClick={() => onItemChange(itemValue)}
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown
        className={`w-5 h-5 text-[#5BAA6A] transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  itemValue: string;
}

const AccordionContent = ({ children, itemValue }: AccordionContentProps) => {
  const { activeItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === itemValue;

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
      }`}
    >
      <div className="text-[#5C5C5C] leading-relaxed">{children}</div>
    </div>
  );
};
// ----------------------------------------------------

export function FAQSection() {
  const [activeItem, setActiveItem] = useState("item-1");

  const faqs = [
    {
      question: "Apa perbedaan Sekolah Alam dengan sekolah formal lainnya?",
      answer:
        "Sekolah Alam fokus pada **pembelajaran berbasis pengalaman** dan eksplorasi langsung di alam terbuka (outdoor learning). Kami mengintegrasikan kurikulum nasional dengan nilai-nilai Islam dan pengembangan karakter, menjadikannya kontekstual dan menyenangkan, bukan hanya berfokus pada teori di kelas.",
      value: "item-1",
    },
    {
      question: "Bagaimana integrasi nilai-nilai Islam dalam kegiatan belajar?",
      answer:
        "Nilai-nilai Islam (akhlak mulia, ibadah, kepemimpinan) diintegrasikan dalam setiap kegiatan, bukan hanya pelajaran agama. Contohnya, kegiatan berkebun diajarkan sebagai bentuk syukur, dan proyek sosial diajarkan sebagai penerapan empati dan tolong-menolong.",
      value: "item-2",
    },
    {
      question:
        "Apakah kurikulum Sekolah Alam Insan Cendekia Sunan Drajat sesuai Kurikulum Nasional?",
      answer:
        "Ya, kurikulum kami mengacu pada **Kurikulum Nasional** yang diperkaya dengan metode pembelajaran alam dan karakter Islami. Lulusan kami memiliki kompetensi akademik yang setara sekaligus memiliki kematangan emosional dan spiritual.",
      value: "item-3",
    },
    {
      question: "Berapa biaya pendaftaran dan SPP di Sekolah Alam?",
      answer:
        "Informasi detail mengenai biaya pendaftaran, SPP bulanan, dan potensi beasiswa tersedia di halaman pendaftaran. Silakan klik tombol 'Daftar Sekarang' di navigasi untuk melihat rincian biaya terbaru untuk setiap jenjang (KB, TK, MI).",
      value: "item-4",
    },
    {
      question:
        "Apakah tersedia program penyesuaian untuk anak berkebutuhan khusus (ABK)?",
      answer:
        "Kami memiliki tim pendampingan dan konseling untuk mendukung perkembangan setiap anak. Program penyesuaian akan dievaluasi secara individual melalui proses asesmen dan diskusi dengan orang tua untuk memastikan lingkungan belajar yang optimal.",
      value: "item-5",
    },
  ];

  const handleAccordionChange = (value: string) => {
    setActiveItem(activeItem === value ? "" : value);
  };

  return (
    <section id="faq" className="bg-[#FDFBF6] py-20 md:py-32">
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

        {/* Accordion List */}
        <Accordion
          type="single"
          value={activeItem}
          onValueChange={handleAccordionChange}
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger itemValue={faq.value}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent itemValue={faq.value}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* --- Hubungi Kami CTA Button: Now unique and bigger --- */}
        <div className="mt-16 text-center">
          {" "}
          <Button
            asChild
            // Custom styling for a unique, bigger button
            className="
              bg-transparent                      /* Transparent background */
              border border-[#5BAA6A]           /* Thick green border */
              text-[#5BAA6A]                      /* Green text */
              hover:bg-[#5BAA6A]                  /* Solid green on hover */
              hover:text-white                    /* White text on hover */
              rounded                    /* Fully rounded */
              px-12 md:px-16                      /* Larger horizontal padding */
              py-6 md:py-7                        /* Larger vertical padding */
              text-xl md:text-2xl                 /* Bigger font size */
              font-extrabold                      /* Bolder text */
              shadowhover:shadow-xl           /* Subtle shadow */
              transition-all duration-300         /* Smooth transitions */
              scale-100 hover:scale-[1.03] active:scale-[0.98] /* Hover & active effects */
              w-full sm:w-auto                    /* Responsive width */
            "
          >
            <Link
              href="#kontak"
              className="flex items-center justify-center gap-3"
            >
              {" "}
              {/* Increased gap */}
              <Phone className="w-6 h-6 md:w-7 md:h-7" /> {/* Bigger icon */}
              Hubungi Disini Jika Pertanyaan Belum Terjawab
            </Link>
          </Button>
        </div>
        {/* ----------------------------- */}
      </div>
    </section>
  );
}
