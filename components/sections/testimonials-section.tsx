"use client";

import { useState, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

// ─── Static data outside component ───────────────────────────────────────────
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Siti Nurhaliza",
    role: "Orang Tua Siswa KB",
    image: "/parent-1.webp",
    quote:
      "Salam ICSD mengubah cara anak saya melihat dunia. Dia tidak hanya belajar membaca dan menulis, tapi juga mencintai alam dan memahami nilai-nilai Islam dengan cara yang menyenangkan. Terima kasih telah menjadi bagian dari perjalanan tumbuh kembangnya.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bapak Ahmad Fauzi",
    role: "Orang Tua Siswa MI",
    image: "/parent-2.webp",
    quote:
      "Kami sangat bersyukur menemukan Salam ICSD. Anak kami menjadi lebih mandiri, bertanggung jawab, dan memiliki akhlak yang baik. Metode pembelajaran berbasis alam membuat dia selalu bersemangat untuk sekolah setiap hari.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ibu Dewi Lestari",
    role: "Orang Tua Siswa TK",
    image: "/parent-3.webp",
    quote:
      "Pendekatan holistik yang diterapkan di Salam ICSD luar biasa. Anak saya tidak hanya pintar secara akademis, tapi juga memiliki empati, kreativitas, dan kecintaan terhadap lingkungan. Ini adalah investasi terbaik untuk masa depannya.",
    rating: 5,
  },
];

const TOTAL = TESTIMONIALS.length;

// Pre-compute star arrays — never recreated per render
const STAR_ARRAYS = TESTIMONIALS.map((t) =>
  Array.from({ length: t.rating }, (_, i) => i),
);

// ─── Component ────────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // BUG FIX: inline arrow functions in JSX recreated every render
  const next = useCallback(() => setCurrentIndex((i) => (i + 1) % TOTAL), []);
  const prev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + TOTAL) % TOTAL),
    [],
  );

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimoni"
      className="relative bg-gradient-to-br from-[#5BAA6A]/5 via-[#6BB9E0]/5 to-[#F4C27F]/5 py-16 md:py-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-10 w-32 h-32 bg-[#5BAA6A]/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#6BB9E0]/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Testimoni
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Apa Kata Orang Tua
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Kepercayaan dan kepuasan orang tua adalah prioritas kami
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
            <div
              aria-hidden="true"
              className="absolute -top-6 left-8 w-12 h-12 bg-[#5BAA6A] rounded-full flex items-center justify-center shadow-lg"
            >
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              {/* Avatar + stars */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4">
                  <Image
                    src={current.image}
                    alt={`Foto ${current.name}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                {/* BUG FIX: was spreading Array(n) which is sparse — Array.from is correct */}
                <div
                  className="flex gap-1 mb-2"
                  aria-label={`Rating: ${current.rating} bintang`}
                >
                  {STAR_ARRAYS[currentIndex].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F4C27F] text-[#F4C27F]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div>
                <blockquote className="text-lg md:text-xl text-[#2E2E2E] leading-relaxed mb-6 font-serif italic">
                  "{current.quote}"
                </blockquote>
                <div>
                  <h4 className="text-xl font-bold text-[#2E2E2E]">
                    {current.name}
                  </h4>
                  <p className="text-[#5C5C5C]">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Nav buttons */}
            <div
              className="flex justify-center gap-4 mt-8"
              role="group"
              aria-label="Navigasi testimoni"
            >
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-[#4A9958] text-white hover:bg-[#3A7745] transition-all flex items-center justify-center shadow-md hover:shadow-xl"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="w-7 h-7" aria-hidden="true" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-[#4A9958] text-white hover:bg-[#3A7745] transition-all flex items-center justify-center shadow-md hover:shadow-xl"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>

            {/* Dots */}
            <div
              className="flex justify-center gap-2 mt-6"
              role="tablist"
              aria-label="Pilih testimoni"
            >
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#5BAA6A] w-8"
                      : "bg-[#5BAA6A]/30 w-2"
                  }`}
                  aria-label={`Testimoni ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
