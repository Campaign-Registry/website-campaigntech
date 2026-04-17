import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Fraunces at 500 italic — structural, sturdy emphasis. No decorative flourishes.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500"],
  style: ["italic"],
});

const siteUrl = "https://campaigntech.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Tech AI — Verified infrastructure for the modern campaign",
    template: "%s · Campaign Tech AI",
  },
  description:
    "Campaign Tech AI builds the verified information layer and secure workflow tools modern political organizations rely on. Makers of Campaign Registry and Campaign Vault.",
  keywords: [
    "political technology",
    "campaign technology",
    "AEO",
    "GEO",
    "generative engine optimization",
    "campaign software",
    "political AI",
    "Campaign Registry",
    "Campaign Vault",
  ],
  authors: [{ name: "Campaign Tech AI" }],
  creator: "Campaign Tech AI",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Campaign Tech AI",
    title: "Campaign Tech AI — Verified infrastructure for the modern campaign",
    description:
      "The verified information layer and secure workflow tools modern political organizations rely on.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Tech AI",
    description:
      "Verified information. Controlled workflows. Built for the modern campaign.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3D1F",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Campaign Tech AI",
  url: siteUrl,
  email: "hello@campaigntech.ai",
  description:
    "Verified political information and secure campaign workflow infrastructure.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-forest-800 focus:text-bone-50 focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
