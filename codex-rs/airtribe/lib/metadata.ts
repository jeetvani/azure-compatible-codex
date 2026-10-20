import type { Metadata } from "next";
import { metadataCopy } from "@/content/site";
// No trusted production origin was supplied. Do not infer one from request headers.
export const productionOrigin: URL | null = null;
export function pageMetadata(key: keyof typeof metadataCopy): Metadata {
  const copy = metadataCopy[key];
  return { ...copy, openGraph: { ...copy, type: "website", locale: "en" },
    ...(["details", "enroll"].includes(key) ? { robots: { index: false, follow: true } } : {}),
  };
}
