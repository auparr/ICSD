import { ProgramPageLayout } from "@/components/program-page-layout";
import Image from "next/image";

export default function TKPage() {
  return (
    <ProgramPageLayout
      title="Taman Kanak-kanak (TK)"
      ageRange="Usia 5-6 Tahun"
      description="Mengasah kemampuan berpikir kritis dan kreativitas melalui proyek-proyek eksplorasi dan eksperimen sains yang menyenangkan."
      imageUrl="/gallery-reading-circle.jpg" // Replace with a real image for TK
    >
      <h2>Membangun Fondasi untuk Masa Depan</h2>
      <p>
        Di tingkat Taman Kanak-kanak, kami memperdalam kecintaan anak pada
        pembelajaran. Kurikulum kami mengintegrasikan konsep literasi dan
        numerasi awal ke dalam proyek-proyek tematik yang menarik. Anak-anak
        tidak hanya belajar membaca dan berhitung, tetapi juga memahami
        'mengapa' dan 'bagaimana' dunia di sekitar mereka bekerja.
      </p>
      <h3>Fokus Utama Program:</h3>
      <ul>
        <li>
          <strong>Literasi Awal:</strong> Mengenal huruf dan suara, membaca
          cerita sederhana, dan mengekspresikan ide melalui tulisan dan gambar.
        </li>
        <li>
          <strong>Logika dan Sains:</strong> Melakukan eksperimen sederhana,
          mengamati siklus alam, dan memecahkan masalah melalui permainan
          logika.
        </li>
        <li>
          <strong>Seni dan Kreativitas:</strong> Mengekspresikan diri melalui
          berbagai media seni, musik, dan drama untuk membangun kepercayaan
          diri.
        </li>
      </ul>
    </ProgramPageLayout>
  );
}
