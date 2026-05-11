import type { Metadata } from "next";
import Link from "next/link";
import { AuditTool } from "../AuditTool";
import { SiteHeader } from "../SiteHeader";
import { SiteFooter } from "../SiteFooter";

const ArrowGlyph = () => (
  <svg
    viewBox="0 0 12 12"
    width="10"
    height="10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
  >
    <path d="M2 10 10 2M5 2h5v5" />
  </svg>
);

export const metadata: Metadata = {
  title: "Free Website Audit Tool — Accessibility, Performance, SEO | WebCheer",
  description:
    "Run a free instant audit on any website. Live Lighthouse scores for WCAG 2.1 AA accessibility, performance, best practices, and SEO. No email, no signup, no overlay widgets.",
  alternates: { canonical: "/audit" },
  keywords: [
    "free website audit",
    "free accessibility audit",
    "WCAG 2.1 AA audit",
    "ADA compliance check",
    "Lighthouse audit",
    "free SEO audit",
    "website performance audit",
  ],
  openGraph: {
    title: "Free Website Audit Tool — WebCheer",
    description:
      "Live Lighthouse scores for accessibility, performance, best practices, and SEO. No email required.",
    url: "https://webcheer.co/audit",
    siteName: "WebCheer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit Tool — WebCheer",
    description:
      "Run a free WCAG, performance, and SEO audit on any URL. Powered by Google PageSpeed Insights.",
  },
};

const auditJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://webcheer.co/audit#page",
      url: "https://webcheer.co/audit",
      name: "Free Website Audit Tool",
      description:
        "Free instant audit for any website — WCAG 2.1 AA accessibility, performance, best practices, and SEO scores.",
      isPartOf: { "@id": "https://webcheer.co/#org" },
      breadcrumb: { "@id": "https://webcheer.co/audit#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://webcheer.co/audit#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "WebCheer",
          item: "https://webcheer.co",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Free audit",
          item: "https://webcheer.co/audit",
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": "https://webcheer.co/audit#app",
      name: "WebCheer Free Website Audit",
      url: "https://webcheer.co/audit",
      applicationCategory: "WebApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "WCAG 2.1 AA accessibility score",
        "Mobile performance score",
        "Best practices score",
        "SEO score",
        "Powered by Google PageSpeed Insights",
        "No email required",
      ],
      provider: { "@id": "https://webcheer.co/#org" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://webcheer.co/audit#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this audit really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — completely free. No email, no signup, no credit card. Run it on as many sites as you want. We use the public Google PageSpeed Insights API.",
          },
        },
        {
          "@type": "Question",
          name: "What does the audit check?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Four Lighthouse categories on mobile: accessibility (covering WCAG 2.1 AA criteria), performance (Core Web Vitals), best practices (security, modern web standards), and SEO basics (meta tags, crawlability, structured markup).",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from running Lighthouse myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It isn't, technically — we use the same engine. Two differences: this runs on Google's servers (not yours, so no caching weirdness), and if you book a follow-up, we hand-write a remediation report with code-level fixes, not just a score.",
          },
        },
        {
          "@type": "Question",
          name: "What WCAG version do you audit against?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WCAG 2.1 AA, which is the standard referenced in most US ADA web-accessibility lawsuits and required by Section 508 for federal sites. We can also remediate to WCAG 2.2 AA on request.",
          },
        },
        {
          "@type": "Question",
          name: "An accessibility score of 100 means I'm ADA-compliant, right?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not exactly. Lighthouse can only flag automated criteria — about 30–40% of the WCAG checklist. A 100 means you've passed every machine-checkable rule, which is a strong start, but full conformance also requires manual review (keyboard flows, screen-reader walkthroughs, content review).",
          },
        },
        {
          "@type": "Question",
          name: "Why mobile and not desktop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most US small-business traffic is mobile, and Google ranks based on the mobile version of your site. If your mobile experience passes, desktop almost always follows.",
          },
        },
      ],
    },
  ],
};

