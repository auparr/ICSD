"use client";

import { Heart, Sprout, BookOpen, Users, Building, Target } from "lucide-react";
import { CurvedDivider } from "@/components/curved-divider";

export function PhilosophySection() {
  const values = [
    {
      icon: Heart,
      title: "Empati & Kasih Sayang",
      description:
        "Membangun karakter yang peduli terhadap sesama dan lingkungan.",
      iconColor: "text-[#F4C27F]",
      bgColor: "bg-[#F4C27F]/10",
    },
    {
      icon: Sprout,
      title: "Belajar dari Alam",
      description:
        "Alam adalah guru terbaik untuk mengembangkan rasa ingin tahu.",
      iconColor: "text-[#5BAA6A]",
      bgColor: "bg-[#5BAA6A]/10",
    },
    {
      icon: BookOpen,
      title: "Nilai-nilai Islam",
      description:
        "Menumbuhkan iman dan akhlak mulia dalam setiap pembelajaran.",
      iconColor: "text-[#6BB9E0]",
      bgColor: "bg-[#6BB9E0]/10",
    },
    {
      icon: Users,
      title: "Komunitas & Kebersamaan",
      description:
        "Belajar bersama dalam lingkungan yang hangat dan mendukung.",
      iconColor: "text-[#F4C27F]",
      bgColor: "bg-[#F4C27F]/10",
    },
  ];

  const vision =
    "Mencetak Generasi Muslim yang Bertaqwa, Unggul dalam Ilmu sebagai Calon Pemimpin Masa Depan yang Mampu menjadi Rahmatan lil 'Alalamin.";
  const missions = [
    "Membentuk Siswa yang bertaqwa dan berakhlakul Karimah.",
    "Menumbuh-kembangkan sikap kepribadian siswa yang mencintai lingkungannya, baik keluarga, sekolah, masyarakat dan alam sekitar.",
    "Mencetak siswa yang cerdas berfikir, kreatif, mandiri dan berkembang sesuai dengan potensi yang dimilikinya agar menjadi insan yang bermanfaat bagi sesama (Anfa'uhum lin-Naas).",
  ];

  return (
    <section id="profil" className="relative bg-[#FDFBF6] py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Profil Sekolah Alam Insan Cendekia
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Mengenal lebih dekat lingkungan belajar, visi, misi, dan filosofi
            yang kami anut untuk menumbuhkan generasi masa depan.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Column 1: Profil Kami (Sekarang lebih ringkas) */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] border-b-2 border-[#5BAA6A]/50 pb-3">
              Profil Kami
            </h3>

            {/* Video Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
              >
                <source src="/profil.mp4" type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#5BAA6A]/20 to-transparent pointer-events-none" />
            </div>

            {/* Introduction Paragraph */}
            <p className="text-lg text-[#5C5C5C] leading-relaxed text-pretty">
              <strong>
                Sekolah Alam Insan Cendekia Sunan Drajat (Salam ICSD)
              </strong>{" "}
              adalah lembaga pendidikan yang memadukan kurikulum nasional dengan
              pendekatan belajar berbasis alam dan nilai-nilai luhur Islam. Kami
              berkomitmen untuk mendampingi setiap anak dalam menemukan potensi
              terbaiknya, membentuk mereka menjadi individu yang cerdas,
              berakhlak mulia, dan cinta terhadap lingkungan.
            </p>
          </div>

          {/* Column 2: Prinsip Kami (Menggabungkan Filosofi, Visi, dan Misi) */}
          <div className="space-y-10">
            {/* Filosofi Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] border-b-2 border-[#F4C27F]/50 pb-3 mb-8">
                Prinsip & Filosofi
              </h3>
              <p className="text-lg text-[#5C5C5C] leading-relaxed text-pretty mb-8">
                Kami percaya bahwa anak-anak belajar paling baik melalui
                eksplorasi langsung dengan alam, dibimbing oleh empati, dan
                berakar pada nilai-nilai Islam.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 ${value.iconColor}`} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2E2E2E] mb-1">
                          {value.title}
                        </h4>
                        <p className="text-sm text-[#5C5C5C] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visi Section (Telah dipindahkan ke sini) */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5BAA6A]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#5BAA6A]" />
                </div>
                <h4 className="text-xl font-bold text-[#2E2E2E]">Visi</h4>
              </div>
              <p className="text-md text-[#5C5C5C] italic leading-relaxed border-l-4 border-[#5BAA6A]/50 pl-4">
                "{vision}"
              </p>
            </div>

            {/* Misi Section (Telah dipindahkan ke sini) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5BAA6A]/10 flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-[#5BAA6A]" />
                </div>
                <h4 className="text-xl font-bold text-[#2E2E2E]">Misi Utama</h4>
              </div>
              <ul className="space-y-3 list-inside">
                {missions.map((mission, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-md text-[#5C5C5C]"
                  >
                    <Sprout className="w-5 h-5 text-[#5BAA6A] mt-1 flex-shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <CurvedDivider variant="wave" color="#E8F5E9" flip={false} />
      </div>
    </section>
  );
}
