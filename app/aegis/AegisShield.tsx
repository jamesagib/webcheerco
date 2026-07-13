// Mirrors components/ui/AegisMark.tsx from the Aegis app exactly (same
// shield path, same ray/circle mask technique) so the web mark is pixel-
// faithful to the in-app one, not a redrawn approximation.
const SHIELD_PATH =
  "M100,12 C100,12 152,34 158,38 C165,42.5 168,48 168,55 L168,94 C168,144 136,182 100,196 C64,182 32,144 32,94 L32,55 C32,48 35,42.5 42,38 C48,34 100,12 100,12 Z";
const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export function AegisShield({ size = 96, color = "#F5F5F5", spin = false }: { size?: number; color?: string; spin?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <mask id="aegis-shield-mask">
          <rect width={200} height={200} fill="black" />
          <path d={SHIELD_PATH} fill="white" />
          <g className={spin ? "aegis-shield-rays" : undefined} fill="black" style={{ transformOrigin: "100px 100px" }}>
            <circle cx={100} cy={100} r={20} />
            {RAY_ANGLES.map((angle) => (
              <rect key={angle} x={96} y={54} width={8} height={26} rx={3} transform={`rotate(${angle} 100 100)`} />
            ))}
          </g>
        </mask>
      </defs>
      <rect width={200} height={200} fill={color} mask="url(#aegis-shield-mask)" />
      {spin && (
        <style>{`
          @keyframes aegis-shield-spin { to { transform: rotate(360deg); } }
          .aegis-shield-rays { animation: aegis-shield-spin 12s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .aegis-shield-rays { animation: none; }
          }
        `}</style>
      )}
    </svg>
  );
}
