import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tentang: [
      { label: "Profil Sekolah", href: "#tentang" },
      { label: "Visi & Misi", href: "#filosofi" },
      { label: "Fasilitas", href: "#" },
      { label: "Prestasi", href: "#" },
    ],
    program: [
      { label: "KB Alam", href: "#perjalanan" },
      { label: "TK Alam", href: "#perjalanan" },
      { label: "MI Alam", href: "#perjalanan" },
      { label: "Ekstrakurikuler", href: "#" },
    ],
    informasi: [
      { label: "Pendaftaran", href: "#kontak" },
      { label: "Biaya Sekolah", href: "#" },
      { label: "Kalender Akademik", href: "#" },
      { label: "Galeri", href: "#galeri" },
    ],
  };

  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2E2E2E] to-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Salam ICSD</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Sekolah Alam Insan Cendekia Sunan Drajat - Menumbuhkan generasi
              yang cinta alam, berakhlak mulia, dan berprestasi.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5BAA6A] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  495Q+HFM, Banjaranyar, Drajat, Kec. Paciran, Kabupaten
                  Lamongan, Jawa Timur 62264
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6BB9E0] flex-shrink-0" />
                <span className="text-white/70 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F4C27F] flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  icsdsalam@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#5BAA6A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Program</h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#5BAA6A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-3">
              {footerLinks.informasi.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#5BAA6A] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex gap-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#5BAA6A] flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-white/50 text-sm text-center">
              © {currentYear} Salam ICSD. Semua hak dilindungi.
            </p>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
