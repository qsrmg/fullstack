import SectionHeader from "@/components/ui/section-header";
import { departments } from "@/lib/home-data";

export default function DepartmentsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="EHB Departments"
        title="Specialized Systems for Trust, Skills, and Operations"
        description="Each department is designed to strengthen marketplace security, capability, and efficiency."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {departments.map((department) => (
          <article
            key={department.code}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="inline-flex rounded-xl bg-cyan-100 px-3 py-2 text-lg font-bold text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
              {department.code}
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{department.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {department.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
