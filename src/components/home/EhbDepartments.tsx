import { departments } from "./data";
import { SectionTitle } from "./SectionTitle";

export function EhbDepartments() {
  return (
    <section id="departments" className="section-container py-16">
      <SectionTitle
        eyebrow="EHB Departments"
        title="Powering Trust, Certification, and Management"
        description="Core systems that secure identity, validate skills, and streamline business operations."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {departments.map((department) => (
          <article key={department.code} className="glass-card p-6">
            <p className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-300">
              {department.code}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {department.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{department.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
