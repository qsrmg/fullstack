import SectionHeader from "@/components/ui/section-header";
import { roadmap } from "@/lib/home-data";

export default function RoadmapSection() {
  return (
    <section className="bg-slate-50/70 py-14 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Roadmap"
          title="Future-Forward Execution Timeline"
          description="Strategic rollout from launch to global payment and blockchain-enabled trust infrastructure."
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-3 top-0 h-full w-px bg-slate-300 dark:bg-slate-700 md:left-1/2" />
          <div className="space-y-5">
            {roadmap.map((item, index) => (
              <div
                key={item}
                className={`relative flex md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <span className="absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-white bg-cyan-500 dark:border-slate-900 md:left-1/2 md:-translate-x-1/2" />
                <article className="ml-12 w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:ml-0 md:w-[46%]">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Phase {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{item}</h3>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
