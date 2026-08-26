import { visitorGeo } from "@/utils/visitor-geo";

import { Clock } from "../components/clock";
import { Globe } from "../components/globe";
import { Placeholder } from "../components/placeholder";

export default async function HomePage() {
  // Seed the globe with the visitor's country, derived server-side from Vercel's
  // edge geo headers for this request only (see utils/visitor-geo.ts). The globe
  // falls back to a default when the headers are absent (e.g. local dev).
  const geo = await visitorGeo();

  return (
    <main className="relative" style={{ display: "flow-root" }}>
      {/* inset-x gives the absolute box a real width (left+right gutter); without
          it the box shrink-wraps to the lede and the deck's wider max-w can't take effect. */}
      <div className="absolute inset-x-[var(--gutter)] top-[var(--tagline-top)] z-10">
        {/* Lede: narrow so it stacks into a tight block — 45vw phone, 35 tablet, 25 computer. */}
        <Placeholder className="max-w-[45vw] text-[1.75rem] font-semibold leading-[1.15] md:max-w-[35vw] lg:max-w-[25vw]">
          die eine Zeile, die sagt was Raban ist
        </Placeholder>
        {/* Supporting deck: wider for reading — 75vw phone, 65 tablet, 55 computer. */}
        <Placeholder className="mt-6 max-w-[75vw] text-base md:max-w-[65vw] lg:max-w-[55vw]">
          der tragende Absatz darunter
        </Placeholder>
      </div>
      {/* height = 100vw * scale per breakpoint; scales must match getEndScale() in globe-map.tsx, else a gap appears above the footer */}
      <section className="relative flex w-screen items-center justify-center h-[250vw] mt-[calc(50vh-125vw)] md:h-[175vw] md:mt-[calc(50vh-87.5vw)] lg:h-[100vw] lg:mt-[calc(50vh-50vw)]">
        <Globe geo={geo} />
        {/* Clock sits in the bottom-right of the globe section, above the
            closing statement below. */}
        <Clock />
      </section>
    </main>
  );
}
