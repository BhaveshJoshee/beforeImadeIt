import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundGrid } from "@/components/BackgroundGrid";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Before I Made It | Anonymous Software Studio & Digital Assets",
    template: "%s | Before I Made It",
  },
  description:
    "Building autonomous SaaS products, distributed web scrapers, and digital assets in public. Pure code, zero human faces.",
  keywords: [
    "Before I Made It",
    "Autonomous SaaS",
    "Web Scrapers",
    "Digital Assets",
    "Engineering Log",
    "Next.js Boilerplate",
    "Affiliate Automation",
    "Minimal Tech Setup",
  ],
  authors: [{ name: "Before I Made It Studio" }],
  creator: "Before I Made It",
  publisher: "Before I Made It",
  metadataBase: new URL("https://beforeimadeit.com"),
  openGraph: {
    title: "Before I Made It | Autonomous Software Studio",
    description:
      "Building autonomous SaaS products, distributed web scrapers, and digital assets in public. Pure code, zero human faces.",
    url: "https://beforeimadeit.com",
    siteName: "Before I Made It",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Before I Made It | Anonymous Software Studio",
    description:
      "Building autonomous SaaS products, distributed web scrapers, and digital assets in public.",
    creator: "@beforeimadeit",
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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0A0A] text-foreground min-h-screen flex flex-col antialiased selection:bg-emerald-400 selection:text-black">
        <BackgroundGrid />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
