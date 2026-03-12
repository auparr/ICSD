import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/sections/CTAsection";
import { tkMetadata } from "@/lib/seo";

import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  TreePine,
  Swords,
  Bike,
  Mountain,
  Users,
  BookOpen,
  Star,
  CheckCircle2,
  Clock,
  ArrowRight,
  Flame,
  Wind,
  Sprout,
  Heart,
} from "lucide-react";

export const metadata = tkMetadata;

// ─── Static data ──────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Mountain,
    title: "Petualangan Outdoor Intensif",
    description:
      "Hiking mini, panjat tebing anak, dan ekspedisi alam menjadi bagian rutin pembelajaran — bukan sekadar kegiatan ekstra.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Users,
    title: "Proyek Tim & Kepemimpinan",
    description:
      "Anak-anak bergantian menjadi pemimpin kelompok dalam proyek mingguan — belajar mengarahkan, mendengarkan, dan berkolaborasi.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Bike,
    title: "Motorik Aktif Setiap Hari",
    description:
      "Lari lintas alam, keseimbangan balok, lompat tali, dan permainan tradisional mengasah koordinasi tubuh secara menyeluruh.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
  {
    icon: Sprout,
    title: "Sains Kontekstual",
    description:
      "Mengamati serangga, menanam dan memanen, serta eksperimen air dan tanah — sains dipelajari langsung dari alam.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Flame,
    title: "Keberanian & Resiliensi",
    description:
      "Tantangan terstruktur yang aman membangun mental tangguh — anak belajar bahwa gagal adalah bagian dari belajar.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Heart,
    title: "Akhlak & Kepemimpinan Islami",
    description:
      "Nilai amanah, tanggung jawab, dan empati diajarkan melalui contoh nyata dan cerita para pemimpin Islam.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
] as const;

const CURRICULUM = [
  {
    area: "Motorik & Petualangan",
    icon: Mountain,
    color: "#5BAA6A",
    items: [
      "Ekspedisi alam dan hiking mini rutin",
      "Permainan tradisional (engklek, gobak sodor, dll)",
      "Keseimbangan, lompat, dan koordinasi tubuh",
      "Aktivitas air dan lumpur terstruktur",
    ],
  },
  {
    area: "Kognitif & Literasi Awal",
    icon: BookOpen,
    color: "#F4C27F",
    items: [
      "Membaca gambar dan simbol di alam",
      "Berhitung dan pola dengan objek nyata",
      "Peta sederhana dan orientasi ruang",
      "Eksperimen sains dan observasi terstruktur",
    ],
  },
  {
    area: "Kepemimpinan & Tim",
    icon: Users,
    color: "#6BB9E0",
    items: [
      "Rotasi peran pemimpin kelompok mingguan",
      "Proyek kolaborasi lintas kelompok",
      "Diskusi dan pengambilan keputusan bersama",
      "Presentasi hasil proyek di depan teman",
    ],
  },
  {
    area: "Nilai Islam & Karakter",
    icon: Star,
    color: "#5BAA6A",
    items: [
      "Hafalan surat dan doa sehari-hari",
      "Sirah kepemimpinan para sahabat Nabi",
      "Praktik sholat berjamaah harian",
      "Proyek sosial — berbagi dan peduli lingkungan",
    ],
  },
] as const;

