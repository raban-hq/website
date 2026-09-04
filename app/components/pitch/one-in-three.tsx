import type { Locale } from "@/utils/locale";

// The "1 von 3" column from the pitch deck (Raban Pitch v2, slide 3): a stack
// of knowledge blocks whose lower third breaks loose, falls, and loses its
// colour on the way down. Geometry is carried over from the deck unchanged;
// the deck's accent ramp maps onto the site's one hue as opacity steps of
// red-600, so the fade works on either paper.
const ARIA = {
  de: "Eine Säule aus Wissensblöcken, deren unteres Drittel sich löst, fällt und dabei seine Farbe verliert",
  en: "A column of knowledge blocks whose lower third breaks loose, falls and loses its colour",
} as const;

export function OneInThreeChart({
  className = "",
  locale = "de",
}: {
  className?: string;
  locale?: Locale;
}) {
  return (
    <svg viewBox="0 -10 330 724" className={className} role="img" aria-label={ARIA[locale]}>
      <rect className="fill-red-600" x="0" y="0" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="84" y="0" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="168" y="0" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="252" y="0" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="0" y="84" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="84" y="84" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="168" y="84" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="252" y="84" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="0" y="168" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="84" y="168" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="168" y="168" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="252" y="168" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="0" y="252" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="84" y="252" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="168" y="252" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="252" y="252" width="68" height="68" rx="12" />
      <rect className="fill-red-600" x="4" y="372" width="68" height="68" rx="12" transform="rotate(-12 38 406)" />
      <rect className="fill-red-600/70" x="92" y="404" width="68" height="68" rx="12" transform="rotate(9 126 438)" />
      <rect className="fill-red-600/70" x="180" y="380" width="68" height="68" rx="12" transform="rotate(18 214 414)" />
      <rect className="fill-red-600/45" x="252" y="436" width="68" height="68" rx="12" transform="rotate(-20 286 470)" />
      <rect className="fill-red-600/45" x="30" y="502" width="68" height="68" rx="12" transform="rotate(-30 64 536)" />
      <rect className="fill-red-600/45" x="150" y="532" width="68" height="68" rx="12" transform="rotate(26 184 566)" />
      <rect className="fill-red-600/25" x="244" y="568" width="68" height="68" rx="12" transform="rotate(40 278 602)" />
      <rect className="fill-red-600/25" x="96" y="632" width="68" height="68" rx="12" transform="rotate(-45 130 666)" />
    </svg>
  );
}
