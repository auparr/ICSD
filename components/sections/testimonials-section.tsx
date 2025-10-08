"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ibu Siti Nurhaliza",
      role: "Orang Tua Siswa KB",
      image: "/parent-1.jpg",
      quote:
        "Salam ICSD mengubah cara anak saya melihat dunia. Dia tidak hanya belajar membaca dan menulis, tapi juga mencintai alam dan memahami nilai-nilai Islam dengan cara yang menyenangkan. Terima kasih telah menjadi bagian dari perjalanan tumbuh kembangnya.",
      rating: 5,
    },
    {
      id: 2,
      name: "Bapak Ahmad Fauzi",
      role: "Orang Tua Siswa MI",
      image: "/parent-2.jpg",
      quote:
        "Kami sangat bersyukur menemukan Salam ICSD. Anak kami menjadi lebih mandiri, bertanggung jawab, dan memiliki akhlak yang baik. Metode pembelajaran berbasis alam membuat dia selalu bersemangat untuk sekolah setiap hari.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ibu Dewi Lestari",
      role: "Orang Tua Siswa TK",
      image: "/parent-3.jpg",
      quote:
        "Pendekatan holistik yang diterapkan di Salam ICSD luar biasa. Anak saya tidak hanya pintar secara akademis, tapi juga memiliki empati, kreativitas, dan kecintaan terhadap lingkungan. Ini adalah investasi terbaik untuk masa depannya.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimoni"
      className="relative bg-gradient-to-br from-[#5BAA6A]/5 via-[#6BB9E0]/5 to-[#F4C27F]/5 py-16 md:py-20 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#5BAA6A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#6BB9E0]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Testimoni
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Apa Kata Orang Tua
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Kepercayaan dan kepuasan orang tua adalah prioritas kami
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#5BAA6A] rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
              {/* Profile Image */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Rating */}
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F4C27F] text-[#F4C27F]"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div>
                <p className="text-lg md:text-xl text-[#2E2E2E] leading-relaxed mb-6 font-serif italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-[#2E2E2E]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#5C5C5C]">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-[#4A9958] text-white hover:bg-[#3A7745] transition-all flex items-center justify-center shadow-md hover:shadow-xl"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-[#4A9958] text-white hover:bg-[#3A7745] transition-all flex items-center justify-center shadow-md hover:shadow-xl"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#5BAA6A] w-8"
                      : "bg-[#5BAA6A]/30"
                  }`}
                  aria-label={`Testimoni ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Siswa Aktif" },
            { number: "15+", label: "Tahun Pengalaman" },
            { number: "98%", label: "Kepuasan Orang Tua" },
            { number: "50+", label: "Guru Berpengalaman" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#5BAA6A] mb-2">{stat.number}</div>
              <div className="text-sm text-[#5C5C5C]">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
