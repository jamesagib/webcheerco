import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerticalPage } from "../../local/VerticalPage";
import { cities, getCity, getVertical } from "../../local/data";

const vertical = getVertical("dental")!;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return { title: "Not found" };
  const url = `https://webcheer.co/${vertical.slug}/${city.slug}`;
  return {
    title: `${city.name} Dental & Medical Website Accessibility · WebCheer`,
    description: `283 dental and medical practices sued over ADA in 2025. We rebuild ${city.name} practice sites — accessible booking, smile galleries, intake — to WCAG 2.1 AA in 1–2 weeks.`,
    alternates: { canonical: `/${vertical.slug}/${city.slug}` },
    keywords: [
      `${city.name} dental website`,
      `${city.name} dentist ADA compliance`,
      `${city.name} medical practice website`,
      `WCAG dental ${city.name}`,
    ],
    openGraph: {
      title: `${city.name} Dental Website Accessibility — WebCheer`,
      description: `Rebuild ${city.name} dental and medical practice sites in 1–2 weeks.`,
      url,
      siteName: "WebCheer",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();
  return <VerticalPage vertical={vertical} city={city} />;
}
