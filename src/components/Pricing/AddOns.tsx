"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  CalendarCheck2,
  ShoppingCart,
  Search,
  PenTool,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const addons = [
  {
    icon: FileText,
    title: "Extra Page",
    price: "Starting at ₱1,800",
    description:
      "Need more pages? Expand your website anytime without rebuilding it.",
  },
  {
    icon: CalendarCheck2,
    title: "Booking System",
    price: "Starting at ₱8,000",
    description:
      "Allow customers to schedule appointments directly from your website.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    price: "Starting at ₱12,000",
    description:
      "Sell products online with a modern shopping cart and secure checkout.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    price: "Starting at ₱4,000",
    description:
      "Create a professional brand identity that matches your business.",
  },
  {
    icon: Search,
    title: "SEO Package",
    price: "Starting at ₱6,000",
    description:
      "Improve your visibility on Google with on-page SEO optimization.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    price: "Starting at ₱1,500/mo",
    description:
      "Keep your website updated, secure, and running at peak performance.",
  },
];

export default function AddOns() {
  const sectionRef = useRef<HTMLDivElement>(null);

 
  return (
    <section ref={sectionRef} className="relative px-6 py-28">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Optional Enhancements
          </span>

          <h2 className="mt-6 break-words text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Customize Your Website
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            Add extra functionality whenever your business needs it.
            These services can be added to any package.
          </p>

        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {addons.map((addon) => {
            const Icon = addon.icon;

            return (

              <div
                key={addon.title}
                className="addon-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_80px_rgba(59,130,246,.18)]"
              >

                {/* Glow */}

                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">

                    <Icon size={26} className="text-white" />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {addon.title}
                  </h3>

                  <p className="mt-2 font-semibold text-blue-300">
                    {addon.price}
                  </p>

                  <p className="mt-5 leading-7 text-zinc-400">
                    {addon.description}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition group-hover:text-blue-300">

                    Learn More

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}