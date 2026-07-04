"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkMockupPreview from "@/components/WorkMockupPreview";
import { WORK_SAMPLES } from "@/lib/work";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const grid = gridRef.current;

    if (hero) {
      const children = hero.querySelectorAll(".animate-hero");
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    if (grid) {
      const cards = grid.querySelectorAll(".work-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
        }
      );
    }

    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const cardElements = document.querySelectorAll(
      ".work-card"
    ) as NodeListOf<HTMLDivElement>;

    cardElements.forEach((card) => {
      card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
    });

    return () => {
      cardElements.forEach((card) => {
        card.removeEventListener("mousemove", (e) => handleMouseMove(e, card));
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const featured = WORK_SAMPLES.find((s) => s.featured) ?? WORK_SAMPLES[0];
  const rest = WORK_SAMPLES.filter((s) => s.slug !== featured.slug);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main ref={containerRef} className="flex-1 w-full bg-zinc-950 pt-28">
        {/* Section 1: Hero */}
        <section
          id="hero"
          ref={heroRef}
          className="relative py-20 lg:py-28 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5 flex flex-col items-center justify-center text-center"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <div className="animate-hero flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Selected Work
            </div>
            <h1 className="animate-hero font-sans font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
              Sites We&apos;ve Engineered
            </h1>
            <p className="animate-hero text-zinc-400 font-medium sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              A look at real NEXUS builds across industries — each one designed
              to load fast, look premium, and convert visitors into paying
              customers.
            </p>
            <div className="animate-hero flex flex-wrap gap-4 justify-center mt-4">
              <button
                onClick={() => handleScrollTo("work-grid")}
                className="px-6 py-3.5 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg shadow-black/50 cursor-pointer flex items-center gap-2"
              >
                View The Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Work Grid */}
        <section
          id="work-grid"
          ref={gridRef}
          className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6 lg:gap-8">
            {/* Featured sample - full width */}
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card group relative rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/30 overflow-hidden backdrop-blur-sm shadow-xl transition-transform duration-300 hover:-translate-y-1 grid grid-cols-1 lg:grid-cols-2"
              style={{ "--mouse-x": "0px", "--mouse-y": "0px" } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), ${featured.glowColor}, transparent 80%)`,
                }}
              />

              <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-between gap-6 order-2 lg:order-1">
                <div className="flex flex-col gap-4">
                  <div
                    className={`self-start flex items-center gap-2 px-3 py-1 rounded-full border ${featured.accentBorder} ${featured.accentBg} ${featured.accentText} font-semibold text-xs tracking-wider uppercase`}
                  >
                    <featured.icon className="w-3.5 h-3.5" />
                    {featured.industry}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight group-hover:text-purple-200 transition-colors">
                    {featured.name}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-medium max-w-md">
                    {featured.tagline}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {featured.stat}
                    <span className="text-zinc-500 font-medium text-xs">
                      {featured.statLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    Visit live site
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 p-4 sm:p-6 flex items-center">
                <div className="w-full aspect-[16/11]">
                  <WorkMockupPreview sample={featured} />
                </div>
              </div>
            </a>

            {/* Remaining samples - grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {rest.map((sample) => (
                <a
                  key={sample.slug}
                  href={sample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card group relative rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-white/10 hover:bg-zinc-900/30 overflow-hidden backdrop-blur-sm shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-1"
                  style={{ "--mouse-x": "0px", "--mouse-y": "0px" } as React.CSSProperties}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                      background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), ${sample.glowColor}, transparent 80%)`,
                    }}
                  />

                  <div className="relative z-10 p-4 sm:p-5">
                    <div className="w-full aspect-[16/10]">
                      <WorkMockupPreview sample={sample} />
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col gap-3 px-5 sm:px-6 pb-6 flex-1">
                    <div
                      className={`self-start flex items-center gap-2 px-2.5 py-1 rounded-full border ${sample.accentBorder} ${sample.accentBg} ${sample.accentText} font-semibold text-[10px] tracking-wider uppercase`}
                    >
                      <sample.icon className="w-3 h-3" />
                      {sample.industry}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {sample.name}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium flex-1">
                      {sample.tagline}
                    </p>

                    <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {sample.stat}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-white">
                        Visit site
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-transparent rounded-3xl pointer-events-none z-10 group-hover:border-white/10 transition-colors duration-500" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Final CTA & Contact */}
        <section className="relative bg-zinc-950 pt-20 overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-6 mb-12">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/20 border border-purple-500/20 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Want Results Like These?
              </h2>
              <p className="text-zinc-400 font-medium max-w-xl text-sm sm:text-base leading-relaxed">
                Every project above started as a free consultation. Let&apos;s
                talk about what a custom-engineered site could do for your
                business.
              </p>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer flex items-center gap-2"
              >
                Claim Your Free Quote
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
