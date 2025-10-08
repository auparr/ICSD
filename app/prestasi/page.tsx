"use client"; // Diperlukan karena kita akan menggunakan state (useState)

import { useState, useMemo } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Trophy, Filter, ArrowUpDown } from "lucide-react";

// Data contoh prestasi siswa (tidak berubah)
const achievementsData = [
  {
    name: "Aisyah Putri & Tim Robotik",
    achievement: "Juara 1 Lomba Robotik Nasional",
    level: "Nasional",
    organizer: "Kementerian Pendidikan & Kebudayaan",
    date: "15 Agustus 2025",
  },
  {
    name: "Muhammad Al-Fatih",
    achievement: "Medali Emas Olimpiade Sains",
    level: "Provinsi",
    organizer: "Dinas Pendidikan Provinsi",
    date: "22 Juli 2025",
  },
  {
    name: "Tim Futsal MI",
    achievement: "Juara 2 Kompetisi Futsal Antar Sekolah",
    level: "Kabupaten",
    organizer: "ASKAB PSSI Lamongan",
    date: "10 Juni 2025",
  },
  {
    name: "Zainab Al-Ghazali",
    achievement: "Juara 1 Lomba Tahfidz Al-Qur'an (5 Juz)",
    level: "Kecamatan",
    organizer: "LPTQ Kecamatan",
    date: "5 April 2025",
  },
  {
    name: "Kelompok Seni Tari",
    achievement: "Penampil Terbaik Festival Seni Tradisional",
    level: "Kabupaten",
    organizer: "Dinas Pariwisata dan Kebudayaan",
    date: "20 Maret 2025",
  },
  {
    name: "Ahmad Budiarto",
    achievement: "Juara Harapan 1 Lomba Menulis Cerpen",
    level: "Provinsi",
    organizer: "Balai Bahasa Jawa Timur",
    date: "18 Februari 2025",
  },
];

export default function PrestasiPage() {
  // 1. State untuk menyimpan pilihan filter dan sort
  const [filterLevel, setFilterLevel] = useState("Semua");
  const [sortOrder, setSortOrder] = useState("terbaru");

  // Mendapatkan daftar tingkat unik untuk opsi filter
  const uniqueLevels = useMemo(() => {
    const levels = new Set(achievementsData.map((item) => item.level));
    return ["Semua", ...Array.from(levels)];
  }, []);

  // 2. Logika untuk memfilter dan mengurutkan data
  const displayedAchievements = useMemo(() => {
    const monthMap = {
      Januari: 0,
      Februari: 1,
      Maret: 2,
      April: 3,
      Mei: 4,
      Juni: 5,
      Juli: 6,
      Agustus: 7,
      September: 8,
      Oktober: 9,
      November: 10,
      Desember: 11,
    };
    const parseDate = (dateString) => {
      const parts = dateString.split(" "); // ["15", "Agustus", "2025"]
      return new Date(parts[2], monthMap[parts[1]], parts[0]);
    };

    return achievementsData
      .filter((item) => {
        if (filterLevel === "Semua") return true;
        return item.level === filterLevel;
      })
      .sort((a, b) => {
        switch (sortOrder) {
          case "terlama":
            return parseDate(a.date) - parseDate(b.date);
          case "namaAZ":
            return a.name.localeCompare(b.name);
          case "namaZA":
            return b.name.localeCompare(a.name);
          case "terbaru":
          default:
            return parseDate(b.date) - parseDate(a.date);
        }
      });
  }, [filterLevel, sortOrder]);

  return (
    <>
      <Navigation />
      <main className="bg-[#FDFBF6] pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="text-center py-8 md:py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-[#F4C27F]/10 text-[#F4C27F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Trophy className="inline-block w-4 h-4 mr-2" />
              Galeri Prestasi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
              Momen Gemilang Siswa-Siswi Kami
            </h1>
            <p className="text-lg text-[#5C5C5C] max-w-3xl mx-auto leading-relaxed">
              Kami bangga mempersembahkan berbagai pencapaian luar biasa yang
              telah diraih oleh para siswa di berbagai bidang.
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="daftar-prestasi" className="py-10 md:py-12">
          <div className="container mx-auto px-4">
            {/* 3. UI untuk Kontrol Filter dan Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white rounded-2xl shadow-md border border-gray-100">
              <div className="flex-1">
                <label
                  htmlFor="filter-level"
                  className="block text-sm font-medium text-[#2E2E2E] mb-1"
                >
                  <Filter className="inline-block w-4 h-4 mr-2" />
                  Filter berdasarkan Tingkat
                </label>
                <select
                  id="filter-level"
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BAA6A]"
                >
                  {uniqueLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="sort-order"
                  className="block text-sm font-medium text-[#2E2E2E] mb-1"
                >
                  <ArrowUpDown className="inline-block w-4 h-4 mr-2" />
                  Urutkan berdasarkan
                </label>
                <select
                  id="sort-order"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5BAA6A]"
                >
                  <option value="terbaru">Tanggal (Terbaru)</option>
                  <option value="terlama">Tanggal (Terlama)</option>
                  <option value="namaAZ">Nama (A-Z)</option>
                  <option value="namaZA">Nama (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Container untuk Tabel dan Kartu */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* 4. Gunakan `displayedAchievements` untuk me-render data */}

              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    {/* ... (header tabel tidak berubah) ... */}
                  </thead>
                  <tbody>
                    {displayedAchievements.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="p-4 text-[#5C5C5C]">{index + 1}</td>
                        <td className="p-4 font-medium text-[#2E2E2E]">
                          {item.name}
                        </td>
                        <td className="p-4 text-[#5C5C5C]">
                          {item.achievement}
                        </td>
                        <td className="p-4 text-[#5C5C5C]">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              item.level === "Nasional"
                                ? "bg-red-100 text-red-800"
                                : item.level.includes("Provinsi")
                                ? "bg-blue-100 text-blue-800"
                                : item.level.includes("Kabupaten")
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {item.level}
                          </span>
                        </td>
                        <td className="p-4 text-[#5C5C5C]">{item.organizer}</td>
                        <td className="p-4 text-[#5C5C5C]">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List */}
              <div className="md:hidden p-4 space-y-4">
                {displayedAchievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-[#2E2E2E]">
                        {item.name}
                      </h3>
                      <span className="text-sm font-semibold text-[#5BAA6A]">
                        #{index + 1}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-[#2E2E2E]">Prestasi:</strong>{" "}
                        {item.achievement}
                      </p>
                      <p>
                        <strong className="text-[#2E2E2E]">Tingkat:</strong>{" "}
                        {item.level}
                      </p>
                      <p>
                        <strong className="text-[#2E2E2E]">
                          Penyelenggara:
                        </strong>{" "}
                        {item.organizer}
                      </p>
                      <p>
                        <strong className="text-[#2E2E2E]">Tanggal:</strong>{" "}
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pesan jika tidak ada data */}
              {displayedAchievements.length === 0 && (
                <div className="text-center p-12 text-[#5C5C5C]">
                  <h3 className="text-xl font-semibold">Tidak Ada Prestasi</h3>
                  <p>
                    Tidak ada prestasi yang cocok dengan filter yang Anda pilih.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
