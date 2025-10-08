import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  CheckSquare,
  Wallet,
  Phone,
  Download,
} from "lucide-react";
import Link from "next/link";

// Komponen untuk setiap langkah atau item agar lebih rapi
const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-lg bg-[#5BAA6A]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#5BAA6A]" />
      </div>
      <h3 className="text-2xl font-bold text-[#2E2E2E]">{title}</h3>
    </div>
    <div className="text-[#5C5C5C] space-y-3 leading-relaxed">{children}</div>
  </div>
);

export default function PPDBPage() {
  const timeline = [
    {
      date: "1 November 2025 - 31 Januari 2026",
      event: "Pendaftaran Gelombang 1",
    },
    { date: "Februari 2026", event: "Observasi & Wawancara Calon Siswa" },
    { date: "Maret 2026", event: "Pengumuman Hasil Seleksi" },
    { date: "April 2026", event: "Daftar Ulang" },
    { date: "Juli 2026", event: "Hari Pertama Masuk Sekolah" },
  ];

  const flow = [
    "Mengisi formulir pendaftaran secara online.",
    "Melakukan pembayaran biaya pendaftaran.",
    "Mengunggah dokumen persyaratan yang dibutuhkan.",
    "Mengikuti jadwal observasi dan wawancara.",
    "Menerima pengumuman kelulusan.",
    "Melakukan proses daftar ulang.",
  ];

  return (
    <>
      <Navigation />
      <main className="bg-[#FDFBF6] pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PPDB 2026/2027
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
              Penerimaan Peserta Didik Baru
            </h1>
            <p className="text-lg text-[#5C5C5C] max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan keluarga besar Sekolah Alam Insan Cendekia dan
              mulailah perjalanan belajar yang menyenangkan bersama alam.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                className="bg-[#5BAA6A] hover:bg-[#4a9159] text-white rounded-full px-8 py-6 text-lg shadow-lg"
              >
                <a href="#alur-pendaftaran">Lihat Alur Pendaftaran</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#5BAA6A] text-[#5BAA6A] hover:bg-[#5BAA6A]/10 hover:text-[#5BAA6A] rounded-full px-8 py-6 text-lg"
              >
                <a href="/brosur-ppdb.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Unduh Brosur
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section id="info-ppdb" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Kolom Kiri */}
              <div className="space-y-8">
                <InfoCard icon={Calendar} title="Jadwal Penting">
                  <ul className="space-y-4">
                    {timeline.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="font-semibold text-[#2E2E2E] w-2/5 tabular-nums">
                          {item.date}
                        </div>
                        <div className="w-3/5">{item.event}</div>
                      </li>
                    ))}
                  </ul>
                </InfoCard>

                <InfoCard icon={FileText} title="Persyaratan Umum">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Usia minimal 3 tahun untuk KB, 5 tahun untuk TK, 7 tahun
                      untuk MI per Juli 2026.
                    </li>
                    <li>Fotokopi Akta Kelahiran & Kartu Keluarga.</li>
                    <li>Pas foto terbaru ukuran 3x4 (2 lembar).</li>
                    <li>Surat keterangan sehat dari dokter.</li>
                  </ul>
                </InfoCard>
              </div>

              {/* Kolom Kanan */}
              <div className="space-y-8">
                <InfoCard icon={CheckSquare} title="Alur Pendaftaran">
                  <ol className="list-decimal list-inside space-y-3">
                    {flow.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </InfoCard>

                <InfoCard icon={Wallet} title="Rincian Biaya">
                  <p>
                    Untuk informasi detail mengenai rincian biaya pendidikan,
                    silakan unduh brosur kami atau hubungi narahubung kami.
                  </p>
                  <p>
                    Kami menyediakan program keringanan biaya bagi keluarga yang
                    membutuhkan (syarat & ketentuan berlaku).
                  </p>
                </InfoCard>

                <InfoCard icon={Phone} title="Narahubung">
                  <p>
                    Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu
                    untuk menghubungi tim PPDB kami:
                  </p>
                  <div className="font-semibold text-[#2E2E2E] mt-3">
                    <p>Admin 1 (KB & TK): 0812-3456-7890</p>
                    <p>Admin 2 (MI): 0898-7654-3210</p>
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
