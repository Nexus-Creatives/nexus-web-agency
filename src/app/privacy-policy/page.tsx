"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const SECTIONS = [
  {
    title: "1. Who We Are",
    body: `Nexus Creatives ("we", "us", "our") operates this website. This Privacy Policy explains what information we collect when you visit or interact with the site, why we collect it, and how you can control it. If you have questions, reach us at nexuscreatives.dev@gmail.com.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information you voluntarily submit through our contact form, including your name, email address, and any project details you share with us. We do not require account creation and we do not collect payment information through this site.

We may also automatically collect limited technical data, such as browser type, device type, and general usage patterns, through standard hosting and analytics tools, for the sole purpose of understanding site performance.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information you provide strictly to respond to your inquiry, discuss potential projects, and communicate with you about work you've engaged us for. We do not sell, rent, or trade your personal information to third parties, and we do not use your contact details for unsolicited marketing.`,
  },
  {
    title: "4. Data Retention",
    body: `We retain contact form submissions only for as long as reasonably necessary to respond to your inquiry or maintain a record of an active client relationship. You may request that we delete your information at any time, subject to legitimate business or legal record-keeping needs.`,
  },
  {
    title: "5. Cookies & Analytics",
    body: `This site may use minimal, privacy-respecting analytics to understand aggregate traffic (e.g., page views, referral sources). These tools do not identify you personally. We do not use tracking cookies for advertising purposes.`,
  },
  {
    title: "6. Your Rights",
    body: `Depending on your location, you may have rights to access, correct, or request deletion of your personal data. If you are located in the Philippines, these rights are recognized under the Data Privacy Act of 2012 (RA 10173). To exercise any of these rights, email us at nexuscreatives.dev@gmail.com and we will respond within a reasonable timeframe.`,
  },
  {
    title: "7. Data Security",
    body: `We take reasonable technical and organizational measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The "Last updated" date below will reflect the most recent revision.`,
  },
  {
    title: "9. Contact Us",
    body: `If you have any questions about this Privacy Policy or how your information is handled, contact us at nexuscreatives.dev@gmail.com.`,
  },
];

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const body = bodyRef.current;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    if (hero) tl.fromTo(hero, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
    if (body) tl.fromTo(body, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.7");
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main
        ref={containerRef}
        className="flex-1 w-full bg-zinc-950 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12">

          {/* Header */}
          <section ref={heroRef} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-semibold text-[11px] sm:text-xs tracking-wider uppercase backdrop-blur-sm mb-5 sm:mb-6">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              Your Data, Handled Plainly
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 leading-tight break-words">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                Policy
              </span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
              Last updated: July 4, 2026
            </p>
          </section>

          {/* Body */}
          <div
            ref={bodyRef}
            className="bg-zinc-900/30 border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl flex flex-col gap-8 sm:gap-10"
          >
            {SECTIONS.map((section, i) => (
              <div key={i} className="flex flex-col gap-2 sm:gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {section.title}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}