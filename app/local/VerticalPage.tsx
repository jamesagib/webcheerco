import Link from "next/link";
import { AuditTool } from "../AuditTool";
import { SiteHeader } from "../SiteHeader";
import { SiteFooter } from "../SiteFooter";
import { cities, verticals } from "./data";
import type { Vertical, City, CityAccent } from "./data";

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

function CityAccentSVG({ accent, color }: { accent: CityAccent; color: string }) {
  switch (accent) {
    case "waves":
      return (
        <svg viewBox="0 0 1200 220" className="vert-bg-accent" preserveAspectRatio="none">
          <path
            d="M 0 140 Q 200 80 400 140 T 800 140 T 1200 140"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M 0 180 Q 200 130 400 180 T 800 180 T 1200 180"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
        </svg>
      );
    case "palms":
      return (
        <svg viewBox="0 0 1200 220" className="vert-bg-accent" preserveAspectRatio="xMidYMax slice">
          {/* simple palm silhouettes — three at increasing scale */}
          <g fill={color} opacity="0.4">
            <path d="M 90 220 L 90 110 Q 60 90 50 70 Q 80 80 92 100 Q 80 60 78 38 Q 100 60 96 100 Q 130 70 140 60 Q 130 90 100 110 Z" />
            <path d="M 1100 220 L 1100 90 Q 1060 60 1050 36 Q 1090 50 1106 74 Q 1090 30 1086 6 Q 1116 28 1112 78 Q 1148 38 1162 28 Q 1148 60 1112 86 Z" transform="scale(0.85) translate(140 28)" />
          </g>
          <g fill={color} opacity="0.25">
            <path d="M 600 220 L 600 140 Q 580 130 575 118 Q 595 122 605 134 Q 600 110 600 96 Q 615 110 612 134 Q 632 118 640 112 Q 632 130 612 142 Z" />
          </g>
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 1200 220" className="vert-bg-accent" preserveAspectRatio="xMidYMid slice">
          <circle cx="900" cy="60" r="60" fill={color} opacity="0.32" />
          <circle cx="900" cy="60" r="80" fill="none" stroke={color} strokeWidth="1" opacity="0.25" />
          <line x1="0" y1="200" x2="1200" y2="200" stroke={color} strokeWidth="1" opacity="0.4" />
        </svg>
      );
    case "mountains":
      return (
        <svg viewBox="0 0 1200 220" className="vert-bg-accent" preserveAspectRatio="xMidYMax slice">
          <path
            d="M 0 220 L 0 160 L 220 60 L 380 130 L 540 50 L 720 140 L 880 70 L 1100 150 L 1200 100 L 1200 220 Z"
            fill={color}
            opacity="0.32"
          />
          <path
            d="M 0 220 L 0 180 L 180 110 L 340 160 L 540 100 L 720 170 L 900 120 L 1080 180 L 1200 150 L 1200 220 Z"
            fill={color}
            opacity="0.2"
          />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 1200 220" className="vert-bg-accent" preserveAspectRatio="xMidYMid slice">
          <g stroke={color} strokeWidth="1" opacity="0.18" fill="none">
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 120} y1="0" x2={i * 120} y2="220" />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 60 + 20} x2="1200" y2={i * 60 + 20} />
            ))}
          </g>
        </svg>
      );
  }
}

function pluralLawsuitNoun(v: Vertical) {
  return v.industryNounPlural;
}

