"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, CheckCircle2, XCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Portfolio projects
// NOTE: "stat" values below are placeholders — swap in your real results
// once you have them (or remove the stat badge if you'd rather not show one yet).
const INDUSTRIES = [
  {
    id: "salon",
    name: "Celebrity Hair Salon",
    beforeTitle: "Celebrity Hair Salon - Home",
    beforeDesc:
      "Walk-ins welcome. We offer haircuts, color, and styling for men and women. Call the shop to book or ask about our monthly specials.",
    afterImage: "/samples/salon1.png",
    afterAlt: "Celebrity Hair Salon redesigned website screenshot",
  },
  {
    id: "volt",
    name: "Volt.",
    beforeTitle: "Volt Fitness Training",
    beforeDesc:
      "Personal training and group classes. Flexible schedule, all fitness levels welcome. Contact us by phone or stop by the gym to sign up.",
    afterImage: "/samples/volt3.png",
    afterAlt: "Volt. redesigned website screenshot",
  },
  {
    id: "grooming",
    name: "Bantay Grooming",
    beforeTitle: "Bantay Pet Grooming Services",
    beforeDesc:
      "Dog and cat grooming, bathing, and nail trims. Drop off your pet anytime during business hours. Call ahead for large breeds.",
    afterImage: "/samples/petgrooming1.png",
    afterAlt: "Bantay Grooming redesigned website screenshot",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 to 100)
  const [containerWidth, setContainerWidth] = useState(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const header = headerRef.current;
    const showcase = showcaseRef.current;

    if (!header || !showcase) return;

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

    gsap.fromTo(
      showcase,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: showcase,
          start: "top 75%",
        },
      }
    );
  }, []);

  // Track the slider container's actual pixel width so the "after" image
  // stays full-size and gets *revealed* as you drag, instead of squishing
  // to fit the shrinking clip width.
  useEffect(() => {
    const el = sliderContainerRef.current;
    if (!el) return;

    const updateWidth = () => setContainerWidth(el.getBoundingClientRect().width);
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  // Handle slide movement
  const handleMove = (clientX: number) => {
    const container = sliderContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const project = INDUSTRIES[activeTab];

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="relative bg-zinc-950 py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Before & After Showcase
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            See The Difference.
          </h2>
          <p className="text-zinc-400 font-medium sm:text-lg">
            Drag the slider below to compare standard templates with a custom-engineered Nexus design. We build sites that convey credibility, load in a flash, and capture buyers.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {INDUSTRIES.map((ind, index) => (
            <button
              key={ind.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPos(50);
              }}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTab === index
                  ? "bg-white text-black shadow-lg"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Interactive Slider Showcase Container */}
        <div ref={showcaseRef} className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div
            id="slider-container"
            ref={sliderContainerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] border border-white/10 rounded-3xl overflow-hidden bg-zinc-950 select-none shadow-2xl cursor-ew-resize"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onTouchStart={onMouseDown}
            onTouchEnd={onMouseUp}
            onMouseDown={onMouseDown}
          >
            {/* 1. BEFORE PANEL (Outdated Design) */}
            <div className="absolute inset-0 w-full h-full bg-[#f4f4f4] text-zinc-800 p-4 sm:p-8 flex flex-col justify-between font-serif">
              {/* Bad Header */}
              <div className="border-b-2 border-zinc-400 pb-3 flex justify-between items-center">
                <span className="font-extrabold text-sm sm:text-lg text-zinc-900 tracking-tight">
                  {project.beforeTitle.split(" - ")[0]}
                </span>
                <span className="text-[10px] text-rose-600 bg-rose-100 border border-rose-300 font-sans px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> Unsecured Site (Slow)
                </span>
              </div>

              {/* Bad Main */}
              <div className="flex-1 flex flex-col gap-4 py-4 sm:py-8 max-w-xl">
                <h1 className="text-xl sm:text-3xl font-black text-black leading-tight">
                  Welcome to {project.beforeTitle}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans font-medium">
                  {project.beforeDesc}
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-zinc-300 border border-zinc-400 text-zinc-700 text-xs rounded hover:bg-zinc-200 font-sans">
                    Read More
                  </button>
                  <button className="px-4 py-2 bg-red-600 border border-red-700 text-white font-bold text-xs rounded hover:bg-red-500 font-sans">
                    Contact Us!
                  </button>
                </div>
              </div>

              {/* Bad Footer */}
              <div className="border-t border-zinc-300 pt-3 text-[10px] text-zinc-500 text-center font-sans">
                Copyright © 2011 {project.beforeTitle.split(" - ")[0]}. All Rights Reserved.
              </div>
            </div>

            {/* 2. AFTER PANEL (Real NEXUS Screenshot - Clipped by Slider) */}
            <div
  className="absolute inset-0 w-full h-full select-none bg-zinc-950"
  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
>
  <Image
    src={project.afterImage}
    alt={project.afterAlt}
    fill
    sizes="100vw"
    className="object-cover object-top"
    priority={activeTab === 0}
  />
  <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
</div>

            {/* 3. DRAGGING HANDLE BAR */}
            <div
              className="absolute inset-y-0 w-1 bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Circular knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black border-4 border-zinc-950 flex items-center justify-center shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-800"
                >
                  <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-zinc-500 font-medium">
            💡 Drag the slider handle left/right to view the direct transformation.
          </div>

          <a
            href="/work"
            className="self-center flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors duration-300"
          >
            View Full Nexus Concepts
          </a>
        </div>
      </div>
    </section>
  );
}