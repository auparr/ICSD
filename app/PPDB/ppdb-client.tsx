"use client";

import { useState, useCallback, memo } from "react";
import {
  FileText,
  CheckSquare,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  UserCheck,
  Megaphone,
  RefreshCw,
  GraduationCap,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_LINK = "https://wa.me/6281216796656";
const WA_PPDB = `${WA_LINK}?text=Halo%20Salam%20ICSD%2C%20saya%20ingin%20bertanya%20tentang%20PPDB%202026%2F2027`;
// TODO: Replace with real Google Form link when ready
const GFORM_URL = "https://forms.google.com/placeholder-ppdb-salam-icsd";

// ─── Static data (outside component — no re-creation on render) ───────────────

const TIMELINE = [
  {
    icon: ClipboardList,
    phase: "Gelombang 1",
    date: "1 Nov 2025 – 31 Jan 2026",
    desc: "Pendaftaran dibuka. Isi formulir online dan lengkapi dokumen persyaratan.",
    bg: "bg-[#5BAA6A]",
    status: "done",
  },
  {
    icon: UserCheck,
    phase: "Observasi & Wawancara",
    date: "Februari 2026",
    desc: "Calon siswa dan orang tua mengikuti sesi observasi dan wawancara bersama tim sekolah.",
    bg: "bg-[#6BB9E0]",
    status: "done",
  },
  {
    icon: Megaphone,
    phase: "Pengumuman",
    date: "Maret 2026",
    desc: "Hasil seleksi diumumkan. Orang tua akan dihubungi langsung oleh tim PPDB.",
    bg: "bg-[#F4C27F]",
    status: "current",
  },
  {
    icon: RefreshCw,
    phase: "Daftar Ulang",
    date: "April 2026",
    desc: "Siswa yang diterima melakukan daftar ulang dan pelunasan biaya pendidikan.",
    bg: "bg-[#5BAA6A]",
    status: "upcoming",
  },
  {
    icon: GraduationCap,
    phase: "Hari Pertama Sekolah",
    date: "Juli 2026",
    desc: "Selamat datang di keluarga besar Salam ICSD! Petualangan belajar dimulai.",
    bg: "bg-[#F4C27F]",
    status: "upcoming",
  },
] as const;

const REQUIREMENTS = [
  "Usia minimal 3 tahun (KB), 5 tahun (TK), 7 tahun (MI) per Juli 2026",
  "Fotokopi Akta Kelahiran & Kartu Keluarga",
  "Pas foto terbaru ukuran 3×4 sebanyak 2 lembar",
  "Surat keterangan sehat dari dokter",
  "Mengisi formulir pendaftaran online",
] as const;

const FLOW_STEPS = [
  { step: "01", text: "Hubungi tim PPDB via WhatsApp untuk konfirmasi kuota" },
  { step: "02", text: "Isi formulir pendaftaran online (Google Form)" },
  { step: "03", text: "Lakukan pembayaran biaya pendaftaran" },
  { step: "04", text: "Unggah dokumen persyaratan yang dibutuhkan" },
  { step: "05", text: "Ikuti jadwal observasi dan wawancara" },
  { step: "06", text: "Tunggu pengumuman dan lakukan daftar ulang" },
] as const;

const BIAYA = [
  {
    program: "KB (Kelompok Bermain)",
    age: "3–4 tahun",
    daftar: "Rp 150.000",
    spp: "Rp 350.000 / bulan",
    note: "Belum termasuk seragam & perlengkapan",
  },
  {
    program: "TK (Taman Kanak-kanak)",
    age: "5–6 tahun",
    daftar: "Rp 150.000",
    spp: "Rp 400.000 / bulan",
    note: "Belum termasuk seragam & perlengkapan",
  },
  {
    program: "MI (Madrasah Ibtidaiyah)",
    age: "7–12 tahun",
    daftar: "Rp 200.000",
    spp: "Rp 500.000 / bulan",
    note: "Belum termasuk seragam & perlengkapan",
  },
] as const;

const FAQS = [
  {
    q: "Apakah ada tes masuk untuk KB dan TK?",
    a: "Tidak ada tes akademik. Proses seleksi berupa observasi bermain dan wawancara santai bersama orang tua untuk memastikan kesiapan anak dan keselarasan nilai keluarga dengan visi sekolah.",
  },
  {
    q: "Bagaimana jika anak belum cukup umur di bulan Juli?",
    a: "Usia dihitung per 1 Juli 2026. Jika anak belum memenuhi syarat usia minimum, kami sarankan untuk mendaftar pada tahun ajaran berikutnya agar tumbuh kembang optimal.",
  },
  {
    q: "Apakah tersedia keringanan biaya?",
    a: "Ya, kami menyediakan program keringanan biaya bagi keluarga yang membutuhkan. Silakan hubungi tim PPDB melalui WhatsApp untuk informasi lebih lanjut mengenai syarat dan ketentuan.",
  },
  {
    q: "Kapan Gelombang 2 pendaftaran dibuka?",
    a: "Gelombang 2 akan dibuka jika masih tersedia kuota setelah Gelombang 1 selesai. Pantau informasi terbaru melalui WhatsApp atau media sosial sekolah.",
  },
  {
    q: "Apakah orang tua perlu hadir saat observasi?",
    a: "Ya, kehadiran orang tua sangat penting dalam sesi observasi dan wawancara. Ini bukan sekadar seleksi anak, tapi juga kesempatan bagi orang tua untuk mengenal lebih dalam filosofi dan pendekatan Salam ICSD.",
  },
  {
    q: "Bagaimana cara mengetahui hasil seleksi?",
    a: "Hasil seleksi akan disampaikan langsung melalui WhatsApp ke nomor yang didaftarkan. Pastikan nomor yang Anda daftarkan aktif dan dapat dihubungi.",
  },
] as const;

const STATUS_STYLES = {
  done: "bg-[#5BAA6A]/10 text-[#5BAA6A]",
  current: "bg-[#F4C27F]/20 text-[#C49040]",
  upcoming: "bg-gray-100 text-gray-400",
} as const;

const STATUS_LABEL = {
  done: "✓ Selesai",
  current: "● Sekarang",
  upcoming: "Akan Datang",
} as const;

// ─── Memoized sub-components ──────────────────────────────────────────────────

const FAQItem = memo(function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-[#5BAA6A] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#2E2E2E] text-sm md:text-base">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#5BAA6A] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#5C5C5C] flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-[#5C5C5C] text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
});

// ─── Main Client Component ────────────────────────────────────────────────────

export function PPDBClient() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FDFBF6]">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1A2E1A] pt-32 pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-96 h-96 bg-[#5BAA6A]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4C27F]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-[#5BAA6A]/20 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            PPDB 2026/2027
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Bergabunglah dengan keluarga besar Sekolah Alam Insan Cendekia —
            tempat anak Anda tumbuh bersama alam, iman, dan kepemimpinan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary: GForm */}
            <a
              href={GFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              Daftar Online Sekarang
            </a>
            {/* Secondary: WhatsApp */}
            <a
              href={WA_PPDB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Visual Roadmap ──────────────────────────────────────────────── */}
      <section id="alur-pendaftaran" className="py-20 md:py-28 bg-[#FDFBF6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Alur Pendaftaran
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-4 text-balance leading-tight">
              5 Langkah Menuju Salam ICSD
            </h2>
            <p className="text-[#5C5C5C] leading-relaxed">
              Proses pendaftaran yang sederhana dan transparan — kami ada di
              setiap langkah untuk membantu Anda.
            </p>
          </div>

          {/* Desktop: horizontal stepper */}
          <div className="hidden md:block">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"
              />
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {TIMELINE.map(
                  ({ icon: Icon, phase, date, desc, bg, status }) => (
                    <div
                      key={phase}
                      className="flex flex-col items-center text-center"
                    >
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg ${status === "upcoming" ? "bg-gray-100" : bg}`}
                      >
                        <Icon
                          className={`w-8 h-8 ${status === "upcoming" ? "text-gray-400" : "text-white"}`}
                          aria-hidden="true"
                        />
                      </div>
                      <div
                        className={`text-xs font-bold px-3 py-1 rounded-full mb-2 ${STATUS_STYLES[status]}`}
                      >
                        {STATUS_LABEL[status]}
                      </div>
                      <h3 className="font-bold text-[#2E2E2E] text-sm mb-1">
                        {phase}
                      </h3>
                      <p className="text-xs text-[#5BAA6A] font-semibold mb-2">
                        {date}
                      </p>
                      <p className="text-xs text-[#5C5C5C] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-0">
            {TIMELINE.map(
              ({ icon: Icon, phase, date, desc, bg, status }, idx) => (
                <div key={phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${status === "upcoming" ? "bg-gray-100" : bg}`}
                    >
                      <Icon
                        className={`w-6 h-6 ${status === "upcoming" ? "text-gray-400" : "text-white"}`}
                        aria-hidden="true"
                      />
                    </div>
                    {idx < TIMELINE.length - 1 && (
                      <div
                        className="w-0.5 flex-1 bg-gray-200 my-2"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <div
                      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${STATUS_STYLES[status]}`}
                    >
                      {STATUS_LABEL[status]}
                    </div>
                    <h3 className="font-bold text-[#2E2E2E] mb-0.5">{phase}</h3>
                    <p className="text-xs text-[#5BAA6A] font-semibold mb-1">
                      {date}
                    </p>
                    <p className="text-sm text-[#5C5C5C] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Requirements + Flow ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#5BAA6A]/10 flex items-center justify-center flex-shrink-0">
                  <FileText
                    className="w-6 h-6 text-[#5BAA6A]"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  Persyaratan
                </h2>
              </div>
              <ul className="space-y-3">
                {REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckSquare
                      className="w-5 h-5 text-[#5BAA6A] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[#5C5C5C] text-sm leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#6BB9E0]/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardList
                    className="w-6 h-6 text-[#6BB9E0]"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  Cara Mendaftar
                </h2>
              </div>
              <ol className="space-y-4">
                {FLOW_STEPS.map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-[#5BAA6A]/30 leading-none w-8 flex-shrink-0">
                      {step}
                    </span>
                    <span className="text-[#5C5C5C] text-sm leading-relaxed pt-1">
                      {text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Biaya ───────────────────────────────────────────────────────── */}
      <section id="biaya" className="py-20 md:py-28 bg-[#FDFBF6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-[#F4C27F]/15 text-[#C49040] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Rincian Biaya
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4 text-balance leading-tight">
              Investasi Terbaik untuk Anak Anda
            </h2>
            <p className="text-[#5C5C5C]">
              Kami menyediakan program keringanan biaya bagi keluarga yang
              membutuhkan.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs text-[#5C5C5C] uppercase tracking-wide">
                    <th className="px-6 py-4">Program</th>
                    <th className="px-6 py-4">Usia</th>
                    <th className="px-6 py-4">Biaya Pendaftaran</th>
                    <th className="px-6 py-4">SPP Bulanan</th>
                    <th className="px-6 py-4">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {BIAYA.map((b) => (
                    <tr
                      key={b.program}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-[#2E2E2E]">
                        {b.program}
                      </td>
                      <td className="px-6 py-4 text-[#5C5C5C]">{b.age}</td>
                      <td className="px-6 py-4 font-semibold text-[#5BAA6A]">
                        {b.daftar}
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#5BAA6A]">
                        {b.spp}
                      </td>
                      <td className="px-6 py-4 text-xs text-[#5C5C5C]">
                        {b.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden divide-y divide-gray-100">
              {BIAYA.map((b) => (
                <div key={b.program} className="p-6 space-y-3">
                  <h3 className="font-bold text-[#2E2E2E]">{b.program}</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-[#5C5C5C] mb-0.5">Usia</p>
                      <p className="font-medium text-[#2E2E2E]">{b.age}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#5C5C5C] mb-0.5">
                        Biaya Daftar
                      </p>
                      <p className="font-semibold text-[#5BAA6A]">{b.daftar}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#5C5C5C] mb-0.5">
                        SPP Bulanan
                      </p>
                      <p className="font-semibold text-[#5BAA6A]">{b.spp}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#5C5C5C] mb-0.5">
                        Keterangan
                      </p>
                      <p className="text-xs text-[#5C5C5C]">{b.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-[#5C5C5C] mt-4">
            * Biaya di atas adalah estimasi. Hubungi kami untuk rincian biaya
            resmi dan terkini.
          </p>
        </div>
      </section>

      {/* ── WhatsApp CTA ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#5BAA6A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Siap Mendaftarkan Putra-Putri Anda?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Isi formulir online atau hubungi tim PPDB kami langsung via
            WhatsApp. Kami siap membantu dari awal hingga akhir proses
            pendaftaran.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={GFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#5BAA6A] hover:bg-gray-50 rounded-full px-8 py-4 font-bold shadow-xl transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              Daftar Online
            </a>
            <a
              href={WA_PPDB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 hover:bg-white/20 text-white rounded-full px-8 py-4 font-semibold transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 bg-[#FDFBF6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4 text-balance leading-tight">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 px-8">
            {FAQS.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#5C5C5C] mb-4">Masih ada pertanyaan lain?</p>
            <a
              href={WA_PPDB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-3 font-semibold transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Tanya Langsung via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
