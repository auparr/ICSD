"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
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
  ]

  return (
    <section id="kontak" className="relative bg-gradient-to-b from-white to-[#FDFBF6] py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#5BAA6A]/10 text-[#5BAA6A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Mari Berbincang Tentang Masa Depan Anak Anda
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            Kami siap menjawab pertanyaan Anda dan membantu menemukan program terbaik untuk buah hati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2E2E2E] mb-1">{info.title}</h4>
                        <p className="text-[#5C5C5C] leading-relaxed">{info.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-64">
              <div className="w-full h-full bg-gradient-to-br from-[#5BAA6A]/20 to-[#6BB9E0]/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#5BAA6A] mx-auto mb-2" />
                  <p className="text-[#5C5C5C]">Peta Lokasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border-[#5BAA6A]/20 focus:border-[#5BAA6A] focus:ring-[#5BAA6A]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-[#5BAA6A]/20 focus:border-[#5BAA6A] focus:ring-[#5BAA6A]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Nomor Telepon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+62 812-3456-7890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-xl border-[#5BAA6A]/20 focus:border-[#5BAA6A] focus:ring-[#5BAA6A]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan tentang anak Anda dan apa yang ingin Anda ketahui..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-[#5BAA6A]/20 focus:border-[#5BAA6A] focus:ring-[#5BAA6A] min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5BAA6A] hover:bg-[#4A9959] text-white rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#5BAA6A] to-[#6BB9E0] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Siap Bergabung dengan Keluarga Salam ICSD?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Daftarkan anak Anda sekarang dan berikan mereka pengalaman belajar yang tak terlupakan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#5BAA6A] hover:bg-[#FDFBF6] rounded-full px-8 py-6 text-lg shadow-lg">
              Daftar Sekarang
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent"
            >
              Jadwalkan Kunjungan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
