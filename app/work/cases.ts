export type Result = {
  label: string;
  value: string;
  meta?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  url: string;
  tagline: string;
  industry: string;
  year: string;
  duration: string;
  services: string[];
  stack: string[];
  problem: string;
  approach: string[];
  results: Result[];
  quote: { text: string; name: string; role: string };
};

export const cases: CaseStudy[] = [
  {
    slug: "milik",
    client: "Milik & Associates",
    url: "https://www.milikinsurance.com",
    tagline:
      "A 30-year insurance practice with a Yellow-Pages-era site, brought online for a generation that searches on a phone.",
    industry: "Insurance",
    year: "2026",
    duration: "1–2 weeks",
    services: ["Website redesign", "WCAG 2.1 AA"],
    stack: ["Next.js", "Sanity CMS", "Vercel"],
    problem:
      "Milik's previous site was built in 2011, scored 32 on mobile Lighthouse, and failed nine WCAG criteria including color contrast and form labels. Quote-request submissions had dropped 60% year-over-year as more traffic moved to mobile.",
    approach: [
      "Stripped the four-deep navigation down to four primary destinations and one persistent quote-request CTA.",
      "Rebuilt every page on Next.js with a Sanity CMS the front-desk team could edit themselves — no developer in the loop for content changes.",
      "Remediated all WCAG 2.1 AA criteria at the source (no overlay widget) and added a published accessibility statement reviewed by Milik's compliance counsel.",
    ],
    results: [
      { label: "Mobile Lighthouse", value: "98", meta: "from 32" },
      { label: "Quote requests", value: "+74%", meta: "first 30 days" },
      { label: "Time to first quote", value: "−42s", meta: "median" },
      { label: "WCAG criteria failed", value: "0", meta: "from 9" },
    ],
    quote: {
      text: "Got the audit report on a Friday, had a fixed-scope quote on Monday, and were live in two weeks. No agency runaround.",
      name: "Renee Milik",
      role: "Principal, Milik & Associates",
    },
  },
  {
    slug: "bbq-hq",
    client: "The BBQ HQ",
    url: "https://www.thebbqhq.com",
    tagline:
      "A neighborhood barbecue shop fighting for delivery-app screen-share — given a site that converts like the platforms but keeps the margin.",
    industry: "Restaurant · Retail",
    year: "2026",
    duration: "1–2 weeks",
    services: ["Website redesign"],
    stack: ["Next.js", "Sanity CMS", "Stripe", "Vercel"],
    problem:
      "The BBQ HQ was paying 30% per order to delivery aggregators while their own site converted at under 1%. The mobile menu took 8 seconds to load and the booking form had four required fields above a soft keyboard.",
    approach: [
      "Rebuilt with a single-screen menu-and-order flow optimized for thumb reach, with first contentful paint under 800ms on 4G.",
      "Direct-to-Stripe checkout for catering deposits — kept aggregators for delivery, recovered the margin on pickup orders.",
      "Brand guide read carefully: every photo and pull quote came from their existing identity, not stock.",
    ],
    results: [
      { label: "Mobile conversion", value: "2.1×", meta: "vs. old site" },
      { label: "First contentful paint", value: "0.7s", meta: "from 8.4s" },
      { label: "Direct catering revenue", value: "+$18k", meta: "first quarter" },
    ],
    quote: {
      text: "They actually read our brand guide. Our new site loads in under a second and the booking form converts twice as well as the old one.",
      name: "Daniel Park",
      role: "Co-owner, The BBQ HQ",
    },
  },
  {
    slug: "mpc-gold",
    client: "MPC Gold",
    url: "https://mpcgold.com",
    tagline:
      "A precious-metals dealer that needed institutional polish and ironclad accessibility before opening to retail.",
    industry: "Financial services",
    year: "2026",
    duration: "1–2 weeks",
    services: ["Website redesign", "WCAG 2.1 AA", "Quarterly compliance"],
    stack: ["Next.js", "Sanity CMS", "Vercel"],
    problem:
      "MPC was about to open retail accounts and their existing site failed both their internal compliance review and an outside accessibility audit. Live spot prices were rendered as images — invisible to screen readers and a known SEO drag.",
    approach: [
      "Replaced image-based prices with a live ticker that's keyboard-navigable, screen-reader-friendly, and indexable.",
      "Rebuilt the account-opening flow with a 4-step progress indicator and proper aria-live status messages.",
      "Set up a quarterly compliance review schedule synced to WCAG and FINRA disclosure updates.",
    ],
    results: [
      { label: "Accessibility score", value: "100", meta: "Lighthouse mobile" },
      { label: "Account-open completion", value: "+58%", meta: "first 60 days" },
      { label: "Compliance findings", value: "0", meta: "outside audit" },
    ],
    quote: {
      text: "Our compliance counsel signed off on the accessibility statement on the first review. That alone was worth the engagement.",
      name: "Ari Cohen",
      role: "Operations, MPC Gold",
    },
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
