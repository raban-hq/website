import type { Locale } from "@/utils/locale";

// "Eigentum und Preis" from the pitch deck (Raban Pitch v2, slide 7): the
// customer's knowledge as a solid red block, our architecture outlined at the
// same size, and beneath both the three price parts, wrapped by one hairline.
// Geometry carried over from the deck unchanged; colours mapped to the site's
// tokens. English is the deck's original wording, re-addressed to the customer.
const T = {
  de: {
    aria: "Ihr Wissen als voller roter Block, unsere Architektur als Umriss in gleicher Größe; darunter Einrichtung, Basispreis und Nutzung, von einer Haarlinie umschlossen",
    yours: "Ihr Wissen",
    yoursSub: "gehört Ihnen — bleibt in Europa/Deutschland",
    ours: "Unsere Architektur",
    oursSub: "menschgerechte Schnittstelle für Ein- und Ausgabe",
    tagOnce: "EINMALIG",
    tagBase: "BASIS",
    tagUsage: "NUTZUNG",
    once: "1.000–9.000 €",
    onceSub: "Einrichtung, je nach Standort",
    base: "250 € / Monat",
    baseSub: "Wartung & Upgrades",
    usage: "~25 € / Mitarbeiter/Monat",
    usageSub: "deckt die KI-Kosten",
  },
  en: {
    aria: "Your knowledge as a solid red block, our architecture outlined at the same size; beneath, one-time setup, base fee and usage-based pricing, wrapped by a hairline",
    yours: "Your knowledge",
    yoursSub: "you own it — it stays in Europe/Germany",
    ours: "Our architecture",
    oursSub: "human-native interface for input and output",
    tagOnce: "ONE TIME",
    tagBase: "BASE",
    tagUsage: "USAGE",
    once: "€1,000–9,000",
    onceSub: "setup, scoped by site",
    base: "€250 / month",
    baseSub: "maintenance & upgrades",
    usage: "~€25 / employee/month",
    usageSub: "covers the AI costs",
  },
} as const;

export function OwnershipPricingChart({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = T[locale];
  return (
    <svg viewBox="70 0 1540 610" className={`chart ${className}`} role="img" aria-label={t.aria}>
      <rect x="140" y="20" width="640" height="310" rx="24" className="fill-red-600" />
      <text className="fill-on-accent" x="460" y="161" textAnchor="middle" fontSize="38">
        {t.yours}
      </text>
      <text className="fill-on-accent" x="460" y="225" textAnchor="middle" fontSize="22">
        {t.yoursSub}
      </text>
      <path
        d="M 922 0 L 1518 0 A 42 42 0 0 1 1560 42 L 1560 568 A 42 42 0 0 1 1518 610 L 162 610 A 42 42 0 0 1 120 568 L 120 392 A 42 42 0 0 1 162 350 L 838 350 A 42 42 0 0 0 880 308 L 880 42 A 42 42 0 0 1 922 0 Z"
        fill="none"
        className="stroke-ink/25"
        strokeWidth="2"
      />
      <rect x="900" y="20" width="640" height="310" rx="24" fill="none" className="stroke-ink" strokeWidth="2" />
      <text className="fill-ink" x="1220" y="161" textAnchor="middle" fontSize="38">
        {t.ours}
      </text>
      <text className="fill-ink/75" x="1220" y="225" textAnchor="middle" fontSize="20">
        {t.oursSub}
      </text>
      <g fill="none" className="stroke-ink" strokeWidth="2">
        <rect x="140" y="370" width="446" height="220" rx="24" />
        <rect x="617" y="370" width="446" height="220" rx="24" />
        <rect x="1094" y="370" width="446" height="220" rx="24" />
      </g>
      <g className="fill-red-600" fontSize="22" letterSpacing="0.08em">
        <text x="176" y="426">{t.tagOnce}</text>
        <text x="653" y="426">{t.tagBase}</text>
        <text x="1130" y="426">{t.tagUsage}</text>
      </g>
      <g className="fill-ink" fontSize="26">
        <text x="176" y="490">{t.once}</text>
        <text x="653" y="490">{t.base}</text>
        <text x="1130" y="490">{t.usage}</text>
      </g>
      <g className="fill-ink/60" fontSize="22">
        <text x="176" y="532">{t.onceSub}</text>
        <text x="653" y="532">{t.baseSub}</text>
        <text x="1130" y="532">{t.usageSub}</text>
      </g>
    </svg>
  );
}
