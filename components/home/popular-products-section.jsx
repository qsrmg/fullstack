"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import { productGroups } from "@/lib/home-data";

export default function PopularProductsSection() {
  const [activeGroup, setActiveGroup] = useState(productGroups[0].title);

  const products = useMemo(
    () => productGroups.find((group) => group.title === activeGroup)?.items ?? [],
    [activeGroup]
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Popular Products"
        title="Fast-Moving Global Inventory"
        description="Scroll through trending products from trusted sellers and compare delivery speed instantly."
      />

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {productGroups.map((group) => (
          <button
            key={group.title}
            onClick={() => setActiveGroup(group.title)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeGroup === group.title
                ? "bg-cyan-500 text-white shadow-soft"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="scrollbar-thin flex snap-x gap-4 overflow-x-auto pb-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="min-w-[280px] snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900 md:min-w-[320px]"
          >
            <div className="relative h-40">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="320px" />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{product.name}</h3>
              <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{product.price}</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">Seller: {product.seller}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                  SQL {product.sql}
                </span>
                <span className="text-slate-500 dark:text-slate-300">{product.delivery}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
