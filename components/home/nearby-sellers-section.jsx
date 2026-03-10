import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import { nearbySellers } from "@/lib/home-data";

export default function NearbySellersSection() {
  return (
    <section className="bg-slate-50/70 py-14 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nearby Sellers"
          title="Trusted Local Stores Around You"
          description="Discover nearby verified shops with transparent SQL trust levels."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {nearbySellers.map((shop) => (
            <article
              key={shop.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-card dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-44">
                <Image src={shop.image} alt={shop.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{shop.name}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 font-semibold text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                    SQL {shop.sql}
                  </span>
                  <span className="text-slate-500 dark:text-slate-300">{shop.distance}</span>
                </div>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                  Visit Shop
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
