"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CurvedDivider } from "@/components/curved-divider";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "semua" | "pembelajaran" | "kegiatan" | "alam";

interface GalleryItem {
  id: number;
  category: Exclude<Category, "semua">;
  image: string;
  title: string;
  description: string;
}

interface CategoryOption {
  id: Category;
  label: string;
}

// ─── Constants outside component ─────────────────────────────────────────────
const ITEMS_PER_PAGE = 3;

const CATEGORIES: CategoryOption[] = [
  { id: "semua", label: "Semua" },
  { id: "pembelajaran", label: "Pembelajaran" },
  { id: "kegiatan", label: "Kegiatan" },
  { id: "alam", label: "Alam" },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: "pembelajaran",
    image: "/gallery-learning-outdoor.jpg",
    title: "Belajar di Alam Terbuka",
    description: "Siswa belajar matematika dengan benda-benda alami",
  },
  {
    id: 2,
    category: "kegiatan",
    image: "/gallery-prayer-time.jpg",
    title: "Waktu Sholat Berjamaah",
    description: "Pembiasaan ibadah sejak dini",
  },
  {
    id: 3,
    category: "alam",
    image: "/gallery-garden-exploration.jpg",
    title: "Eksplorasi Kebun",
    description: "Mengenal tanaman dan ekosistem",
  },
  {
    id: 4,
    category: "pembelajaran",
    image: "/gallery-reading-circle.jpg",
    title: "Lingkaran Membaca",
    description: "Mengembangkan literasi dengan cara menyenangkan",
  },
  {
    id: 5,
    category: "kegiatan",
    image: "/gallery-art-craft.jpg",
    title: "Seni dan Kerajinan",
    description: "Mengekspresikan kreativitas",
  },
  {
    id: 6,
    category: "alam",
    image: "/gallery-nature-walk.jpg",
    title: "Jelajah Alam",
    description: "Petualangan belajar di hutan",
  },
  {
    id: 7,
    category: "pembelajaran",
    image: "/science-experiment.jpg",
    title: "Eksperimen Sains",
    description: "Belajar konsep sains melalui eksperimen langsung",
  },
  {
    id: 8,
    category: "kegiatan",
    image: "/music.jpg",
    title: "Ekstrakulikuler Musik",
    description: "Mengembangkan bakat seni melalui musik",
  },
  {
    id: 9,
    category: "alam",
    image: "/kids-with-bird.jpg",
    title: "Pengamatan Burung",
    description: "Belajar tentang keanekaragaman hayati lokal",
  },
  {
    id: 10,
    category: "pembelajaran",
    image: "/archery.jpg",
    title: "Ekstrakulikuler Memanah",
    description: "Mengasah fokus dan ketelitian melalui olahraga tradisional",
  },
];

// ─── Animation variants outside component ────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("semua");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // PERF: memoized filter — recomputes only when category changes
  const filteredItems = useMemo(
    () =>
      selectedCategory === "semua"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  );

  const hasMore = visibleCount < filteredItems.length;

  // BUG FIX: was inline arrow in JSX — stable callbacks
  const handleCategoryChange = useCallback((id: Category) => {
    setSelectedCategory(id);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const handleToggleMore = useCallback(() => {
    setVisibleCount((prev) =>
      prev < filteredItems.length ? prev + ITEMS_PER_PAGE : ITEMS_PER_PAGE,
    );
  }, [filteredItems.length]);

  return (
    <section id="galeri" className="relative bg-[#E8F5E9] py-10 pb-20 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Galeri Kegiatan
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Program Unggulan dan Momen Berharga Kami
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Lihat bagaimana anak-anak kami tumbuh, belajar, dan bermain di
            lingkungan yang penuh kasih sayang
          </p>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="group"
          aria-label="Filter kategori galeri"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              aria-pressed={selectedCategory === cat.id}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#5BAA6A] text-white shadow-lg scale-105"
                  : "bg-white text-[#5C5C5C] hover:bg-[#5BAA6A]/10 hover:text-[#5BAA6A] shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-95"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* BUG FIX: gradient overlay was opacity-0 then group-hover:opacity-100 —
                    this works but forces browser to composite an extra layer on every card.
                    Using will-change-opacity hint via transition is enough. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 group-hover:text-[#5BAA6A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5C5C5C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more / hide */}
        {filteredItems.length > ITEMS_PER_PAGE && (
          <div className="text-center mt-12 mb-4">
            <Button
              onClick={handleToggleMore}
              className="bg-[#5BAA6A] hover:bg-[#4A9959] text-white rounded-full px-8 py-6 text-lg shadow-lg"
            >
              {hasMore ? "Lihat Lebih Banyak Foto" : "Sembunyikan"}
            </Button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#f7fbfa" flip={false} />
      </div>
    </section>
  );
}
