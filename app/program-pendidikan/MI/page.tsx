import { ProgramPageLayout } from "@/components/program-page-layout";
import Image from "next/image";

export default function MIPage() {
  return (
    <ProgramPageLayout
      title="Madrasah Ibtida'iyah (MI)"
      ageRange="Usia 7-12 Tahun"
      description="Membentuk pemimpin masa depan yang mandiri, berakhlak mulia, dan memiliki pemahaman mendalam tentang ilmu pengetahuan dan agama."
      imageUrl="/gallery-prayer-time.jpg" // Replace with a real image for MI
    >
      <h2>Menjadi Pembelajar Seumur Hidup</h2>
      <p>
        Program Madrasah Ibtida'iyah kami menggabungkan kurikulum nasional
        dengan pendekatan khas sekolah alam yang berbasis proyek dan pengalaman
        langsung. Siswa didorong untuk mengambil tanggung jawab atas
        pembelajaran mereka, bekerja secara kolaboratif, dan menerapkan
        pengetahuan mereka untuk memecahkan masalah di dunia nyata.
      </p>
      <h3>Fokus Utama Program:</h3>
      <ul>
        <li>
          <strong>Akademik Terpadu:</strong> Mempelajari mata pelajaran inti
          seperti Matematika, Sains, dan Bahasa melalui proyek-proyek tematik
          yang menghubungkan teori dengan praktik di alam.
        </li>
        <li>
          <strong>Karakter dan Kepemimpinan:</strong> Mengembangkan sifat
          tanggung jawab, empati, dan kepemimpinan melalui program mentoring dan
          proyek layanan masyarakat.
        </li>
        <li>
          <strong>Pendidikan Agama Islam:</strong> Mengintegrasikan nilai-nilai
          Islam dalam setiap aspek pembelajaran untuk membentuk karakter yang
          berakhlak mulia dan cinta kepada Sang Pencipta.
        </li>
      </ul>
    </ProgramPageLayout>
  );
}
