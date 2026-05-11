"use client";

import { useEffect, useState, type FormEvent } from "react";

type Scores = {
  accessibility: number | null;
  performance: number | null;
  bestPractices: number | null;
  seo: number | null;
};

type Issue = {
  id: string;
  title: string;
  score: number;
  weight: number;
  displayValue: string | null;
};

type Issues = {
  accessibility: Issue[];
  performance: Issue[];
  bestPractices: Issue[];
  seo: Issue[];
};

type Result = {
  url: string;
  finalUrl: string;
  fetchedAt: string;
  scores: Scores;
  issues?: Issues;
};

const DIAL_R = 38;
const DIAL_C = 2 * Math.PI * DIAL_R;

const CATEGORY_INFO: Record<string, string> = {
  Accessibility:
    "Color contrast, keyboard navigation, ARIA, alt text, form labels.",
  Performance:
    "Page load speed, Core Web Vitals, render blocking, JavaScript weight.",
  "Best practices":
    "HTTPS, security, console errors, modern web standards.",
  SEO: "Meta tags, mobile-friendliness, crawlability, structured data.",
};

const LOADING_LABELS = [
  "Accessibility",
  "Performance",
  "Best practices",
  "SEO",
] as const;

function loadingStatus(elapsed: number): string {
  if (elapsed < 4) return "Connecting to Google PageSpeed Insights…";
  if (elapsed < 14) return "Loading the page in a virtual browser…";
  if (elapsed < 28) return "Running Lighthouse across 4 categories…";
  if (elapsed < 50) return "Analyzing scores — slow sites take a bit longer…";
  if (elapsed < 90) return "Almost there — wrapping up the report…";
  return "Still running. This site is unusually slow — hang tight.";
}

