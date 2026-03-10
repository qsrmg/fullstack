import SectionHeader from "@/components/ui/section-header";
import { departments } from "@/lib/home-data";

export default function DepartmentsSection() {
  return (
    <section className="section-shell section-space">
      <SectionHeader
        eyebrow="EHB Departments"
        title="Specialized Systems for Trust, Skills, and Operations"
        description="Each department is designed to strengthen marketplace security, capability, and efficiency."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <article
            key={department.code}
            className="surface-card surface-card-hover group p-6 md:p-7"
          >
            <div className="inline-flex rounded-xl bg-cyan-100 px-3 py-2 text-lg font-bold text-cyan-700 transition group-hover:scale-105 dark:bg-cyan-400/15 dark:text-cyan-300">
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
