import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "./cases";
import { SiteHeader } from "../SiteHeader";
import { SiteFooter } from "../SiteFooter";

export const metadata: Metadata = {
  title: "Work — WebCheer",
  description: "Selected case studies from WebCheer.",
  robots: { index: false, follow: false },
};

export default function WorkIndex() {
  return (
    <>
      <SiteHeader />

      <main id="main">

      <section className="case-hero">
        <div className="wrap">
          <div className="case-eyebrow">
            <Link href="/">← Home</Link>
            <span>Work · {cases.length} case studies</span>
          </div>
          <h1 className="display case-title">
            Selected <em className="italic">work.</em>
          </h1>
          <p className="case-tagline">
            Small businesses that needed a faster, more accessible site — and the
            measurable lift that followed.
          </p>
        </div>
      </section>

      <section className="case-section">
        <div className="wrap">
          <ul className="work-list">
            {cases.map((c, i) => (
              <li key={c.slug}>
                <Link href={`/work/${c.slug}`} className="work-row">
                  <span className="work-row-num">— 0{i + 1}</span>
                  <span className="work-row-name">{c.client}</span>
                  <span className="work-row-meta">{c.industry}</span>
                  <span className="work-row-cta">Read case ↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      </main>

      <SiteFooter />
    </>
  );
}
