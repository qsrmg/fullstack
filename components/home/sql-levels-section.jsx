import SectionHeader from "@/components/ui/section-header";
import { sqlLevelDetails } from "@/lib/home-data";

export default function SqlLevelsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="SQL Verification Levels"
        title="Transparent Trust Scoring for Every Participant"
        description="From Free to VIP, each SQL level defines stronger credibility, visibility, and buyer confidence."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sqlLevelDetails.map((level) => (
          <article
            key={level.level}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{level.level}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{level.benefits}</p>
            <p className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              Trust Score: {level.score}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
