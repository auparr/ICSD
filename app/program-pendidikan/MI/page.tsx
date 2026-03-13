import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/sections/CTAsection";
import { miMetadata } from "@/lib/seo";

import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  BookOpen,
  Users,
  Leaf,
  Heart,
  Star,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sprout,
  Globe,
  Sword,
  Music2,
  Waves,
  Target,
  Flame,
  Building,
  GraduationCap,
} from "lucide-react";

export const metadata = miMetadata;

// ─── Static data ──────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Trophy,
    title: "Kepemimpinan Nyata",
    description:
      "Setiap siswa mendapat kesempatan memimpin — dari ketua proyek mingguan hingga koordinator kegiatan sosial sekolah.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Leaf,
    title: "Proyek Berbasis Alam",
    description:
      "Pembelajaran terintegrasi alam: berkebun organik, riset ekosistem lokal, dan proyek lingkungan yang berdampak nyata.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Globe,
    title: "Pengabdian Masyarakat",
    description:
      "Program sosial rutin — kunjungan panti, bazar amal, dan program bersih lingkungan yang membentuk jiwa peduli sejak dini.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
  {
    icon: BookOpen,
    title: "Akademik Unggul",
    description:
      "Kurikulum Merdeka diperkaya sains kontekstual, matematika berbasis problem solving, dan Al-Quran intensif setiap hari.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Heart,
    title: "Karakter Islami Kuat",
    description:
      "Akhlak mulia bukan mata pelajaran terpisah — ia hadir di setiap interaksi, proyek, dan keputusan siswa setiap harinya.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: GraduationCap,
    title: "Lulusan Siap Dunia",
    description:
      "Alumni MI Salam ICSD dikenal sebagai pemimpin percaya diri, mandiri, dan berakhlak — di manapun mereka melanjutkan pendidikan.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
] as const;

const CURRICULUM = [
  {
    area: "Akademik & Sains",
    icon: BookOpen,
    color: "#6BB9E0",
    items: [
      "Matematika berbasis problem solving kontekstual",
      "IPA melalui eksperimen dan riset lapangan langsung",
      "Bahasa Indonesia, Inggris, dan Arab fungsional",
      "Teknologi dasar dan literasi digital",
    ],
  },
  {
    area: "Al-Quran & Keislaman",
    icon: Star,
    color: "#F4C27F",
    items: [
      "Tahfidz Al-Quran — target minimal 3 juz saat lulus",
      "Tafsir kontekstual dan hadits kehidupan sehari-hari",
      "Fiqh ibadah dan muamalah praktis",
      "Sirah Nabawiyah mendalam dan inspiratif",
    ],
  },
  {
    area: "Kepemimpinan & Proyek",
    icon: Trophy,
    color: "#5BAA6A",
    items: [
      "Proyek alam lintas mata pelajaran per semester",
      "Rotasi peran kepemimpinan dalam kelompok",
      "Presentasi dan debat publik terstruktur",
      "Perencanaan dan eksekusi event sekolah mandiri",
    ],
  },
  {
    area: "Pengabdian & Sosial",
    icon: Globe,
    color: "#6BB9E0",
    items: [
      "Program sosial wajib setiap semester",
      "Kolaborasi dengan komunitas lokal sekitar sekolah",
      "Kampanye lingkungan dan penghijauan",
      "Kewirausahaan sosial berbasis produk alam",
    ],
  },
] as const;

