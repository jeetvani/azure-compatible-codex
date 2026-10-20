import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
 const base = siteUrl;
 return base ? ["/", "/pickup"].map(path => ({ url: new URL(path, base).href })) : [];
}
