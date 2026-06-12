import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";
import { ParticleField } from "@/components/ui/ParticleField";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const grotesk = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-grotesk",
});

const serif = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
});

const SITE_URL = "https://sakshisingh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sakshi Singh — Frontend Engineer",
    template: "%s · Sakshi Singh",
  },
  description:
    "Sakshi Singh is a Frontend Engineer building fast, scalable web applications with React, Next.js & TypeScript. Based in Gurugram, India.",
  keywords: [
    "Sakshi Singh",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Design Systems",
    "Web Performance",
    "Gurugram",
    "India",
  ],
  authors: [{ name: "Sakshi Singh" }],
  creator: "Sakshi Singh",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sakshi Singh — Frontend Engineer",
    description: "Building fast, scalable web applications with React & Next.js.",
    url: SITE_URL,
    siteName: "Sakshi Singh",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakshi Singh — Frontend Engineer",
    description: "Building fast, scalable web applications with React & Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sakshi Singh",
  jobTitle: "Frontend Engineer",
  url: SITE_URL,
  email: "mailto:sakshi915128@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "1Lattice" },
  sameAs: [
    "https://linkedin.com/in/sakshi-singh-frontend",
    "https://github.com/devSakshi022R",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Design Systems", "Web Performance", "Accessibility"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased font-sans">
        <a href="#main" className="skip-link">Skip to content</a>
        <ParticleField />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
