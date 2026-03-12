"use client";

import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormField = keyof FormData;

// ─── Static data outside component ───────────────────────────────────────────
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Sunan Drajat No. 123, Lamongan, Jawa Timur 62211",
    color: "#5BAA6A",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 812-3456-7890",
    color: "#6BB9E0",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@salamicsd.sch.id",
    color: "#F4C27F",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 07.00 - 15.00 WIB",
    color: "#5BAA6A",
  },
];

const INITIAL_FORM: FormData = { name: "", email: "", phone: "", message: "" };

// ─── Component ────────────────────────────────────────────────────────────────
export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // BUG FIX: original used spread on every keystroke — use functional field update instead
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id as FormField]: value }));
    },
    [],
  );

  // BUG FIX: original only had console.log — added loading + success state
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        // Replace with your actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData(INITIAL_FORM);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  return (
    <section
      id="kontak"
      className="relative bg-gradient-to-b from-white to-[#FDFBF6] py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Mari Berbincang Tentang Masa Depan Anak Anda
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Kami siap menjawab pertanyaan Anda dan membantu menemukan program
            terbaik untuk buah hati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                {CONTACT_INFO.map(({ icon: Icon, title, content, color }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2E2E2E] mb-1">
                        {title}
                      </h4>
                      <p className="text-[#5C5C5C] leading-relaxed">
                        {content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUG FIX: map placeholder was a decorative dead div — replaced with helpful link */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  className="w-12 h-12 text-[#5BAA6A] mx-auto mb-2"
                  aria-hidden="true"
                />
                <p className="text-[#5C5C5C] mb-3">Peta Lokasi</p>
                <Link
                  href="#lokasi"
                  className="text-sm text-[#5BAA6A] font-semibold underline underline-offset-2 hover:text-[#4a9159]"
                >
                  Lihat di peta lengkap ↓
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              Kirim Pesan
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#5BAA6A]/10 flex items-center justify-center">
                  <Send className="w-8 h-8 text-[#5BAA6A]" />
                </div>
                <p className="text-xl font-semibold text-[#2E2E2E]">
                  Pesan Terkirim!
                </p>
                <p className="text-[#5C5C5C]">
                  Kami akan segera menghubungi Anda.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-[#5BAA6A] underline underline-offset-2"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {(
                  [
                    {
                      id: "name",
                      label: "Nama Lengkap",
                      type: "text",
                      placeholder: "Masukkan nama Anda",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "nama@email.com",
                    },
                    {
                      id: "phone",
                      label: "Nomor Telepon",
                      type: "tel",
                      placeholder: "+62 812-3456-7890",
                    },
                  ] as const
                ).map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-[#2E2E2E] mb-2"
                    >
                      {label}
                    </label>
                    <Input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      value={formData[id]}
                      onChange={handleChange}
                      className="rounded-xl border-[#5BAA6A]/20 focus:border-[#5BAA6A] focus:ring-[#5BAA6A]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#2E2E2E] mb-2"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan tentang anak Anda dan apa yang ingin Anda ketahui..."
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl border-[#5BAA6A]/20 focus:border-[#5BAA6A] focus:ring-[#5BAA6A] min-h-32"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5BAA6A] hover:bg-[#4A9959] text-white rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
                >
                  <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#5BAA6A] to-[#6BB9E0] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            Siap Bergabung dengan Keluarga Salam ICSD?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Daftarkan anak Anda sekarang dan berikan mereka pengalaman belajar
            yang tak terlupakan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-[#5BAA6A] hover:bg-[#FDFBF6] rounded-full px-8 py-6 text-lg shadow-lg"
            >
              <Link href="/PPDB">Daftar Sekarang</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent"
            >
              <Link href="#lokasi">Jadwalkan Kunjungan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
