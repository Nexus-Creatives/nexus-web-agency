"use client";


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  Gauge,
  ShieldCheck,
  Search,
  Headset,
  Code2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Every website is optimized for desktop, tablet, and mobile devices to provide a seamless experience.",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    description:
      "Built with performance in mind to ensure quick load times and a smooth user experience.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Every project follows modern SEO best practices to help improve your online visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Developed using modern technologies with clean code and security-focused practices.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "We're here even after launch to help with updates, fixes, and future improvements.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description:
      "Built using modern frameworks and best practices to ensure scalability and maintainability.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Why NEXUS?
          </span>

          <h2 className="mt-6 break-words text-3xl font-black text-white sm:text-4xl md:text-5xl">

            Built for Businesses
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">

              That Want to Grow

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            We don't just create beautiful websites—we build digital experiences
            designed to help businesses establish credibility, attract customers,
            and grow online.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="feature-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_80px_rgba(59,130,246,.18)]"
              >

                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-5 leading-8 text-zinc-400">

                    {feature.description}

                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-3">

          <div className="text-center">

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-400">
              100%
            </h3>

            <p className="mt-3 text-zinc-400">
              Mobile Responsive
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400">
              SEO
            </h3>

            <p className="mt-3 text-zinc-400">
              Best Practices Included
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-purple-400">
              Ongoing
            </h3>

            <p className="mt-3 text-zinc-400">
              Support Available
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}