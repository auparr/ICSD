import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { JourneySection } from "@/components/sections/journey-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/sections/FAQsection";
import { CTASection } from "@/components/sections/CTAsection";
import { LocationSection } from "@/components/sections/location";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <JourneySection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
