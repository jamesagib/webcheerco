import type { Metadata } from "next";
import { VerticalPage } from "../local/VerticalPage";
import { getVertical } from "../local/data";

const vertical = getVertical("restaurants")!;

export const metadata: Metadata = {
  title:
    "Restaurant Website Accessibility & Redesign · WCAG 2.1 AA · WebCheer",
  description:
    "1,368 restaurants got hit with ADA web lawsuits in 2025 — the most-targeted industry. We rebuild restaurant menus, ordering, and reservations to WCAG 2.1 AA in 1–2 weeks. Free audit, fixed-scope quote, no overlay widgets.",
  alternates: { canonical: "/restaurants" },
  keywords: [
    "restaurant website accessibility",
    "restaurant ADA compliance",
    "restaurant website redesign",
    "WCAG restaurant",
    "restaurant menu accessibility",
  ],
  openGraph: {
    title: "Restaurant Website Accessibility & Redesign — WebCheer",
    description:
      "1,368 restaurants sued in 2025 over ADA web compliance. We rebuild restaurant sites to WCAG 2.1 AA in 1–2 weeks.",
    url: "https://webcheer.co/restaurants",
    siteName: "WebCheer",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webcheer.co/restaurants#service",
      name: "Restaurant Website Accessibility Remediation & Redesign",
      serviceType: "Web Accessibility Remediation",
      url: "https://webcheer.co/restaurants",
      description:
        "WCAG 2.1 AA remediation and full redesign for restaurant websites. 1–2 week turnaround, fixed-scope, code-level (no overlay widgets).",
      provider: { "@id": "https://webcheer.co/#org" },
      audience: { "@type": "BusinessAudience", audienceType: "Restaurant" },
      areaServed: "United States",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WebCheer", item: "https://webcheer.co" },
        { "@type": "ListItem", position: 2, name: "Restaurants", item: "https://webcheer.co/restaurants" },
      ],
    },
  ],
};

export default function RestaurantsPage() {
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
