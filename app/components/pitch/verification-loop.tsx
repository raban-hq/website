import type { Locale } from "@/utils/locale";

// "Die Verifikationsschleife" from the pitch deck (Raban Pitch v2, slide 6):
// zuhören → korrigieren → verfeinern → anleiten, the expert decides, and only
// what is good enough passes into the growing knowledge base at the right
// edge. Geometry carried over from the deck unchanged (the viewBox is grown so
// nothing relies on the slide cropping); colours mapped to the site's tokens.
// English is the deck's original wording.
const T = {
  de: {
    aria: "Die Verifikationsschleife — zuhören, korrigieren, verfeinern, anleiten — endet an einer Entscheidung: Nur was der Experte gut genug nennt, geht in die wachsende Wissensbasis am rechten Rand",
    notGood: "Noch nicht gut genug",
    decides: "Experte entscheidet",
    good: "Gut genug",
    listen: "Zuhören",
    correct: "Korrigieren",
    refine: "Verfeinern",
    instruct: "Anleiten",
  },
  en: {
    aria: "The verification loop — listen, correct, refine, instruct — ending in a decision gate: only knowledge the expert calls good enough passes into the growing knowledge base at the right edge",
    notGood: "Not good enough",
    decides: "Expert decides",
    good: "Good enough",
    listen: "Listen",
    correct: "Correct",
    refine: "Refine",
    instruct: "Instruct",
  },
} as const;

