import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webcheer.co"),
  title: "WebCheer — Websites that work for everyone",
  description:
    "WebCheer is a Southern California studio building modern, accessible websites for small businesses. Website redesigns and WCAG 2.1 AA accessibility — done right.",
  openGraph: {
    title: "WebCheer — Websites that work for everyone",
    description:
      "Website redesigns and ADA accessibility for small businesses. Based in Southern California, working everywhere.",
    url: "https://webcheer.co",
    siteName: "WebCheer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@agibjames",
    title: "WebCheer — Websites that work for everyone",
    description:
      "Website redesigns and ADA accessibility for small businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://webcheer.co/#org",
      name: "WebCheer",
      url: "https://webcheer.co",
      logo: "https://webcheer.co/assets/webcheer-logo.png",
      email: "jagib07@gmail.com",
      sameAs: ["https://instagram.com/webcheer.media"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://webcheer.co/#service",
      name: "WebCheer",
      description:
        "Modern, accessible website redesigns and WCAG 2.1 AA accessibility for small businesses.",
      url: "https://webcheer.co",
      areaServed: "United States",
      serviceType: ["Website redesign", "ADA accessibility", "WCAG 2.1 AA audit"],
      provider: { "@id": "https://webcheer.co/#org" },
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
