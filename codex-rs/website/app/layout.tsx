import type { Metadata } from "next";
import { metadataCopy, publicSiteUrl } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  ...(publicSiteUrl ? { metadataBase: publicSiteUrl } : {}),
  title: metadataCopy.home.title,
  description: metadataCopy.home.description,
  openGraph: {
    title: metadataCopy.home.title,
    description: metadataCopy.home.description,
    type: "website",
    locale: "ur_PK",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ur" dir="rtl"><body><a className="skip-link" href="#main-content">مرکزی مواد پر جائیں</a>{children}</body></html>;
}
