import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import CategoriesSection from "@/components/home/categories-section";
import NearbySellersSection from "@/components/home/nearby-sellers-section";
import PopularProductsSection from "@/components/home/popular-products-section";
import FranchiseSection from "@/components/home/franchise-section";
import DepartmentsSection from "@/components/home/departments-section";
import RoadmapSection from "@/components/home/roadmap-section";
import SqlLevelsSection from "@/components/home/sql-levels-section";
import Footer from "@/components/home/footer";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <NearbySellersSection />
      <PopularProductsSection />
      <FranchiseSection />
      <DepartmentsSection />
      <RoadmapSection />
      <SqlLevelsSection />
      <Footer />
    </main>
  );
}
