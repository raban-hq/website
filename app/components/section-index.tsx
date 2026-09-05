"use client";

import { useEffect, useRef, useState } from "react";

export type Section = { id: string; title: string };

// The line a heading has to cross to count as current: the element's own
// scroll-margin-top, which is the offset an anchor jump lands it on. Reading it
// back off the element rather than hardcoding it means the spy and the jump
// can't disagree — move the sections' scroll-mt and this follows.
function lineOf(el: Element): number {
  return parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
}

// A sticky index beside a long document (privacy, legal). It's fed the same
// array the page renders its <section>s from, so the list, the order and the
// numbering can't drift from the headings they point at.
//
// Hidden below xl: there's no margin to put it in beside a centred document at
// those widths, and stacking a thirteen-item list above the content would push
// the document itself off the first screen. On a phone the page is scrolled,
// not navigated.
//
// Tone is what separates the entries: they rest at half ink and come up to full
// black when they're either hovered or current. That makes the list read as one
// quiet block with a single live marker in it, and it's the same move the
// footer's group labels make — a deliberate exception to the full-ink rule for
// resting text, and the only one on paper (see AGENTS.md).
//
// The index deliberately does NOT go through LinkStyle: its highlight box is
// the affordance for proper buttons, and a column of thirteen boxes lighting up
// under the cursor is chrome the page doesn't need. Same reason it isn't
// LinkStyle's chrome mode either — that dims on hover, and here hover resolves.
// `label` is the nav's accessible name, handed in by the page so it follows the
// page's language; the default covers a caller that has only one.
export function SectionIndex({
  sections,
  label = "On this page",
}: {
  sections: readonly Section[];
  label?: string;
}) {
  const [active, setActive] = useState(sections[0]?.id);
  // A clicked entry owns the highlight until the reader scrolls for themselves.
  // The last sections of a document can sit below the line and never reach it —
  // the page runs out of scroll first — so position alone can't tell an anchor
  // jump to section 12 from one to section 13: both end at the same scroll
  // offset. Honouring the click is what makes every entry in the list land on
  // itself.
  const pinned = useRef<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      if (pinned.current) return;

      // Current = the last heading that has passed under the navbar. Read from
      // layout each frame rather than via IntersectionObserver, which reports
      // nothing while the scroll sits in the gap between two sections and never
      // fires for a trailing section too short to reach the line at all.
      let current = sections[0]?.id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - lineOf(el) <= 1) current = id;
      }

      // Once the page has no scroll left, everything still below the line is
      // stranded there — on /privacy that's the last three sections, which the
      // document simply isn't tall enough to lift any further. Hand the
      // highlight to the nearest of them instead of leaving it parked on the
      // last section that did reach the line, several screens above.
      const ended =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (ended) {
        let gapToBest = Infinity;
        for (const { id } of sections) {
          const el = document.getElementById(id);
          if (!el) continue;
          const gap = el.getBoundingClientRect().top - lineOf(el);
          if (gap > 1 && gap < gapToBest) {
            gapToBest = gap;
            current = id;
          }
        }
      }

      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Released on the reader's own scroll intent, not on "scroll" — the anchor
    // jump fires that itself, which would drop the pin in the same tick it was
    // set.
    const release = () => {
      pinned.current = null;
      schedule();
    };

    // The phone bar in the navbar is fed from here rather than owning its own
    // copy of this: one spy, one active id, no chance of the two disagreeing.
    // Same window-event channel the breadcrumbs use (see navbar.tsx). The bar
    // pins back through it, so a tap there gets the same treatment a click in
    // this column does — see `pinned` above for why that matters.
    const onPin = (e: Event) => {
      const { id } = (e as CustomEvent<{ id: string }>).detail;
      pinned.current = id;
      setActive(id);
    };

    update();
    window.addEventListener("raban-section-pin", onPin);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("keydown", release);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("raban-section-pin", onPin);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", release);
    };
  }, [sections]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("raban-sections", { detail: { sections, active } }),
    );
  }, [sections, active]);

  // Clear the bar on the way out, so it doesn't outlive the page that published
  // it — the navbar is mounted across route changes and would otherwise keep
  // showing a section index for a document that's no longer on screen.
  useEffect(
    () => () => {
      window.dispatchEvent(
        new CustomEvent("raban-sections", { detail: { sections: [], active: null } }),
      );
    },
    [],
  );

  return (
    <nav
      aria-label={label}
      // self-start, not stretch: a flex item stretched to the full column
      // height has nothing left to slide against and sticky would never bite.
      // 12px, the app's small size — the same step down the footer takes, for
      // the same reason: an index is read when someone goes looking for it.
      // w-64 is what the longest entry needs at that size to stay on one line.
      // Left track of the page's grid, second row — the row the body text starts
      // on, NOT the one the heading occupies. The grid is items-baseline, so the
      // first entry here and the first line of prose beside it sit on one shared
      // baseline: the browser measures both line boxes, so 12px text and 16px
      // text line up exactly, and stay lined up if either size changes. Nothing
      // here is a hand-tuned pixel offset.
      //
      // No self-start — that would override the baseline alignment. Baseline
      // alignment sizes the item to its content anyway, so sticky has room to
      // work within the (very tall) row.
      //
      // top is --index-top, which is exactly where the column already sits, so
      // it stays put rather than sliding up to a lower resting place on the
      // first scroll. See --index-top in globals.css.
      //
      // w-max, not a fixed width: the column shrinks to its LONGEST entry, which
      // is what gives every entry the same hover target (see the <a> below).
      // max-w-full caps it at the track so a long title wraps instead of
      // reaching into the prose.
      //
      // xl, not lg: below 1280px the margin beside a centred 672px document is
      // too narrow to hold the list unwrapped (see --measure in globals.css), so
      // there is nowhere to put it and the page runs the prose on its own.
      className="sticky top-[var(--index-top)] col-start-1 row-start-2 hidden w-max max-w-full justify-self-start text-[12px] xl:block"
    >
      {/* No space-y here: the 16px between entries is py-2 on the entries
          themselves, so the targets TILE — every pixel of the column belongs to
          exactly one entry and nothing dies in the gaps as the cursor travels
          down the list. Same 16px of air as the footer's gap-4 at this size,
          and the rendered spacing is identical either way. */}
      <ol>
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={() => {
                pinned.current = section.id;
                setActive(section.id);
              }}
              aria-current={active === section.id ? "true" : undefined}
              // block + py-2: an inline <a> is only as wide as its own text, so
              // "5. Server logs" stopped responding a third of the way across
              // the column while "4. Location of the homepage globe" ran its
              // full width. As a block it fills the column — which w-max has
              // already sized to the longest entry — so every entry hands over
              // at the same horizontal position, whichever one is longest.
              //
              // No transition, so the resolve snaps the way every other hover in
              // the app does. active: mirrors hover: for touch, where hover is
              // gated behind @media (hover: hover) and never fires.
              className={`block cursor-pointer py-2 no-underline ${
                active === section.id
                  ? "text-ink"
                  : "text-ink/50 hover:text-ink active:text-ink"
              }`}
            >
              {i + 1}. {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
