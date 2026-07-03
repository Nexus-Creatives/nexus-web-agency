"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Palette, Zap, FileText, Search } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES_DATA = [
  {
    icon: Palette,
    title: "High-Converting UX/UI",
    description:
      "Stunning layouts custom-designed for your brand. We map user journeys to lead captures, ensuring your site looks gorgeous and acts as a 24/7 client booking machine.",
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: Zap,
    title: "Next-Gen Performance",
    description:
      "Outdated sites bleed visitors. We write clean, optimized code using Next.js to deliver sub-0.5s loading speeds. Get perfect Core Web Vitals ratings that boost your SEO.",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: FileText,
    title: "Psychological Copywriting",
    description:
      "Beautiful code is useless without persuasive words. We write compelling, client-focused copy that highlights your unique value and eliminates visitor hesitation.",
    color: "from-indigo-500 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Search,
    title: "Search Engine Dominance",
    description:
      "Be seen where your customers look. We integrate semantic schemas, responsive indexing, and local SEO optimizations, ranking your business ahead of competitors.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards = cardsRef.current?.querySelectorAll(".service-card");

    if (!header || !cards) return;

    // Header reveal
    gsap.fromTo(
      header,
      { opacity: 0, y: 40 },
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

    // Cards reveal stagger
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        },
      }
    );

    // Interactive card mouse movement (glowing cursor border effect)
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const cardElements = document.querySelectorAll(".service-card") as NodeListOf<HTMLDivElement>;
    cardElements.forEach((card) => {
      card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
    });

    return () => {
      cardElements.forEach((card) => {
        card.removeEventListener("mousemove", (e) => handleMouseMove(e, card));
      });
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-zinc-950 py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/4 w-125 h-125 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Designed To Attract. Built To Perform.
          </h2>
          <p className="text-zinc-400 font-medium sm:text-lg">
            We don&apos;t just build sites that look pretty. We engineer interactive digital solutions with one single goal: making your business more profitable.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative p-8 sm:p-10 rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden backdrop-blur-sm shadow-xl flex flex-col justify-between"
                style={{
                  minHeight: "320px",
                  // Set up the coordinates variables
                  "--mouse-x": "0px",
                  "--mouse-y": "0px",
                } as React.CSSProperties}
              >
                {/* Radial Glow Overlay following Cursor */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${service.glowColor}, transparent 80%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-6">
                  {/* Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-tr ${service.color} flex items-center justify-center shadow-lg shadow-black/50 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-zinc-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-medium text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Subtle border shine effect */}
                <div className="absolute inset-0 border border-transparent rounded-3xl pointer-events-none z-10 group-hover:border-white/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
