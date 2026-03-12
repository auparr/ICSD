// FIX: no "use client" needed — this is a layout wrapper with no interactivity.
// Running as a Server Component reduces JS bundle size.
import * as React from "react"; // FIX: missing — React.ReactNode is undefined without this
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ProgramPageLayoutProps {
  title: string;
  ageRange: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function ProgramPageLayout({
  title,
  ageRange,
  description,
  imageUrl,
  children,
}: ProgramPageLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="bg-white">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[300px] bg-gray-800">
          <Image
            src={imageUrl}
            alt={`Suasana belajar untuk ${title}`}
            fill
            priority
            // FIX: missing sizes prop — Next.js warns and uses suboptimal image size without it
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 py-12 text-white">
              <span className="bg-[#5BAA6A] px-3 py-1 rounded-full text-sm font-semibold">
                {ageRange}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 text-balance">
                {title}
              </h1>
              <p className="mt-2 text-lg max-w-2xl text-white/90">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="prose lg:prose-xl max-w-4xl mx-auto">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
