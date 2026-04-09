type SectionTitleProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ id, eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
