"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { heroSlides, sqlLevels } from "@/lib/home-data";

const searchTypes = ["Products", "Services", "Companies", "Jobs"];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSearchType, setActiveSearchType] = useState(searchTypes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute inset-0 bg-hero-mesh" />
      <div className="section-shell section-space relative">
        <div className="grid gap-7 lg:grid-cols-[1.28fr_0.72fr] lg:items-center">
          <div className="surface-card rounded-[2rem] border-white/50 p-7 backdrop-blur-sm md:p-9 dark:border-slate-700/70">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              The Global AI-Powered Ecosystem
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex flex-wrap gap-2">
                {searchTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveSearchType(type)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      activeSearchType === type
                        ? "bg-slate-900 text-white shadow-soft dark:bg-cyan-500"
                        : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-soft transition focus-within:border-cyan-400 focus-within:shadow-card dark:border-slate-700 dark:bg-slate-950">
                  <Search className="h-5 w-5 text-cyan-500" />
                  <input
                    type="text"
                    placeholder={`Search ${activeSearchType}`}
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
                  />
                  <span className="hidden rounded-full bg-cyan-100 px-2 py-1 text-[10px] font-semibold uppercase text-cyan-700 sm:inline-block dark:bg-cyan-500/20 dark:text-cyan-300">
                    AI
                  </span>
                </label>
                <select
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 shadow-soft outline-none transition hover:-translate-y-0.5 hover:shadow-card dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  aria-label="SQL level filter"
                  defaultValue="Free"
                >
                  {sqlLevels.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="surface-card animate-float p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Current Focus</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {heroSlides[currentSlide].metric}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                AI discovery, SQL trust scoring, and global-ready franchise operations.
              </p>
            </div>
            <div className="surface-card p-5 sm:p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Slide Navigation
              </p>
              <div className="flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-10 bg-cyan-500 shadow-soft"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500"
                  }`}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
