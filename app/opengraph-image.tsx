import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "WebCheer — Websites that work for everyone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#F1ECE3";
const INK = "#14130F";
const INK_2 = "rgba(20, 19, 15, 0.7)";
const ACCENT = "#1FA7EE";

async function loadFont(family: string, weight: number, italic = false) {
  const variant = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const cssRes = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:${variant}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  );
  const css = await cssRes.text();
  const url = css.match(/src: url\((https:[^)]+\.(?:woff2|ttf|otf))\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for ${family} ${weight}`);
  const fontRes = await fetch(url);
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage() {
  const [interRegular, interMedium, instrumentItalic, logoBuf] =
    await Promise.all([
      loadFont("Inter", 400),
      loadFont("Inter", 500),
      loadFont("Instrument Serif", 400, true),
      readFile(join(process.cwd(), "public/assets/webcheer-logo.png")),
    ]);
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          padding: "64px 72px",
          fontFamily: "Inter",
          color: INK,
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="WebCheer" height={56} />
        </div>

        {/* Center: headline + subhead */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: -2.8,
              fontWeight: 500,
              gap: 6,
            }}
          >
            <div style={{ display: "flex" }}>Websites that</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
              <span style={{ display: "flex" }}>work for</span>
              <span
                style={{
                  display: "flex",
                  fontFamily: "Instrument Serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: ACCENT,
                  letterSpacing: -2.4,
                }}
              >
                everyone.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 28,
              lineHeight: 1.35,
              color: INK_2,
              maxWidth: 820,
            }}
          >
            <span style={{ display: "flex" }}>
              Modern website redesigns and&nbsp;
            </span>
            <span
              style={{
                display: "flex",
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                color: INK,
              }}
            >
              WCAG 2.1 AA
            </span>
            <span style={{ display: "flex" }}>
              &nbsp;accessibility for small businesses.
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        {
          name: "Instrument Serif",
          data: instrumentItalic,
          weight: 400,
          style: "italic",
        },
      ],
    }
  );
}
