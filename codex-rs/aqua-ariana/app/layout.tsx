import type { Metadata } from "next";
import { siteUrl } from "@/lib/metadata";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CartProvider } from "@/components/shop/CartProvider";
import "./globals.css";
export const metadata: Metadata = { ...(siteUrl ? { metadataBase: siteUrl } : {}) };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><CartProvider><SiteHeader/><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/></CartProvider></body></html>; }
