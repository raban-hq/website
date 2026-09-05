import { getLocale } from "@/utils/locale-server";
import { visitorGeo } from "@/utils/visitor-geo";

import { Globe } from "../components/globe";
import {
  FlowSection,
  KnowledgeLivesSection,
  LoopSection,
  PricingSection,
} from "../components/pitch/sections";

// The hero's copy in both languages; the footer's LanguageFlip picks. The lede
// is the pitch deck's cover line (Raban Pitch v2); the paragraph under it says
// in three sentences what Raban does for the reader. Below the globe the deck is read as two
// chapters, Problem and Lösung (app/components/pitch/sections.tsx).
const T = {
  de: {
    lede: "Raban hält das Wissen im Unternehmen, wenn die Experten gehen, die es tragen.",
    deck: "Das wichtigste Wissen in Ihrem Betrieb steckt in den Köpfen weniger Menschen. Raban nimmt es im Gespräch auf, prüft es gemeinsam mit Ihren Experten und macht es für alle im Unternehmen abrufbar — in Sekunden, mit Quelle.",
    problem: "Problem",
    solution: "Lösung",
  },
  en: {
    lede: "Raban keeps knowledge inside the company when the experts who carry it leave.",
    deck: "The most important knowledge in your company sits in a few heads. Raban captures it in conversation, verifies it with your experts, and makes it available to everyone in the company — in seconds, with its source.",
    problem: "Problem",
    solution: "Solution",
  },
} as const;

// The two chapter headings. The home page has no <h1> (its lede is the title,
// off the heading scale), so its chapters are the page's top rank and take the
// --h1 scale — the same size a page title has everywhere else on the site.
const CHAPTER = "text-[length:var(--h1)] font-black leading-[var(--h1-line)]";

export default async function HomePage() {
  // Seed the globe with the visitor's country, derived server-side from Vercel's
  // edge geo headers for this request only (see utils/visitor-geo.ts). The globe
  // falls back to a default when the headers are absent (e.g. local dev).
  const geo = await visitorGeo();
  const locale = await getLocale();
  const t = T[locale];

  return (
    <main className="relative" style={{ display: "flow-root" }}>
      {/* inset-x gives the absolute box a real width (left+right gutter); without
          it the box shrink-wraps to the lede and the deck's wider max-w can't take
          effect. From desktop up the box runs to the bottom of the first screen
          (100vh minus its own top) so the deck can be pinned to its bottom-right
          corner. Tablets and phones stay stacked — a 20ch lede and a readable
          deck don't fit in one row at 768px. */}
      <div className="absolute inset-x-[var(--gutter)] top-[var(--tagline-top)] z-10 lg:h-[calc(100vh-var(--tagline-top))]">
        {/* Lede: display type. Size follows the viewport (5vw) between 36px on
            a phone and 72px on a wide screen; extrabold with tight leading and
            negative tracking so it reads as one block, not as prose. Width is
            measured in characters (ch) rather than vw so the block keeps the
            same shape at every size — about four lines — and is capped at the
            gutter box on phones. */}
        <p className="max-w-[min(100%,20ch)] text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          {t.lede}
        </p>
        {/* Supporting deck: full ink at semibold, so it holds its own on the
            first screen next to the extrabold lede. On phones it stays at body
            size and full width so it ends above the globe's centre (see the
            section below); from tablet up it steps up to 20px. From desktop up
            it is pinned to the bottom-right corner of the first screen with a
            measure of about 36 characters per line, the same distance above the
            fold (--tagline-top minus --nav-h) as the lede sits below the navbar,
            so the two frame the screen top-left and bottom-right. Absolute
            rather than a flex push so the placement holds regardless of the
            lede's height. */}
        <p className="mt-6 text-base font-semibold leading-[1.5] text-ink md:mt-8 md:max-w-[58ch] md:text-xl lg:absolute lg:right-0 lg:bottom-[calc(var(--tagline-top)-var(--nav-h))] lg:mt-0 lg:max-w-[36ch]">
          {t.deck}
        </p>
      </div>
      {/* height = 100vw * scale per breakpoint; scales must match getEndScale() in globe-map.tsx, else a gap appears above the footer.
          The globe centre is where the visitor's own country marker lands (globe-map.tsx rotates by [-lng, -lat]), so it must
          clear the lede and deck: it rests at 72vh, floored at 624px for short phones where the lede stacks past 72vh.
          Below the marker the globe dissolves: a mask keeps it solid to 55% of the section (just under the marker and its
          label) and fades it to nothing by 75%, so its lower quarter is invisible. The section's negative bottom margin
          pulls the chapters up over that invisible quarter — 25% of the section height, i.e. 25% of (100vw * scale) per
          breakpoint — so the Problem chapter begins just under the first fold instead of a whole viewport later.
          pointer-events-none so the overlapped strip belongs to the chapters, not the globe. */}
      <section className="pointer-events-none relative flex w-screen items-center justify-center mask-b-from-55% mask-b-to-75% h-[250vw] mt-[calc(max(72vh,624px)-125vw)] mb-[-62.5vw] md:h-[175vw] md:mt-[calc(max(72vh,624px)-87.5vw)] md:mb-[-43.75vw] lg:h-[100vw] lg:mt-[calc(max(72vh,624px)-50vw)] lg:mb-[-25vw]">
        <Globe geo={geo} />
      </section>
      {/* Two chapters, separated by whitespace alone — no rules. relative so the
          block paints above the globe section's masked-out tail (a positioned
          later sibling wins the stacking order; a static one would sit under
          the positioned section). Full-width
          graphics need more air than prose, so the slides inside a chapter sit
          --content-gap apart rather than the --header-gap that prose sections
          keep to; the heading→content gap inside each slide stays --header-gap. */}
      <div className="relative space-y-[var(--content-gap)] px-[var(--gutter)] pb-[var(--content-gap)] text-base text-ink">
        <section className="space-y-[var(--content-gap)] pt-[var(--content-gap)]">
          <h2 className={CHAPTER}>{t.problem}</h2>
          <KnowledgeLivesSection locale={locale} />
        </section>
        <section className="space-y-[var(--content-gap)] pt-[var(--content-gap)]">
          <h2 className={CHAPTER}>{t.solution}</h2>
          <FlowSection locale={locale} />
          <LoopSection locale={locale} />
          <PricingSection locale={locale} />
        </section>
      </div>
    </main>
  );
}
