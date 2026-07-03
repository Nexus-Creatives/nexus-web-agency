"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Zap,
  Calendar,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Search,
  Mail,
  Activity,
  MapPin,
  Lock,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SERVICE_CONTENT } from "@/lib/services";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES_GRID_DATA = SERVICE_CONTENT;

const WHAT_IS_INCLUDED_DATA = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Flawless display on mobile devices, tablets, laptops, and ultra-wide screens. Fluid typography adapts instantly to any viewport size.",
  },
  {
    icon: Activity,
    title: "Performance Tuning",
    description:
      "Under 0.5-second load times. Image compression, Next-gen format loading (WebP/AVIF), server caching, and minimal clean bundle builds.",
  },
  {
    icon: Search,
    title: "Advanced SEO Config",
    description:
      "Custom JSON-LD schema markup, descriptive meta titles, semantic headings layout, automated XML sitemaps, and indexing configurations.",
  },
  {
    icon: Mail,
    title: "Lead Capture Forms",
    description:
      "Interactive lead capture forms with email notifications, built-in honeypots to block bots, and API routing to your CRM database.",
  },
  {
    icon: MapPin,
    title: "Local Map Integration",
    description:
      "Integrated location embeds, optimized contact schema, and localized search engine metadata configurations for storefront foot traffic.",
  },
  {
    icon: Lock,
    title: "SSL & Security Headers",
    description:
      "HTTPS redirection, strict security headers configuration, rate-limiting, and form input sanitization to prevent vulnerability exploits.",
  },
];

