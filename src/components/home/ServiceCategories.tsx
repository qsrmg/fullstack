import { serviceCategories } from "./data";
import { SectionTitle } from "./SectionTitle";

export function ServiceCategories() {
  return (
    <section id="categories" className="section-container py-16">
      <SectionTitle
        eyebrow="Core Offerings"
        title="Main Service Categories"
        description="Discover e-commerce, AI, services, and community tools through a unified global platform."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((item) => (
          <article
            key={item.title}
            className="card-3d relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-slate-900"
          >
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
            {item.comingSoon && (
              <span className="absolute right-4 top-4 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-white">
                Coming Soon
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
