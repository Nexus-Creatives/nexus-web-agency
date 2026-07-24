"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles} from "lucide-react";
import PlexusCanvas from "./PlexusCanvas";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const glassCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const desc = descRef.current;
    const buttons = buttonsRef.current;
    const tag = tagRef.current;
    const trust = trustRef.current;
    const glassCard = glassCardRef.current;

    if (!containerRef.current) return;

    // Split text effect for title (simulated by words)
    if (title) {
      const words = title.innerText.split(" ");
      title.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden align-top"><span class="title-word inline-block translate-y-full">${word}</span></span>`
        )
        .join(" ");
    }

    const titleWords = title?.querySelectorAll(".title-word");

    // Initial states
    gsap.set(tag, { opacity: 0, y: -20 });
    gsap.set(desc, { opacity: 0, y: 30 });
    gsap.set(buttons, { opacity: 0, y: 30 });
    gsap.set(trust, { opacity: 0 });
    gsap.set(glassCard, { opacity: 0, rotateX: 15, rotateY: -15, scale: 0.8, y: 50 });

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(tag, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
      .to(
        titleWords || [],
        {
          y: 0,
          stagger: 0.05,
          duration: 1.0,
        },
        "-=0.5"
      )
      .to(
        desc,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        buttons,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        glassCard,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
        },
        "-=0.8"
      )
      .to(
        trust,
        {
          opacity: 1,
          duration: 1,
        },
        "-=0.6"
      );

    // Parallax & Float Animation for the glass card
    if (glassCard) {
      // Gentle floating animation
      gsap.to(glassCard, {
        y: "-=15",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Mouse interactive tilt on the hero container
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const xPercent = (clientX / w - 0.5) * 2; // -1 to 1
        const yPercent = (clientY / h - 0.5) * 2; // -1 to 1

        gsap.to(glassCard, {
          rotateY: xPercent * 25 - 15,
          rotateX: -yPercent * 25 + 15,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden pt-24 pb-12 px-6 sm:px-12 md:px-24"
      style={{ perspective: "1000px" }}
    >
      {/* Background Canvas */}
      <PlexusCanvas />

      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 sm:w-125 sm:h-125 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-87.5 h-87.5 sm:w-125 sm:h-125 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          
          {/* Badge */}
          <div
            ref={tagRef}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Website Development Agency
          </div>

          {/* Heading */}
          <h1
          ref={titleRef}
          className="font-sans font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] max-w-2xl mx-auto md:mx-0 text-center md:text-left"
        >
          The Future of Web Design Is Here. Powered by AI.
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl font-medium leading-relaxed"
          >
            Looking to grow your business? Outdated templates lose sales. We design custom, high-speed websites — engineered with behavioral psychology and sharpened by AI-driven development — to unlock continuous cash flow for your business.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button
              onClick={() => handleScroll("contact")}
              className="px-8 py-4 rounded-xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
            >
              Get More Customers Now
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right: Glassmorphic Demo Interface (Interactive Element) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div
            ref={glassCardRef}
            className="relative w-full max-w-105 aspect-4/5 rounded-3xl border border-white/15 bg-zinc-900/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 overflow-hidden flex flex-col justify-between"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Embedded glowing node grids */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Bar (Mock Window) */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase bg-zinc-950/50 px-2 py-0.5 rounded border border-white/5">
                nexus-engine.js
              </div>
            </div>

            {/* Interactive Stats Simulator */}
            <div className="flex-1 flex flex-col justify-center gap-6 py-6" style={{ transform: "translateZ(30px)" }}>
              <div className="flex flex-col gap-1.5">
                <div className="text-[11px] font-bold text-purple-400 uppercase tracking-widest">Global Status</div>
                <div className="text-2xl font-black text-white flex items-center gap-2">
                  System Live
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                </div>
              </div>

              {/* Progress bars that animate */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-zinc-400 font-medium">
                    <span>Site Speed Rating</span>
                    <span className="text-cyan-400 font-bold">99/100</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-linear-to-r from-cyan-500 to-emerald-500 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-zinc-400 font-medium">
                    <span>Mobile Responsiveness</span>
                    <span className="text-emerald-400 font-bold">100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-linear-to-r from-purple-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-zinc-400 font-medium">
                    <span>SEO Foundation</span>
                    <span className="text-indigo-400 font-bold">Fully Optimized</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom visual hook */}
            <div className="border border-white/10 pt-4 flex items-center justify-between bg-zinc-950/30 p-3 rounded-2xl" style={{ transform: "translateZ(15px)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg">
                  N
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Let&apos;s Connect Nodes</div>
                  <div className="text-[10px] text-zinc-500">nexus.agency/activate</div>
                </div>
              </div>
              <button
                onClick={() => handleScroll("contact")}
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Decorative Wave Mask / Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-15 text-zinc-950 fill-current rotate-180"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