const DAILY_SCHEDULE = [
  {
    time: "07.00 – 07.30",
    activity: "Pembukaan & Tahfidz Pagi",
    icon: Star,
    note: "Doa, murajaah, dan briefing harian",
  },
  {
    time: "07.30 – 09.30",
    activity: "Sesi Akademik Pagi",
    icon: BookOpen,
    note: "Mata pelajaran inti dengan pendekatan kontekstual",
  },
  {
    time: "09.30 – 10.00",
    activity: "Istirahat & Sholat Dhuha",
    icon: Heart,
    note: "Snack + pembiasaan sholat sunnah",
  },
  {
    time: "10.00 – 11.30",
    activity: "Proyek & Eksplorasi Alam",
    icon: Leaf,
    note: "Riset lapangan, berkebun, atau proyek tim",
  },
  {
    time: "11.30 – 12.30",
    activity: "Sholat Dzuhur Berjamaah",
    icon: Flame,
    note: "Sholat + makan siang bersama",
  },
  {
    time: "12.30 – 14.00",
    activity: "Sesi Sore & Ekstrakurikuler",
    icon: Trophy,
    note: "Pendalaman materi atau kegiatan ekskul",
  },
  {
    time: "14.00 – 14.30",
    activity: "Refleksi & Penutupan",
    icon: Users,
    note: "Evaluasi harian, doa ashar, persiapan pulang",
  },
] as const;