export function AuditTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!loading) {
      setElapsed(0);
      return;
    }
    const start = Date.now();
    const interval = window.setInterval(() => {
      setElapsed((Date.now() - start) / 1000);
    }, 250);
    return () => window.clearInterval(interval);
  }, [loading]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    let target = url.trim();
    if (!target) return;
    if (!/^https?:\/\//i.test(target)) target = `https://${target}`;
    setLoading(true);
    try {
      const res = await fetch(`/api/audit?url=${encodeURIComponent(target)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Audit failed");
      setResult(data as Result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Audit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="audit-wrap">
      <form className="audit-form" onSubmit={onSubmit} noValidate>
        <label htmlFor="audit-url" className="visually-hidden">
          Your website URL
        </label>
        <input
          id="audit-url"
          type="text"
          inputMode="url"
          name="url"
          placeholder="yourwebsite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={loading}
          autoComplete="url"
          required
        />
        <button
          type="submit"
          className="btn audit-submit"
          disabled={loading || !url.trim()}
        >
          {loading ? "Auditing…" : "Run free audit"}
          <span className="arrow" aria-hidden="true">
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
          </span>
        </button>
      </form>

      <div className="audit-feedback" aria-live="polite">
        {error && <p className="audit-error">⚠ {error}</p>}
      </div>

      {loading && (
        <div className="audit-loading">
          <div className="audit-loading-status" role="status">
            <span className="audit-loading-dot" aria-hidden="true" />
            <span className="audit-loading-message">{loadingStatus(elapsed)}</span>
            <span className="audit-loading-elapsed">{Math.floor(elapsed)}s</span>
          </div>
          <div className="audit-grid">
            {LOADING_LABELS.map((label) => (
              <div key={label} className="audit-dial audit-dial-loading">
                <div className="audit-dial-ring">
                  <svg viewBox="0 0 100 100" className="audit-dial-svg" aria-hidden="true">
                    <circle cx="50" cy="50" r={DIAL_R} className="audit-dial-track" />
                  </svg>
                  <span className="audit-dial-number">·</span>
                </div>
                <div className="audit-dial-meta">
                  <span className="audit-dial-label">{label}</span>
                  <p className="audit-dial-desc">{CATEGORY_INFO[label]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {result && !loading && (
        <div className="audit-result">
          <p className="audit-result-meta">
            Mobile audit · <span>{result.finalUrl}</span>
          </p>
          <div className="audit-grid">
            <ScoreDial
              label="Accessibility"
              value={result.scores.accessibility}
              issues={result.issues?.accessibility ?? []}
            />
            <ScoreDial
              label="Performance"
              value={result.scores.performance}
              issues={result.issues?.performance ?? []}
            />
            <ScoreDial
              label="Best practices"
              value={result.scores.bestPractices}
              issues={result.issues?.bestPractices ?? []}
            />
            <ScoreDial
              label="SEO"
              value={result.scores.seo}
              issues={result.issues?.seo ?? []}
            />
          </div>
          <RiskCallout score={result.scores.accessibility} />

          <div className="audit-result-cta">
            <p>Want a written report with code-level fixes?</p>
            <a href="#contact" className="btn">
              Get the full report
              <span className="arrow" aria-hidden="true">
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
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function RiskCallout({ score }: { score: number | null }) {
  const v = typeof score === "number" ? score : 0;
  let tone: "good" | "warn" | "bad";
  let headline: string;
  let body: string;

  if (v >= 95) {
    tone = "good";
    headline = "You're in great shape.";
    body =
      "Sites at this score rarely get cited in WCAG demand letters. The risk is regression — a quarterly review keeps you locked in.";
  } else if (v >= 80) {
    tone = "warn";
    headline = "Probably safe today — but exposed.";
    body =
      "5,000+ ADA web lawsuits hit small businesses in 2025, up 24% from 2024. 77% of defendants earned under $25M. A single regression at this score is enough to trigger a demand letter.";
  } else if (v >= 50) {
    tone = "bad";
    headline = "Real exposure.";
    body =
      "Sites at this score level are commonly cited in WCAG demand letters. Average settlement: $25,000–$50,000. Restaurants, ecommerce, beauty, and health practices were hit ~3,300 times in 2025 alone.";
  } else {
    tone = "bad";
    headline = "High risk — fix this now.";
    body =
      "Below 50 is the score range where the bulk of ADA demand letters get filed. Settlements run $25,000–$50,000; remediation costs a small fraction. Don't wait for the letter.";
  }

  return (
    <aside className={`audit-risk-callout tone-${tone}`}>
      <div className="audit-risk-callout-head">
        <span className="audit-risk-callout-eyebrow">What&apos;s at risk</span>
        <span className="audit-risk-callout-stat">
          5,000<span className="audit-risk-callout-stat-plus">+</span>
          <span className="audit-risk-callout-stat-label">
            ADA lawsuits filed in 2025
          </span>
        </span>
      </div>
      <h3 className="audit-risk-callout-headline">{headline}</h3>
      <p className="audit-risk-callout-body">{body}</p>
    </aside>
  );
}

function ScoreDial({
  label,
  value,
  issues = [],
}: {
  label: string;
  value: number | null;
  issues?: Issue[];
}) {
  const v = typeof value === "number" ? value : 0;
  const tone = value === null ? "none" : v >= 90 ? "good" : v >= 50 ? "warn" : "bad";
  const offset = DIAL_C - (v / 100) * DIAL_C;
  const desc = CATEGORY_INFO[label];
  const visible = issues.slice(0, 3);
  const overflow = Math.max(0, issues.length - visible.length);

  return (
    <div className={`audit-dial tone-${tone}`}>
      <div className="audit-dial-ring">
        <svg viewBox="0 0 100 100" className="audit-dial-svg" aria-hidden="true">
          <circle cx="50" cy="50" r={DIAL_R} className="audit-dial-track" />
          <circle
            cx="50"
            cy="50"
            r={DIAL_R}
            className="audit-dial-fill"
            strokeDasharray={DIAL_C}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="audit-dial-number">{value === null ? "—" : value}</span>
      </div>
      <div className="audit-dial-meta">
        <span className="audit-dial-label">{label}</span>
        {desc && <p className="audit-dial-desc">{desc}</p>}
      </div>
      {issues.length === 0 ? (
        <p className="audit-dial-clear">All checks pass.</p>
      ) : (
        <div className="audit-dial-issues-wrap">
          <p className="audit-dial-issues-eyebrow">
            {issues.length} {issues.length === 1 ? "thing to fix" : "things to fix"}
          </p>
          <ul className="audit-dial-issues">
            {visible.map((issue) => (
              <li key={issue.id}>
                <span className="audit-dial-issue-title">{issue.title}</span>
                {issue.displayValue && (
                  <span className="audit-dial-issue-meta">{issue.displayValue}</span>
                )}
              </li>
            ))}
          </ul>
          {overflow > 0 && (
            <p className="audit-dial-issues-more">+ {overflow} more</p>
          )}
        </div>
      )}
    </div>
  );
}
