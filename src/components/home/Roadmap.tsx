import { roadmapItems } from "./data";
import { SectionTitle } from "./SectionTitle";

export function Roadmap() {
  return (
    <section id="roadmap" className="section-container py-16">
      <div>
        <SectionTitle
          eyebrow="Roadmap"
          title="Platform Roadmap"
          description="A clear growth path toward a truly global AI-powered marketplace ecosystem."
        />

        <div className="relative mt-8 rounded-3xl border border-slate-200/70 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="absolute left-7 top-8 h-[calc(100%-4rem)] w-[2px] bg-gradient-to-b from-sky-400/80 via-indigo-400/60 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-6 md:space-y-8">
            {roadmapItems.map((milestone, idx) => (
              <article
                key={milestone.title}
                className={`relative flex w-full items-start gap-4 md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 mt-1.5 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(14,165,233,0.2)] md:absolute md:left-1/2 md:-translate-x-1/2" />
                <div className="ml-2 flex-1 rounded-2xl border border-slate-200/70 bg-white/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 dark:border-white/10 dark:bg-white/10 md:ml-0 md:max-w-[46%]">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white/90">{milestone.title}</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
