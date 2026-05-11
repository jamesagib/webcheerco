"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

type LinkItem = { href: string; label: string };

const DEFAULT_LINKS: LinkItem[] = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why it matters" },
  { href: "/#process", label: "Process" },
  { href: "/audit", label: "Free audit" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader({
  links = DEFAULT_LINKS,
  contactHref = "/#contact",
}: {
  links?: LinkItem[];
  contactHref?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="brand" aria-label="WebCheer home">
            <Image
              src="/assets/webcheer-logo.png"
              alt="WebCheer"
              width={140}
              height={28}
              priority
            />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav-talk">
            <span className="nav-talk-label">Talk with us</span>
            <Link href={contactHref} className="btn">
              Start your upgrade
              <span className="arrow" aria-hidden="true">
                <ArrowGlyph />
              </span>
            </Link>
          </div>
          <button
            type="button"
            className={`nav-toggle${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-drawer"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" aria-hidden="true" />
            <span className="nav-toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={`mobile-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === "A") setOpen(false);
        }}
      >
        <nav className="mobile-drawer-links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href={contactHref}>Contact</Link>
        </nav>
        <div className="mobile-drawer-foot">
          <a href="mailto:jagib07@gmail.com" className="mobile-drawer-email">
            jagib07@gmail.com
          </a>
          <Link href={contactHref} className="btn mobile-drawer-cta">
            Start your upgrade
            <span className="arrow" aria-hidden="true">
              <ArrowGlyph />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
