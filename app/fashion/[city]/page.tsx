import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerticalPage } from "../../local/VerticalPage";
import { cities, getCity, getVertical } from "../../local/data";

const vertical = getVertical("fashion")!;

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
    title: `${city.name} Fashion & Apparel Ecommerce Accessibility · WebCheer`,
    description: `1,025 fashion businesses sued over ADA in 2025. We rebuild ${city.name} apparel ecommerce — accessible product pages, size pickers, checkout — to WCAG 2.1 AA in 1–2 weeks.`,
    alternates: { canonical: `/${vertical.slug}/${city.slug}` },
    keywords: [
      `${city.name} fashion ecommerce`,
      `${city.name} apparel website`,
      `${city.name} clothing brand ADA`,
      `WCAG ${city.name} ecommerce`,
    ],
    openGraph: {
      title: `${city.name} Fashion Ecommerce Accessibility — WebCheer`,
      description: `Rebuild ${city.name} apparel ecommerce in 1–2 weeks.`,
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
