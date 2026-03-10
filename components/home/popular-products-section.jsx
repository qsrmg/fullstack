"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";

export default function PopularProductsSection({ productGroups = [] }) {
  const [activeGroup, setActiveGroup] = useState(productGroups[0]?.title ?? "");

  useEffect(() => {
    if (!productGroups.length) {
      setActiveGroup("");
      return;
    }

    if (!productGroups.some((group) => group.title === activeGroup)) {
      setActiveGroup(productGroups[0].title);
    }
  }, [productGroups, activeGroup]);

  const products = useMemo(
    () => productGroups.find((group) => group.title === activeGroup)?.items ?? [],
    [activeGroup, productGroups]
  );

  return (
    <section className="section-shell section-space">
      <SectionHeader
        eyebrow="Popular Products"
        title="Fast-Moving Global Inventory"
        description="Scroll through trending products from trusted sellers and compare delivery speed instantly."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {productGroups.map((group) => (
          <button
            key={group.title}
            onClick={() => setActiveGroup(group.title)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              activeGroup === group.title
                ? "bg-cyan-500 text-white shadow-soft"
                : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-soft dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="surface-card surface-card-hover group min-w-[280px] snap-start overflow-hidden md:min-w-[320px]"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="320px"
              />
            </div>
            <div className="space-y-2 p-5">
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
      {productGroups.length === 0 ? (
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-300">
          No product groups available right now.
        </p>
      ) : null}
    </section>
  );
}
