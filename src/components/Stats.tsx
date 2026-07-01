"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertCircle, ShieldAlert, Award, PhoneOff } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS_DATA = [
  {
    icon: ShieldAlert,
    targetNum: 94,
    suffix: "%",
    label: "Design First Impressions",
    description: "of web visitors judge your company's credibility solely on your website design first impressions.",
  },
  {
    icon: AlertCircle,
    targetNum: 88,
    suffix: "%",
    label: "Lost Client Retention",
    description: "of online consumers will immediately leave and never return to a website after a single bad user experience.",
  },
  {
    icon: Award,
    targetNum: 75,
    suffix: "%",
    label: "Credibility Judgment",
    description: "of consumers admit to making judgments on a company's overall credibility based on its website appearance.",
  },
  {
    icon: PhoneOff,
    targetNum: 5,
    suffix: "x",
    label: "Mobile Exit Probability",
    description: "higher likelihood that a mobile visitor will abandon a site if it is not optimized or configured correctly.",
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const gridItems = gridRef.current?.querySelectorAll(".stat-card");

    if (!header || !gridItems) return;

    // Header reveal
    gsap.fromTo(
      header,
      { opacity: 0, y: 30 },
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

    // Staggered reveal for stat cards
    gsap.fromTo(
      gridItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        },
      }
    );

    // Animate the numbers counting up
    const numberElements = document.querySelectorAll(".stat-number");
    numberElements.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      
      const countObj = { val: 0 };
      gsap.to(countObj, {
        val: target,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        onUpdate: () => {
          el.textContent = Math.floor(countObj.val).toString();
        },
      });
    });
  }, []);

  return (
    <section
      id="stats"
      ref={containerRef}
      className="relative bg-zinc-950 py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
            Hard Truths & Analytics
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            An Outdated Website is Costing You Customers.
          </h2>
          <p className="text-zinc-400 font-medium sm:text-lg">
            In today's digital economy, your website is your virtual storefront. A poor website doesn't just look bad—it actively pushes qualified leads straight into the arms of your competitors.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/10 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Heading Label */}
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    {stat.label}
                  </h3>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  {/* Counting number */}
                  <div className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight flex items-baseline gap-0.5">
                    <span
                      className="stat-number bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300"
                      data-target={stat.targetNum}
                    >
                      0
                    </span>
                    <span className="text-purple-400">{stat.suffix}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
