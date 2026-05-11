"use client";

import { useEffect, useState, type FormEvent } from "react";

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

export function StartForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get("utm_source") || params.get("ref") || "";
    setSource(utm || (document.referrer ? new URL(document.referrer).hostname : ""));
  }, []);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/start", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, site, message, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || "Couldn't send. Try again.");
        setStatus("error");
        return;
      }
      setStatus("ok");
    } catch {
      setError("Network error. Try again.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="start-form-ok">
        <p className="start-form-ok-h">Got it — talk soon.</p>
        <p className="start-form-ok-sub">
          We&apos;ll reply within 1 business day from{" "}
          <em className="italic">james@webcheer.co</em>.
        </p>
      </div>
    );
  }

  return (
    <form className="start-form" onSubmit={submit} noValidate>
      <label className="start-field">
        <span>Your name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          disabled={status === "loading"}
        />
      </label>
      <label className="start-field">
        <span>Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          inputMode="email"
          disabled={status === "loading"}
        />
      </label>
      <label className="start-field">
        <span>
          Your current site <em>(optional)</em>
        </span>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          placeholder="yourbusiness.com"
          autoComplete="url"
          disabled={status === "loading"}
        />
      </label>
      <label className="start-field">
        <span>
          What do you want fixed? <em>(optional)</em>
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          disabled={status === "loading"}
        />
      </label>
      <button
        type="submit"
        className="btn start-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send it"}
        <span className="arrow" aria-hidden="true">
          <ArrowGlyph />
        </span>
      </button>
      {error ? <p className="start-form-error">{error}</p> : null}
    </form>
  );
}
