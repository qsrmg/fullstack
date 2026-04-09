import { franchiseOpportunities } from "./data";
import { SectionTitle } from "./SectionTitle";

export function FranchiseOpportunities() {
  return (
    <section id="franchise" className="section-container py-16">
      <SectionTitle
        eyebrow="Franchise Network"
        title="Franchise Opportunity"
        description="Pick a franchise model that fits your market scope and investment capacity."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {franchiseOpportunities.map((card) => (
          <article
            key={card.title}
            className="card-3d rounded-3xl border border-slate-200/70 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/70"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{card.subtitle}</p>
            <div className="mt-5 space-y-4 text-sm">
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">Investment Range:</span>{" "}
                <span className="text-slate-600 dark:text-slate-300">{card.investmentRange}</span>
              </p>
              <p>
                <span className="font-semibold text-slate-900 dark:text-white">Expected Income:</span>{" "}
                <span className="text-slate-600 dark:text-slate-300">{card.expectedIncome}</span>
              </p>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Apply Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
