import type { MetadataRoute } from "next";
import { verticals, cities } from "./local/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://webcheer.co";
  const now = new Date();

  const verticalUrls: MetadataRoute.Sitemap = verticals.map((v) => ({
    url: `${base}/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cityUrls: MetadataRoute.Sitemap = verticals.flatMap((v) =>
    cities.map((c) => ({
      url: `${base}/${v.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/audit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...verticalUrls,
    ...cityUrls,
  ];
}
