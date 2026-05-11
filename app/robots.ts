import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/work", "/work/"],
      },
    ],
    sitemap: "https://webcheer.co/sitemap.xml",
  };
}
