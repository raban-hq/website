import type { Locale } from "@/utils/locale";

// "So funktioniert Raban" from the pitch deck (Raban Pitch v2, slide 5): the
// expert talks, shows and writes into an AI layer, knowledge lands in the base
// in the middle, and the same AI answers everyone else. Geometry carried over
// from the deck unchanged; colours mapped to the site's tokens (ink lines,
// red-600 blocks, white kept on the accent via on-accent). English is the
// deck's original wording.
const T = {
  de: {
    aria: "Ablauf: Ein Experte spricht, zeigt und schreibt in eine KI-Schicht, das Wissen landet in der Wissensbasis, und dieselbe KI-Schicht antwortet Azubi, Kollegen und HR",
    aiLayer: "KI-Schicht",
    expert: "Experte",
    speech: "Sprache",
    image: "Bild",
    text: "Text",
    azubi: "Azubi",
    peer: "Kollegin",
    hr: "HR",
  },
  en: {
    aria: "Flow: an expert speaks, shows and writes into an AI layer, knowledge lands in the database, and the AI layer answers a trainee, a colleague and HR",
    aiLayer: "AI layer",
    expert: "Expert",
    speech: "Speech",
    image: "Image",
    text: "Text",
    azubi: "Azubi",
    peer: "Peer",
    hr: "HR",
  },
} as const;