export function VerificationLoopChart({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = T[locale];
  return (
    <svg viewBox="0 -90 1800 790" className={`chart ${className}`} role="img" aria-label={t.aria}>
      <defs>
        <marker id="pv-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-ink" />
        </marker>
      </defs>
      <rect x="140" y="100" width="940" height="420" rx="80" fill="none" className="stroke-ink" strokeWidth="2" />
      <path
        d="M 240 272 L 560 272 Q 640 272 640 192 L 640 180 Q 640 100 720 100 L 744 100"
        fill="none"
        className="stroke-red-600"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path d="M 766 90 L 788 100 L 766 110 Z" className="fill-ink" />
      <path d="M 1070 245 L 1080 267 L 1090 245 Z" className="fill-ink" />
      <path d="M 130 444 L 140 422 L 150 444 Z" className="fill-ink" />
      <path d="M 630 202 L 640 180 L 650 202 Z" className="fill-ink" />
      <path
        d="M 920 520 L 618 520 A 80 80 0 0 0 618 680 L 1353 680 Q 1433 680 1433 600 L 1433 419 Q 1433 359 1493 359 L 1513 359"
        fill="none"
        className="stroke-ink"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#pv-ah)"
      />
      <g className="fill-ink/60" fontSize="24">
        <text x="340" y="492" textAnchor="middle">
          {t.notGood}
        </text>
        <text x="724" y="492" textAnchor="middle">
          {t.decides}
        </text>
        <text x="820" y="656" textAnchor="middle">
          {t.good}
        </text>
      </g>
      {/* paper masks so the block groups sit on the loop's lines */}
      <g className="fill-paper">
        <rect x="48" y="238" width="184" height="184" />
        <rect x="308" y="180" width="184" height="184" />
        <rect x="788" y="8" width="184" height="184" />
        <rect x="988" y="267" width="184" height="155" />
      </g>
      {/* zuhören: partly right, partly grey, partly wrong */}
      <rect className="fill-red-600" x="60" y="250" width="44" height="44" rx="8" />
      <rect className="fill-ink/25" x="118" y="250" width="44" height="44" rx="8" />
      <rect fill="none" className="stroke-red-600" strokeWidth="2" strokeDasharray="7 7" x="176" y="250" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="60" y="308" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="118" y="308" width="44" height="44" rx="8" />
      <rect className="fill-ink/25" x="176" y="308" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="60" y="366" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="118" y="366" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="176" y="366" width="44" height="44" rx="8" />
      {/* korrigieren: everything solid */}
      <g className="fill-red-600">
        <rect x="320" y="221" width="44" height="44" rx="8" />
        <rect x="378" y="221" width="44" height="44" rx="8" />
        <rect x="436" y="221" width="44" height="44" rx="8" />
        <rect x="320" y="279" width="44" height="44" rx="8" />
        <rect x="378" y="279" width="44" height="44" rx="8" />
        <rect x="436" y="279" width="44" height="44" rx="8" />
      </g>
      {/* verfeinern: the gaps show again */}
      <rect className="fill-red-600" x="800" y="49" width="44" height="44" rx="8" />
      <rect className="fill-ink/25" x="858" y="49" width="44" height="44" rx="8" />
      <rect fill="none" className="stroke-red-600" strokeWidth="2" strokeDasharray="7 7" x="916" y="49" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="800" y="107" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="858" y="107" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="916" y="107" width="44" height="44" rx="8" />
      {/* anleiten: half-filled where the answer is still forming */}
      <rect className="fill-red-600" x="1000" y="279" width="44" height="44" rx="8" />
      <rect className="fill-ink/25" x="1058" y="279" width="44" height="44" rx="8" />
      <rect className="fill-red-600/50 stroke-red-600" strokeWidth="2" strokeDasharray="7 7" x="1116" y="279" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="1000" y="337" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="1058" y="337" width="44" height="44" rx="8" />
      <rect className="fill-red-600" x="1116" y="337" width="44" height="44" rx="8" />
      <g className="fill-ink" fontSize="28">
        <text x="244" y="403" textAnchor="start">
          {t.listen}
        </text>
        <text x="320" y="195" textAnchor="start">
          {t.correct}
        </text>
        <text x="800" y="199" textAnchor="start">
          {t.refine}
        </text>
        <text x="976" y="374" textAnchor="end">
          {t.instruct}
        </text>
      </g>
      {/* the knowledge base, growing off the right edge */}
      <g className="fill-red-600">
        <rect x="1749" y="-69" width="44" height="44" rx="8" />
        <rect x="1691" y="-69" width="44" height="44" rx="8" />
        <rect x="1691" y="-11" width="44" height="44" rx="8" />
        <rect x="1749" y="-11" width="44" height="44" rx="8" />
        <rect x="1517" y="163" width="44" height="44" rx="8" />
        <rect x="1517" y="221" width="44" height="44" rx="8" />
        <rect x="1517" y="279" width="44" height="44" rx="8" />
        <rect x="1517" y="337" width="44" height="44" rx="8" />
        <rect x="1575" y="47" width="44" height="44" rx="8" />
        <rect x="1575" y="105" width="44" height="44" rx="8" />
        <rect x="1575" y="163" width="44" height="44" rx="8" />
        <rect x="1575" y="221" width="44" height="44" rx="8" />
        <rect x="1575" y="279" width="44" height="44" rx="8" />
        <rect x="1575" y="337" width="44" height="44" rx="8" />
        <rect x="1575" y="395" width="44" height="44" rx="8" />
        <rect x="1575" y="453" width="44" height="44" rx="8" />
        <rect x="1633" y="47" width="44" height="44" rx="8" />
        <rect x="1633" y="105" width="44" height="44" rx="8" />
        <rect x="1633" y="163" width="44" height="44" rx="8" />
        <rect x="1633" y="221" width="44" height="44" rx="8" />
        <rect x="1633" y="279" width="44" height="44" rx="8" />
        <rect x="1633" y="337" width="44" height="44" rx="8" />
        <rect x="1633" y="395" width="44" height="44" rx="8" />
        <rect x="1633" y="453" width="44" height="44" rx="8" />
        <rect x="1691" y="569" width="44" height="44" rx="8" />
        <rect x="1691" y="47" width="44" height="44" rx="8" />
        <rect x="1691" y="105" width="44" height="44" rx="8" />
        <rect x="1691" y="163" width="44" height="44" rx="8" />
        <rect x="1691" y="221" width="44" height="44" rx="8" />
        <rect x="1691" y="279" width="44" height="44" rx="8" />
        <rect x="1691" y="337" width="44" height="44" rx="8" />
        <rect x="1691" y="395" width="44" height="44" rx="8" />
        <rect x="1691" y="453" width="44" height="44" rx="8" />
        <rect x="1691" y="511" width="44" height="44" rx="8" />
        <rect x="1749" y="569" width="44" height="44" rx="8" />
        <rect x="1749" y="47" width="44" height="44" rx="8" />
        <rect x="1749" y="105" width="44" height="44" rx="8" />
        <rect x="1749" y="163" width="44" height="44" rx="8" />
        <rect x="1749" y="221" width="44" height="44" rx="8" />
        <rect x="1749" y="279" width="44" height="44" rx="8" />
        <rect x="1749" y="337" width="44" height="44" rx="8" />
        <rect x="1749" y="395" width="44" height="44" rx="8" />
        <rect x="1749" y="453" width="44" height="44" rx="8" />
        <rect x="1749" y="511" width="44" height="44" rx="8" />
      </g>
      <circle cx="1548" cy="368" r="5.5" className="fill-on-accent" />
    </svg>
  );
}
