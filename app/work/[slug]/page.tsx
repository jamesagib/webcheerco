import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cases, getCase } from "../cases";
import { SiteHeader } from "../../SiteHeader";
import { SiteFooter } from "../../SiteFooter";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case study — WebCheer" };
  return {
    title: `${c.client} — WebCheer`,
    description: c.tagline,
    robots: { index: false, follow: false },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const idx = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <>
      <SiteHeader />

      <main id="main">

      <article className="case">
        <section className="case-hero">
          <div className="wrap">
            <div className="case-eyebrow">
              <Link href="/#clients">← Back to work</Link>
              <span>{c.industry} · {c.year}</span>
            </div>
            <h1 className="display case-title">{c.client}</h1>
            <p className="case-tagline">{c.tagline}</p>

            <dl className="case-meta">
              <div>
                <dt>Timeline</dt>
                <dd>{c.duration}</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>{c.services.join(" · ")}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{c.stack.join(" · ")}</dd>
              </div>
              <div>
                <dt>Live</dt>
                <dd>
                  <a href={c.url} target="_blank" rel="noopener">
                    {c.url.replace(/^https?:\/\/(www\.)?/, "")}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <div className="case-block">
              <span className="eyebrow">— The problem</span>
              <p className="case-prose">{c.problem}</p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="wrap">
            <div className="case-block">
              <span className="eyebrow">— The approach</span>
              <ol className="case-approach">
                {c.approach.map((step, i) => (
                  <li key={i}>
                    <span className="case-approach-num">— 0{i + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="case-results">
          <div className="wrap">
            <span className="eyebrow">— The result</span>
            <div className="case-results-grid">
              {c.results.map((r) => (
                <div key={r.label} className="case-result">
                  <span className="case-result-value">{r.value}</span>
                  <span className="case-result-label">{r.label}</span>
                  {r.meta && <span className="case-result-meta">{r.meta}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-quote">
          <div className="wrap">
            <p>
              <span className="mark">“</span>
              {c.quote.text}
              <span className="mark">”</span>
            </p>
            <div className="case-quote-meta">
              <span>{c.quote.name}</span>
              <span className="case-quote-role">{c.quote.role}</span>
            </div>
          </div>
        </section>

        <section className="case-next">
          <div className="wrap">
            <Link href={`/work/${next.slug}`} className="case-next-link">
              <span className="eyebrow">Next case</span>
              <span className="case-next-name">{next.client} ↗</span>
            </Link>
          </div>
        </section>
      </article>

      </main>

      <SiteFooter />
    </>
  );
}
