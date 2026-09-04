import type { Locale } from "@/utils/locale";

// "Die nächsten vier Jahre" from the pitch deck (Raban Pitch v2, slide 4): a
// unit grid of thirty red squares, each one hundred thousand people — three
// million leaving small and mid-sized companies between 2026 and 2030.
// Geometry carried over from the deck unchanged; colours mapped to the site's
// tokens. English is the deck's original wording.
const T = {
  de: {
    aria: "Einheitenraster: dreißig rote Quadrate, jedes hunderttausend Menschen — drei Millionen verlassen kleine und mittlere Unternehmen zwischen 2026 und 2030",
    legend: "= 100.000 Menschen",
    number: "3.000.000",
    line1: "Menschen verlassen kleine und mittlere",
    line2: "Unternehmen in den nächsten vier Jahren —",
    line3: "allein in Deutschland",
  },
  en: {
    aria: "Unit grid: thirty red squares, each one hundred thousand people — three million leaving small and mid-sized companies between 2026 and 2030",
    legend: "= 100,000 people",
    number: "3,000,000",
    line1: "people will leave small and mid-sized",
    line2: "companies within four years —",
    line3: "in Germany alone",
  },
} as const;

const YEARS = ["2026", "2027", "2028", "2029", "2030"] as const;

export function NextFourYearsChart({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = T[locale];
  return (
    <svg viewBox="0 0 1680 560" className={`chart ${className}`} role="img" aria-label={t.aria}>
      <g className="fill-red-600">
        {[40, 136, 232].map((y) =>
          Array.from({ length: 10 }, (_, i) => (
            <rect key={`${y}-${i}`} x={i * 96} y={y} width="72" height="72" />
          )),
        )}
        <rect x="0" y="368" width="24" height="24" />
      </g>
      <text className="fill-ink/60" fontSize="22" x="36" y="388">
        {t.legend}
      </text>
      <text
        className="fill-red-600 font-black"
        fontSize="100"
        letterSpacing="-0.02em"
        x="1020"
        y="118"
      >
        {t.number}
      </text>
      <g className="fill-ink" fontSize="26">
        <text x="1020" y="209">{t.line1}</text>
        <text x="1020" y="253">{t.line2}</text>
        <text x="1020" y="297">{t.line3}</text>
      </g>
      <g className="stroke-ink/25" strokeWidth="2">
        <line x1="0" y1="452" x2="936" y2="452" />
        {YEARS.map((_, i) => (
          <line key={i} x1={i * 234} y1="440" x2={i * 234} y2="464" />
        ))}
      </g>
      <g className="fill-ink/60" fontSize="22" textAnchor="middle">
        {YEARS.map((year, i) => (
          <text key={year} x={i * 234} y="516">
            {year}
          </text>
        ))}
      </g>
    </svg>
  );
}
