import Link from "next/link";
import { HomeAnimations } from "./HomeAnimations";
import { AuditTool } from "./AuditTool";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StartForm } from "./start/StartForm";
import { verticals, cities } from "./local/data";

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

const LighthouseMetric = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => (
  <div className="lh-metric">
    <div className="lh-ring">
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <circle className="lh-ring-bg" cx="18" cy="18" r="15.9" />
        <circle
          className="lh-ring-fg"
          cx="18"
          cy="18"
          r="15.9"
          style={{ animationDelay: `${delay}ms` }}
        />
      </svg>
      <span
        className="lh-num"
        data-count-up
        data-count-delay={String(delay)}
      >
        100
      </span>
    </div>
    <span className="lh-label">{label}</span>
  </div>
);

const HeroCinematic = () => (
  <div className="cinematic-track" id="hero-cinematic">
    <div className="cinematic-stage">
      <div className="rebuild-progress" aria-hidden="true">
        <div className="rebuild-progress-bar" />
      </div>

      <div className="rebuild-intro" aria-hidden="true">
        <span className="rebuild-intro-eyebrow">Live demo</span>
        <p className="rebuild-intro-headline">
          An ordinary small-business site. <em>Scroll</em> to watch us rebuild it.
        </p>
      </div>

      <div className="rebuild-grid">
        <div className="rebuild-frame" aria-hidden="true">
          <div className="rebuild-chrome">
            <span className="rebuild-dot" />
            <span className="rebuild-dot" />
            <span className="rebuild-dot" />
            <div className="rebuild-url">harbordental.com</div>
          </div>

          <div className="rebuild-site">
            <div className="rebuild-site-top">
              <div className="rebuild-logo">
                <span className="rebuild-logo-star">★</span> Harbor Dental{" "}
                <span className="rebuild-logo-star">★</span>
              </div>
              <nav className="rebuild-nav">
                <a>Home</a>
                <a>About Us</a>
                <a>Our Services</a>
                <a>Contact!</a>
              </nav>
              <a className="rebuild-site-call" href="#" tabIndex={-1}>
                Book a visit
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="rebuild-hero">
              <div className="rebuild-hero-text">
                <span className="rebuild-eyebrow">
                  Family dentistry · Long Beach · since 1985
                </span>
                <h1 className="rebuild-h1">
                  Welcome to Harbor Dental<span className="rebuild-h1-bang">!!!</span>
                </h1>
                <p className="rebuild-tagline">Family Dentistry • Since 1985</p>
                <p className="rebuild-body">
                  <span className="rebuild-body-bad">
                    We are a family dental practice serving Long Beach for over 40 years.
                    Schedule your appointment today!
                  </span>
                  <span className="rebuild-body-good">
                    A family dental practice serving Long Beach for over forty years.
                    New patients welcome.
                  </span>
                </p>
                <a className="rebuild-cta" href="#" tabIndex={-1}>
                  <span className="rebuild-cta-bad">Click Here For Appointment</span>
                  <span className="rebuild-cta-good">Book a visit</span>
                  <span className="rebuild-cta-arrow" aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="rebuild-image">
                <div className="rebuild-image-broken" aria-hidden="true">
                  <svg
                    viewBox="0 0 64 48"
                    width="40"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="4" width="56" height="40" rx="2" />
                    <path d="M 4 36 L 22 22 L 36 32 L 50 18 L 60 26" />
                    <circle cx="20" cy="16" r="3" />
                  </svg>
                  <span>image_dr_smith.JPG</span>
                </div>
                <div className="rebuild-image-loaded" aria-hidden="true">
                  <svg
                    className="rebuild-illust"
                    viewBox="0 0 240 180"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <defs>
                      <linearGradient id="dental-bg" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D8C8A4" />
                        <stop offset="55%" stopColor="#E8D7B8" />
                        <stop offset="100%" stopColor="#F0E5CC" />
                      </linearGradient>
                      <radialGradient id="dental-bokeh-warm" cx="22%" cy="34%" r="42%">
                        <stop offset="0%" stopColor="rgba(252, 232, 196, 0.95)" />
                        <stop offset="100%" stopColor="rgba(252, 232, 196, 0)" />
                      </radialGradient>
                      <radialGradient id="dental-bokeh-cool" cx="78%" cy="68%" r="42%">
                        <stop offset="0%" stopColor="rgba(180, 208, 220, 0.55)" />
                        <stop offset="100%" stopColor="rgba(180, 208, 220, 0)" />
                      </radialGradient>
                      <radialGradient id="dental-rim" cx="50%" cy="50%" r="50%">
                        <stop offset="92%" stopColor="rgba(0, 0, 0, 0)" />
                        <stop offset="100%" stopColor="rgba(0, 0, 0, 0.12)" />
                      </radialGradient>
                    </defs>
                    <rect width="240" height="180" fill="url(#dental-bg)" />
                    <rect width="240" height="180" fill="url(#dental-bokeh-warm)" />
                    <rect width="240" height="180" fill="url(#dental-bokeh-cool)" />
                    <rect width="240" height="180" fill="url(#dental-rim)" />
                    {/* editorial accent — small frame mark in the corner */}
                    <rect x="14" y="14" width="22" height="1.6" fill="#1FA7EE" opacity="0.85" />
                    <rect x="14" y="14" width="1.6" height="22" fill="#1FA7EE" opacity="0.85" />
                  </svg>
                </div>
                <p className="rebuild-image-caption">
                  Dr. Smith greeting a young patient on her first visit.
                </p>
              </div>
            </div>

            <ul className="rebuild-services" aria-hidden="true">
              <li>Cleanings</li>
              <li>Cosmetic</li>
              <li>Family</li>
              <li>Emergency</li>
              <li>Insurance accepted</li>
            </ul>

            <div className="rebuild-foot">
              <span className="rebuild-foot-item">
                <span className="rebuild-foot-glyph">📞</span>
                <span>(562) 555-0142</span>
              </span>
              <span className="rebuild-foot-item">
                <span className="rebuild-foot-glyph">⏱</span>
                <span>Mon – Fri · 8 — 5</span>
              </span>
              <span className="rebuild-foot-item">
                <span className="rebuild-foot-glyph">📍</span>
                <span>1234 Atlantic Ave, Long Beach</span>
              </span>
            </div>
          </div>

          {/* Issue callouts — fade out as their fix lands */}
          <span className="rebuild-issue" data-fix="typography">
            <span className="rebuild-issue-dot" />
            <span className="rebuild-issue-text">Comic Sans + decoration</span>
          </span>
          <span className="rebuild-issue" data-fix="contrast">
            <span className="rebuild-issue-dot" />
            <span className="rebuild-issue-text">Contrast 1.7 : 1 — fail</span>
          </span>
          <span className="rebuild-issue" data-fix="imagery">
            <span className="rebuild-issue-dot" />
            <span className="rebuild-issue-text">Missing alt text</span>
          </span>
          <span className="rebuild-issue" data-fix="touch">
            <span className="rebuild-issue-dot" />
            <span className="rebuild-issue-text">Tap target 14 px</span>
          </span>
        </div>

        <aside className="rebuild-side" aria-hidden="true">
          <span className="rebuild-side-eyebrow">Live rebuild</span>
          <ol className="rebuild-stages-list">
            <li data-stage-row="1"><span className="rebuild-stage-num">— 01</span> Typography</li>
            <li data-stage-row="2"><span className="rebuild-stage-num">— 02</span> Contrast</li>
            <li data-stage-row="3"><span className="rebuild-stage-num">— 03</span> Imagery &amp; alt</li>
            <li data-stage-row="4"><span className="rebuild-stage-num">— 04</span> Touch &amp; focus</li>
            <li data-stage-row="5"><span className="rebuild-stage-num">— 05</span> Lighthouse</li>
          </ol>
          <div className="rebuild-score">
            <span className="rebuild-score-num" data-rebuild-score>32</span>
            <span className="rebuild-score-label">/ 100 · Lighthouse</span>
          </div>
        </aside>
      </div>

      <div className="rebuild-cue" aria-hidden="true">
        <span className="rebuild-cue-arrow">↓</span>
        <span className="rebuild-cue-label">Scroll to rebuild</span>
      </div>

      <div className="rebuild-summary">
        <p>
          Five fixes. One to two weeks. Lighthouse{" "}
          <em>32&nbsp;→&nbsp;100</em>.
        </p>
        <a href="#contact" className="btn">
          Start your rebuild
          <span className="arrow" aria-hidden="true">
            <ArrowGlyph />
          </span>
        </a>
      </div>
    </div>
  </div>
);

