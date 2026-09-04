import type { Locale } from "@/utils/locale";

// The line-drawn cat peeking out of its cardboard box, from the pitch deck's
// team slide (Raban Pitch v2, slide 8). Geometry carried over unchanged; white
// fills become paper so the drawing sits on either theme.
const ARIA = {
  de: "Eine gezeichnete Katze schaut aus einem offenen Karton, die Pfoten über der Kante",
  en: "A simple line-drawn cat peeking out of an open cardboard box, paws over the edge",
} as const;

export function CatBox({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  return (
    <svg viewBox="0 0 320 280" className={className} role="img" aria-label={ARIA[locale]}>
      <path d="M 60 120 L 260 120" className="stroke-ink" strokeWidth="6" fill="none" />
      <path d="M 36 132 L 4 94 L 28 82 L 60 120 Z" className="fill-paper stroke-ink" strokeWidth="5" strokeLinejoin="round" />
      <path d="M 284 132 L 316 94 L 292 82 L 260 120 Z" className="fill-paper stroke-ink" strokeWidth="5" strokeLinejoin="round" />
      <path d="M 118 58 L 102 6 L 152 34 Z" className="fill-paper stroke-ink" strokeWidth="5" strokeLinejoin="round" />
      <path d="M 202 58 L 218 6 L 168 34 Z" className="fill-paper stroke-ink" strokeWidth="5" strokeLinejoin="round" />
      <ellipse cx="160" cy="82" rx="54" ry="50" className="fill-paper stroke-ink" strokeWidth="5" />
      <circle cx="140" cy="76" r="5" className="fill-ink" />
      <circle cx="180" cy="76" r="5" className="fill-ink" />
      <circle cx="160" cy="96" r="7" className="fill-red-600" />
      <path d="M 107 80 L 76 74 M 108 90 L 72 90 M 111 100 L 76 106" className="stroke-ink" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 213 80 L 244 74 M 212 90 L 248 90 M 209 100 L 244 106" className="stroke-ink" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="36" y="132" width="248" height="132" className="fill-paper stroke-ink" strokeWidth="6" strokeLinejoin="round" />
      <rect x="116" y="118" width="32" height="30" rx="14" className="fill-paper stroke-ink" strokeWidth="5" />
      <rect x="172" y="118" width="32" height="30" rx="14" className="fill-paper stroke-ink" strokeWidth="5" />
      <path d="M 127 133 v 11 M 137 133 v 11 M 183 133 v 11 M 193 133 v 11" className="stroke-ink" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="56" y="204" width="60" height="40" fill="none" className="stroke-ink" strokeWidth="3" />
      <path d="M 66 218 h 40 M 66 230 h 28" className="stroke-ink" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
