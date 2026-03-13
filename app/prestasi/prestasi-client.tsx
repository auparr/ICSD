"use client";

import { useState, useMemo } from "react";
import {
  Trophy,
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Level = "Nasional" | "Provinsi" | "Kabupaten" | "Kecamatan";
type SortKey = "date" | "name";
type SortDir = "asc" | "desc";

interface Achievement {
  name: string;
  achievement: string;
  level: Level;
  organizer: string;
  date: string;
  year: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ACHIEVEMENTS: Achievement[] = [
  {
    name: "Aisyah Putri & Tim Robotik",
    achievement: "Juara 1 Lomba Robotik Nasional",
    level: "Nasional",
    organizer: "Kementerian Pendidikan & Kebudayaan",
    date: "15 Agustus 2025",
    year: 2025,
  },
  {
    name: "Muhammad Al-Fatih",
    achievement: "Medali Emas Olimpiade Sains",
    level: "Provinsi",
    organizer: "Dinas Pendidikan Provinsi",
    date: "22 Juli 2025",
    year: 2025,
  },
  {
    name: "Tim Futsal MI",
    achievement: "Juara 2 Kompetisi Futsal Antar Sekolah",
    level: "Kabupaten",
    organizer: "ASKAB PSSI Lamongan",
    date: "10 Juni 2025",
    year: 2025,
  },
  {
    name: "Zainab Al-Ghazali",
    achievement: "Juara 1 Lomba Tahfidz Al-Qur'an (5 Juz)",
    level: "Kecamatan",
    organizer: "LPTQ Kecamatan",
    date: "5 April 2025",
    year: 2025,
  },
  {
    name: "Kelompok Seni Tari",
    achievement: "Penampil Terbaik Festival Seni Tradisional",
    level: "Kabupaten",
    organizer: "Dinas Pariwisata dan Kebudayaan",
    date: "20 Maret 2025",
    year: 2025,
  },
  {
    name: "Ahmad Budiarto",
    achievement: "Juara Harapan 1 Lomba Menulis Cerpen",
    level: "Provinsi",
    organizer: "Balai Bahasa Jawa Timur",
    date: "18 Februari 2025",
    year: 2025,
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const MONTH_MAP: Record<string, number> = {
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

const LEVEL_STYLES: Record<Level, string> = {
  Nasional: "bg-red-50 text-red-700 border border-red-200",
  Provinsi: "bg-blue-50 text-blue-700 border border-blue-200",
  Kabupaten: "bg-green-50 text-green-700 border border-green-200",
  Kecamatan: "bg-amber-50 text-amber-700 border border-amber-200",
};

const LEVEL_ORDER: Level[] = ["Nasional", "Provinsi", "Kabupaten", "Kecamatan"];
const ROWS_PER_PAGE = 15;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(" ");
  return new Date(Number(year), MONTH_MAP[month], Number(day));
}

function getUniqueYears(data: Achievement[]): number[] {
  return [...new Set(data.map((d) => d.year))].sort((a, b) => b - a);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${LEVEL_STYLES[level]}`}
    >
      {level}
    </span>
  );
}

function SortButton({
  label,
  sortKey,
  currentKey,
  currentDir,
  onSort,
}: {
  label: string;
  sortKey: SortKey;
  currentKey: SortKey;
  currentDir: SortDir;
  onSort: (key: SortKey) => void;
}) {
  const active = currentKey === sortKey;
  return (
    <button
      onClick={() => onSort(sortKey)}
      className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
        active
          ? "bg-[#5BAA6A] text-white"
          : "bg-white border border-gray-200 text-[#5C5C5C] hover:border-[#5BAA6A] hover:text-[#5BAA6A]"
      }`}
    >
      {label}
      {active ? (
        currentDir === "asc" ? (
          <ArrowUp className="w-3 h-3" />
        ) : (
          <ArrowDown className="w-3 h-3" />
        )
      ) : (
        <ArrowUpDown className="w-3 h-3 opacity-40" />
      )}
    </button>
  );
}

function MobileRow({ item, index }: { item: Achievement; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-xs text-[#5C5C5C] w-5 flex-shrink-0 font-mono">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#2E2E2E] truncate">
            {item.achievement}
          </p>
          <p className="text-xs text-[#5C5C5C] truncate">{item.name}</p>
        </div>
        <LevelBadge level={item.level} />
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#5C5C5C] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#5C5C5C] flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 bg-gray-50 space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-[#5C5C5C] w-28 flex-shrink-0">Siswa</span>
            <span className="text-[#2E2E2E] font-medium">{item.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#5C5C5C] w-28 flex-shrink-0">
              Penyelenggara
            </span>
            <span className="text-[#2E2E2E]">{item.organizer}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#5C5C5C] w-28 flex-shrink-0">Tanggal</span>
            <span className="text-[#2E2E2E]">{item.date}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────

export function PrestasiClient() {
  const [filterLevel, setFilterLevel] = useState<Level | "Semua">("Semua");
  const [filterYear, setFilterYear] = useState<number | "Semua">("Semua");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(1);

  const uniqueYears = useMemo(() => getUniqueYears(ACHIEVEMENTS), []);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
    setPage(1);
  }

  function handleFilter(level: Level | "Semua") {
    setFilterLevel(level);
    setPage(1);
  }

  const filtered = useMemo(() => {
    return ACHIEVEMENTS.filter((item) => {
      const levelOk = filterLevel === "Semua" || item.level === filterLevel;
      const yearOk = filterYear === "Semua" || item.year === filterYear;
      return levelOk && yearOk;
    }).sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      if (sortKey === "date") {
        return (
          (parseDate(a.date).getTime() - parseDate(b.date).getTime()) * dir
        );
      }
      return a.name.localeCompare(b.name) * dir;
    });
  }, [filterLevel, filterYear, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE,
  );

  const countByLevel = useMemo(
    () =>
      LEVEL_ORDER.map((lvl) => ({
        level: lvl,
        count: ACHIEVEMENTS.filter((a) => a.level === lvl).length,
      })).filter((x) => x.count > 0),
    [],
  );

  return (
    <main id="main-content" className="min-h-screen bg-[#FDFBF6]">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F4C27F]/10 text-[#C49040] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" aria-hidden="true" />
            Galeri Prestasi
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-4 text-balance leading-tight">
            Momen Gemilang Siswa-Siswi Kami
          </h1>
          <p className="text-[#5C5C5C] max-w-2xl mx-auto mb-10">
            Pencapaian nyata dari anak-anak luar biasa Salam ICSD di berbagai
            bidang dan tingkatan kompetisi.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {countByLevel.map(({ level, count }) => (
              <div
                key={level}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${LEVEL_STYLES[level]}`}
              >
                <span className="text-base font-bold">{count}</span>
                {level}
              </div>
            ))}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">
              <span className="text-base font-bold">{ACHIEVEMENTS.length}</span>
              Total
            </div>
          </div>
        </div>
      </section>

      {/* ── Table ─────────────────────────────────────────────────────────── */}
      <section id="daftar-prestasi" className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex flex-wrap gap-2 flex-1">
              {(["Semua", ...LEVEL_ORDER] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => handleFilter(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    filterLevel === lvl
                      ? "bg-[#2E2E2E] text-white"
                      : "bg-white border border-gray-200 text-[#5C5C5C] hover:border-gray-400"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <select
                value={filterYear}
                onChange={(e) => {
                  setFilterYear(
                    e.target.value === "Semua"
                      ? "Semua"
                      : Number(e.target.value),
                  );
                  setPage(1);
                }}
                className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-[#5BAA6A]"
              >
                <option value="Semua">Semua Tahun</option>
                {uniqueYears.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <SortButton
                label="Tanggal"
                sortKey="date"
                currentKey={sortKey}
                currentDir={sortDir}
                onSort={handleSort}
              />
              <SortButton
                label="Nama"
                sortKey="name"
                currentKey={sortKey}
                currentDir={sortDir}
                onSort={handleSort}
              />
            </div>
          </div>

          {/* Result count */}
          <p className="text-xs text-[#5C5C5C] mb-3">
            Menampilkan{" "}
            <span className="font-semibold text-[#2E2E2E]">
              {filtered.length}
            </span>{" "}
            prestasi
            {filterLevel !== "Semua" && (
              <>
                {" "}
                · Tingkat{" "}
                <span className="font-semibold text-[#2E2E2E]">
                  {filterLevel}
                </span>
              </>
            )}
            {filterYear !== "Semua" && (
              <>
                {" "}
                · Tahun{" "}
                <span className="font-semibold text-[#2E2E2E]">
                  {filterYear}
                </span>
              </>
            )}
          </p>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs text-[#5C5C5C] uppercase tracking-wide">
                    <th className="px-4 py-3 w-10">#</th>
                    <th className="px-4 py-3">Siswa / Tim</th>
                    <th className="px-4 py-3">Prestasi</th>
                    <th className="px-4 py-3">Tingkat</th>
                    <th className="px-4 py-3">Penyelenggara</th>
                    <th className="px-4 py-3">Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((item, i) => (
                    <tr
                      key={`${item.name}-${item.date}`}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-xs text-[#5C5C5C] font-mono">
                        {(page - 1) * ROWS_PER_PAGE + i + 1}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#2E2E2E] max-w-[160px]">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-[#5C5C5C] max-w-[240px]">
                        {item.achievement}
                      </td>
                      <td className="px-4 py-3">
                        <LevelBadge level={item.level} />
                      </td>
                      <td className="px-4 py-3 text-[#5C5C5C] text-xs max-w-[180px]">
                        {item.organizer}
                      </td>
                      <td className="px-4 py-3 text-[#5C5C5C] text-xs whitespace-nowrap">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              {paginated.map((item, i) => (
                <MobileRow
                  key={`${item.name}-${item.date}`}
                  item={item}
                  index={(page - 1) * ROWS_PER_PAGE + i}
                />
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-[#5C5C5C]">
                <Trophy className="w-10 h-10 mx-auto mb-3 opacity-20" />
                <p className="font-semibold">Tidak ada prestasi ditemukan</p>
                <p className="text-sm mt-1">Coba ubah filter yang dipilih</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-[#5C5C5C]">
                Halaman {page} dari {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 bg-white text-[#2E2E2E] disabled:opacity-40 hover:border-[#5BAA6A] transition-colors"
                >
                  ← Sebelumnya
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 bg-white text-[#2E2E2E] disabled:opacity-40 hover:border-[#5BAA6A] transition-colors"
                >
                  Berikutnya →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