const FAQ_DATA = [
  {
    q: "How long does a website take to build?",
    a: "A custom single-page landing page typically takes 1-2 weeks. A comprehensive business website with custom copy, custom graphics, and CRM integrations usually takes 3-6 weeks from discovery to deployment.",
  },
  {
    q: "Can you redesign my existing website without losing search rankings?",
    a: "Yes. This is a critical part of our protocol. We conduct a full URL index audit, configure 301 redirects, preserve existing search engine value, and restructure page elements to improve your actual indexing scores.",
  },
  {
    q: "Are there any hidden monthly or annual costs?",
    a: "No hidden costs. You pay for your own hosting/domain directly (which we help set up under your ownership). Our work is billed as a flat fee. We also offer optional maintenance packages if you want us to handle updates.",
  },
  {
    q: "Do you use pre-made page builder templates?",
    a: "Never. Pre-made templates are bloated, load slowly, and make your business look like everyone else. We write custom Tailwind CSS, TypeScript, and Next.js code tailored specifically to your visual branding and speed goals.",
  },
  {
    q: "What is your development and payment process?",
    a: "We work in milestone-based stages: 50% upfront to initiate Discovery & design prototyping, and 50% upon final sign-off and site launch. You approve every layout stage before code construction begins.",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const includedRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const grid = gridRef.current;
    const included = includedRef.current;
    const faq = faqRef.current;

    // 1. Hero Reveal
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

    // 2. Services Grid Reveal
    if (grid) {
      const title = grid.querySelector(".animate-grid-title");
      const cards = grid.querySelectorAll(".service-page-card");

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
            },
          }
        );
      }

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 75%",
          },
        }
      );
    }

    // 3. What's Included Bento Reveal
    if (included) {
      const title = included.querySelector(".animate-inc-title");
      const items = included.querySelectorAll(".included-item-card");

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
            },
          }
        );
      }

      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: included,
            start: "top 75%",
          },
        }
      );
    }

    // 4. FAQ Section Reveal
    if (faq) {
      const title = faq.querySelector(".animate-faq-title");
      const items = faq.querySelectorAll(".faq-item-card");

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
            },
          }
        );
      }

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 75%",
          },
        }
      );
    }

    // Interactive card mouse movement (glowing cursor border effect)
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const cardElements = document.querySelectorAll(
      ".service-page-card, .included-item-card"
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <>
      {/* GSAP Custom Cursor */}
      <CustomCursor />

      {/* Floating Header */}
      <Navbar />

      {/* Main Container */}
      <main ref={containerRef} className="flex-1 w-full bg-zinc-950 pt-28">
        
        {/* Section 1: Hero Section */}
        <section
          id="hero"
          ref={heroRef}
          className="relative py-20 lg:py-32 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5 flex flex-col items-center justify-center text-center"
        >
          {/* Background decorative glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <div className="animate-hero flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              NEXUS Core Capabilities
            </div>
            <h1 className="animate-hero font-sans font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
              Our Services
            </h1>
            <p className="animate-hero text-zinc-400 font-medium sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              We design and build ultra-fast, visually stunning web engines engineered to turn traffic into qualified customers. No bloating templates. Just pure performance.
            </p>
            <div className="animate-hero flex flex-wrap gap-4 justify-center mt-4">
              <button
                onClick={() => handleScrollTo("services")}
                className="px-6 py-3.5 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg shadow-black/50 cursor-pointer flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-3.5 rounded-xl font-bold border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Services Grid */}
        <section
          id="services"
          ref={gridRef}
          className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="animate-grid-title text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                High-Performance Web Solutions
              </h2>
              <p className="text-zinc-400 font-medium sm:text-lg">
                We design fully responsive, high-converting digital assets tailored explicitly to achieve your business goals.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES_GRID_DATA.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    className="service-page-card group relative p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:border-purple-500/20 hover:bg-zinc-900/30 overflow-hidden backdrop-blur-sm shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      minHeight: "340px",
                      "--mouse-x": "0px",
                      "--mouse-y": "0px",
                    } as React.CSSProperties}
                  >
                    {/* Radial Glow Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                      style={{
                        background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), ${service.glowColor}, transparent 80%)`,
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-white/5 bg-zinc-950/35 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 transition-colors duration-300 group-hover:text-white">
                      <span>View details</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-6">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-105`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-medium text-sm sm:text-base">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Subtle border shine effect */}
                    <div className="absolute inset-0 border border-transparent rounded-3xl pointer-events-none z-10 group-hover:border-white/10 transition-colors duration-500" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: What's Included Section */}
        <section
          id="stats"
          ref={includedRef}
          className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
        >
          <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="animate-inc-title text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
                Built-In Premium Standards
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                What&apos;s Included Out Of The Box
              </h2>
              <p className="text-zinc-400 font-medium sm:text-lg">
                Every website we engineer is equipped with standard optimization metrics. No cut corners, no shortcuts.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {WHAT_IS_INCLUDED_DATA.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="included-item-card group relative p-6 sm:p-8 rounded-3xl bg-zinc-900/10 border border-white/5 hover:border-cyan-500/20 hover:bg-zinc-900/20 overflow-hidden backdrop-blur-sm shadow-lg flex flex-col gap-4"
                    style={{
                      "--mouse-x": "0px",
                      "--mouse-y": "0px",
                    } as React.CSSProperties}
                  >
                    {/* Radial hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                      style={{
                        background: `radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.08), transparent 80%)`,
                      }}
                    />

                    {/* Icon & Title */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="relative z-10 text-zinc-400 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {/* Subtle border shine effect */}
                    <div className="absolute inset-0 border border-transparent rounded-3xl pointer-events-none z-10 group-hover:border-white/10 transition-colors duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Our Process timeline (Imported Component) */}
        <Process />

        {/* Section 5: FAQ Section */}
        <section
          id="faq"
          ref={faqRef}
          className="relative py-24 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-white/5"
        >
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="animate-faq-title text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
                Common Inquiries
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-400 font-medium sm:text-lg">
                Answers to frequently asked questions about project onboarding, technology stack, and pricing models.
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {FAQ_DATA.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div
                    key={index}
                    className="faq-item-card bg-zinc-900/10 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                    >
                      <span className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-purple-400" : ""
                        }`}
                      />
                    </button>

                    {/* Collapsible Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-white/5 text-zinc-400 text-sm sm:text-base leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA & Contact Section */}
        <section className="relative bg-zinc-950 pt-20 overflow-hidden">
          {/* CTA Banner */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 mb-12">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-950/20 border border-purple-500/20 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                Ready to Dominate Your Local Market?
              </h2>
              <p className="text-zinc-400 font-medium max-w-xl text-sm sm:text-base leading-relaxed">
                Get in touch today for a free design audit of your current site or a custom milestone estimate for your new project.
              </p>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-3.5 rounded-xl font-bold bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer flex items-center gap-2"
              >
                Claim Your Free Quote
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </button>
            </div>
          </div>

          {/* Actual Lead Capture Form */}
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
