import type { Metadata } from "next";
export function configuredSiteUrl(value: string | undefined): URL | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/" || !url.hostname.includes(".") || /^(localhost|127\.|0\.)/.test(url.hostname)) return null;
    return url;
  } catch { return null; }
}
export const siteUrl = configuredSiteUrl(process.env.SITE_URL);
export function pageMetadata(path: string, title: string, description: string, noindex = false): Metadata {
  return { title, description, openGraph: { title, description, type: "website", locale: "en_US" },
    ...(siteUrl ? { alternates: { canonical: new URL(path, siteUrl).href } } : {}),
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
