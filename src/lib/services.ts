import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Zap,
  Calendar,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export type ServiceSlug =
  | "business-websites"
  | "landing-pages"
  | "booking-appointment-systems"
  | "website-redesign"
  | "website-maintenance"
  | "performance-seo-optimization";

export interface ServiceContent {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  heroDescription: string;
  detailEyebrow: string;
  color: string;
  glowColor: string;
  icon: LucideIcon;
  stats: Array<{ label: string; value: string }>;
  highlights: Array<{ title: string; description: string }>;
  deliverables: string[];
  process: Array<{ title: string; description: string }>;
  faq: Array<{ q: string; a: string }>;
}

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    shortDescription:
      "High-end custom multi-page websites designed to establish brand authority, build trust, and consistently generate organic inbound leads for your business.",
    heroDescription:
      "A flagship website should feel like a premium digital headquarters. We shape the story, structure, and motion so the site reads like a brand experience while still converting like a performance machine.",
    detailEyebrow: "Authority-driven website systems",
    color: "from-purple-500 to-indigo-500",
    glowColor: "rgba(168, 85, 247, 0.15)",
    icon: Globe,
    stats: [
      { label: "Ideal For", value: "Growing brands" },
      { label: "Primary Outcome", value: "Authority + leads" },
      { label: "Build Style", value: "Multi-page custom" },
    ],
    highlights: [
      {
        title: "Built to position you above templates",
        description:
          "Every page is written and arranged to feel more premium than a standard brochure site.",
      },
      {
        title: "Clear architecture for service growth",
        description:
          "We organize the pages so your offers, proof, and CTA paths feel deliberate and easy to navigate.",
      },
      {
        title: "A structure that scales cleanly",
        description:
          "The site stays expandable as your brand adds offerings, case studies, or new markets.",
      },
    ],
    deliverables: [
      "Custom homepage and service structure",
      "Conversion-focused contact and inquiry flow",
      "SEO-ready headings, metadata, and schema",
      "Responsive layout across all breakpoints",
      "Brand-led motion and premium visual system",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We map your positioning, target customer, and content priorities before design begins.",
      },
      {
        title: "System Design",
        description:
          "We design the layout, motion language, and page hierarchy so the site feels polished and intentional.",
      },
      {
        title: "Build & refine",
        description:
          "We translate the design into a fast, maintainable Next.js experience with conversion in mind.",
      },
    ],
    faq: [
      {
        q: "When should I choose a full business website?",
        a: "If you want multiple services, stronger credibility, and room for content growth, a full website is the right move.",
      },
      {
        q: "Can the structure expand later?",
        a: "Yes. We build the foundation so new pages, sections, and campaigns can be added without breaking the system.",
      },
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    shortDescription:
      "Conversion-focused single page designs optimized for digital marketing campaigns. Built with persuasive copywriting structure to maximize customer action.",
    heroDescription:
      "A landing page should hit fast, read clean, and push a single action. We build it like a spotlight: one offer, one path, no friction, no visual noise.",
    detailEyebrow: "Campaign-ready conversion pages",
    color: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99, 102, 241, 0.15)",
    icon: Zap,
    stats: [
      { label: "Ideal For", value: "Ads + launches" },
      { label: "Primary Outcome", value: "Higher conversion" },
      { label: "Build Style", value: "Single-page focused" },
    ],
    highlights: [
      {
        title: "One message, one goal",
        description:
          "Every section is engineered to move a visitor toward the desired action without distraction.",
      },
      {
        title: "Sharper copy structure",
        description:
          "We build the page around clarity, urgency, and proof so the offer lands instantly.",
      },
      {
        title: "Fast for paid traffic",
        description:
          "Landing pages are kept lean so performance stays high and ad spend has a better chance to convert.",
      },
    ],
    deliverables: [
      "Hero, proof, CTA, and objection handling sections",
      "Campaign-specific messaging and layout",
      "Forms or booking links wired for lead capture",
      "Performance-focused build and mobile polish",
      "Optional A/B-ready structure for future tests",
    ],
    process: [
      {
        title: "Offer framing",
        description:
          "We clarify the promise, the audience, and the conversion action before any design is finalized.",
      },
      {
        title: "Persuasion design",
        description:
          "Sections are arranged to create momentum and remove hesitation.",
      },
      {
        title: "Launch optimization",
        description:
          "We refine spacing, hierarchy, and CTA language for the cleanest possible conversion flow.",
      },
    ],
    faq: [
      {
        q: "Is a landing page enough for a new campaign?",
        a: "Yes, if the offer is specific. Landing pages are ideal when you want a single measurable conversion path.",
      },
      {
        q: "Can this be expanded into a full site later?",
        a: "Absolutely. We can start focused and expand the system when the offer matures.",
      },
    ],
  },
  {
    slug: "booking-appointment-systems",
    title: "Booking Systems",
    shortDescription:
      "Interactive client onboarding funnels integrated with scheduling software (Cal.com, Calendly) and payment gateways (Stripe) to fully automate booking.",
    heroDescription:
      "If you need appointments, the site should feel like a concierge. We remove email back-and-forth, wire the booking flow cleanly, and make the handoff feel premium.",
    detailEyebrow: "Automated booking funnels",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
    icon: Calendar,
    stats: [
      { label: "Ideal For", value: "Service businesses" },
      { label: "Primary Outcome", value: "Booked meetings" },
      { label: "Build Style", value: "Funnel + scheduler" },
    ],
    highlights: [
      {
        title: "Less friction, more show-ups",
        description:
          "The booking path is designed to be obvious and calm, so people commit faster.",
      },
      {
        title: "Payment-ready workflows",
        description:
          "We can connect scheduling, deposits, and intake into one controlled experience.",
      },
      {
        title: "Better handoff to your team",
        description:
          "Lead details and confirmations can be structured so operations stays clean behind the scenes.",
      },
    ],
    deliverables: [
      "Scheduling integration and booking UX",
      "Deposit or payment step if needed",
      "Lead intake and confirmation flow",
      "Reminder-friendly structure for fewer no-shows",
      "Responsive, branded booking interface",
    ],
    process: [
      {
        title: "Workflow mapping",
        description:
          "We define the exact user path from landing on the site to confirmed appointment.",
      },
      {
        title: "Scheduling integration",
        description:
          "We connect the booking provider and shape the UX around your existing operations.",
      },
      {
        title: "Handoff refinement",
        description:
          "We test the process end to end so the confirmation and follow-up steps feel seamless.",
      },
    ],
    faq: [
      {
        q: "Can this work with my current scheduler?",
        a: "In most cases, yes. We can integrate with major booking tools and tailor the flow to your process.",
      },
      {
        q: "Can users pay during booking?",
        a: "Yes. If you want deposits or upfront payment, we can wire that into the booking journey.",
      },
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    shortDescription:
      "Revamp your slow, outdated web interface into a high-performance system. We modernize your visuals and performance while carefully preserving your SEO links.",
    heroDescription:
      "A redesign should feel like a reveal, not a reset. We keep what matters, remove what blocks conversion, and give the brand a much sharper digital edge.",
    detailEyebrow: "Strategic visual overhaul",
    color: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.15)",
    icon: RefreshCw,
    stats: [
      { label: "Ideal For", value: "Outdated sites" },
      { label: "Primary Outcome", value: "Fresh credibility" },
      { label: "Build Style", value: "Modernized rebuild" },
    ],
    highlights: [
      {
        title: "Preserve the equity you already have",
        description:
          "We keep the parts of the site that still serve you while lifting the overall experience.",
      },
      {
        title: "Modern visual language",
        description:
          "Typography, spacing, and motion are updated so the brand feels current and premium.",
      },
      {
        title: "Cleaner performance path",
        description:
          "We trim bloat, streamline structure, and improve speed without making the site feel stripped down.",
      },
    ],
    deliverables: [
      "Visual refresh with current design language",
      "SEO-safe migration and structure planning",
      "Speed and usability improvements",
      "Conversion path cleanup",
      "Refined mobile experience",
    ],
    process: [
      {
        title: "Audit",
        description:
          "We review the current site to identify what should be preserved, rebuilt, or removed.",
      },
      {
        title: "Rebuild",
        description:
          "We redesign the experience with stronger hierarchy and a cleaner visual rhythm.",
      },
      {
        title: "Protect + launch",
        description:
          "We make sure the migration respects your existing search visibility and business continuity.",
      },
    ],
    faq: [
      {
        q: "Will a redesign hurt my search rankings?",
        a: "Not if it’s handled carefully. We plan the rebuild with SEO preservation in mind.",
      },
      {
        q: "Can you keep part of my existing content?",
        a: "Yes. The best redesigns usually retain useful content and improve the presentation around it.",
      },
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Care",
    shortDescription:
      "Keep your digital asset running at peak performance. Monthly speed checks, daily secure cloud backups, security patching, and on-demand content edits.",
    heroDescription:
      "Premium websites are living systems. Maintenance keeps the site fast, safe, and visually consistent so your first impression never degrades.",
    detailEyebrow: "Ongoing protection and refinement",
    color: "from-teal-500 to-emerald-500",
    glowColor: "rgba(20, 184, 166, 0.15)",
    icon: ShieldCheck,
    stats: [
      { label: "Ideal For", value: "Existing sites" },
      { label: "Primary Outcome", value: "Stability" },
      { label: "Build Style", value: "Monthly support" },
    ],
    highlights: [
      {
        title: "Ongoing peace of mind",
        description:
          "We keep the technical side healthy so you can focus on the business side.",
      },
      {
        title: "Fast updates when things change",
        description:
          "Text edits, content swaps, and small fixes stay under control instead of becoming stressful tasks.",
      },
      {
        title: "Security-aware care",
        description:
          "Backups, patching, and checks reduce the chance of the site going stale or vulnerable.",
      },
    ],
    deliverables: [
      "Scheduled backups and restore points",
      "Speed and uptime monitoring",
      "Security patching and update management",
      "Small content and layout adjustments",
      "Monthly optimization feedback",
    ],
    process: [
      {
        title: "Stabilize",
        description:
          "We verify the current state of the site and set a baseline for health and performance.",
      },
      {
        title: "Monitor",
        description:
          "We keep an eye on updates, backups, and performance so issues are caught early.",
      },
      {
        title: "Improve",
        description:
          "Each month gives us a chance to refine the site as your business evolves.",
      },
    ],
    faq: [
      {
        q: "Is maintenance only for websites you built?",
        a: "No, although sites we build are easier to support. We can usually take over a living site after review.",
      },
      {
        q: "Can I request edits as needed?",
        a: "Yes. Maintenance is ideal when you want a reliable team for ongoing adjustments.",
      },
    ],
  },
  {
    slug: "performance-seo-optimization",
    title: "SEO Boost",
    shortDescription:
      "Maximize your search engine footprint. We clean up your database, optimize core web vitals, index semantic schemas, and boost rankings above local competitors.",
    heroDescription:
      "This service is for sites that already exist but need to move faster, rank better, and feel more technically polished. We focus on the invisible layer that drives visibility and trust.",
    detailEyebrow: "Technical lift for ranking and speed",
    color: "from-emerald-500 to-purple-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    icon: TrendingUp,
    stats: [
      { label: "Ideal For", value: "Sites needing lift" },
      { label: "Primary Outcome", value: "Speed + ranking" },
      { label: "Build Style", value: "Technical optimization" },
    ],
    highlights: [
      {
        title: "Sharper technical performance",
        description:
          "We tighten the code path, the loading experience, and the structural signals that affect performance.",
      },
      {
        title: "Search visibility with substance",
        description:
          "We improve the semantic and metadata layer so search engines can understand the site more clearly.",
      },
      {
        title: "Better experience for real users",
        description:
          "The optimization work also makes the site feel more responsive and trustworthy to visitors.",
      },
    ],
    deliverables: [
      "Core Web Vitals and speed audit",
      "Semantic structure and schema improvements",
      "Asset and bundle optimization",
      "Search metadata tuning",
      "Local visibility cleanup",
    ],
    process: [
      {
        title: "Audit the bottlenecks",
        description:
          "We identify what is slowing the site down or suppressing its search signals.",
      },
      {
        title: "Optimize the stack",
        description:
          "We improve assets, markup, and page structure so the site can perform more efficiently.",
      },
      {
        title: "Measure the uplift",
        description:
          "We verify the results and make sure the changes produce real-world improvements.",
      },
    ],
    faq: [
      {
        q: "Is this only for highly technical websites?",
        a: "No. We work with sites that simply need better speed, structure, and search clarity.",
      },
      {
        q: "Can you help local service businesses rank better?",
        a: "Yes. Local SEO signals are part of the optimization work when they matter to the business.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  SERVICE_CONTENT.find((service) => service.slug === slug);
