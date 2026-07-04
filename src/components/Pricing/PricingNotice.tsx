"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Info, ClipboardCheck, MessageSquareQuote } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PricingNotice() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".notice-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="notice-card relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-white/5 backdrop-blur-2xl">

          {/* Glow */}
          <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-2 p-10 lg:p-14">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2">

                <Info className="text-blue-400" size={18} />

                <span className="text-sm font-semibold text-blue-300">
                  Transparent Pricing
                </span>

              </div>

              <h2 className="mt-8 text-4xl font-black text-white">

                Every Project is
                <br />

                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  Custom Quoted
                </span>

              </h2>

              <p className="mt-6 leading-8 text-zinc-400">

                The prices listed are starting rates designed to give you an
                estimate.

                Every business is different, so your final quotation depends
                on the number of pages, requested features, integrations,
                timeline, and overall project scope.

              </p>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">

                <ClipboardCheck
                  className="text-blue-400 flex-shrink-0"
                  size={30}
                />

                <div>

                  <h3 className="font-bold text-white">

                    Step 1

                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">

                    Tell us about your business and what you want your website
                    to achieve.

                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">

                <MessageSquareQuote
                  className="text-cyan-400 flex-shrink-0"
                  size={30}
                />

                <div>

                  <h3 className="font-bold text-white">

                    Step 2

                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">

                    We'll recommend the best package and prepare a detailed
                    quotation with everything included.

                  </p>

                </div>

              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6">

                <p className="text-sm leading-7 text-zinc-300">

                  💡 <strong className="text-white">Good to know:</strong>

                  We don't charge for features you don't need.

                  Every quotation is tailored to your business so you only pay
                  for the functionality that brings value.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}