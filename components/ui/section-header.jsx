export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
