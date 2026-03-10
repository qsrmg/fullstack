"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { heroSlides, sqlLevels } from "@/lib/home-data";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute inset-0 bg-hero-mesh" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="rounded-3xl border border-white/50 bg-white/75 p-7 shadow-card backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/70">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              The Global AI-Powered Ecosystem
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-soft dark:border-slate-700 dark:bg-slate-950">
                <Search className="h-5 w-5 text-cyan-500" />
                <input
                  type="text"
                  placeholder="Search Products, Services, Companies, Jobs"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
                />
              </label>
              <select
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-soft outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                aria-label="SQL level filter"
                defaultValue="Free"
              >
                {sqlLevels.map((level) => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="animate-float rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-card dark:border-slate-700 dark:bg-slate-900/80">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Current Focus</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {heroSlides[currentSlide].metric}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                AI discovery, SQL trust scoring, and global-ready franchise operations.
              </p>
            </div>
            <div className="flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-10 bg-cyan-500"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500"
                  }`}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
