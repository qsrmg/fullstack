import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EHB AI Marketplace | Global Services & Commerce Platform",
  description:
    "EHB AI Marketplace combines e-commerce, local services, franchise systems, jobs, and AI-based service discovery on one modern global platform.",
  keywords: [
    "EHB AI Marketplace",
    "global marketplace",
    "AI service discovery",
    "franchise system",
    "job marketplace",
    "e-commerce platform"
  ]
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
