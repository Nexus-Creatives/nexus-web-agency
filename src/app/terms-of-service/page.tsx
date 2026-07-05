"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FileText, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By engaging Nexus ("we," "us," "our") for website design, development, or related digital services, you ("client," "you") agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not engage our services.`,
  },
  {
    title: "2. Services Provided",
    body: `Nexus provides website design, development, and related digital services, including but not limited to landing pages, business websites, custom web applications, e-commerce integrations, and ongoing maintenance. The specific scope, deliverables, and timeline for each project are defined in an individual project agreement, quote, or invoice provided prior to work commencing.`,
  },
  {
    title: "3. Project Process & Timelines",
    body: `Estimated delivery timelines are provided in good faith based on the scope discussed at the time of quoting. Timelines may shift due to delayed client feedback, incomplete content/assets provided by the client, scope changes requested after work has begun, or unforeseen technical circumstances. We will communicate any expected delays as soon as they become known.`,
  },
  {
    title: "4. Revisions",
    body: `Each package includes a defined number of revision rounds, as stated in your project quote. Revisions beyond the included amount, or significant changes to the agreed-upon scope after design/development has started, may incur additional charges, which will be communicated and agreed upon before proceeding.`,
  },
  {
    title: "5. Payment Terms",
    body: `Projects typically require a deposit before work begins, with the remaining balance due upon completion or according to the milestone schedule outlined in your project agreement. Work will not be delivered, published, or transferred until payment in full has been received. Late payments may result in a pause of active work on your project.`,
  },
  {
    title: "6. Cancellations & Refunds",
    body: `Should you choose to cancel a project after work has begun, deposits are non-refundable, as they cover time and resources already allocated to your project. If cancellation occurs before any work has started, a full refund of the deposit may be issued at our discretion. Completed milestones or deliverables already paid for are non-refundable.`,
  },
  {
    title: "7. Intellectual Property & Ownership",
    body: `Upon full and final payment, ownership of the final custom design and code developed specifically for your project transfers to you. Nexus retains the right to display completed projects in our portfolio, case studies, and marketing materials unless otherwise agreed in writing. Any third-party assets used in your project (fonts, stock imagery, plugins, or licensed software) remain subject to their original licensing terms.`,
  },
  {
    title: "8. Client Responsibilities",
    body: `You agree to provide timely feedback, content, branding assets, and access credentials (such as hosting or domain access) needed to complete your project. Delays in providing these materials may extend your project timeline accordingly. You are responsible for ensuring that any content, images, or materials you provide do not infringe on the intellectual property rights of third parties.`,
  },
  {
    title: "9. Third-Party Services",
    body: `Your project may rely on third-party services such as domain registrars, hosting providers, or software integrations. Nexus is not responsible for outages, pricing changes, policy changes, or service interruptions caused by these third-party providers. Any ongoing subscription costs for such services (hosting, domains, plugins, etc.) are the responsibility of the client unless otherwise stated in your project agreement.`,
  },
  {
    title: "10. Maintenance & Support",
    body: `Unless a maintenance plan is included in your package or purchased separately, Nexus is not responsible for ongoing updates, monitoring, or fixes to your website after project completion and delivery. We are happy to discuss maintenance arrangements for continued support.`,
  },
  {
    title: "11. Limitation of Liability",
    body: `Nexus will make every reasonable effort to deliver quality, functional websites. However, we do not guarantee specific business outcomes, such as traffic, conversion rates, or revenue increases, as these depend on many factors outside our control. Nexus shall not be held liable for indirect, incidental, or consequential damages arising from the use of, or inability to use, any website or service we provide.`,
  },
  {
    title: "12. Changes to These Terms",
    body: `Nexus may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    title: "13. Governing Law",
    body: `These Terms of Service are governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law principles.`,
  },
  {
    title: "14. Contact Us",
    body: `If you have any questions about these Terms of Service, please reach out to us at nexuscreatives.dev@gmail.com.`,
  },
];

export default function TermsOfServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    if (hero) tl.fromTo(hero, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
    if (content) tl.fromTo(content, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=0.7");
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
              <FileText className="w-3.5 h-3.5 shrink-0" />
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </section>

          {/* Content */}
          <div
            ref={contentRef}
            className="bg-zinc-900/30 border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl flex flex-col gap-8 sm:gap-10"
          >
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Please read these Terms of Service carefully before engaging Nexus for any
              website design, development, or related digital service. These terms outline
              the responsibilities, expectations, and protections for both you and Nexus
              throughout our working relationship.
            </p>

            {SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {section.title}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}

            <div className="pt-6 border-t border-white/5 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                These Terms of Service are a general template and do not constitute legal
                advice. For a project-specific agreement or if you have questions about your
                legal rights and obligations, we recommend consulting a licensed attorney in
                your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}