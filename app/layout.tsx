import type { Metadata, Viewport } from "next";
import { Public_Sans, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Public Sans — primary display & body. Brand guide: weights 400 → 800.
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Source Serif 4 italic 600 — single-word emphasis only. No underline.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600"],
  style: ["italic"],
});

// JetBrains Mono — labels, IDs, metadata.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://campaigntech.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Tech AI — The quiet infrastructure of modern campaigns",
    template: "%s · Campaign Tech AI",
  },
  description:
    "Campaign Tech AI builds Campaign Registry — the verified information layer for AI — and Campaign Desk, the operating surface for agentic political workflows.",
  keywords: [
    "political technology",
    "campaign technology",
    "AEO",
    "GEO",
    "agentic AI",
    "campaign software",
    "political AI",
    "Campaign Registry",
    "Campaign Desk",
  ],
  authors: [{ name: "Campaign Tech AI" }],
  creator: "Campaign Tech AI",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Campaign Tech AI",
    title: "Campaign Tech AI — The quiet infrastructure of modern campaigns",
    description:
      "The verified information layer and the agentic workflow surface modern political organizations rely on.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Tech AI",
    description:
      "The quiet infrastructure of modern campaigns.",
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
  themeColor: "#14493C",
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
    "Verified political information and agentic workflow infrastructure.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
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
