import { prestasiMetadata } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PrestasiClient } from "./prestasi-client";

export const metadata = prestasiMetadata;

export default function PrestasiPage() {
  return (
    <>
      <Navigation />
      <PrestasiClient />
      <Footer />
    </>
  );
}
