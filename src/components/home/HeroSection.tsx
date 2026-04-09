"use client";

import { useMemo, useState } from "react";
import { heroSlides, sqlFilterLevels } from "./data";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [query, setQuery] = useState("");
  const [sqlLevel, setSqlLevel] = useState("Free");

  const slide = useMemo(() => heroSlides[activeSlide], [activeSlide]);

  return (
    <section className="section-container pt-8" aria-labelledby="hero-title">
      <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-[#060b18] via-[#0d1f43] to-[#151a4f] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.55)] sm:p-8 lg:p-12">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">EHB Global Platform</p>
            <h1 id="hero-title" className="mt-2 max-w-3xl text-3xl font-bold text-white sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">{slide.description}</p>
          </div>
          <div className="hidden rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-100 sm:block">
            Slide {activeSlide + 1} / {heroSlides.length}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                index === activeSlide
                  ? "border-cyan-300 bg-cyan-300/15 text-white shadow-lg shadow-cyan-500/20"
                  : "border-white/20 bg-white/5 text-slate-200 hover:border-cyan-300/50"
              }`}
              aria-label={`Show slide: ${item.title}`}
            >
              <p className="text-xs uppercase tracking-wide text-cyan-100/80">Slide {index + 1}</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">{item.title}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="market-search">
              Search products, services, companies, and jobs
            </label>
            <input
              id="market-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Products, Services, Companies, Jobs"
              className="h-12 w-full rounded-xl border border-white/20 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-slate-300 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40"
            />
            <div className="grid grid-cols-[1fr_auto] gap-3">
              <select
                value={sqlLevel}
                onChange={(event) => setSqlLevel(event.target.value)}
                aria-label="SQL verification level"
                className="h-12 rounded-xl border border-white/20 bg-black/20 px-3 text-sm text-white outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40"
              >
                {sqlFilterLevels.map((level) => (
                  <option key={level} value={level} className="text-slate-900">
                    {level}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="h-12 rounded-xl bg-cyan-400 px-5 text-sm font-semibold text-slate-900 transition hover:brightness-110"
              >
                AI Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
