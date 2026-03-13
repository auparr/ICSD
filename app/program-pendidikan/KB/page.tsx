import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/program-hero";
import { CTASection } from "@/components/sections/CTAsection";
import { kbMetadata } from "@/lib/seo";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Footprints,
  Heart,
  Leaf,
  Sun,
  Music,
  BookOpen,
  Users,
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";

export const metadata = kbMetadata;

// ─── Static data ──────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Leaf,
    title: "Belajar di Alam Terbuka",
    description:
      "Setiap hari anak-anak belajar langsung di kebun, hutan mini, dan area terbuka — bukan hanya di dalam kelas.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Heart,
    title: "Fondasi Akhlak Islami",
    description:
      "Nilai-nilai Islam ditanamkan sejak dini melalui pembiasaan doa, empati, dan perilaku sehari-hari yang menyenangkan.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Footprints,
    title: "Eksplorasi Sensorik",
    description:
      "Aktivitas meraba, mencium, mendengar, dan melihat alam langsung merangsang tumbuh kembang otak optimal.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
  {
    icon: Users,
    title: "Kelas Kecil & Personal",
    description:
      "Rasio guru dan murid yang ideal memastikan setiap anak mendapat perhatian dan bimbingan penuh.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Music,
    title: "Belajar Melalui Lagu & Gerak",
    description:
      "Musik, gerak tubuh, dan permainan ritmis mengembangkan kecerdasan motorik dan emosional secara bersamaan.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Shield,
    title: "Lingkungan Aman & Terstruktur",
    description:
      "Area bermain yang aman, guru terlatih, dan rutinitas harian yang terstruktur memberikan rasa nyaman bagi anak.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
] as const;

const CURRICULUM = [
  {
    area: "Perkembangan Motorik",
    icon: Footprints,
    color: "#5BAA6A",
    items: [
      "Berlari, melompat, dan memanjat di alam terbuka",
      "Meronce, melipat, dan menggunting (motorik halus)",
      "Permainan keseimbangan dan koordinasi tubuh",
      "Berkebun — mencangkul, menyiram, dan menanam",
    ],
  },
  {
    area: "Kognitif & Bahasa",
    icon: BookOpen,
    color: "#F4C27F",
    items: [
      "Pengenalan huruf hijaiyah & alfabet melalui alam",
      "Berhitung dengan batu, daun, dan biji-bijian",
      "Bercerita dan mendongeng interaktif",
      "Tanya-jawab eksplorasi sains sederhana",
    ],
  },
  {
    area: "Sosial & Emosional",
    icon: Heart,
    color: "#6BB9E0",
    items: [
      "Bermain peran dan kolaborasi kelompok kecil",
      "Mengenal dan mengekspresikan perasaan",
      "Pembiasaan berbagi dan menolong teman",
      "Resolusi konflik sederhana dengan bimbingan guru",
    ],
  },
  {
    area: "Nilai Islam & Karakter",
    icon: Star,
    color: "#5BAA6A",
    items: [
      "Hafalan doa sehari-hari dan surat pendek",
      "Cerita sirah Nabi yang sesuai usia",
      "Pembiasaan sholat melalui gerakan bermain",
      "Syukur atas alam dan ciptaan Allah",
    ],
  },
] as const;

const DAILY_SCHEDULE = [
  {
    time: "07.15 – 07.30",
    activity: "Penyambutan & Pembiasaan Pagi",
    icon: Sun,
    note: "Salam, doa, dan cek kesehatan",
  },
  {
    time: "07.30 – 08.00",
    activity: "Pembukaan & Circle Time",
    icon: Users,
    note: "Berbagi cerita dan persiapan belajar",
  },
  {
    time: "08.00 – 09.00",
    activity: "Kegiatan Inti Berbasis Alam",
    icon: Leaf,
    note: "Eksplorasi, proyek mini, atau berkebun",
  },
  {
    time: "09.00 – 09.30",
    activity: "Snack Time & Istirahat",
    icon: Heart,
    note: "Makan bersama + bermain bebas",
  },
  {
    time: "09.30 – 10.30",
    activity: "Kegiatan Sensorik & Motorik",
    icon: Footprints,
    note: "Seni, musik, atau aktivitas fisik",
  },
  {
    time: "10.30 – 11.00",
    activity: "Penutupan & Refleksi",
    icon: BookOpen,
    note: "Doa, evaluasi hari, dan persiapan pulang",
  },
] as const;

