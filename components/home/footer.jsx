import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { footerLinks } from "@/lib/home-data";

const social = [
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "LinkedIn", icon: Linkedin },
  { name: "YouTube", icon: Youtube }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-shell section-space">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
          <div>
            <p className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-bold text-white">
              EHB AI Marketplace
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
              Global platform unifying e-commerce, local services, franchise growth, jobs, and AI-based service discovery.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {social.map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href="#"
                  className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 hover:shadow-soft dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                  aria-label={name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-100">
                {section.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 transition hover:translate-x-0.5 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {new Date().getFullYear()} EHB AI Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
