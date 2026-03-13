import type { Metadata } from "next";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { JourneySection } from "@/components/sections/journey-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/FAQsection";
import { LocationSection } from "@/components/sections/location";
import { Footer } from "@/components/footer";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Salam ICSD – Sekolah Alam Insan Cendekia Sunan Drajat",
  description:
    "Membangun karakter, rasa ingin tahu, dan kepemimpinan melalui alam dan nilai-nilai Islam. KB, TK, dan MI berbasis alam di Lamongan, Jawa Timur.",
  keywords: [
    "sekolah alam",
    "insan cendekia",
    "sunan drajat",
    "lamongan",
    "KB TK MI",
    "pendidikan Islam",
    "sekolah berbasis alam",
  ],
  openGraph: {
    title: "Salam ICSD – Sekolah Alam Insan Cendekia Sunan Drajat",
    description: "Belajar Bersama Alam, Tumbuh dengan Iman.",
    url: "https://salamicsd.sch.id",
    siteName: "Salam ICSD",
    images: [
      {
        url: "/children-studying-under-trees-with-sunlight-filter.webp",
        width: 1200,
        height: 630,
        alt: "Anak-anak belajar di bawah pohon di Sekolah Alam Insan Cendekia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salam ICSD – Sekolah Alam",
    description: "Belajar Bersama Alam, Tumbuh dengan Iman.",
    images: ["/children-studying-under-trees-with-sunlight-filter.webp"],
  },
  alternates: {
    canonical: "https://salamicsd.sch.id",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* FIX: Navigation outside <main> — semantically correct, screen-reader friendly */}
      <Navigation />

      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <PhilosophySection />
        <JourneySection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
      </main>

      {/* FIX: Footer outside <main> */}
      <Footer />
    </>
  );
}
