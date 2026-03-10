import { Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import { categories } from "@/lib/home-data";

export default function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Main Service Categories"
        title="One Marketplace. Infinite Service Possibilities."
        description="Built for global commerce, local execution, and trusted growth with AI-powered discoverability."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const isComingSoon = category.tag === "Coming Soon";
          return (
            <article
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-100 blur-2xl transition group-hover:bg-cyan-200 dark:bg-cyan-900/30 dark:group-hover:bg-cyan-800/40" />
              <div className="relative">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
                  {category.tag}
                </p>
                {isComingSoon ? (
                  <span className="absolute right-0 top-0 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                    Coming Soon
                  </span>
                ) : null}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {category.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
