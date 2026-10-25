import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Study Abroad Guidance`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Study abroad guidance for students and families in Pakistan exploring Malaysia, the UK, Australia, Canada, the USA and Germany.",
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_PK",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-canvas text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Suspense fallback={<div className="h-20 border-b border-line bg-white lg:h-[7.25rem]" />}>
          <Header />
        </Suspense>
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
