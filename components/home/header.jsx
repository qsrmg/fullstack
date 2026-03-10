import { Globe, LayoutDashboard, Menu } from "lucide-react";
import { navItems } from "@/lib/home-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-200 p-2 text-slate-500 md:hidden dark:border-slate-700 dark:text-slate-300">
            <Menu className="h-5 w-5" />
          </button>
          <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-sm font-bold text-white shadow-soft">
            EHB
          </div>
          <p className="hidden text-sm font-semibold text-slate-900 dark:text-white sm:block">
            AI Marketplace
          </p>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-lg border border-slate-200 px-2 py-2 text-xs text-slate-500 sm:flex dark:border-slate-700 dark:text-slate-300">
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
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-700 dark:text-slate-200">
            Login
          </button>
          <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
            Register
          </button>
          <button className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-700 dark:text-slate-200">
            <LayoutDashboard className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
