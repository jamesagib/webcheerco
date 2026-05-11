import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerticalPage } from "../../local/VerticalPage";
import { cities, getCity, getVertical } from "../../local/data";

const vertical = getVertical("home")!;

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
    title: `${city.name} Home, Furniture & Decor Ecommerce Accessibility · WebCheer`,
    description: `303 home retailers sued over ADA in 2025. We rebuild ${city.name} home, furniture, and decor sites — accessible product pages, dimensions, swatch pickers — to WCAG 2.1 AA in 1–2 weeks.`,
    alternates: { canonical: `/${vertical.slug}/${city.slug}` },
    keywords: [
      `${city.name} furniture website`,
      `${city.name} home goods ADA`,
      `${city.name} home decor ecommerce`,
      `WCAG home retail ${city.name}`,
    ],
    openGraph: {
      title: `${city.name} Home & Decor Ecommerce Accessibility — WebCheer`,
      description: `Rebuild ${city.name} home retail in 1–2 weeks.`,
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
