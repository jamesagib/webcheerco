import Link from "next/link";
import { AegisShield } from "./AegisShield";

const pillars = [
  {
    title: "End-to-end encrypted",
    body: "Your Crew's location is encrypted on your phone before it's ever sent. We built the relay — we still can't read it.",
  },
  {
    title: "Nothing to sell",
    body: "No ad networks, no data brokers, no analytics on where you've been. There's nothing here to monetize but the app itself.",
  },
  {
    title: "On-device crash detection",
    body: "Possible crashes are detected entirely on your phone. Nothing reaches your Crew unless you confirm it first.",
  },
];

export default function AegisHome() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
      <section
        style={{
          minHeight: "86vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 20,
        }}
      >
        <AegisShield size={72} spin />
        <h1
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(40px, 8vw, 64px)",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Aegis
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#8A8A8E",
            maxWidth: 440,
            margin: 0,
          }}
        >
          Private, real-time location sharing for your family — encrypted end-to-end,
          never sold, never seen by us.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "1fr",
          paddingBottom: 80,
        }}
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            style={{
              backgroundColor: "#161618",
              border: "1.5px solid #2A2A2D",
              borderRadius: 20,
              padding: "24px 28px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 800,
                fontSize: 20,
                margin: "0 0 8px",
              }}
            >
              {pillar.title}
            </h2>
            <p style={{ margin: 0, color: "#8A8A8E", fontSize: 15.5, lineHeight: 1.6 }}>{pillar.body}</p>
          </div>
        ))}
      </section>

      <footer
        style={{
          backgroundColor: "#000000",
          borderTop: "1px solid #2A2A2D",
          padding: "28px 0 48px",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          alignItems: "center",
          color: "#8A8A8E",
          fontSize: 14,
        }}
      >
        <span>&copy; {new Date().getFullYear()} Aegis</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy" style={{ color: "#8A8A8E" }}>
            Privacy Policy
          </Link>
          <a href="mailto:jagib07@gmail.com" style={{ color: "#8A8A8E" }}>
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
