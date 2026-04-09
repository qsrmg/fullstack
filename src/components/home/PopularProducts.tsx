import Image from "next/image";
import { popularProductCategories } from "./data";
import { SectionTitle } from "./SectionTitle";

const badgeColor: Record<string, string> = {
  Free: "bg-slate-500",
  Basic: "bg-indigo-500",
  Silver: "bg-slate-400 text-slate-900",
  Gold: "bg-amber-400 text-slate-900",
  Platinum: "bg-cyan-500",
  VIP: "bg-fuchsia-500",
};

export function PopularProducts() {
  return (
    <section id="popular-products" className="section-container py-16">
      <SectionTitle
        id="popular-products-title"
        eyebrow="Popular Products"
        title="Trending Items Across Categories"
        description="Shop frequently used items, grocery essentials, and new market products with trusted delivery."
      />
      <div className="space-y-8">
        {popularProductCategories.map((category) => (
          <div key={category.category}>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {category.category}
            </h3>
            <div className="flex snap-x gap-4 overflow-x-auto pb-2">
              {category.products.map((product) => (
                <article
                  key={product.name}
                  className="glass-card min-w-[260px] max-w-[260px] snap-start p-3"
                >
                  <div className="relative h-36 overflow-hidden rounded-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="260px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">{product.name}</h4>
                    <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {product.price}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                      <span>{product.seller}</span>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold text-white ${
                          badgeColor[product.sqlLevel] ?? "bg-slate-500"
                        }`}
                      >
                        {product.sqlLevel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Delivery: {product.deliveryTime}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
