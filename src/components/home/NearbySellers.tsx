import { nearbySellers } from "./data";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";

export function NearbySellers() {
  return (
    <section id="nearby-sellers" className="section-container py-10">
      <SectionTitle
        eyebrow="Hyperlocal Commerce"
        title="Nearby Sellers"
        description="Find SQL-verified local shops and compare trusted service quality near your location."
      />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nearbySellers.map((shop) => (
          <article
            key={shop.name}
            className="glass-card overflow-hidden p-4"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={shop.image}
                alt={shop.name}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{shop.name}</h3>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
                {shop.sqlBadge}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{shop.distance}</p>
            <button className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100 dark:hover:text-cyan-300">
              Visit Shop
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
