import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://campaigntech.ai/sitemap.xml",
    host: "https://campaigntech.ai",
  };
}
