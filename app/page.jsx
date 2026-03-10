import Header from "@/components/home/header";
import HeroSection from "@/components/home/hero-section";
import CategoriesSection from "@/components/home/categories-section";
import NearbySellersSection from "@/components/home/nearby-sellers-section";
import PopularProductsSection from "@/components/home/popular-products-section";
import FranchiseSection from "@/components/home/franchise-section";
import DepartmentsSection from "@/components/home/departments-section";
import RoadmapSection from "@/components/home/roadmap-section";
import Footer from "@/components/home/footer";
import {
  dummyCategories,
  dummyProductGroups,
  dummySellers
} from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header />
      <HeroSection />
      <CategoriesSection categories={dummyCategories} />
      <NearbySellersSection sellers={dummySellers} />
      <PopularProductsSection productGroups={dummyProductGroups} />
      <FranchiseSection />
      <DepartmentsSection />
      <RoadmapSection />
      <Footer />
    </main>
  );
}
