import { ProgramPageLayout } from "@/components/program-page-layout";
import Image from "next/image";

export default function KBPage() {
  return (
    <ProgramPageLayout
      title="Kelompok Bermain (KB)"
      ageRange="Usia 3-4 Tahun"
      description="Menumbuhkan percikan rasa ingin tahu pertama anak melalui permainan yang terstruktur dan eksplorasi alam bebas."
      imageUrl="/gallery-learning-outdoor.jpg" // Replace with a real image for KB
    >
      <h2>Selamat Datang di Dunia Penemuan!</h2>
      <p>
        Program Kelompok Bermain kami dirancang sebagai langkah pertama anak
        dalam perjalanan pendidikan mereka. Di sini, kami fokus pada
        pembelajaran berbasis permainan (play-based learning) di mana anak-anak
        belajar konsep dasar seperti warna, bentuk, dan angka melalui interaksi
        langsung dengan alam dan teman-teman mereka.
      </p>
      <h3>Fokus Utama Program:</h3>
      <ul>
        <li>
          <strong>Sensorik dan Motorik:</strong> Mengembangkan keterampilan
          motorik halus dan kasar melalui kegiatan seperti berkebun, melukis
          dengan jari, dan bermain di alam terbuka.
        </li>
        <li>
          <strong>Sosial dan Emosional:</strong> Belajar berbagi, bekerja sama,
          dan mengelola emosi dalam lingkungan yang aman dan mendukung.
        </li>
        <li>
          <strong>Bahasa dan Komunikasi:</strong> Memperkaya kosakata melalui
          cerita, lagu, dan percakapan sehari-hari.
        </li>
      </ul>
      <p>
        Setiap hari adalah petualangan baru di KB Sekolah Alam Insan Cendekia,
        di mana tawa dan pembelajaran berjalan beriringan.
      </p>
    </ProgramPageLayout>
  );
}
