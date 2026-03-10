import { Globe, LayoutDashboard, Menu } from "lucide-react";
import { navItems } from "@/lib/home-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
      <div className="section-shell flex items-center justify-between gap-4 py-3.5">
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:border-cyan-300 hover:text-cyan-600 md:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:text-cyan-300">
            <Menu className="h-5 w-5" />
          </button>
          <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-sm font-bold text-white shadow-soft">
            EHB
          </div>
          <p className="hidden text-sm font-semibold tracking-wide text-slate-900 dark:text-white sm:block">
            AI Marketplace
          </p>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs text-slate-500 shadow-soft sm:flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <Globe className="h-3.5 w-3.5" />
            <select
              className="bg-transparent outline-none"
              defaultValue="English"
              aria-label="Select language"
            >
              <option>English</option>
              <option>Arabic</option>
              <option>Spanish</option>
            </select>
          </label>
          <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-700 dark:text-slate-200">
            Login
          </button>
          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
            Register
          </button>
          <button className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-700 dark:text-slate-200">
            <LayoutDashboard className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