// const VALUE_PROPS = [
//   { stat: "3–4", label: "Tahun", sub: "Usia ideal bergabung" },
//   { stat: "1:8", label: "Rasio", sub: "Guru per murid" },
//   { stat: "5", label: "Hari", sub: "Senin – Jumat" },
//   { stat: "100%", label: "Outdoor", sub: "Minimal 40% waktu di alam" },
// ] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KBPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen bg-[#FDFBF6]">
        {/* Hero — reuses program-hero component */}
        <HeroSection />

        {/* ── Value Props Bar ───────────────────────────────────────────────
        <section className="bg-[#5BAA6A] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {VALUE_PROPS.map(({ stat, label, sub }) => (
                <div key={label} className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold">{stat}</div>
                  <div className="text-lg font-semibold opacity-90">
                    {label}
                  </div>
                  <div className="text-xs opacity-70 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── Features & Services ─────────────────────────────────────────── */}
        <section id="layanan" className="py-20 md:py-28 bg-[#FDFBF6]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Layanan & Keunggulan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
                Mengapa Memilih KB Alam Salam ICSD?
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                Kami merancang setiap aspek pembelajaran untuk mendukung tumbuh
                kembang anak secara holistik — fisik, kognitif, sosial, dan
                spiritual.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
                <div
                  key={title}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#5BAA6A]/10"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6`}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                    {title}
                  </h3>
                  <p className="text-[#5C5C5C] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curriculum Detail ───────────────────────────────────────────── */}
        <section id="kurikulum" className="py-20 md:py-28 bg-[#E8F5E9]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-white text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                Kurikulum
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
                Apa yang Anak Anda Pelajari
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                Kurikulum KB kami mengacu pada Kurikulum Merdeka yang diperkaya
                dengan pendekatan alam dan nilai-nilai Islami di setiap area
                perkembangan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {CURRICULUM.map(({ area, icon: Icon, color, items }) => (
                <div key={area} className="bg-white rounded-3xl p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#2E2E2E]">{area}</h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 text-[#5BAA6A] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-[#5C5C5C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Daily Schedule ──────────────────────────────────────────────── */}
        <section id="kegiatan-harian" className="py-20 md:py-28 bg-[#FDFBF6]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/gallery-learning-outdoor.webp"
                  alt="Kegiatan harian KB Alam Salam ICSD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-[#2E2E2E]">
                    Senin – Jumat
                  </p>
                  <p className="text-xs text-[#5C5C5C]">07.15 – 11.00 WIB</p>
                </div>
              </div>

              {/* Right: schedule */}
              <div>
                <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Kegiatan Harian
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-8 text-balance leading-tight">
                  Sehari Penuh Petualangan Belajar
                </h2>

                <div className="space-y-4">
                  {DAILY_SCHEDULE.map(
                    ({ time, activity, icon: Icon, note }) => (
                      <div key={time} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[#5BAA6A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5BAA6A] transition-colors">
                            <Icon
                              className="w-5 h-5 text-[#5BAA6A] group-hover:text-white transition-colors"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="w-px flex-1 bg-[#5BAA6A]/20 my-1" />
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock
                              className="w-3.5 h-3.5 text-[#5BAA6A]"
                              aria-hidden="true"
                            />
                            <span className="text-xs font-semibold text-[#5BAA6A]">
                              {time}
                            </span>
                          </div>
                          <p className="font-semibold text-[#2E2E2E]">
                            {activity}
                          </p>
                          <p className="text-sm text-[#5C5C5C]">{note}</p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Value Proposition ───────────────────────────────────────────── */}
        <section className="py-20 bg-[#2E2E2E] relative overflow-hidden">
          {/* Decorative */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#5BAA6A]/10 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4C27F]/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-[#5BAA6A]/20 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Mengapa KB Alam?
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                  Masa Kecil yang Bermakna Membentuk Dewasa yang Luar Biasa
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Riset menunjukkan bahwa pengalaman belajar usia 3–4 tahun
                  membentuk 90% perkembangan otak. Di KB Alam Salam ICSD, kami
                  memastikan setiap momen menjadi fondasi yang kuat — bukan
                  sekadar hafalan, tapi pemahaman yang berakar.
                </p>
                <ul className="space-y-4">
                  {[
                    "Pendekatan bermain yang terbukti efektif secara ilmiah",
                    "Guru bersertifikat dengan passion mendidik anak usia dini",
                    "Lingkungan belajar yang memicu rasa ingin tahu alami",
                    "Pelaporan perkembangan berkala untuk orang tua",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#5BAA6A] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    img: "/gallery-garden-exploration.webp",
                    alt: "Eksplorasi kebun KB",
                  },
                  {
                    img: "/gallery-art-craft.webp",
                    alt: "Seni dan kerajinan KB",
                  },
                  {
                    img: "/gallery-reading-circle.webp",
                    alt: "Lingkaran membaca KB",
                  },
                  { img: "/kb.webp", alt: "Suasana KB Alam" },
                ].map(({ img, alt }, i) => (
                  <div
                    key={img}
                    className={`relative rounded-2xl overflow-hidden shadow-lg ${i === 0 ? "row-span-2" : "aspect-square"}`}
                  >
                    <Image
                      src={img}
                      alt={alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA — reused from homepage ──────────────────────────────────── */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