const marqueeItems = [
  "Mobile-first redesigns",
  "WCAG 2.1 AA audits",
  "Code-level remediation",
  "Core Web Vitals tuning",
  "Quarterly compliance reviews",
  "Screen-reader testing",
];

export default function Home() {
  return (
    <>
      <HomeAnimations />
      <SiteHeader
        links={[
          { href: "#services", label: "Services" },
          { href: "#why", label: "Why it matters" },
          { href: "#process", label: "Process" },
          { href: "/audit", label: "Free audit" },
          { href: "#faq", label: "FAQ" },
        ]}
        contactHref="#contact"
      />

      <main id="main">

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="wrap">
          <h1 className="display hero-headline">
            Websites that work for <em className="accent">everyone.</em>
          </h1>

          <div className="hero-bottom">
            <p className="hero-lede">
              We modernize outdated small-business sites and bring them up to{" "}
              <em className="serif italic">WCAG 2.1 AA</em> — so your visitors get a faster,
              friendlier experience and you sleep easy on compliance.
            </p>
            <div className="hero-cta-stack">
              <a href="#contact" className="btn">
                Start your upgrade
                <span className="arrow" aria-hidden="true">
                  <ArrowGlyph />
                </span>
              </a>
              <a href="#rebuild" className="btn btn-ghost">
                See it in action
                <span className="arrow" aria-hidden="true">
                  <ArrowGlyph />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* REBUILD CINEMATIC */}
      <section className="rebuild-section" id="rebuild">
        <HeroCinematic />
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Services</span>
            <span className="num">01</span>
          </div>

          <div className="services-head">
            <h2 className="display">
              What we make is <em className="italic">built to connect.</em>
            </h2>
            <p className="sub">
              Two services, focused. We rebuild small-business sites the modern web demands,
              and we make them accessible by default — not as an afterthought.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card reveal">
              <div className="card-top">
                <span className="card-cat">Service</span>
                <span className="card-num italic">— 01</span>
              </div>
              <div className="service-visual" aria-hidden="true">
                <div className="visual-redesign">
                  <div className="vr-before">
                    <div className="vr-bar">
                      <i /><i /><i />
                    </div>
                    <div className="vr-before-body">
                      <div className="vr-bf-line a" />
                      <div className="vr-bf-line b" />
                      <div className="vr-bf-line c" />
                      <div className="vr-bf-block" />
                    </div>
                    <span className="vr-tag">Before</span>
                  </div>
                  <div className="vr-after">
                    <div className="vr-bar light">
                      <i /><i /><i />
                      <span className="vr-url">studio.com</span>
                    </div>
                    <div className="vr-after-body">
                      <div className="vr-nav">
                        <span className="vr-logo">
                          <em>S</em>tudio
                        </span>
                        <span className="vr-nav-items">
                          <span /><span /><span />
                        </span>
                      </div>
                      <div className="vr-hero">
                        <div className="vr-hero-text">
                          <span className="vr-eyebrow" />
                          <span className="vr-headline a" />
                          <span className="vr-headline b" />
                          <span className="vr-body a" />
                          <span className="vr-body b" />
                          <span className="vr-cta" />
                        </div>
                        <div className="vr-hero-art">
                          <span className="vr-art-circle" />
                          <span className="vr-art-square" />
                        </div>
                      </div>
                    </div>
                    <span className="vr-tag accent">After</span>
                  </div>
                </div>
              </div>
              <h3>
                Website <em className="italic">Redesign.</em>
              </h3>
              <p>
                Modern, fast, mobile-first rebuilds for small businesses — built on a CMS
                your team can actually use, tuned for Core Web Vitals.
              </p>
              <a href="#contact" className="card-link">
                Start a redesign
              </a>
            </article>

            <article className="service-card dark reveal">
              <div className="card-top">
                <span className="card-cat">Service</span>
                <span className="card-num italic">— 02</span>
              </div>
              <div className="service-visual" aria-hidden="true">
                <div className="visual-lighthouse">
                  <div className="lh-grid">
                    <LighthouseMetric label="Performance" delay={200} />
                    <LighthouseMetric label="Accessibility" delay={400} />
                    <LighthouseMetric label="Best Practices" delay={600} />
                    <LighthouseMetric label="SEO" delay={800} />
                  </div>
                </div>
              </div>
              <h3>
                ADA <em className="italic">Accessibility.</em>
              </h3>
              <p>
                WCAG 2.1 AA audits, code-level remediation (no overlay widgets), and
                quarterly check-ins — to widen your reach and reduce legal risk.
              </p>
              <a href="#contact" className="card-link">
                Start your upgrade
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CUT SCENE */}
      <section className="cut-scene" id="cut-scene" aria-label="Most small-business sites fail accessibility — we fix that.">
        <div className="cut-stage">
          <div className="cut-context">
            <span className="eyebrow">— What most sites claim</span>
          </div>

          <div className="cut-canvas" aria-hidden="true">
            <div className="cut-card">
              <span className="cut-card-title">
                Our site is<br />accessible to<br />everyone.
              </span>
              <span className="cut-card-strike" />
              <div className="cut-card-stripes">
                <span /><span /><span /><span />
              </div>
              <span className="cut-card-stamp">FALSE!</span>
            </div>

            <svg
              className="cut-scissors"
              viewBox="0 0 240 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="28" cy="28" r="18" />
              <circle cx="28" cy="82" r="18" />
              <path d="M 46 36 L 88 50" />
              <path d="M 46 74 L 88 60" />
              <circle cx="92" cy="55" r="5" fill="currentColor" />
              <path d="M 92 55 L 226 28" />
              <path d="M 92 55 L 226 82" />
            </svg>
          </div>

          <div className="cut-reveal">
            <span className="cut-reveal-eyebrow">WCAG 2.1 AA · Conformant</span>
            <span className="cut-reveal-big">
              We make it <em>true.</em>
            </span>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="why" id="why">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Why it matters</span>
            <span className="num">02</span>
          </div>

          <div className="why-head">
            <h2 className="display">
              Accessibility isn&apos;t a checkbox. It&apos;s <em className="italic">growth.</em>
            </h2>
          </div>

          <div className="why-grid">
            <div className="why-item reveal">
              <div className="why-num"><em data-count-up>27</em>%</div>
              <div className="why-label">of US adults live with a disability.</div>
              <p className="why-desc">
                Roughly 70 million people whose needs your site should serve from day one.
              </p>
              <span className="why-source">CDC · 2024</span>
            </div>
            <div className="why-item reveal">
              <div className="why-num"><em data-count-up>4,061</em></div>
              <div className="why-label">ADA web lawsuits filed in 2024.</div>
              <p className="why-desc">
                Federal &amp; state ADA digital accessibility filings continue trending up
                year over year.
              </p>
              <span className="why-source">UsableNet · 2024</span>
            </div>
            <div className="why-item reveal">
              <div className="why-num"><em data-count-up>50</em>%</div>
              <div className="why-label">
                of WCAG best-practices double as SEO wins.
              </div>
              <p className="why-desc">
                Alt text, semantic markup, headings — accessibility and search benefit from
                the same craft.
              </p>
              <span className="why-source">Web.dev guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT TOOL */}
      <section className="audit-section" id="audit">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Try it now</span>
            <span className="num">★</span>
          </div>
          <div className="audit-head">
            <h2 className="display">
              Run a free <em className="italic">audit</em> on your site.
            </h2>
            <p className="sub">
              Drop in your URL — we pull live accessibility, performance, best-practices,
              and SEO scores in seconds via Google PageSpeed Insights. No email required.
            </p>
          </div>
          <AuditTool />

          <p className="audit-page-link">
            <a href="/audit">
              See the full audit guide — what each score means, how it works, and FAQ <span aria-hidden="true">↗</span>
            </a>
          </p>

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

      {/* CLIENTS */}
      <section className="clients" id="clients">
        <div className="wrap">
          <div className="clients-head">
            <span className="eyebrow">Trusted by</span>
            <h2 className="display">
              Small businesses, <em className="italic">big results.</em>
            </h2>
          </div>

          <div className="logo-row clients-row-3">
            <a
              href="https://www.milikinsurance.com"
              target="_blank"
              rel="noopener"
              className="logo-cell client-cell"
            >
              <span className="logo-name">
                Milik <em>&amp; Associates</em>
              </span>
              <span className="client-meta">
                milikinsurance.com{" "}
                <span className="client-arrow" aria-hidden="true">↗</span>
              </span>
            </a>
            <a
              href="https://www.thebbqhq.com"
              target="_blank"
              rel="noopener"
              className="logo-cell client-cell"
            >
              <span className="logo-name">
                The BBQ <em>HQ</em>
              </span>
              <span className="client-meta">
                thebbqhq.com{" "}
                <span className="client-arrow" aria-hidden="true">↗</span>
              </span>
            </a>
            <a
              href="https://mpcgold.com"
              target="_blank"
              rel="noopener"
              className="logo-cell client-cell"
            >
              <span className="logo-name">
                MPC <em>Gold</em>
              </span>
              <span className="client-meta">
                mpcgold.com{" "}
                <span className="client-arrow" aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Process</span>
            <span className="num">03</span>
          </div>

          <div className="process-head">
            <h2 className="display">
              A simple, three-step path from <em className="italic">audit to launch.</em>
            </h2>
            <p className="sub">
              No bloated discovery decks. No 6-month timelines. We move fast, keep you in
              the loop, and ship.
            </p>
          </div>

          <div className="process-list">
            <div className="process-step">
              <span className="num">— 01</span>
              <h3>
                Audit <em>&amp; Discover</em>
              </h3>
              <p>
                A free site review covering accessibility, performance, design, and SEO —
                delivered as a clear written report within five business days.
              </p>
            </div>
            <div className="process-step">
              <span className="num">— 02</span>
              <h3>
                Redesign <em>&amp; Remediate</em>
              </h3>
              <p>
                We rebuild what needs rebuilding and fix what needs fixing — collaborating
                with you in weekly check-ins, never month-long silences.
              </p>
            </div>
            <div className="process-step">
              <span className="num">— 03</span>
              <h3>
                Launch <em>&amp; Maintain</em>
              </h3>
              <p>
                We handle deployment, post-launch monitoring, and quarterly compliance
                reviews so your site stays sharp as standards evolve.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* LOCAL PAGES */}
      <section className="local-pages" id="local-pages">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Where we work</span>
            <span className="num">04</span>
          </div>

          <div className="local-pages-head">
            <h2 className="display">
              Local pages, <em className="italic">by industry & city.</em>
            </h2>
            <p className="sub">
              We&apos;re a Southern California studio. These pages cover the
              specifics of ADA web litigation by industry and metro — what gets
              cited, what we rebuild, and what your engagement actually looks
              like in your city.
            </p>
          </div>

          <div className="local-pages-grid">
            {verticals.map((v) => (
              <article className="local-pages-row" key={v.slug}>
                <header className="local-pages-row-head">
                  <h3>
                    <Link href={`/${v.slug}`}>{v.name}</Link>
                  </h3>
                  <span className="local-pages-row-meta">
                    {v.lawsuitCount.toLocaleString()} cases · 2025
                  </span>
                </header>
                <ul className="local-pages-row-cities">
                  {cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${v.slug}/${c.slug}`}>
                        {c.name}
                        <span aria-hidden="true"> ↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="section-label">
            <span className="eyebrow">Questions</span>
            <span className="num">05</span>
          </div>
          <div className="faq-head">
            <h2 className="display">
              The things <em className="italic">people ask</em> before we start.
            </h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                <span>How long does a redesign take?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Most small-business redesigns ship in 1–2 weeks from kickoff. We work in
                  daily check-ins so you see progress every day — not a black box for
                  weeks on end.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>How does pricing work?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  The audit is free. Engagements are fixed-scope, fixed-price — we send
                  a written quote tied to a defined deliverable list, never an open
                  hourly rate. Tell us what you have and where you want to be, and
                  we&apos;ll price it from there.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Why not an accessibility overlay widget?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Overlays don&apos;t fix the underlying code — they layer JavaScript on top.
                  Courts have ruled that overlay-only sites are still inaccessible, and the
                  vast majority of ADA lawsuits in 2024 named sites that used one. We
                  remediate at the source so the site is genuinely usable, not just
                  &ldquo;covered.&rdquo;
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Who owns the code and the site after launch?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  You do — fully. Code, content, hosting access, domain, analytics. We hand
                  over a clean repo and walk your team through deploys. No vendor lock-in.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Do you maintain the site after launch?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  Optional quarterly compliance reviews keep your site aligned with WCAG as
                  the standard evolves, plus a small monthly retainer for content tweaks if
                  your team prefers to delegate. Both are opt-in — never required.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>What CMS or stack do you build on?</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  We default to Next.js with a friendly headless CMS your team can edit
                  without touching code. If you&apos;re happily on Webflow, Shopify, or
                  WordPress, we work with what you have — we don&apos;t force a migration.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="wrap">
          <h2 className="display">
            Make your site work for <em className="accent">everyone.</em>
          </h2>
          <p className="cta-lede">
            Drop your details — we&apos;ll reply within 1 business day with a plan and a quote.
          </p>
          <div className="cta-form-wrap">
            <StartForm />
          </div>
          <a href="mailto:james@webcheer.co" className="cta-email">
            Or email james@webcheer.co
          </a>
        </div>
      </section>

      </main>

      <SiteFooter />
    </>
  );
}
