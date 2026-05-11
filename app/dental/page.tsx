import type { Metadata } from "next";
import { VerticalPage } from "../local/VerticalPage";
import { getVertical } from "../local/data";

const vertical = getVertical("dental")!;

export const metadata: Metadata = {
  title: "Dental & Medical Practice Website Accessibility · WebCheer",
  description:
    "283 dental and medical practices were sued over ADA web compliance in 2025. We rebuild practice sites — accessible booking, smile galleries, insurance forms — to WCAG 2.1 AA in 1–2 weeks. Free audit, fixed-scope quote.",
  alternates: { canonical: "/dental" },
  keywords: [
    "dental practice website",
    "medical practice ADA compliance",
    "dentist website redesign",
    "WCAG dental",
    "dental website audit",
  ],
  openGraph: {
    title: "Dental & Medical Practice Website Accessibility — WebCheer",
    description:
      "283 practices sued in 2025. Accessible booking, smile galleries, intake forms in 1–2 weeks.",
    url: "https://webcheer.co/dental",
    siteName: "WebCheer",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://webcheer.co/dental#service",
      name: "Dental & Medical Practice Website Accessibility Remediation",
      serviceType: "Web Accessibility Remediation",
      url: "https://webcheer.co/dental",
      provider: { "@id": "https://webcheer.co/#org" },
      audience: { "@type": "BusinessAudience", audienceType: "Dentist" },
      areaServed: "United States",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WebCheer", item: "https://webcheer.co" },
        { "@type": "ListItem", position: 2, name: "Dental & Medical", item: "https://webcheer.co/dental" },
      ],
    },
  ],
};

export default function DentalPage() {
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