const DAILY_SCHEDULE = [
  {
    time: "07.15 – 07.30",
    activity: "Penyambutan & Pemanasan Fisik",
    icon: Wind,
    note: "Salam, doa, dan gerakan pagi bersama",
  },
  {
    time: "07.30 – 08.00",
    activity: "Circle Time & Briefing Tim",
    icon: Users,
    note: "Pembagian peran dan rencana hari ini",
  },
  {
    time: "08.00 – 09.30",
    activity: "Eksplorasi & Proyek Alam",
    icon: TreePine,
    note: "Petualangan outdoor atau proyek kelompok",
  },
  {
    time: "09.30 – 10.00",
    activity: "Snack & Istirahat Aktif",
    icon: Flame,
    note: "Makan bersama + permainan bebas outdoor",
  },
  {
    time: "10.00 – 11.00",
    activity: "Kegiatan Motorik & Sensorik",
    icon: Bike,
    note: "Sirkuit gerak, seni, atau eksperimen sains",
  },
  {
    time: "11.00 – 11.30",
    activity: "Refleksi & Penutupan",
    icon: Compass,
    note: "Evaluasi tim, doa, dan persiapan pulang",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TKPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen bg-[#FDFBF6]">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/gallery-learning-outdoor.jpg"
              alt="Anak-anak TK Alam Salam ICSD bereksplorasi di alam terbuka"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/25" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-block bg-[#6BB9E0]/20 border border-[#6BB9E0]/40 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Usia 5–6 Tahun
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight tracking-tight mb-6">
              Taman Kanak-kanak (TK) Alam
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-balance mb-10">
              Tempat anak-anak pemberani tumbuh — menjelajah alam, memimpin
              teman, dan membangun fondasi karakter yang tak tergoyahkan.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Mountain, text: "Petualangan Outdoor" },
                { icon: Users, text: "Proyek Tim" },
                { icon: Bike, text: "Motorik Intensif" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#6BB9E0]" aria-hidden="true" />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/PPDB"
                className="inline-flex items-center justify-center gap-2 bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="#kegiatan-harian"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all"
              >
                Lihat Kegiatan Harian
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* ── Features & Services ─────────────────────────────────────────── */}
        <section id="layanan" className="py-20 md:py-28 bg-[#FDFBF6]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-[#6BB9E0]/10 text-[#6BB9E0] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Layanan & Keunggulan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
                Lebih dari Sekadar Taman Bermain
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                TK Alam Salam ICSD dirancang untuk anak yang siap tantangan
                lebih besar — eksplorasi lebih jauh, tanggung jawab lebih nyata,
                dan petualangan yang tak terlupakan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
                <div
                  key={title}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#6BB9E0]/20"
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
                Apa yang Anak Anda Kuasai
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                Kurikulum TK kami mempersiapkan anak secara menyeluruh — fisik
                yang kuat, pikiran yang kritis, jiwa pemimpin, dan hati yang
                Islami.
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
              {/* Schedule */}
              <div>
                <div className="inline-block bg-[#6BB9E0]/10 text-[#6BB9E0] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Kegiatan Harian
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-8 text-balance leading-tight">
                  Setiap Hari Adalah Ekspedisi Baru
                </h2>

                <div className="space-y-4">
                  {DAILY_SCHEDULE.map(
                    ({ time, activity, icon: Icon, note }) => (
                      <div key={time} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[#6BB9E0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6BB9E0] transition-colors">
                            <Icon
                              className="w-5 h-5 text-[#6BB9E0] group-hover:text-white transition-colors"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="w-px flex-1 bg-[#6BB9E0]/20 my-1" />
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock
                              className="w-3.5 h-3.5 text-[#6BB9E0]"
                              aria-hidden="true"
                            />
                            <span className="text-xs font-semibold text-[#6BB9E0]">
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

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/gallery-nature-walk.jpg"
                  alt="Kegiatan harian TK Alam Salam ICSD"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-[#2E2E2E]">
                    Senin – Jumat
                  </p>
                  <p className="text-xs text-[#5C5C5C]">07.15 – 11.30 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Value Proposition ───────────────────────────────────────────── */}
        <section className="py-20 bg-[#1A2E1A] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#6BB9E0]/10 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#5BAA6A]/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Photo collage */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    img: "/gallery-nature-walk.jpg",
                    alt: "Petualangan alam TK",
                    span: "row-span-2",
                  },
                  {
                    img: "/gallery-art-craft.jpg",
                    alt: "Proyek seni TK",
                    span: "aspect-square",
                  },
                  {
                    img: "/gallery-learning-outdoor.jpg",
                    alt: "Belajar outdoor TK",
                    span: "aspect-square",
                  },
                ].map(({ img, alt, span }) => (
                  <div
                    key={img}
                    className={`relative rounded-2xl overflow-hidden shadow-lg ${span}`}
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

              {/* Copy */}
              <div>
                <div className="inline-block bg-[#6BB9E0]/20 text-[#6BB9E0] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Mengapa TK Alam?
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                  Anak yang Berani Hari Ini, Pemimpin Sejati Esok Hari
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Usia 5–6 tahun adalah masa emas pembentukan karakter dan
                  kepemimpinan. Di TK Alam Salam ICSD, kami tidak menunggu
                  mereka dewasa untuk diberi tanggung jawab — kami mulai
                  sekarang, melalui petualangan nyata di alam terbuka.
                </p>
                <ul className="space-y-4">
                  {[
                    "Lebih dari 60% waktu belajar di luar kelas",
                    "Program kepemimpinan terstruktur untuk usia dini",
                    "Tantangan motorik yang aman dan terpantau",
                    "Transisi mulus menuju jenjang MI",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#6BB9E0] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/PPDB"
                    className="inline-flex items-center justify-center gap-2 bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-4 font-semibold shadow-lg transition-all hover:scale-[1.02]"
                  >
                    Daftar TK Alam
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/program-pendidikan/MI"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold transition-all"
                  >
                    Lihat Jenjang MI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
