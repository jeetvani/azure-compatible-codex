import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";
// This unpublished draft retains a conservative indexing policy without an approved origin.
export const metadata: Metadata = { robots: { index: false, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></body></html>;
}