export default function AuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditJsonLd) }}
      />
      <SiteHeader />

      <main id="main">

      {/* HERO */}
      <section className="audit-page-hero">
        <div className="wrap">
          <nav className="audit-page-crumbs" aria-label="Breadcrumb">
            <Link href="/">WebCheer</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Free audit</span>
          </nav>
          <h1 className="display audit-page-h1">
            Free <em className="italic">website audit.</em>
          </h1>
          <p className="audit-page-lede">
            Run a live audit on any URL. We&apos;ll pull mobile <em>accessibility</em>,
            <em> performance</em>, <em>best-practices</em>, and <em>SEO</em> scores in
            seconds — powered by Google PageSpeed Insights, scored against WCAG 2.1 AA
            and Core Web Vitals. No email, no signup, no overlay widgets.
          </p>

          <AuditTool />

          <aside className="audit-self" aria-label="WebCheer site self-audit">
            <span className="audit-self-eyebrow">For reference — this site</span>
            <div className="audit-self-scores">
              <span><em>100</em> Accessibility</span>
              <span><em>99</em> Performance</span>
              <span><em>100</em> Best&nbsp;practices</span>
              <span><em>100</em> SEO</span>
            </div>
            <span className="audit-self-meta">Lighthouse · Mobile · Apr 2026</span>
          </aside>
        </div>
      </section>

      {/* WHAT WE AUDIT */}
      <section className="audit-page-section audit-page-what">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">What we audit</span>
            <span className="num">01</span>
          </div>
          <h2 className="display audit-page-h2">
            Four scores. <em className="italic">Every check Google ranks on.</em>
          </h2>
          <div className="audit-what-grid">
            <article className="audit-what-card">
              <span className="audit-what-num">— A</span>
              <h3>Accessibility</h3>
              <p>
                WCAG 2.1 AA criteria a machine can check: color contrast, ARIA roles,
                form labels, alt text, focus order, semantic landmarks. The same rules
                most US ADA digital-accessibility lawsuits cite.
              </p>
            </article>
            <article className="audit-what-card">
              <span className="audit-what-num">— P</span>
              <h3>Performance</h3>
              <p>
                Core Web Vitals — Largest Contentful Paint, First Input Delay,
                Cumulative Layout Shift — plus speed-index, total blocking time, and
                Time to Interactive on a simulated mid-tier mobile device.
              </p>
            </article>
            <article className="audit-what-card">
              <span className="audit-what-num">— B</span>
              <h3>Best practices</h3>
              <p>
                HTTPS, modern image formats, console errors, deprecated APIs, security
                headers, vulnerable JS libraries. The technical hygiene that signals a
                site is maintained.
              </p>
            </article>
            <article className="audit-what-card">
              <span className="audit-what-num">— S</span>
              <h3>SEO</h3>
              <p>
                Meta titles and descriptions, crawlability, mobile-friendliness,
                structured data presence, link text, hreflang. The on-page basics
                Google uses to understand and rank your site.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="audit-page-section audit-page-how">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">How it works</span>
            <span className="num">02</span>
          </div>
          <h2 className="display audit-page-h2">
            From URL to scores in <em className="italic">about 20 seconds.</em>
          </h2>
          <ol className="audit-how-list">
            <li>
              <span className="audit-how-num">— 01</span>
              <div>
                <h3>You paste a URL</h3>
                <p>
                  Public, password-free pages only. We auto-add{" "}
                  <code>https://</code> if you forget it.
                </p>
              </div>
            </li>
            <li>
              <span className="audit-how-num">— 02</span>
              <div>
                <h3>Google runs Lighthouse</h3>
                <p>
                  We call the public PageSpeed Insights API on your behalf — same
                  engine that powers Google&apos;s own developer tools, on a simulated
                  mid-tier 4G mobile device.
                </p>
              </div>
            </li>
            <li>
              <span className="audit-how-num">— 03</span>
              <div>
                <h3>Four scores come back</h3>
                <p>
                  Color-coded: green ≥ 90, amber 50–89, red &lt; 50. Want the
                  hand-written report with code-level fixes? That&apos;s the next step
                  — and it&apos;s also free.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* WHAT'S AT RISK */}
      <section className="audit-page-section audit-risk-section">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">What&apos;s at risk</span>
            <span className="num">03</span>
          </div>
          <h2 className="display audit-page-h2">
            <em className="italic">5,000+</em> ADA web lawsuits hit small businesses
            in 2025.
          </h2>
          <p className="audit-risk-lede">
            Up <em>23.84%</em> from 2024.{" "}
            <em>77%</em> of defendants are small businesses earning under $25M.
            Average settlement runs <em>$25,000–$50,000</em> — typically several
            times what remediation costs. The five industries most at risk:
          </p>

          <div className="audit-risk-grid">
            <article className="audit-risk-card">
              <span className="audit-risk-pct">34<span className="audit-risk-pct-dec">.65%</span></span>
              <div className="audit-risk-meta">
                <span className="audit-risk-label">Restaurants &amp; food service</span>
                <span className="audit-risk-detail">1,368 lawsuits in 2025</span>
              </div>
            </article>
            <article className="audit-risk-card">
              <span className="audit-risk-pct">25<span className="audit-risk-pct-dec">.96%</span></span>
              <div className="audit-risk-meta">
                <span className="audit-risk-label">Lifestyle, fashion &amp; apparel</span>
                <span className="audit-risk-detail">1,025 lawsuits</span>
              </div>
            </article>
            <article className="audit-risk-card">
              <span className="audit-risk-pct">8<span className="audit-risk-pct-dec">.03%</span></span>
              <div className="audit-risk-meta">
                <span className="audit-risk-label">Beauty &amp; personal care</span>
                <span className="audit-risk-detail">317 lawsuits</span>
              </div>
            </article>
            <article className="audit-risk-card">
              <span className="audit-risk-pct">7<span className="audit-risk-pct-dec">.67%</span></span>
              <div className="audit-risk-meta">
                <span className="audit-risk-label">Home, furniture &amp; decor</span>
                <span className="audit-risk-detail">303 lawsuits</span>
              </div>
            </article>
            <article className="audit-risk-card">
              <span className="audit-risk-pct">7<span className="audit-risk-pct-dec">.17%</span></span>
              <div className="audit-risk-meta">
                <span className="audit-risk-label">Health &amp; medical</span>
                <span className="audit-risk-detail">283 lawsuits</span>
              </div>
            </article>
          </div>

          <p className="audit-risk-source">
            Sources: EcomBack 2025 ADA Website Accessibility Lawsuit Report ·
            UsableNet 2025 Year-End Report
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="audit-page-cta">
        <div className="wrap">
          <h2 className="display">
            See a problem? <em className="accent">We fix it.</em>
          </h2>
          <p>
            The instant audit gives you a score. The full WebCheer audit gives you a
            five-page written report with prioritized, code-level fixes — turnaround
            in five business days, also free.
          </p>
          <div className="audit-page-cta-stack">
            <Link href="/#contact" className="btn">
              Request the full report
              <span className="arrow" aria-hidden="true">
                <ArrowGlyph />
              </span>
            </Link>
            <Link href="/#services" className="btn btn-ghost">
              See our services
              <span className="arrow" aria-hidden="true">
                <ArrowGlyph />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq" aria-label="Audit frequently asked questions">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Audit FAQ</span>
            <span className="num">04</span>
          </div>
          <div className="faq-head">
            <h2 className="display">
              The <em className="italic">honest answers</em> people ask first.
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                <span>Is this audit really free?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Yes — completely free. No email, no signup, no credit card. Run it on
                  as many sites as you want. We use the public Google PageSpeed
                  Insights API.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>How is this different from running Lighthouse myself?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  It isn&apos;t, technically — we use the same engine. Two differences:
                  this runs on Google&apos;s servers (not your laptop, so no caching or
                  extension noise), and if you book a follow-up we hand-write a
                  remediation report with code-level fixes, not just a score.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>What WCAG version do you audit against?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  <em>WCAG 2.1 AA</em>, which is the standard referenced in most US ADA
                  web-accessibility lawsuits and required by Section 508 for federal
                  sites. We can also remediate to WCAG 2.2 AA on request.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>An accessibility score of 100 means I&apos;m ADA-compliant, right?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Not exactly. Lighthouse can only flag automated criteria — about
                  30–40% of the WCAG checklist. A 100 means you&apos;ve passed every
                  machine-checkable rule, which is a strong start, but full conformance
                  also requires manual review (keyboard flows, screen-reader
                  walkthroughs, content review). The free written report we send is
                  where the manual layer happens.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Why mobile and not desktop?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Most US small-business traffic is mobile, and Google ranks based on
                  the mobile version of your site. If your mobile experience passes,
                  desktop almost always follows.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Does the audit slow down my site or trip security tools?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  No. PageSpeed Insights makes a single visit to a public URL the way
                  any visitor would. It hits no admin paths, sends no traffic spike,
                  and respects robots.txt.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </>
  );
}
