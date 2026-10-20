import type { MetadataRoute } from "next";
import { productionOrigin } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = productionOrigin;
  if (!origin) return [];
  return ["/", "/programs", "/how-live-cohorts-work", "/faq", "/about", "/contact"].map(path => ({ url: new URL(path, origin).href }));
}
