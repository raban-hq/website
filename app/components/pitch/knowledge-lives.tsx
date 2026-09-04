import type { Locale } from "@/utils/locale";

// "Wo das Wissen im Unternehmen liegt" from the pitch deck (Raban Pitch v2,
// slide 2): documented knowledge as four unconnected clusters of systems on the
// left, undocumented knowledge as people on the right — one of them heading
// out the door. Geometry carried over from the deck unchanged; colours mapped
// to the site's tokens. English is the deck's original wording.
const T = {
  de: {
    aria: "Schema: Dokumentiertes Wissen als vier unverbundene Gruppen von Systemen links, undokumentiertes Wissen als Menschen rechts, eine Person auf dem Weg in die Rente",
    documented: "Dokumentiert",
    documentedSub: "in unverbundenen Systemen",
    undocumented: "Undokumentiert",
    undocumentedSub: "in Menschen",
  },
  en: {
    aria: "Schematic: documented knowledge as four unconnected clusters of systems on the left, undocumented knowledge as people on the right, one person heading toward retirement",
    documented: "Documented",
    documentedSub: "in unconnected systems",
    undocumented: "Undocumented",
    undocumentedSub: "in people",
  },
} as const;

// One 4-block cluster in its hairline frame, at the given top-left corner.
function Cluster({ x, y }: { x: number; y: number }) {
  return (
    <>
      <rect x={x} y={y} width="182" height="182" rx="16" fill="none" className="stroke-ink/45" strokeWidth="1.5" />
      <g className="fill-red-600">
        <rect x={x + 16} y={y + 16} width="68" height="68" rx="12" />
        <rect x={x + 98} y={y + 16} width="68" height="68" rx="12" />
        <rect x={x + 16} y={y + 98} width="68" height="68" rx="12" />
        <rect x={x + 98} y={y + 98} width="68" height="68" rx="12" />
      </g>
    </>
  );
}

export function KnowledgeLivesChart({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = T[locale];
  return (
    <svg viewBox="50 0 1580 630" className={`chart ${className}`} role="img" aria-label={t.aria}>
      <defs>
        <marker id="pk-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-red-600" />
        </marker>
      </defs>
      <line className="stroke-ink/25" strokeWidth="2" x1="840" y1="20" x2="840" y2="460" />
      <Cluster x={220} y={40} />
      <Cluster x={442} y={40} />
      <Cluster x={220} y={262} />
      <Cluster x={442} y={262} />
      <g fill="none" className="stroke-ink" strokeWidth="2">
        <circle cx="1040" cy="84" r="32" />
        <circle cx="1172" cy="84" r="32" />
        <circle cx="1304" cy="84" r="32" />
        <circle cx="1040" cy="234" r="32" />
        <circle cx="1172" cy="234" r="32" />
        <circle cx="1304" cy="234" r="32" />
        <circle cx="1040" cy="384" r="32" />
        <circle cx="1172" cy="384" r="32" />
      </g>
      {/* the one who is leaving: filled, with a body, walking right */}
      <path
        d="M 1266 482 Q 1248 482 1248 464 A 56 44 0 0 1 1360 464 Q 1360 482 1342 482 Z"
        className="fill-red-600"
      />
      <circle cx="1304" cy="384" r="32" className="fill-red-600" />
      <line
        className="stroke-red-600"
        strokeWidth="2"
        strokeLinecap="round"
        x1="1370"
        y1="384"
        x2="1500"
        y2="384"
        markerEnd="url(#pk-ah)"
      />
      <g className="fill-ink" fontSize="28" textAnchor="middle">
        <text x="422" y="572">{t.documented}</text>
        <text x="1172" y="572">{t.undocumented}</text>
      </g>
      <g className="fill-ink/60" fontSize="22" textAnchor="middle">
        <text x="422" y="608">{t.documentedSub}</text>
        <text x="1172" y="608">{t.undocumentedSub}</text>
      </g>
    </svg>
  );
}
