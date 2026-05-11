import type { Metadata } from "next";
import { VerticalPage } from "../local/VerticalPage";
import { getVertical } from "../local/data";

const vertical = getVertical("fashion")!;

export const metadata: Metadata = {
  title: "Fashion & Apparel Ecommerce Accessibility · WebCheer",
  description:
    "1,025 fashion and apparel businesses were sued over ADA web compliance in 2025 — 25.96% of all filings. We rebuild apparel ecommerce — accessible product pages, size pickers, checkout — to WCAG 2.1 AA in 1–2 weeks.",
  alternates: { canonical: "/fashion" },
  keywords: [
    "fashion ecommerce accessibility",
    "apparel ADA compliance",
    "shopify accessibility",
    "WCAG ecommerce",
    "fashion website redesign",
  ],
  openGraph: {
    title: "Fashion & Apparel Ecommerce Accessibility — WebCheer",
    description:
      "1,025 fashion businesses sued in 2025. Accessible product pages, pickers, checkout.",
    url: "https://webcheer.co/fashion",
    siteName: "WebCheer",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webcheer.co/fashion#service",
      name: "Fashion & Apparel Ecommerce Accessibility Remediation",
      serviceType: "Web Accessibility Remediation",
      url: "https://webcheer.co/fashion",
      provider: { "@id": "https://webcheer.co/#org" },
      audience: { "@type": "BusinessAudience", audienceType: "ClothingStore" },
      areaServed: "United States",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WebCheer", item: "https://webcheer.co" },
        { "@type": "ListItem", position: 2, name: "Fashion", item: "https://webcheer.co/fashion" },
      ],
    },
  ],
};

export default function FashionPage() {
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
