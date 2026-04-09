import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { NearbySellers } from "@/components/home/NearbySellers";
import { PopularProducts } from "@/components/home/PopularProducts";
import { FranchiseOpportunities } from "@/components/home/FranchiseOpportunities";
import { EhbDepartments } from "@/components/home/EhbDepartments";
import { Roadmap } from "@/components/home/Roadmap";
import { SqlLevels } from "@/components/home/SqlLevels";

export default function HomePage() {
  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100"
    >
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <NearbySellers />
        <PopularProducts />
        <FranchiseOpportunities />
        <EhbDepartments />
        <Roadmap />
        <SqlLevels />
      </main>
      <Footer />
    </div>
  );
}
