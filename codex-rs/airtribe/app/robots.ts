import type { MetadataRoute } from "next";
import { productionOrigin } from "@/lib/metadata";
export default function robots(): MetadataRoute.Robots {
  if (!productionOrigin) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: ["/programs/program-details", "/enroll"] }, sitemap: new URL("/sitemap.xml", productionOrigin).href };
}
