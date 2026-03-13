import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// ─── Font ─────────────────────────────────────────────────────────────────────
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap", // prevents invisible text during font load
});

// ─── Site-wide base URL ───────────────────────────────────────────────────────
export const SITE_URL = "https://salamicsd.vercel.app"; // change to actual domain

// ─── Viewport (separate from metadata per Next.js 14+ requirement) ────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5BAA6A",
};

// ─── Default metadata (inherited by all pages, overridden per-page) ───────────
export const metadata: Metadata = {
  // ── Base ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    // `default` shown when a page doesn't set its own title
    default: "Salam ICSD – Sekolah Alam Lamongan | Insan Cendekia Sunan Drajat",
    // `template` wraps child page titles: "KB Alam | Salam ICSD"
    template: "%s | Salam ICSD",
  },
  description:
    "Sekolah Alam terbaik di Lamongan. Membangun karakter Islami, rasa ingin tahu, dan kepemimpinan melalui pendidikan berbasis alam. Tersedia KB, TK, dan MI. Daftar sekarang!",

  // ── Keywords (still used by some Indonesian search engines & Bing) ─────────
  keywords: [
    "sekolah alam lamongan",
    "sekolah alam insan cendekia",
    "sekolah Islam lamongan",
    "sekolah alam sunan drajat",
    "KB TK MI lamongan",
    "salam ICSD",
    "sekolah berbasis alam",
    "pendidikan alam Islam",
    "sekolah alam jawa timur",
    "PPDB sekolah alam lamongan",
    "sekolah karakter lamongan",
    "sekolah terbaik lamongan",
  ],

  // ── Authorship ────────────────────────────────────────────────────────────
  authors: [{ name: "Salam ICSD", url: SITE_URL }],
  creator: "Salam ICSD",
  publisher: "Sekolah Alam Insan Cendekia Sunan Drajat",

  // ── Canonical & alternates ────────────────────────────────────────────────
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },

  // ── Open Graph (WhatsApp, Facebook, LINE previews) ────────────────────────
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Salam ICSD – Sekolah Alam Lamongan",
    title: "Salam ICSD – Sekolah Alam Lamongan | Insan Cendekia Sunan Drajat",
    description:
      "Sekolah Alam terbaik di Lamongan. Pendidikan berbasis alam dan nilai Islam untuk KB, TK, dan MI. Belajar Bersama Alam, Tumbuh dengan Iman.",
    images: [
      {
        url: "/children-studying-under-trees-with-sunlight-filter.webp",
        width: 1200,
        height: 630,
        alt: "Anak-anak belajar di alam terbuka di Sekolah Alam Insan Cendekia Sunan Drajat Lamongan",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Salam ICSD – Sekolah Alam Lamongan",
    description:
      "Pendidikan berbasis alam dan nilai Islam. KB, TK, MI di Lamongan, Jawa Timur.",
    images: ["/children-studying-under-trees-with-sunlight-filter.webp"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1, // allow full snippet in search results
      "max-video-preview": -1, // allow full video preview
    },
  },

  // ── Verification (add after registering in Google Search Console) ─────────
  // verification: {
  //   google: "your-google-site-verification-token",
  //   other: { "msvalidate.01": "your-bing-token" },
  // },

  // ── App manifest ──────────────────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/school-logo.svg", type: "image/svg+xml" },
      { url: "/school-logo.png", type: "image/png" },
    ],
    apple: "/school-logo.png",
    shortcut: "/school-logo.png",
  },

  // ── Category (helps Google classify the site) ─────────────────────────────
  category: "education",
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={geist.variable} suppressHydrationWarning>
      <head>
        {/* ── Local Business structured data (JSON-LD) ──────────────────────
            This is the single most impactful SEO addition for local search.
            Google uses this to show your school in Maps, Knowledge Panel,
            and "sekolah alam lamongan" local pack results.
        ────────────────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Sekolah Alam Insan Cendekia Sunan Drajat",
              alternateName: ["Salam ICSD", "Sekolah Alam ICSD"],
              url: SITE_URL,
              logo: `${SITE_URL}/school-logo.png`,
              image: `${SITE_URL}/children-studying-under-trees-with-sunlight-filter.webp`,
              description:
                "Sekolah Alam berbasis Islam di Lamongan, Jawa Timur. Menyediakan jenjang Kelompok Bermain (KB), Taman Kanak-kanak (TK), dan Madrasah Ibtidaiyah (MI).",
              address: {
                "@type": "PostalAddress",
                streetAddress: "495Q+HFM, Banjaranyar, Drajat",
                addressLocality: "Paciran",
                addressRegion: "Lamongan",
                postalCode: "62264",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.2777728,
                longitude: 112.738304,
              },
              telephone: "+62812-3456-7890",
              email: "icsdsalam@gmail.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "15:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Program Pendidikan",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Kelompok Bermain (KB)",
                    description:
                      "Program pendidikan untuk anak usia 3-4 tahun berbasis alam",
                    url: `${SITE_URL}/program-pendidikan/KB`,
                  },
                  {
                    "@type": "Course",
                    name: "Taman Kanak-kanak (TK)",
                    description:
                      "Program pendidikan untuk anak usia 5-6 tahun berbasis alam",
                    url: `${SITE_URL}/program-pendidikan/TK`,
                  },
                  {
                    "@type": "Course",
                    name: "Madrasah Ibtidaiyah (MI)",
                    description:
                      "Program pendidikan untuk anak usia 7-12 tahun berbasis alam",
                    url: `${SITE_URL}/program-pendidikan/MI`,
                  },
                ],
              },
              sameAs: [
                // Add your real social media URLs here
                // "https://www.facebook.com/salamicsd",
                // "https://www.instagram.com/salamicsd",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
