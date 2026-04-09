const footerGroups = [
  {
    title: "Company",
    links: ["About EHB", "Marketplace", "Departments", "Careers"]
  },
  {
    title: "Franchise Program",
    links: ["Sub Franchise", "Master Franchise", "Corporate Franchise", "Partner Support"]
  },
  {
    title: "Support Center",
    links: ["Help Desk", "Order Support", "Seller Support", "Service Requests"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookies", "Compliance"]
  }
];

const socialLinks = ["LinkedIn", "X / Twitter", "YouTube", "Instagram", "Facebook"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-sky-400">EHB AI Marketplace</p>
            <h2 className="text-2xl font-semibold text-slate-100">Global Commerce. AI Discovery.</h2>
            <p className="mt-4 text-sm text-slate-300">
              One ecosystem for products, services, jobs, franchises, and trusted verification.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-slate-100">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-300 transition hover:text-sky-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} EHB AI Marketplace. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-300 hover:text-sky-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
