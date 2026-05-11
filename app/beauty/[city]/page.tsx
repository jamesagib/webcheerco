import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerticalPage } from "../../local/VerticalPage";
import { cities, getCity, getVertical } from "../../local/data";

const vertical = getVertical("beauty")!;

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
    title: `${city.name} Salon, Spa & Beauty Website Accessibility · WebCheer`,
    description: `317 beauty businesses sued over ADA in 2025. We rebuild ${city.name} salon, spa, and beauty-practice sites to WCAG 2.1 AA — accessible booking, real photo metadata — in 1–2 weeks.`,
    alternates: { canonical: `/${vertical.slug}/${city.slug}` },
    keywords: [
      `${city.name} salon website`,
      `${city.name} spa website`,
      `${city.name} beauty ADA compliance`,
      `WCAG salon ${city.name}`,
    ],
    openGraph: {
      title: `${city.name} Beauty Website Accessibility — WebCheer`,
      description: `Rebuild ${city.name} salon and spa sites in 1–2 weeks.`,
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
