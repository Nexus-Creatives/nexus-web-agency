"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight, Cpu } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = linksRef.current?.querySelectorAll("a");
    const cta = ctaRef.current;

    if (!nav) return;

    // Initial state
    gsap.set(nav, { y: -100, opacity: 0 });
    if (logo) gsap.set(logo, { opacity: 0, scale: 0.8 });
    if (links) gsap.set(links, { opacity: 0, y: -20 });
    if (cta) gsap.set(cta, { opacity: 0, scale: 0.9 });

    // Timeline for nav reveal
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(nav, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 0.5,
    });

    if (logo) {
      tl.to(
        logo,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
        },
        "-=0.6"
      );
    }

    if (links && links.length > 0) {
      tl.to(
        links,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.6"
      );
    }

    if (cta) {
      tl.to(
        cta,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
        },
        "-=0.4"
      );
    }

    // Magnetic CTA Hover effect
    if (cta) {
      const onMouseMove = (e: MouseEvent) => {
        const bounds = cta.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left - bounds.width / 2;
        const mouseY = e.clientY - bounds.top - bounds.height / 2;

        gsap.to(cta, {
          x: mouseX * 0.35,
          y: mouseY * 0.35,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(cta, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      cta.addEventListener("mousemove", onMouseMove);
      cta.addEventListener("mouseleave", onMouseLeave);

      return () => {
        cta.removeEventListener("mousemove", onMouseMove);
        cta.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-7xl backdrop-blur-md bg-zinc-950/70 border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-6 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          ref={logoRef}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleScroll("hero")}
        >
          <Link href="/" className="flex items-center gap-2 group">
  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-transform duration-300 group-hover:scale-105">
    <Cpu className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-180" />
    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
  <span className="font-sans font-black text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
    NEXUS
  </span>
</Link>
        </div>

        {/* Links */}
        <nav ref={linksRef} className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            Services
          </Link>
          <a
            onClick={() => handleScroll("process")}
            className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            Our Process
          </a>
          <a
            onClick={() => handleScroll("portfolio")}
            className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            Work Showcase
          </a>
          <a
            onClick={() => handleScroll("stats")}
            className="text-sm font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            Why Us
          </a>
        </nav>

        {/* CTA */}
        <div>
          <Link
            href="/contact"
           
            className="relative px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm flex items-center gap-2 hover:bg-zinc-200 transition-colors duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] group"
          >
            Get a Website
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </header>
  );
}
