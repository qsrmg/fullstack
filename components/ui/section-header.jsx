export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