export function KnowledgeFlowChart({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  const t = T[locale];
  return (
    <svg viewBox="60 -55 1560 636" className={`chart ${className}`} role="img" aria-label={t.aria}>
      <defs>
        <g id="pf-ic-speech" fill="none" className="stroke-ink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </g>
        <g id="pf-ic-image" fill="none" className="stroke-ink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </g>
        <g id="pf-ic-text" fill="none" className="stroke-ink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" x2="15" y1="20" y2="20" />
          <line x1="12" x2="12" y1="4" y2="20" />
        </g>
        <g id="pf-person" className="fill-red-600">
          <circle cx="0" cy="-33" r="32" />
          <path d="M -38 65 Q -56 65 -56 47 A 56 44 0 0 1 56 47 Q 56 65 38 65 Z" />
        </g>
      </defs>
      {/* connector lines, expert side */}
      <g className="stroke-ink" fill="none" strokeWidth="2" strokeLinecap="round">
        <path d="M 216 300 L 253 300 Q 285 300 291.4 268.6 L 323.6 109.4 Q 330 78 362 78 L 378.5 78" />
        <line x1="216" y1="300" x2="378.5" y2="300" />
        <path d="M 216 300 L 253 300 Q 285 300 292.4 331.1 L 322.6 458.9 Q 330 490 362 490 L 378.5 490" />
        <path d="M 558.5 78 L 580 78 Q 612 78 617.6 109.5 L 651.4 297.5 Q 657 329 689 329 L 723 329" />
        <path d="M 558.5 300 L 588 300 Q 612 300 634.5 314.5 Q 657 329 681 329 L 723 329" />
        <path d="M 558.5 490 L 580 490 Q 612 490 620.6 459.2 L 648.4 359.8 Q 657 329 689 329 L 723 329" />
        {/* connector lines, reader side */}
        <path d="M 957 271 L 990 271 Q 1022 271 1029.8 240 L 1048.6 165.2 Q 1055 140 1081 140 L 1090 140" />
        <path d="M 1090 140 Q 1114 140 1118.9 116.5 L 1122.5 99.5 Q 1127.4 76 1151.4 76 L 1185.5 76" />
        <line x1="1090" y1="140" x2="1185.5" y2="140" />
        <path d="M 1090 140 Q 1114 140 1118.9 163.5 L 1122.5 180.5 Q 1127.4 204 1151.4 204 L 1185.5 204" />
        <path d="M 1237.5 76 L 1268.6 76 Q 1292.6 76 1297.5 99.5 L 1301.1 116.5 Q 1306 140 1330 140" />
        <path d="M 1237.5 204 L 1268.6 204 Q 1292.6 204 1297.5 180.5 L 1301.1 163.5 Q 1306 140 1330 140" />
        <path d="M 957 271 L 991 271 Q 1015 271 1034.3 285.5 Q 1053.5 300 1077.5 300 L 1185.5 300" />
        <path d="M 957 271 L 990 271 Q 1022 271 1027.5 302.5 L 1050.5 434.4 Q 1055 460 1081 460 L 1090 460" />
        <path d="M 1090 460 L 1099 460 Q 1114 460 1117.4 444 Q 1120.7 428 1135.7 428 L 1185.5 428" />
        <path d="M 1090 460 L 1099 460 Q 1114 460 1117.4 476 Q 1120.7 492 1135.7 492 L 1185.5 492" />
        <path d="M 1237.5 428 L 1284.3 428 Q 1299.3 428 1302.6 444 Q 1306 460 1321 460 L 1330 460" />
        <path d="M 1237.5 492 L 1284.3 492 Q 1299.3 492 1302.6 476 Q 1306 460 1321 460 L 1330 460" />
        <line x1="1237.5" y1="140" x2="1330" y2="140" />
        <line x1="1330" y1="140" x2="1464" y2="140" />
        <line x1="1237.5" y1="300" x2="1464" y2="300" />
        <line x1="1330" y1="460" x2="1464" y2="460" />
      </g>
      {/* the expert */}
      <use href="#pf-person" transform="translate(150 300) scale(1.1)" />
      <text className="fill-on-accent" x="150" y="357" textAnchor="middle" fontSize="18">
        {t.expert}
      </text>
      {/* the two AI layers: dashed guides plus a brace with its label */}
      <g className="stroke-ink/40" fill="none" strokeWidth="2" strokeDasharray="10 12" strokeLinecap="round">
        <path d="M 570 34 L 570 524 Q 570 544 590 544 L 700 544 Q 720 544 720 524 L 720 34" />
        <path d="M 960 34 L 960 524 Q 960 544 980 544 L 1090 544 Q 1110 544 1110 524 L 1110 34" />
      </g>
      <g className="stroke-ink" fill="none" strokeWidth="2" strokeLinecap="round">
        <path d="M 570 34 C 570 20 578 20 592 20 L 632 20 C 641 20 645 16 645 4 C 645 16 650 20 659 20 L 698 20 C 712 20 720 20 720 34" />
        <path d="M 960 34 C 960 20 968 20 982 20 L 1022 20 C 1031 20 1035 16 1035 4 C 1035 16 1040 20 1049 20 L 1088 20 C 1102 20 1110 20 1110 34" />
      </g>
      <text className="fill-ink" x="645" y="-20" textAnchor="middle" fontSize="28">
        {t.aiLayer}
      </text>
      <text className="fill-ink" x="1035" y="-20" textAnchor="middle" fontSize="28">
        {t.aiLayer}
      </text>
      {/* input pills: speech, image, text */}
      <g className="stroke-ink" fill="none" strokeWidth="2">
        <rect x="378.5" y="50" width="180" height="56" rx="28" />
        <rect x="378.5" y="272" width="180" height="56" rx="28" />
        <rect x="378.5" y="462" width="180" height="56" rx="28" />
      </g>
      <use href="#pf-ic-speech" transform="translate(396.5 63.6) scale(1.2)" />
      <text className="fill-ink" x="436" y="78" dominantBaseline="central" fontSize="24">
        {t.speech}
      </text>
      <use href="#pf-ic-image" transform="translate(398.5 285.6) scale(1.2)" />
      <text className="fill-ink" x="438" y="300" dominantBaseline="central" fontSize="24">
        {t.image}
      </text>
      <use href="#pf-ic-text" transform="translate(398.5 475.6) scale(1.2)" />
      <text className="fill-ink" x="438" y="490" dominantBaseline="central" fontSize="24">
        {t.text}
      </text>
      {/* the knowledge base */}
      <g className="fill-red-600">
        <rect x="731" y="249" width="44" height="44" rx="8" />
        <rect x="731" y="307" width="44" height="44" rx="8" />
        <rect x="789" y="191" width="44" height="44" rx="8" />
        <rect x="789" y="249" width="44" height="44" rx="8" />
        <rect x="789" y="307" width="44" height="44" rx="8" />
        <rect x="789" y="365" width="44" height="44" rx="8" />
        <rect x="847" y="191" width="44" height="44" rx="8" />
        <rect x="847" y="249" width="44" height="44" rx="8" />
        <rect x="847" y="307" width="44" height="44" rx="8" />
        <rect x="847" y="365" width="44" height="44" rx="8" />
        <rect x="905" y="249" width="44" height="44" rx="8" />
        <rect x="905" y="307" width="44" height="44" rx="8" />
      </g>
      <circle cx="762" cy="338" r="5.5" className="fill-on-accent" />
      <circle cx="936" cy="280" r="5.5" className="fill-on-accent" />
      {/* output pills: the same three channels, now outbound */}
      <g className="stroke-ink" fill="none" strokeWidth="2">
        <circle cx="1211.5" cy="76" r="26" />
        <circle cx="1211.5" cy="140" r="26" />
        <circle cx="1211.5" cy="204" r="26" />
        <circle cx="1211.5" cy="300" r="26" />
        <circle cx="1211.5" cy="428" r="26" />
        <circle cx="1211.5" cy="492" r="26" />
      </g>
      <use href="#pf-ic-speech" transform="translate(1197.1 61.6) scale(1.2)" />
      <use href="#pf-ic-image" transform="translate(1197.1 125.6) scale(1.2)" />
      <use href="#pf-ic-text" transform="translate(1197.1 189.6) scale(1.2)" />
      <use href="#pf-ic-speech" transform="translate(1197.1 285.6) scale(1.2)" />
      <use href="#pf-ic-image" transform="translate(1197.1 413.6) scale(1.2)" />
      <use href="#pf-ic-text" transform="translate(1197.1 477.6) scale(1.2)" />
      {/* the readers */}
      <use href="#pf-person" transform="translate(1530 140) scale(1.1)" />
      <text className="fill-on-accent" x="1530" y="197" textAnchor="middle" fontSize="18">
        {t.azubi}
      </text>
      <use href="#pf-person" transform="translate(1530 300) scale(1.1)" />
      <text className="fill-on-accent" x="1530" y="357" textAnchor="middle" fontSize="18">
        {t.peer}
      </text>
      <use href="#pf-person" transform="translate(1530 460) scale(1.1)" />
      <text className="fill-on-accent" x="1530" y="517" textAnchor="middle" fontSize="18">
        {t.hr}
      </text>
    </svg>
  );
}
