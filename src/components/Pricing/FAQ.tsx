"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do I need to pay before the project starts?",
    answer:
      "Yes. We require a 50% deposit before development begins. This secures your project in our schedule and allows us to begin design and development. The remaining balance is due before the final website is launched.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 2–6 weeks depending on the number of pages, requested features, revisions, and how quickly content is provided.",
  },
  {
    question: "Can I request additional features later?",
    answer:
      "Absolutely. Your website can grow alongside your business. Additional functionality such as booking systems, blogs, e-commerce, or custom dashboards can be added at any time.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer optional monthly maintenance plans that include updates, security checks, backups, performance monitoring, and ongoing technical support.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Of course. Whether your current website needs a visual refresh, improved performance, or modern functionality, we can redesign and rebuild it while preserving your existing content if needed.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 30,
        duration: 0.8,
        stagger: 0.1,
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
    <section ref={sectionRef} className="relative px-6 py-28">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Here are answers to some of the most common questions our clients ask before starting a project.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="faq-item overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-400" : "text-zinc-400"
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 leading-8 text-zinc-400">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}