export function VerticalPage({
  vertical,
  city,
}: {
  vertical: Vertical;
  city?: City;
}) {
  const isLocal = !!city;

  // Build the localized vs. generic copy fragments
  const heroEyebrow = isLocal
    ? `— ${city.name} · ${vertical.fullName}`
    : vertical.hero.eyebrow;

  const heroLead = isLocal
    ? `${vertical.name === "Restaurants" ? "Restaurant" : vertical.name} websites in ${city.name} that `
    : vertical.hero.headlineLead;
  const heroAccent = vertical.hero.headlineAccent;

  const lede = isLocal
    ? `${vertical.lawsuitCount.toLocaleString()} ${pluralLawsuitNoun(vertical)} got hit with ADA web lawsuits in 2025 — ${vertical.lawsuitPercent} of all filings. ${city.blurb} We rebuild ${vertical.industryNoun} sites in ${city.name} to WCAG 2.1 AA in 1–2 weeks.`
    : vertical.lede;

  const titlePrefix = isLocal
    ? `${city.name} ${vertical.name}`
    : vertical.name;

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section
          className={`vert-hero ${isLocal ? "vert-hero-local" : ""}`}
          style={
            isLocal
              ? ({
                  ["--bg-from" as string]: city.bgFrom,
                  ["--bg-to" as string]: city.bgTo,
                } as React.CSSProperties)
              : undefined
          }
        >
          {isLocal && (
            <div className="vert-hero-bg" aria-hidden="true">
              <CityAccentSVG accent={city.accent} color={city.accentColor} />
              <span className="vert-hero-bg-text">{city.name}</span>
            </div>
          )}

          <div className="wrap">
            <span className="vert-hero-eyebrow">{heroEyebrow}</span>
            <h1 className="display vert-hero-h1">
              {heroLead}
              <em className="accent">{heroAccent}</em>
            </h1>
            <p className="vert-hero-lede">{lede}</p>
            <div className="vert-hero-cta">
              <Link href="#audit" className="btn">
                Run a free audit
                <span className="arrow" aria-hidden="true">
                  <ArrowGlyph />
                </span>
              </Link>
              <Link href="#package" className="btn btn-ghost">
                See the package
                <span className="arrow" aria-hidden="true">
                  <ArrowGlyph />
                </span>
              </Link>
            </div>
            <ul className="vert-hero-stats">
              <li>
                <span className="vert-stat-num">{vertical.lawsuitCount.toLocaleString()}</span>
                <span className="vert-stat-label">
                  {vertical.industryNoun} lawsuits in 2025
                </span>
              </li>
              <li>
                <span className="vert-stat-num">$25–50k</span>
                <span className="vert-stat-label">average settlement</span>
              </li>
              <li>
                <span className="vert-stat-num">1–2 wks</span>
                <span className="vert-stat-label">our turnaround</span>
              </li>
              <li>
                <span className="vert-stat-num">100/100</span>
                <span className="vert-stat-label">target Lighthouse</span>
              </li>
            </ul>
          </div>
        </section>

        {/* LOCALITY — only on city pages */}
        {isLocal && (
          <section className="vert-locality" aria-labelledby="locality-heading">
            <div className="wrap">
              <div className="vert-locality-head">
                <span className="eyebrow">
                  — {city.name} · {city.county}
                </span>
                <h2 id="locality-heading" className="display vert-locality-h2">
                  Why {city.name} {vertical.industryNounPlural} are{" "}
                  <em className="italic">in the litigation crosshairs.</em>
                </h2>
                <p className="vert-locality-lede">{city.blurb}</p>
              </div>

              <div className="vert-locality-grid">
                <article className="vert-locality-card">
                  <span className="vert-locality-card-label">
                    Neighborhoods we cover
                  </span>
                  <ul className="vert-locality-pills">
                    {city.neighborhoods.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                  <p className="vert-locality-note">
                    On-site visits available across {city.county}. Most
                    {" "}{vertical.industryNoun} engagements ship remotely
                    in 1–2 weeks.
                  </p>
                </article>

                <article className="vert-locality-card">
                  <span className="vert-locality-card-label">
                    {city.name} at a glance
                  </span>
                  <dl className="vert-locality-stats">
                    <div>
                      <dt>Population</dt>
                      <dd>{city.population}</dd>
                    </div>
                    <div>
                      <dt>County</dt>
                      <dd>{city.county}</dd>
                    </div>
                    <div>
                      <dt>Region</dt>
                      <dd>{city.descriptor}</dd>
                    </div>
                    <div>
                      <dt>2025 ADA filings · {vertical.name}</dt>
                      <dd>{vertical.lawsuitCount.toLocaleString()}</dd>
                    </div>
                  </dl>
                </article>
              </div>
            </div>
          </section>
        )}

        {/* WHY */}
        <section className="vert-why" id="why">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">Why {titlePrefix} sites get sued</span>
              <span className="num">01</span>
            </div>
            <h2 className="display vert-why-h2">
              The five places{" "}
              <em className="italic">{vertical.name.toLowerCase()} sites fail</em> WCAG.
            </h2>
            <ol className="vert-why-list">
              {vertical.pains.map((pain, i) => (
                <li key={pain.title}>
                  <span className="vert-why-num">— 0{i + 1}</span>
                  <div>
                    <h3>{pain.title}</h3>
                    <p>{pain.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* AUDIT */}
        <section className="vert-audit-section" id="audit">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">Audit yours, free</span>
              <span className="num">02</span>
            </div>
            <div className="vert-audit-head">
              <h2 className="display">
                {isLocal
                  ? `Drop your URL.`
                  : `Drop your URL.`}{" "}
                <em className="italic">See what&apos;s broken.</em>
              </h2>
              <p className="sub">
                Live mobile scores in seconds — same engine Google uses to rank you.
                No email required.
              </p>
            </div>
            <AuditTool />
          </div>
        </section>

        {/* PACKAGE */}
        <section className="vert-package" id="package">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">The package</span>
              <span className="num">03</span>
            </div>
            <h2 className="display vert-package-h2">
              Everything a modern {vertical.industryNoun} site{" "}
              <em className="italic">actually needs.</em>
            </h2>
            <div className="vert-package-grid">
              <article className="vert-package-card">
                <h3>What&apos;s included</h3>
                <ul>
                  {vertical.packageIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="vert-package-card">
                <h3>Timeline · 1–2 weeks</h3>
                <ul>
                  <li>
                    <strong>Day 1–2 ·</strong> Free audit + fixed-scope written quote
                  </li>
                  <li>
                    <strong>Day 3–7 ·</strong> Build (you see progress daily, not weekly)
                  </li>
                  <li>
                    <strong>Day 8–10 ·</strong> Your review + iteration
                  </li>
                  <li>
                    <strong>Day 11–14 ·</strong> Ship + accessibility statement live
                  </li>
                  <li>
                    <strong>Quarterly ·</strong> Optional compliance review retainer
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* RISK */}
        <section className="vert-risk">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">What&apos;s at risk</span>
              <span className="num">04</span>
            </div>
            <h2 className="display vert-risk-h2">
              <em>{vertical.lawsuitPercent}</em> of all ADA web lawsuits hit{" "}
              {vertical.industryNounPlural} in 2025.
            </h2>
            <p className="vert-risk-lede">
              That&apos;s <em>{vertical.lawsuitCount.toLocaleString()} cases</em>.
              Average settlement runs <em>$25,000–$50,000</em>; attorneys&apos;
              fees on top. <em>77%</em> of defendants are small businesses
              earning under $25M. Remediation costs a small fraction of either
              number — and the demand letter doesn&apos;t care how good your
              service is.
            </p>
            <p className="vert-risk-source">
              Source: EcomBack 2025 ADA Website Accessibility Lawsuit Report ·
              UsableNet 2025 Year-End Report
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="vert-process">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">How it goes</span>
              <span className="num">05</span>
            </div>
            <h2 className="display vert-process-h2">
              Audit. Quote. Ship.{" "}
              <em className="italic">No agency runaround.</em>
            </h2>
            <ol className="vert-process-list">
              <li>
                <span className="vert-process-num">— 01</span>
                <div>
                  <h3>Audit (free)</h3>
                  <p>
                    Run our automated audit above, or let us hand-write one. We
                    return a written report with every WCAG criterion you fail,
                    every Core Web Vital miss, and what each one would cost to
                    fix.
                  </p>
                </div>
              </li>
              <li>
                <span className="vert-process-num">— 02</span>
                <div>
                  <h3>Fixed-scope quote</h3>
                  <p>
                    Tied to a defined deliverable list. Not hourly. We tell you
                    the price before any work begins; if it changes, you sign
                    off first.
                  </p>
                </div>
              </li>
              <li>
                <span className="vert-process-num">— 03</span>
                <div>
                  <h3>1–2 week build, daily check-ins</h3>
                  <p>
                    You see what we&apos;re building each day, not in a Friday
                    update. We ship on the date in the quote.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* CROSS-LINKS — only on city pages */}
        {isLocal && (
          <section className="vert-crosslinks" aria-labelledby="crosslinks-heading">
            <div className="wrap">
              <h2 id="crosslinks-heading" className="vert-crosslinks-h2">
                Other places we work · other industries we rebuild.
              </h2>

              <div className="vert-crosslinks-grid">
                <div className="vert-crosslinks-col">
                  <span className="vert-crosslinks-label">
                    {vertical.name} in other cities
                  </span>
                  <ul>
                    {cities
                      .filter((c) => c.slug !== city.slug)
                      .map((c) => (
                        <li key={c.slug}>
                          <Link href={`/${vertical.slug}/${c.slug}`}>
                            {c.name} {vertical.name.toLowerCase()}
                            <span aria-hidden="true"> ↗</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="vert-crosslinks-col">
                  <span className="vert-crosslinks-label">
                    Other industries in {city.name}
                  </span>
                  <ul>
                    {verticals
                      .filter((v) => v.slug !== vertical.slug)
                      .map((v) => (
                        <li key={v.slug}>
                          <Link href={`/${v.slug}/${city.slug}`}>
                            {city.name} {v.name.toLowerCase()}
                            <span aria-hidden="true"> ↗</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="faq vert-faq" id="faq">
          <div className="wrap">
            <div className="section-label">
              <span className="eyebrow">{vertical.name} FAQ</span>
              <span className="num">06</span>
            </div>
            <div className="faq-head">
              <h2 className="display">
                The questions every {vertical.industryNoun} owner asks first.
              </h2>
            </div>
            <div className="faq-list">
              {vertical.faq.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="vert-cta">
          <div className="wrap">
            <h2 className="display">
              Get the audit. <em className="accent">Then decide.</em>
            </h2>
            <p>
              Free. 1–2 weeks if you move forward. No overlay widgets. No
              6-month timelines.
            </p>
            <div className="vert-cta-stack">
              <Link href="#audit" className="btn">
                Run the free audit
                <span className="arrow" aria-hidden="true">
                  <ArrowGlyph />
                </span>
              </Link>
              <a
                href={`mailto:jagib07@gmail.com?subject=${encodeURIComponent(
                  `${titlePrefix} accessibility audit`
                )}`}
                className="cta-email"
              >
                jagib07@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
