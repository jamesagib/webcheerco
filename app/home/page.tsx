import type { Metadata } from "next";
import { VerticalPage } from "../local/VerticalPage";
import { getVertical } from "../local/data";

const vertical = getVertical("home")!;

export const metadata: Metadata = {
  title: "Home, Furniture & Decor Ecommerce Accessibility · WebCheer",
  description:
    "303 home, furniture, and decor businesses were sued over ADA web compliance in 2025. We rebuild home-retail ecommerce — product pages, dimension specs, color/finish pickers — to WCAG 2.1 AA in 1–2 weeks.",
  alternates: { canonical: "/home" },
  keywords: [
    "furniture website accessibility",
    "home goods ADA compliance",
    "home retail ecommerce",
    "WCAG furniture",
    "interior design website audit",
  ],
  openGraph: {
    title: "Home, Furniture & Decor Ecommerce Accessibility — WebCheer",
    description:
      "303 home retailers sued in 2025. Accessible product pages, specs, swatch pickers in 1–2 weeks.",
    url: "https://webcheer.co/home",
    siteName: "WebCheer",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webcheer.co/home#service",
      name: "Home, Furniture & Decor Ecommerce Accessibility Remediation",
      serviceType: "Web Accessibility Remediation",
      url: "https://webcheer.co/home",
      provider: { "@id": "https://webcheer.co/#org" },
      audience: { "@type": "BusinessAudience", audienceType: "HomeAndConstructionBusiness" },
      areaServed: "United States",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WebCheer", item: "https://webcheer.co" },
        { "@type": "ListItem", position: 2, name: "Home & Decor", item: "https://webcheer.co/home" },
      ],
    },
  ],
};

export default function HomePage() {
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
