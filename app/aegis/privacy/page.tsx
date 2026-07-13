import Link from "next/link";
import { AegisShield } from "../AegisShield";

export const metadata = {
  title: "Privacy Policy — Aegis",
};

const updated = "July 12, 2026";

export default function AegisPrivacyPolicy() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 96px" }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
        <AegisShield size={28} />
        <span style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: 18 }}>Aegis</span>
      </Link>

      <h1 style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: 34, margin: "0 0 8px" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "#8A8A8E", fontSize: 14, margin: "0 0 40px" }}>Last updated {updated}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 28, fontSize: 16, lineHeight: 1.7, color: "#F5F5F5" }}>
        <section>
          <p>
            Aegis is a location-sharing app for families and small groups ("Crews"). This policy explains what
            information Aegis collects, how it's protected, and what we do and don't do with it.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>What we collect</h2>
          <ul style={ulStyle}>
            <li>
              <strong>Location.</strong> While you're sharing with a Crew, Aegis collects your device's location so
              your Crew can see it on the map. If you enable "Always share location," this continues in the
              background so your Crew stays updated even when Aegis isn't open. You can turn background sharing off
              at any time in Settings, and you can pause sharing entirely without anyone being notified.
            </li>
            <li>
              <strong>Motion data (crash detection).</strong> If you enable crash detection, Aegis reads your phone's
              motion sensors to look for patterns consistent with a possible crash. This is processed entirely on
              your device. Nothing is sent anywhere unless a possible crash is detected and you confirm an alert
              should go to your Crew.
            </li>
            <li>
              <strong>Profile and Crew information.</strong> Your display name, which Crews you belong to, and basic
              device status (like battery level) you choose to share with your Crew.
            </li>
            <li>
              <strong>Places you set up.</strong> If you create arrival/departure alerts for specific places, those
              place locations are stored so Aegis can notify your Crew when someone arrives or leaves.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={h2Style}>How it's protected</h2>
          <p>
            Your location and profile data are encrypted on your device before they're sent, using standard,
            publicly-audited encryption. Our relay server passes encrypted messages between your Crew's devices —
            it cannot read the contents. Only devices you've shared a Crew with can decrypt your location.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>What we don't do</h2>
          <ul style={ulStyle}>
            <li>We don't sell your location, or any other data, to anyone.</li>
            <li>We don't share your data with data brokers or advertisers.</li>
            <li>We don't use your location for anything other than showing it to your own Crew.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2Style}>Your control</h2>
          <p>
            You choose which Crews you're in, and you can leave a Crew, pause sharing, or turn off background
            location at any time from Settings. Deleting the app removes your data from your device; to request
            deletion of your account data from our servers, contact us below.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>Children's privacy</h2>
          <p>
            Aegis is intended for use by families, which may include members under 13 added to a Crew by a parent or
            guardian. We don't knowingly collect information from a child except as part of that family's own
            Crew-sharing, controlled entirely by the adults who set it up.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>Changes to this policy</h2>
          <p>
            If this policy changes in a way that affects what data we collect or how it's used, we'll update this
            page and the "last updated" date above.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>Contact</h2>
          <p>
            Questions or data deletion requests:{" "}
            <a href="mailto:jagib07@gmail.com" style={{ color: "#F5F5F5" }}>
              jagib07@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-nunito), sans-serif",
  fontWeight: 800,
  fontSize: 20,
  margin: "0 0 10px",
};

const ulStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};
