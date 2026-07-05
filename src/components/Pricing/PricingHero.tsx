"use client";

import { ArrowRight, FolderOpen } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PricingHero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".pricing-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      });

      gsap.from(".pricing-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.15,
      });

      gsap.from(".pricing-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
      });

      gsap.from(".pricing-buttons", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.45,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative overflow-hidden px-6 pt-40 pb-28"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl text-center">

        {/* Badge */}
        <div className="pricing-badge inline-flex items-center rounded-full border border-blue-500/30 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <span className="text-sm font-medium text-blue-300">
            Transparent Pricing
          </span>
        </div>

        {/* Title */}
        <h1 className="pricing-title mt-8 break-words text-4xl font-black leading-tight sm:text-5xl md:text-7xl">

          Simple Pricing.

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Custom Solutions.
          </span>

        </h1>

        {/* Subtitle */}
        <p className="pricing-subtitle mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
          Every business has different goals and requirements.
          Our packages provide a starting point while every project
          is customized specifically for your business.
        </p>

        {/* Buttons */}
        <div className="pricing-buttons mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,.45)]">

            Get Free Quote

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </button>

          <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10">

            View Portfolio

            <FolderOpen
              size={18}
              className="transition-transform group-hover:rotate-6"
            />

          </button>

        </div>

        {/* Small Note */}
        <p className="mt-10 text-sm text-gray-500">
          Starting prices shown below • Final quotation depends on project scope.
        </p>

      </div>
    </section>
  );
}