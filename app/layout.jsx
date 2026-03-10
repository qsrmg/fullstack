import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ehb-marketplace.example"),
  title: "EHB AI Marketplace | Global Commerce, Services, Franchise & Jobs",
  description:
    "EHB AI Marketplace is a global platform combining e-commerce, local services, franchise opportunities, jobs, and AI-powered service discovery with SQL trust verification.",
  openGraph: {
    title: "EHB AI Marketplace",
    description:
      "Global platform for products, services, franchise systems, jobs, and AI-powered discovery.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
