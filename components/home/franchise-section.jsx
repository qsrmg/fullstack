import SectionHeader from "@/components/ui/section-header";
import { franchiseOptions } from "@/lib/home-data";

export default function FranchiseSection() {
  return (
    <section className="bg-slate-50/70 dark:bg-slate-900/40">
      <div className="section-shell section-space">
        <SectionHeader
          eyebrow="Franchise Opportunity"
          title="Grow with EHB Global Franchise System"
          description="Select the right level and unlock region-based growth powered by AI and trusted verification."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {franchiseOptions.map((option) => (
            <article
              key={option.title}
              className="surface-card surface-card-hover group p-6 md:p-7"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{option.title}</h3>
              <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">{option.subtitle}</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="rounded-xl bg-slate-100 px-3 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span className="font-semibold">Investment:</span> {option.investment}
                </p>
                <p className="rounded-xl bg-slate-100 px-3 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span className="font-semibold">Expected Income:</span> {option.income}
                </p>
              </div>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
                Apply Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
