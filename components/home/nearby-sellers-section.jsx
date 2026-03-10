import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";

export default function NearbySellersSection({ sellers = [] }) {
  return (
    <section className="bg-slate-50/70 dark:bg-slate-900/40">
      <div className="section-shell section-space">
        <SectionHeader
          eyebrow="Nearby Sellers"
          title="Trusted Local Stores Around You"
          description="Discover nearby verified shops with transparent SQL trust levels."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {sellers.map((shop) => (
            <article
              key={shop.name}
              className="surface-card surface-card-hover group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-5 md:p-6">
                <h3 className="text-lg font-semibold leading-snug text-slate-900 dark:text-white">{shop.name}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 font-semibold text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                    SQL {shop.sql}
                  </span>
                  <span className="text-slate-500 dark:text-slate-300">{shop.distance}</span>
                </div>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-soft dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                  Visit Shop
                </button>
              </div>
            </article>
          ))}
        </div>
        {sellers.length === 0 ? (
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-300">
            No nearby sellers found at the moment.
          </p>
        ) : null}
      </div>
    </section>
  );
}
