import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sakshi Singh | Frontend Engineer",
  description:
    "Portfolio of Sakshi Singh — a Frontend Engineer with 1.6+ years of experience building scalable, high-performance web applications with React & Next.js. Based in Gurugram, India.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Component Library",
    "Gurugram",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Sakshi Singh", url: "mailto:sakshi915128@gmail.com" }],
  openGraph: {
    title: "Sakshi Singh | Frontend Engineer",
    description:
      "Building scalable, high-performance web applications with React & Next.js.",
    siteName: "Sakshi Singh Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300"
        style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
