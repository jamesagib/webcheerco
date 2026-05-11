import type { Metadata } from "next";
import { StartForm } from "./StartForm";

export const metadata: Metadata = {
  title: "Upgrade your website — WebCheer",
  description:
    "The site upgrade you saw on Instagram — now for yours. Tell us about your site and we'll send back a plan.",
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return (
    <main className="start-page">
      <div className="start-wrap">
        <header className="start-head">
          <a href="/" className="start-brand">
            Web<em className="italic">Cheer</em>
          </a>
          <span className="start-from">From Instagram <span aria-hidden="true">↗</span></span>
        </header>

        <section className="start-hero">
          <h1 className="display start-h1">
            The website upgrade you saw on Instagram — <em className="italic">now for yours.</em>
          </h1>
          <p className="start-lede">
            We rebuild outdated small-business sites in 1–2 weeks. Modern, fast,
            mobile-first — and accessible by default.
          </p>
        </section>

        <section className="start-ba" aria-label="Before and after">
          <div className="start-ba-card start-ba-before">
            <span className="start-ba-tag">Before</span>
            <div className="start-ba-before-bar">
              <i /><i /><i />
            </div>
            <div className="start-ba-before-art">
              <div className="start-ba-before-h">WELCOME!!!</div>
              <div className="start-ba-before-p" />
              <div className="start-ba-before-p short" />
              <div className="start-ba-before-cta">CLICK&nbsp;HERE</div>
            </div>
          </div>
          <div className="start-ba-arrow" aria-hidden="true">→</div>
          <div className="start-ba-card start-ba-after">
            <span className="start-ba-tag accent">After</span>
            <div className="start-ba-after-bar">
              <i /><i /><i />
              <span>yoursite.com</span>
            </div>
            <div className="start-ba-after-art">
              <span className="start-ba-after-eyebrow">Family business · since 1985</span>
              <div className="start-ba-after-h">Care that meets you where you are.</div>
              <div className="start-ba-after-row">
                <span className="start-ba-after-cta">Book a visit <span aria-hidden="true">↗</span></span>
                <span className="start-ba-after-meta">⏱ 0.9s · 100 a11y</span>
              </div>
            </div>
          </div>
        </section>

        <section className="start-clients" aria-label="Recent rebuilds">
          <span className="start-clients-eyebrow">Recent rebuilds</span>
          <ul>
            <li>Milik <em className="italic">&amp; Associates</em></li>
            <li>The BBQ <em className="italic">HQ</em></li>
            <li>MPC <em className="italic">Gold</em></li>
          </ul>
        </section>

        <section className="start-form-section" id="form">
          <h2 className="display start-h2">
            Tell us about your <em className="italic">site.</em>
          </h2>
          <p className="start-form-lede">
            Drop your details — we&apos;ll reply within 1 business day with a plan and a quote.
          </p>
          <StartForm />
        </section>

        <footer className="start-foot">
          Or email{" "}
          <a href="mailto:james@webcheer.co">james@webcheer.co</a>
        </footer>
      </div>
    </main>
  );
}
