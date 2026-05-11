import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 180;

const PSI_ENDPOINT =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("url");
  if (!raw) {
    return Response.json({ error: "Missing url" }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(raw);
  } catch {
    return Response.json({ error: "That doesn't look like a valid URL." }, { status: 400 });
  }
  if (!["http:", "https:"].includes(target.protocol)) {
    return Response.json({ error: "URL must start with http or https." }, { status: 400 });
  }

  const psi = new URL(PSI_ENDPOINT);
  psi.searchParams.set("url", target.toString());
  psi.searchParams.set("strategy", "mobile");
  for (const c of ["performance", "accessibility", "best-practices", "seo"]) {
    psi.searchParams.append("category", c);
  }
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (apiKey) psi.searchParams.set("key", apiKey);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 170_000);
  try {
    const res = await fetch(psi.toString(), { signal: controller.signal });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return Response.json(
        {
          error:
            res.status === 429
              ? "We're getting a lot of audits right now — try again in a minute."
              : `PageSpeed Insights returned ${res.status}. ${body.slice(0, 120)}`,
        },
        { status: 502 }
      );
    }
    const data = await res.json();
    const cats = data?.lighthouseResult?.categories ?? {};
    const audits = data?.lighthouseResult?.audits ?? {};
    return Response.json(
      {
        url: target.toString(),
        finalUrl: data?.lighthouseResult?.finalUrl ?? target.toString(),
        fetchedAt: data?.analysisUTCTimestamp ?? new Date().toISOString(),
        scores: {
          accessibility: pct(cats.accessibility?.score),
          performance: pct(cats.performance?.score),
          bestPractices: pct(cats["best-practices"]?.score),
          seo: pct(cats.seo?.score),
        },
        issues: {
          accessibility: topIssues(cats.accessibility, audits),
          performance: topIssues(cats.performance, audits),
          bestPractices: topIssues(cats["best-practices"], audits),
          seo: topIssues(cats.seo, audits),
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
        },
      }
    );
  } catch (err) {
    const message =
      err instanceof Error && err.name === "AbortError"
        ? "Audit took too long — the site may be slow to respond. Try again."
        : "Couldn't reach PageSpeed Insights right now.";
    return Response.json({ error: message }, { status: 504 });
  } finally {
    clearTimeout(timer);
  }
}

function pct(score: number | null | undefined) {
  if (typeof score !== "number") return null;
  return Math.round(score * 100);
}

type AuditRef = { id: string; weight?: number };
type LhAudit = {
  title?: string;
  score?: number | null;
  scoreDisplayMode?: string;
  displayValue?: string;
};

const SKIP_DISPLAY_MODES = new Set([
  "manual",
  "notApplicable",
  "informative",
  "hidden",
]);

function topIssues(
  category: { auditRefs?: AuditRef[] } | undefined,
  audits: Record<string, LhAudit>,
  limit = 5
) {
  const refs = category?.auditRefs ?? [];
  const items = refs
    .map((r) => {
      const a = audits[r.id];
      if (!a) return null;
      const score = a.score;
      if (typeof score !== "number") return null;
      if (score >= 1) return null;
      if (a.scoreDisplayMode && SKIP_DISPLAY_MODES.has(a.scoreDisplayMode)) return null;
      return {
        id: r.id,
        title: a.title ?? r.id,
        score,
        weight: r.weight ?? 0,
        displayValue: a.displayValue ?? null,
      };
    })
    .filter(<T,>(x: T | null): x is T => x !== null);

  items.sort((a, b) => {
    if (b.weight !== a.weight) return b.weight - a.weight;
    return a.score - b.score;
  });
  return items.slice(0, limit);
}
