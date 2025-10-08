import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

// Define the types for the props our layout will accept
type ProgramPageLayoutProps = {
  title: string;
  ageRange: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode; // This will be the main content of the page
};

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
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[300px] bg-gray-800">
          <Image
            src={imageUrl}
            alt={`Suasana belajar untuk ${title}`}
            fill
            className="object-cover"
            priority
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

        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="prose lg:prose-xl max-w-4xl mx-auto">
            {/* The unique content for each page will be rendered here */}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
