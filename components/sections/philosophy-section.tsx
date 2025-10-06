import { Heart, Sprout, BookOpen, Users } from "lucide-react";
import { CurvedDivider } from "@/components/curved-divider";
import Image from "next/image";
// import { motion } from "framer-motion"; // <-- Add this if you want entry animation

export function PhilosophySection() {
  const values = [
    {
      icon: Heart,
      title: "Empati & Kasih Sayang",
      description:
        "Membangun karakter yang peduli terhadap sesama dan lingkungan",
      iconColor: "text-[#F4C27F]", // Use warm gold color
      bgColor: "bg-[#F4C27F]/10",
    },
    {
      icon: Sprout,
      title: "Belajar dari Alam",
      description:
        "Alam adalah guru terbaik untuk mengembangkan rasa ingin tahu",
      iconColor: "text-[#5BAA6A]", // Use primary green color
      bgColor: "bg-[#5BAA6A]/10",
    },
    {
      icon: BookOpen,
      title: "Nilai-nilai Islam",
      description:
        "Menumbuhkan iman dan akhlak mulia dalam setiap pembelajaran",
      iconColor: "text-[#6BB9E0]", // Keep blue color for contrast
      bgColor: "bg-[#6BB9E0]/10",
    },
    {
      icon: Users,
      title: "Komunitas & Kebersamaan",
      description: "Belajar bersama dalam lingkungan yang hangat dan mendukung",
      iconColor: "text-[#F4C27F]", // Use warm gold color
      bgColor: "bg-[#F4C27F]/10",
    },
  ];

  return (
    <section id="filosofi" className="relative bg-[#FDFBF6] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image (Visual Improvement) */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl leaf-shadow">
              {/* The video element is now set to autoplay, mute, and loop, with controls removed */}
              <video
                width={600}
                height={700}
                className="w-full h-auto object-cover max-h-[700px]"
                autoPlay
                loop
                muted
                playsInline // Critical for mobile
                preload="auto" // Ensures quick loading
              >
                {/* Corrected path: removed /public */}
                <source src="/profil.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5BAA6A]/20 to-transparent" />
            </div>
            {/* Floating card - Position changed to bottom-left for better integration */}
            <div className="absolute -bottom-6 -right-3 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#5BAA6A]/10 flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-[#5BAA6A]" />
                </div>
                <div>
                  <div className="font-semibold text-[#2E2E2E]">
                    Pembelajaran Aktif
                  </div>
                  <div className="text-sm text-[#5C5C5C]">
                    Berbasis Proyek & Eksplorasi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Filosofi Kami
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
              Setiap Anak adalah Anugerah yang Unik
            </h2>
            <p className="text-lg text-[#5C5C5C] mb-8 leading-relaxed text-pretty">
              Di <strong>Sekolah Alam Insan Cendekia Sunan Drajat</strong>, kami
              percaya bahwa anak-anak belajar paling baik melalui eksplorasi
              langsung dengan alam, dibimbing oleh empati, dan berakar pada
              nilai-nilai Islam. Kami menciptakan lingkungan di mana setiap anak
              dapat tumbuh menjadi pribadi yang mandiri, bertanggung jawab, dan
              penuh kasih sayang.
            </p>

            {/* Values Grid - Improved Icon Color Scheme */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      {/* Use dynamic background and text colors */}
                      <div
                        className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center`}
                      >
                        <Icon className={`w-6 h-6 ${value.iconColor}`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2E2E2E] mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Use flip prop to make the hill divider face up, creating a gentle slope before the next section */}
        <CurvedDivider variant="wave" color="#E8F5E9" flip={false} />
      </div>
    </section>
  );
}
