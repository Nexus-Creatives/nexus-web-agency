"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Send,
  CheckCircle,
  Flame,
  Server,
  ShieldCheck,
  Mail,
  ArrowRight,
  Globe2,
  Camera,
  Link2,
  Code2,
  Building2,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);
  const contactPanelRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    business: "",
    website: "",
    email: "",
    challenge: "bookings",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState(""); // bots fill this, humans never see it

  useEffect(() => {
    const header = headerRef.current;
    const formBox = formBoxRef.current;
    const contactPanel = contactPanelRef.current;

    if (!header || !formBox || !contactPanel) return;

    // Scroll trigger entrance
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
      [formBox, contactPanel],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formBox,
          start: "top 75%",
        },
      }
    );
  }, []);

  // Node Plexus visual update based on form completion
  useEffect(() => {
    if (submitted) return;
    
    // Count filled fields
    const filledCount = Object.values(formState).filter((v) => v.trim() !== "").length;
    const nodes = document.querySelectorAll(".interactive-node");
    const paths = document.querySelectorAll(".interactive-path");

    nodes.forEach((node, i) => {
      if (i < filledCount * 2) {
        gsap.to(node, {
          backgroundColor: "#06b6d4",
          boxShadow: "0 0 12px rgba(6, 182, 212, 0.8)",
          scale: 1.25,
          duration: 0.4,
        });
      } else {
        gsap.to(node, {
          backgroundColor: "#52525b",
          boxShadow: "none",
          scale: 1,
          duration: 0.4,
        });
      }
    });

    paths.forEach((path, i) => {
      if (i < filledCount * 2 - 1) {
        gsap.to(path, {
          stroke: "#a855f7",
          strokeDashoffset: 0,
          opacity: 0.8,
          duration: 0.6,
        });
      } else {
        gsap.to(path, {
          stroke: "#27272a",
          opacity: 0.2,
          duration: 0.6,
        });
      }
    });
  }, [formState, submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, honeypot }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setLoading(false);
      setSubmitted(true);

      // Animate success screen
      const tl = gsap.timeline();
      tl.fromTo(
        ".success-card",
        { opacity: 0, scale: 0.9, rotateX: 10 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 0.8, ease: "back.out(1.4)" }
      );
    } catch (err) {
      setLoading(false);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-zinc-950 py-24 px-6 sm:px-12 md:px-24 overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5" />
            Connect Nodes
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Initiate Your Conversion System.
          </h2>
          <p className="text-zinc-400 font-medium sm:text-lg">
            Ready to design a digital client capture machine? Complete the node form below. Our digital architects will audit your brand and coordinate a strategy call within 4 hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Contact Links Panel (Left) */}
          <div
            ref={contactPanelRef}
            className="lg:col-span-5 flex flex-col justify-center p-8 bg-zinc-900/30 border border-white/10 rounded-3xl backdrop-blur-sm shadow-xl min-h-[400px] relative overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />

            {!submitted ? (
              <div className="w-full max-w-sm mx-auto flex flex-col gap-6 z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">
                    Contact Channels
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Reach the Nexus team
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Use any of these channels to connect with us. We keep replies fast and direct.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        icon: Mail,
                        label: "Contact",
                        value: "nexuscreatives.dev@gmail.com",
                        href: "mailto:nexuscreatives.dev@gmail.com",
                      },
                      {
                        icon: Globe2,
                        label: "Facebook",
                        value: "Nexus Creatives",
                        href: "https://facebook.com/nexuscreatives",
                      },
                      {
                        icon: Camera,
                        label: "Instagram",
                        value: "nexuscreatives",
                        href: "https://instagram.com/nexuscreatives",
                      },
                      {
                        icon: Link2,
                        label: "LinkedIn",
                        value: "nexuscreatives",
                        href: "https://linkedin.com/company/nexuscreatives",
                      },
                      {
                        icon: Code2,
                        label: "GitHub",
                        value: "nexuscreatives",
                        href: "https://github.com/nexuscreatives",
                      },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/50 px-4 py-3 transition-colors duration-200 hover:border-white/20 hover:bg-white/5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10 transition-colors duration-200 group-hover:bg-cyan-500/10 group-hover:text-cyan-200">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                          {item.label}
                        </div>
                        <div className="truncate text-sm font-semibold text-white">
                          {item.value}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col gap-4 text-center z-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 self-center mb-2 shadow-lg animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">System Synchronized</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  We&apos;ve successfully established your business profile. Node connection logs generated.
                </p>
                <div className="bg-zinc-950/80 p-4 rounded-xl border border-white/5 text-[10px] text-left font-mono text-cyan-400 flex flex-col gap-1">
                  <div>&gt; NEXUS_AUDIT_STATE: ENQUEUED</div>
                  <div>&gt; BUSINESS_METRIC_TARGETS: OPTIMIZED</div>
                  <div>&gt; DISPATCH_SCHEDULER: 4_HOURS_ETA</div>
                  <div>&gt; STATUS: ALIGNED_AND_SUCCESSFUL</div>
                </div>
              </div>
            )}
          </div>

          {/* Form Panel (Right) */}
          <div ref={formBoxRef} className="lg:col-span-7">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-900/40 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col gap-5 shadow-xl"
              >
                {/* Honeypot field — hidden from real users, bots fill it automatically */}
                <input
                  type="text"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute -left-[9999px] w-px h-px opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-950/20 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 text-sm font-semibold transition-colors"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      Business Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Contracting"
                      value={formState.business}
                      onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 text-sm font-semibold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@apex.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 text-sm font-semibold transition-colors"
                    />
                  </div>

                  {/* Current URL (Optional) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                      Current Website (if any)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. apexcontracting.com"
                      value={formState.website}
                      onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 text-sm font-semibold transition-colors"
                    />
                  </div>
                </div>

                {/* Challenge */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    What is your biggest website challenge?
                  </label>
                  <select
                    value={formState.challenge}
                    onChange={(e) => setFormState({ ...formState, challenge: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white focus:outline-none focus:border-cyan-500 text-sm font-semibold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="bookings">Need more local bookings / inquiries</option>
                    <option value="rebranding">Current site looks outdated & unprofessional</option>
                    <option value="speed">Website is too slow & loses mobile visitors</option>
                    <option value="none">Don&apos;t have a website at all</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Synchronizing Node...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                      <span className="sm:hidden">Start My Strategy Call</span>
                      <span className="hidden sm:inline">Initiate Launch Strategy Call</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-card bg-zinc-900/50 border border-emerald-500/20 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  Launch Confirmed. <Flame className="w-6 h-6 text-amber-500" />
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Thank you, <span className="text-white font-extrabold">{formState.name}</span>! We have queued the audit for <span className="text-white font-extrabold">{formState.business}</span>. 
                </p>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  A senior design architect is already inspecting your local competitors and checking search queries. We&apos;ll send your customized audit video and schedule details via <span className="text-cyan-400 font-extrabold">{formState.email}</span> shortly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold uppercase">Allocated Lead</div>
                      <div className="text-xs text-white font-semibold">Nexus Architect #4</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-950 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold uppercase">Estimated Wait</div>
                      <div className="text-xs text-white font-semibold">Under 4 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}