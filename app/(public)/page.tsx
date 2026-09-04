import { getLocale } from "@/utils/locale-server";
import { visitorGeo } from "@/utils/visitor-geo";

import { Clock } from "../components/clock";
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
          it the box shrink-wraps to the lede and the deck's wider max-w can't take effect. */}
      <div className="absolute inset-x-[var(--gutter)] top-[var(--tagline-top)] z-10">
        {/* Lede: display type. Size follows the viewport (5vw) between 36px on
            a phone and 72px on a wide screen; extrabold with tight leading and
            negative tracking so it reads as one block, not as prose. Width is
            measured in characters (ch) rather than vw so the block keeps the
            same shape at every size — about four lines — and is capped at the
            gutter box on phones. */}
        <p className="max-w-[min(100%,20ch)] text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          {t.lede}
        </p>
        {/* Supporting deck: slightly muted so it sits under the lede instead of
            competing with it. On phones it stays at body size and full width so
            it ends above the globe's centre (see the section below); from
            tablet up it steps up to 20px with a readable measure of about 60
            characters per line. */}
        <p className="mt-6 text-base leading-[1.5] text-ink/70 md:mt-8 md:max-w-[58ch] md:text-xl">
          {t.deck}
        </p>
      </div>
      {/* height = 100vw * scale per breakpoint; scales must match getEndScale() in globe-map.tsx, else a gap appears above the footer.
          The globe centre is where the visitor's own country marker lands (globe-map.tsx rotates by [-lng, -lat]), so it must
          clear the lede and deck: it rests at 72vh, floored at 624px for short phones where the lede stacks past 72vh. */}
      <section className="relative flex w-screen items-center justify-center h-[250vw] mt-[calc(max(72vh,624px)-125vw)] md:h-[175vw] md:mt-[calc(max(72vh,624px)-87.5vw)] lg:h-[100vw] lg:mt-[calc(max(72vh,624px)-50vw)]">
        <Globe geo={geo} />
        {/* Clock sits in the bottom-right of the globe section, above the
            closing statement below. */}
        <Clock />
      </section>
      {/* Two chapters, each opened by a hairline rule — structure from rules,
          not elevation. Full-width graphics need more air than prose, so the
          slides inside a chapter sit --content-gap apart rather than the
          --header-gap that prose sections keep to; the heading→content gap
          inside each slide stays --header-gap. */}
      <div className="space-y-[var(--content-gap)] px-[var(--gutter)] pb-[var(--content-gap)] text-base text-ink">
        <section className="space-y-[var(--content-gap)] border-t border-ink/10 pt-[var(--content-gap)]">
          <h2 className={CHAPTER}>{t.problem}</h2>
          <KnowledgeLivesSection locale={locale} />
        </section>
        <section className="space-y-[var(--content-gap)] border-t border-ink/10 pt-[var(--content-gap)]">
          <h2 className={CHAPTER}>{t.solution}</h2>
          <FlowSection locale={locale} />
          <LoopSection locale={locale} />
          <PricingSection locale={locale} />
        </section>
      </div>
    </main>
  );
}
