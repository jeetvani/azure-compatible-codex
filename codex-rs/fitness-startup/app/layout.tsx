import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOTIF — Move like you mean it",
  description:
    "Adaptive workouts, real coaches, and a community that keeps you moving.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
