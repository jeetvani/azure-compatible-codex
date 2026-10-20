import type { MetadataRoute } from "next";
import { publicSiteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  if (!publicSiteUrl) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" } };
}
