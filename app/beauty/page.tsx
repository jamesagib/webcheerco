import type { Metadata } from "next";
import { VerticalPage } from "../local/VerticalPage";
import { getVertical } from "../local/data";

const vertical = getVertical("beauty")!;

export const metadata: Metadata = {
  title: "Beauty & Salon Website Accessibility · WCAG 2.1 AA · WebCheer",
  description:
    "317 beauty and personal-care businesses were sued over ADA web compliance in 2025. We rebuild salon, spa, and beauty-practice sites — accessible booking, real photo metadata, no overlay widgets — to WCAG 2.1 AA in 1–2 weeks.",
  alternates: { canonical: "/beauty" },
  keywords: [
    "salon website accessibility",
    "spa ADA compliance",
    "beauty website redesign",
    "WCAG salon",
    "beauty website audit",
  ],
  openGraph: {
    title: "Beauty & Salon Website Accessibility — WebCheer",
    description:
      "317 beauty businesses sued in 2025. Accessible booking, real photo alts, 1–2 week rebuilds.",
    url: "https://webcheer.co/beauty",
    siteName: "WebCheer",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webcheer.co/beauty#service",
      name: "Beauty & Salon Website Accessibility Remediation",
      serviceType: "Web Accessibility Remediation",
      url: "https://webcheer.co/beauty",
      provider: { "@id": "https://webcheer.co/#org" },
      audience: { "@type": "BusinessAudience", audienceType: "BeautySalon" },
      areaServed: "United States",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WebCheer", item: "https://webcheer.co" },
        { "@type": "ListItem", position: 2, name: "Beauty", item: "https://webcheer.co/beauty" },
      ],
    },
  ],
};

export default function BeautyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VerticalPage vertical={vertical} />
    </>
  );
}
