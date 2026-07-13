import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-aegis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aegis — Private location sharing for your family",
  description:
    "Aegis shares your family's location end-to-end encrypted. We can't sell what we can't see.",
};

// Aegis's own dark, monochrome identity is deliberately unrelated to the
// rest of webcheer.co's warm/cream site — this wrapper's own background
// covers the root layout's body styling rather than trying to override it
// selectively, since the two brands should never visually bleed together.
export default function AegisLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${nunito.variable} ${inter.variable}`}
      style={{
        backgroundColor: "#000000",
        color: "#F5F5F5",
        minHeight: "100vh",
        fontFamily: "var(--font-inter-aegis), system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}
