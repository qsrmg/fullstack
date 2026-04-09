import { sqlVerificationLevels } from "./data";
import { SectionTitle } from "./SectionTitle";

export function SqlLevels() {
  return (
    <section className="section-container py-16" aria-labelledby="sql-levels">
      <SectionTitle
        id="sql-levels"
        eyebrow="Trust & Verification"
        title="SQL Verification Levels"
        description="Choose your credibility layer to unlock higher visibility, trust, and premium buyer confidence."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sqlVerificationLevels.map((level) => (
          <article
            key={level.level}
            className="glass-card rounded-2xl border border-slate-200/70 p-5 dark:border-slate-700/70"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{level.level}</h3>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:border-white/15 dark:bg-black/30 dark:text-slate-200">
                Trust {level.trustScore}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{level.benefits}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
