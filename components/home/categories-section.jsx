import { Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";

export default function CategoriesSection({ categories = [] }) {
  return (
    <section className="section-shell section-space">
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
              className="surface-card surface-card-hover group relative overflow-hidden p-6 md:p-7"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-100 blur-2xl transition group-hover:bg-cyan-200 dark:bg-cyan-900/30 dark:group-hover:bg-cyan-800/40" />
              <div className="relative">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
                  {category.tag}
                </p>
                {isComingSoon ? (
                  <span className="absolute right-0 top-0 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                    Coming Soon
                  </span>
                ) : null}
                <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-white">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {category.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      {categories.length === 0 ? (
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-300">
          No categories available right now.
        </p>
      ) : null}
    </section>
  );
}
