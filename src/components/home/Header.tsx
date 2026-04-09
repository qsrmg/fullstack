import { navigationItems } from "./data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 font-black text-white shadow-[0_8px_24px_rgba(35,186,255,0.45)]">
            E
          </div>
          <div>
            <p className="text-sm text-slate-600 dark:text-white/70">Global Platform</p>
            <p className="text-base font-bold tracking-wide text-slate-900 dark:text-white">
              EHB AI Marketplace
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <select
            className="hidden rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs text-slate-700 md:block dark:border-white/15 dark:bg-white/5 dark:text-white"
            aria-label="Select language"
            defaultValue="en"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>

          <button className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:text-white dark:hover:border-cyan-400/80 dark:hover:text-cyan-300">
            Login
          </button>
          <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(37,165,255,0.38)] transition hover:brightness-110">
            Register
          </button>
          <button
            className="grid size-9 place-items-center rounded-lg border border-slate-300 bg-white text-sm text-slate-700 transition hover:bg-slate-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/15"
            aria-label="Open dashboard"
          >
            ◉
          </button>
        </div>
      </div>
    </header>
  );
}
