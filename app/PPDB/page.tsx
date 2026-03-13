import { ppdbMetadata } from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PPDBClient } from "./ppdb-client";

export const metadata = ppdbMetadata;

export default function PPDBPage() {
  return (
    <>
      <Navigation />
      <PPDBClient />
      <Footer />
    </>
  );
}
