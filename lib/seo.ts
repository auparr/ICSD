import type { Metadata } from "next";
import { SITE_URL } from "@/app/layout";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;         // e.g. "/program-pendidikan/KB"
  image?: string;       // defaults to hero image
  keywords?: string[];
}

// ─── Reusable metadata factory ───────────────────────────────────────────────
// Usage in any page.tsx:
//   export const metadata = createMetadata({ title: "KB Alam", ... })
export function createMetadata({
  title,
  description,
  path,
  image = "/children-studying-under-trees-with-sunlight-filter.jpg",
  keywords = [],
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      "sekolah alam lamongan",
      "salam ICSD",
      "insan cendekia sunan drajat",
      ...keywords,
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Salam ICSD`,
      description,
      url,
      siteName: "Salam ICSD – Sekolah Alam Lamongan",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Salam ICSD`,
      description,
      images: [image],
    },
  };
}

// ─── Pre-built metadata for each page ────────────────────────────────────────
// Import and export directly from your page.tsx files

export const kbMetadata = createMetadata({
  title: "Kelompok Bermain (KB) Alam",
  description:
    "Program KB Alam untuk anak usia 3-4 tahun di Lamongan. Belajar melalui eksplorasi sensorik, permainan, dan nilai-nilai Islam dasar di lingkungan alam terbuka.",
  path: "/program-pendidikan/KB",
  image: "/kb.jpg",
  keywords: ["kelompok bermain lamongan", "KB alam lamongan", "PAUD alam lamongan", "KB Islam lamongan"],
});

export const tkMetadata = createMetadata({
  title: "Taman Kanak-kanak (TK) Alam",
  description:
    "Program TK Alam untuk anak usia 5-6 tahun di Lamongan. Pembelajaran berbasis proyek alam, eksplorasi sains kontekstual, dan pembiasaan akhlak Islami.",
  path: "/program-pendidikan/TK",
  image: "/gallery-art-craft.jpg",
  keywords: ["TK alam lamongan", "taman kanak-kanak lamongan", "TK Islam lamongan"],
});

export const miMetadata = createMetadata({
  title: "Madrasah Ibtidaiyah (MI) Alam",
  description:
    "Program MI Alam untuk anak usia 7-12 tahun di Lamongan. Kurikulum nasional terintegrasi alam, pengembangan kepemimpinan, dan pembelajaran Al-Quran mendalam.",
  path: "/program-pendidikan/MI",
  image: "/gallery-learning-outdoor.jpg",
  keywords: ["MI alam lamongan", "madrasah ibtidaiyah lamongan", "SD Islam alam lamongan"],
});

export const ppdbMetadata = createMetadata({
  title: "PPDB – Penerimaan Peserta Didik Baru",
  description:
    "Daftarkan putra-putri Anda di Sekolah Alam Insan Cendekia Sunan Drajat Lamongan. Informasi lengkap pendaftaran, persyaratan, dan biaya KB, TK, MI.",
  path: "/PPDB",
  keywords: [
    "PPDB sekolah alam lamongan",
    "daftar sekolah alam lamongan",
    "pendaftaran KB TK MI lamongan",
  ],
});

export const prestasiMetadata = createMetadata({
  title: "Prestasi Siswa",
  description:
    "Daftar prestasi akademik dan non-akademik siswa Sekolah Alam Insan Cendekia Sunan Drajat Lamongan. Bukti nyata kualitas pendidikan berbasis alam dan Islam.",
  path: "/prestasi",
  keywords: ["prestasi sekolah alam lamongan", "juara sekolah lamongan"],
});