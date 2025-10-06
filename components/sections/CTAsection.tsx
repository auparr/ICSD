"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    // Section uses your light green background for a positive, inviting contrast
    <section className="bg-[#E8F5E9] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Subtitle/Pre-header */}
        <div className="inline-block bg-white text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
          Langkah Selanjutnya
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-8 text-balance leading-tight">
          Siap Menemukan Potensi Terbaik Anak Anda?
        </h2>

        {/* Action Description */}
        <p className="text-lg text-[#5C5C5C] mb-10 max-w-3xl mx-auto">
          Daftarkan segera dan berikan pengalaman belajar yang unik, berakar
          pada alam dan nilai-nilai Islam.
        </p>

        {/* HUGE Button: Uses extra large padding and scaling effects */}
        <Button
          asChild
          size="lg"
          className="
            bg-[#5BAA6A] 
            hover:bg-[#4a9159] 
            text-white 
            rounded-full 
            px-12 md:px-16 
            py-8 md:py-9 
            text-xl md:text-2xl 
            font-extrabold 
            shadow-2xl 
            hover:shadow-3xl 
            transition-all 
            scale-100 hover:scale-[1.03] active:scale-[0.98]
            w-full sm:w-auto
          "
        >
          <Link href="#daftar" className="flex items-center justify-center">
            Daftar Sekarang
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
