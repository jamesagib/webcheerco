import type { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let data: Record<string, unknown> | null = null;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }

  const name = typeof data?.name === "string" ? data.name.trim() : "";
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const site = typeof data?.site === "string" ? data.site.trim() : "";
  const message = typeof data?.message === "string" ? data.message.trim() : "";
  const source = typeof data?.source === "string" ? data.source.trim() : "";

  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email." },
      { status: 400 }
    );
  }
  if (
    name.length > 200 ||
    email.length > 200 ||
    site.length > 500 ||
    message.length > 5000
  ) {
    return Response.json({ error: "Input too long." }, { status: 400 });
  }

  const webhook = process.env.MAKE_WEBHOOK_URL;
  if (!webhook) {
    console.error("MAKE_WEBHOOK_URL is not set");
    return Response.json(
      { error: "Form is not configured yet." },
      { status: 500 }
    );
  }

  const payload = {
    name,
    email,
    site: site || null,
    message: message || null,
    source: source || null,
    submittedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent") || null,
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("Make webhook returned", res.status, await res.text().catch(() => ""));
      return Response.json(
        { error: "Couldn't send. Try again." },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Make webhook fetch failed:", e);
    return Response.json(
      { error: "Couldn't send. Try again." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