const EXTRACURRICULARS = [
  {
    icon: Waves,
    name: "Renang",
    description:
      "Latihan rutin di kolam renang dengan instruktur bersertifikat.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
  {
    icon: Sword,
    name: "Pencak Silat",
    description:
      "Bela diri tradisional Indonesia — melatih disiplin, keberanian, dan identitas budaya.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
  {
    icon: Target,
    name: "Panahan",
    description:
      "Sunnah Nabi yang melatih fokus, kesabaran, dan ketelitian sejak dini.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Music2,
    name: "Musik & Seni",
    description:
      "Alat musik tradisional dan modern, serta seni rupa berbasis bahan alam.",
    color: "#6BB9E0",
    bg: "bg-[#6BB9E0]/10",
  },
  {
    icon: Sprout,
    name: "Pertanian & Berkebun",
    description:
      "Merawat kebun sekolah dari tanam hingga panen — belajar sabar dan syukur.",
    color: "#5BAA6A",
    bg: "bg-[#5BAA6A]/10",
  },
  {
    icon: Building,
    name: "Pramuka",
    description:
      "Petualangan, survival skill, dan jiwa kebersamaan melalui kegiatan kepramukaan.",
    color: "#F4C27F",
    bg: "bg-[#F4C27F]/10",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MIPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="min-h-screen bg-[#FDFBF6]">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/gallery-learning-outdoor.webp"
              alt="Siswa MI Alam Salam ICSD belajar di alam terbuka"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
          </div>

          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 right-10 w-64 h-64 bg-[#F4C27F]/10 rounded-full blur-3xl"
          />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-block bg-[#F4C27F]/20 border border-[#F4C27F]/40 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Usia 7–12 Tahun · Kelas 1–6
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight tracking-tight mb-6">
              Madrasah Ibtidaiyah (MI) Alam
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-balance mb-10">
              Tempat para pemimpin masa depan dibentuk — unggul secara akademik,
              kuat dalam karakter, dan siap menjadi rahmatan lil 'alamin.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Trophy, text: "Kepemimpinan" },
                { icon: BookOpen, text: "Akademik Unggul" },
                { icon: Globe, text: "Pengabdian Sosial" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#F4C27F]" aria-hidden="true" />
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

          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────────────────── */}
        <section id="layanan" className="py-20 md:py-28 bg-[#FDFBF6]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-[#F4C27F]/15 text-[#C49040] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Keunggulan MI Alam
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
                Lebih dari Sekadar Sekolah Dasar
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                MI Alam Salam ICSD mempersiapkan anak untuk dunia nyata — bukan
                hanya nilai rapor, tapi karakter, kepemimpinan, dan kontribusi
                nyata.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
                <div
                  key={title}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F4C27F]/20"
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

        {/* ── Curriculum ──────────────────────────────────────────────────── */}
        <section id="kurikulum" className="py-20 md:py-28 bg-[#E8F5E9]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-white text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                Kurikulum
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
                Kurikulum yang Membentuk Seutuhnya
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                Mengacu pada Kurikulum Merdeka yang diperkaya pendekatan alam,
                kepemimpinan, dan keislaman — setiap area saling terintegrasi.
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
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/archery.webp"
                  alt="Siswa MI Salam ICSD berlatih panahan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-[#2E2E2E]">
                    Senin – Jumat
                  </p>
                  <p className="text-xs text-[#5C5C5C]">07.00 – 14.30 WIB</p>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <div className="inline-block bg-[#F4C27F]/15 text-[#C49040] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Kegiatan Harian
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-8 text-balance leading-tight">
                  Hari Penuh yang Bermakna
                </h2>

                <div className="space-y-4">
                  {DAILY_SCHEDULE.map(
                    ({ time, activity, icon: Icon, note }) => (
                      <div key={time} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[#F4C27F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F4C27F] transition-colors">
                            <Icon
                              className="w-5 h-5 text-[#C49040] group-hover:text-white transition-colors"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="w-px flex-1 bg-[#F4C27F]/30 my-1" />
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock
                              className="w-3.5 h-3.5 text-[#C49040]"
                              aria-hidden="true"
                            />
                            <span className="text-xs font-semibold text-[#C49040]">
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

        {/* ── Extracurriculars ────────────────────────────────────────────── */}
        <section
          id="ekstrakurikuler"
          className="py-20 md:py-28 bg-[#1A2E1A] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#F4C27F]/5 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#5BAA6A]/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-[#F4C27F]/15 text-[#F4C27F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Ekstrakurikuler
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                Bakat Tak Terbatas, Pilihan Tak Terbatas
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Di luar jam pelajaran, siswa MI bebas mengeksplorasi minat dan
                bakat mereka melalui berbagai program ekstrakurikuler unggulan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXTRACURRICULARS.map(
                ({ icon: Icon, name, description, color, bg }) => (
                  <div
                    key={name}
                    className="group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-3xl p-8 transition-all duration-300"
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
                    <h3 className="text-xl font-bold text-white mb-3">
                      {name}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>

            {/* Photo strip */}
            <div className="grid grid-cols-3 gap-4 mt-16">
              {[
                { img: "/archery.webp", alt: "Ekskul panahan MI" },
                {
                  img: "/gallery-learning-outdoor.webp",
                  alt: "Proyek alam MI",
                },
                { img: "/gallery-garden-exploration.webp", alt: "Berkebun MI" },
              ].map(({ img, alt }) => (
                <div
                  key={img}
                  className="relative aspect-video rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Value Proposition ───────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#FDFBF6]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Mengapa MI Alam?
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
                  Enam Tahun yang Mengubah Segalanya
                </h2>
                <p className="text-[#5C5C5C] text-lg leading-relaxed mb-8">
                  Enam tahun di MI Alam Salam ICSD bukan hanya tentang lulus
                  ujian. Ini tentang membentuk manusia yang tahu siapa dirinya,
                  apa tujuannya, dan bagaimana ia bisa memberi dampak bagi
                  dunia.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Target tahfidz minimal 3 juz saat kelulusan",
                    "Alumni siap masuk SMP/MTs unggulan",
                    "Portofolio proyek sosial dan alam selama 6 tahun",
                    "Rekam jejak kepemimpinan yang terstruktur",
                    "Fondasi karakter Islami yang telah teruji",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#5BAA6A] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-[#5C5C5C]">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/PPDB"
                    className="inline-flex items-center justify-center gap-2 bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-4 font-semibold shadow-lg transition-all hover:scale-[1.02]"
                  >
                    Daftar MI Alam
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/prestasi"
                    className="inline-flex items-center justify-center gap-2 border border-[#5BAA6A] text-[#5BAA6A] hover:bg-[#5BAA6A]/5 rounded-full px-8 py-4 font-semibold transition-all"
                  >
                    Lihat Prestasi Siswa
                  </Link>
                </div>
              </div>

              {/* Staggered image grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery-learning-outdoor.webp"
                      alt="Siswa MI belajar di alam"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery-prayer-time.webp"
                      alt="Sholat berjamaah MI"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/archery.webp"
                      alt="Ekskul panahan MI"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery-garden-exploration.webp"
                      alt="Proyek kebun MI"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
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
