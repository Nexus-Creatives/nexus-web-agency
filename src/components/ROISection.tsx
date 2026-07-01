"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Percent, Users, DollarSign, ArrowRight } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ROISection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  // States for sliders
  const [visitors, setVisitors] = useState(5000);
  const [conversion, setConversion] = useState(1.2); // percentage
  const [orderValue, setOrderValue] = useState(150); // average dollar value

  // GSAP animated outputs
  const [currentRev, setCurrentRev] = useState(0);
  const [nexusRev, setNexusRev] = useState(0);
  const [extraRev, setExtraRev] = useState(0);

  // Keep tracking values for tweening
  const tweenValues = useRef({ current: 0, nexus: 0, extra: 0 });

  // Calculate base values
  const currentRevTarget = Math.round(visitors * (conversion / 100) * orderValue);
  
  // Nexus average conversion rate is typically 3x higher (min 3.5%)
  const nexusConversionRate = Math.max(conversion * 2.8, 3.5);
  const nexusRevTarget = Math.round(visitors * (nexusConversionRate / 100) * orderValue);
  const extraRevTarget = nexusRevTarget - currentRevTarget;

  useEffect(() => {
    // Setup ScrollTrigger for fade in
    const header = headerRef.current;
    const calc = calculatorRef.current;

    gsap.fromTo(
      header,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      calc,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: calc,
          start: "top 75%",
        },
      }
    );
  }, []);

  // Animate values when state targets change
  useEffect(() => {
    const targets = {
      current: currentRevTarget,
      nexus: nexusRevTarget,
      extra: extraRevTarget,
    };

    gsap.to(tweenValues.current, {
      current: targets.current,
      nexus: targets.nexus,
      extra: targets.extra,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        setCurrentRev(Math.round(tweenValues.current.current));
        setNexusRev(Math.round(tweenValues.current.nexus));
        setExtraRev(Math.round(tweenValues.current.extra));
      },
    });
  }, [visitors, conversion, orderValue, currentRevTarget, nexusRevTarget, extraRevTarget]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="growth"
      ref={containerRef}
      className="relative bg-zinc-950 py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
    >
      {/* Glow circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            ROI & Revenue Engine
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Stop Leaving Money On The Table.
          </h2>
          <p className="text-zinc-400 font-medium sm:text-lg">
            Most local and small business websites lose 98% of their traffic due to slow load times and confusing layouts. Slide the bars below to see how much revenue a high-converting website adds to your bottom line.
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          ref={calculatorRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Sliders Control Panel */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col gap-8 shadow-xl">
            <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4 flex items-center gap-2">
              <span>Adjust Your Current Metrics</span>
            </h3>

            {/* Slider 1: Visitors */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm font-semibold flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-purple-400" />
                  Monthly Traffic (Visitors)
                </span>
                <span className="bg-zinc-950 px-3 py-1 rounded-lg text-white font-black text-sm border border-white/5">
                  {visitors.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            {/* Slider 2: Conversion Rate */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm font-semibold flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-cyan-400" />
                  Current Website Conversion Rate
                </span>
                <span className="bg-zinc-950 px-3 py-1 rounded-lg text-white font-black text-sm border border-white/5">
                  {conversion}%
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="5"
                step="0.1"
                value={conversion}
                onChange={(e) => setConversion(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>0.2% (Low conversion)</span>
                <span>2.5% (Average)</span>
                <span>5.0% (Excellent templates)</span>
              </div>
            </div>

            {/* Slider 3: Average Order/Customer Value */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm font-semibold flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Average Value Per Sale / Service
                </span>
                <span className="bg-zinc-950 px-3 py-1 rounded-lg text-white font-black text-sm border border-white/5">
                  ${orderValue}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="2000"
                step="10"
                value={orderValue}
                onChange={(e) => setOrderValue(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$10</span>
                <span>$1,000</span>
                <span>$2,000+</span>
              </div>
            </div>
          </div>

          {/* Results Dynamic Board */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/20 border border-purple-500/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Ambient Purple glow in top corner */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-bold text-zinc-300 uppercase tracking-wider border-b border-white/5 pb-4">
                Monthly Yield Forecast
              </h3>

              {/* Current Revenue */}
              <div className="flex justify-between items-center py-2">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Current Website Yield</span>
                  <span className="text-xs text-zinc-400 font-medium">At {conversion}% conversion</span>
                </div>
                <div className="text-xl font-bold text-zinc-400 font-mono">
                  ${currentRev.toLocaleString()}
                </div>
              </div>

              {/* Nexus Revenue */}
              <div className="flex justify-between items-center py-3 bg-white/5 rounded-2xl px-4 border border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                    NEXUS Optimization
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">Estimated {nexusConversionRate.toFixed(1)}% conversion</span>
                </div>
                <div className="text-2xl font-black text-white font-mono shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  ${nexusRev.toLocaleString()}
                </div>
              </div>

              {/* Growth Profit Gain */}
              <div className="flex flex-col items-center gap-2 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-2xl py-6 px-4 mt-2">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
                  Net Increase In Revenue
                </span>
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-cyan-300 font-mono tracking-tight drop-shadow-[0_4px_10px_rgba(168,85,247,0.3)]">
                  +${extraRev.toLocaleString()}
                </div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Extra Profit / Month
                </span>
              </div>
            </div>

            {/* Hook Text & CTA */}
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                *Calculation is based on industry performance comparison between average templates (1.2% conversion rate) vs. Nexus optimized landing pages (3x higher client capture rates due to speed, custom UX design, and psychological copywriting).
              </p>
              <button
                onClick={() => handleScroll("contact")}
                className="w-full py-4 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                Claim Your Revenue Increase
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
