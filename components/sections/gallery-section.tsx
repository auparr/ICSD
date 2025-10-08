"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CurvedDivider } from "@/components/curved-divider";
import { motion, AnimatePresence } from "framer-motion"; // <-- 1. Import motion components

const ITEMS_PER_PAGE = 3;

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "pembelajaran", label: "Pembelajaran" },
    { id: "kegiatan", label: "Kegiatan" },
    { id: "alam", label: "Alam" },
  ];

  const galleryItems = [
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

  // --- 2. Animation variants for the grid and items ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const filteredItems =
    selectedCategory === "semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const handleHide = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <section id="galeri" className="relative bg-[#E8F5E9] py-10 pb-20 md:py-25">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-[#5BAA6A] text-white shadow-lg scale-105"
                  : "bg-white text-[#5C5C5C] hover:bg-[#5BAA6A]/10 hover:text-[#5BAA6A] shadow-sm"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* --- 2. Animated Gallery Grid --- */}
        <motion.div
          key={selectedCategory} // Re-trigger animation when category changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              // --- 3. Mobile Interaction Fix ---
              // The `group` class enables effects on child elements.
              // `active:scale-95` gives tactile feedback on tap for mobile.
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-95"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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

        {/* Load More / Hide Button */}
        <div className="text-center mt-12 mb-4">
          {filteredItems.length > ITEMS_PER_PAGE && (
            <Button
              onClick={
                visibleCount < filteredItems.length
                  ? handleLoadMore
                  : handleHide
              }
              className="bg-[#5BAA6A] hover:bg-[#4A9959] text-white rounded-full px-8 py-6 text-lg shadow-lg"
            >
              {visibleCount < filteredItems.length
                ? "Lihat Lebih Banyak Foto"
                : "Sembunyikan"}
            </Button>
          )}
        </div>
      </div>
      {/* Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#f7fbfa" flip={false} />
      </div>
    </section>
  );
}
