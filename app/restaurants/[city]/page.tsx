import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerticalPage } from "../../local/VerticalPage";
import { cities, getCity, getVertical } from "../../local/data";

const vertical = getVertical("restaurants")!;

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
    title: `${city.name} Restaurant Website Accessibility · WCAG 2.1 AA · WebCheer`,
    description: `${vertical.lawsuitCount.toLocaleString()} restaurants got hit with ADA lawsuits in 2025. We rebuild ${city.name} restaurant websites to WCAG 2.1 AA — menu, ordering, reservations — in 1–2 weeks.`,
    alternates: { canonical: `/${vertical.slug}/${city.slug}` },
    keywords: [
      `${city.name} restaurant website`,
      `${city.name} restaurant ADA compliance`,
      `restaurant website ${city.name}`,
      `WCAG restaurant ${city.name}`,
    ],
    openGraph: {
      title: `${city.name} Restaurant Website Accessibility — WebCheer`,
      description: `Rebuild ${city.name} restaurant sites to WCAG 2.1 AA in 1–2 weeks.`,
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
