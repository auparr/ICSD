// components/location-section.tsx

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function LocationSection() {
  const schoolAddress =
    "495Q+HFM, Banjaranyar, Drajat, Kec. Paciran, Kabupaten Lamongan, Jawa Timur 62264";
  const gmapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Sekolah%20Alam%20Insan%20Cendekia%20Sunan%20Drajat`;
  const gmapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3957.674991879036!2d112.738304!3d-7.2777728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77e94360cfc577%3A0xe37c1ce27b2c5e2d!2sSekolah%20Alam%20Insan%20Cendekia%20Sunan%20Drajat!5e0!3m2!1sid!2sus!4v1759886516520!5m2!1sid!2sus";

  return (
    <section id="lokasi" className="bg-[#f7fbfa] py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance leading-tight">
            Lokasi Kami
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed">
            {schoolAddress}
          </p>
        </div>

        {/* Map and Button Container */}
        <div className="max-w-5xl mx-auto">
          {/* --- KEY CHANGES START HERE --- */}

          {/* 1. This new wrapper controls the size and shape. */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
            <iframe
              // 2. The iframe is now styled to fill the wrapper.
              className="absolute inset-0 w-full h-full border-0"
              src={gmapsEmbedUrl}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Sekolah Alam Insan Cendekia Sunan Drajat"
            ></iframe>
          </div>

          {/* --- KEY CHANGES END HERE --- */}

          <div className="text-center">
            <Button
              asChild
              className="bg-[#5BAA6A] hover:bg-[#4A9959] text-white rounded-full px-8 py-6 text-lg shadow-lg"
            >
              <a
                href={gmapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-3" />
                Dapatkan Petunjuk Arah
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
