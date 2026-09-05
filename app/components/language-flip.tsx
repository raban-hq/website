"use client";

import { useRouter } from "next/navigation";

import { LOCALE_COOKIE, type Locale } from "@/utils/locale";

import { LinkStyle } from "./link-style";

// The language switch, sitting above the theme flip in the footer and built
// the same way: a capsule with a knob, drawn in currentColor, one distinction —
// position. One letter per language sits inside the track, and the knob slides
// behind the current one; the letter on the knob inverts to the slab so it
// stays legible (that's legibility, not a second signal). Same 64×32 capsule
// as the theme flip below it, so the two read as one family of controls.
//
// German is the default. The choice is a cookie, and router.refresh()
// re-renders the server components in the new language without touching the
// URL. The knob is placed from the server-provided locale, so there is nothing
// to correct after hydration.
export function LanguageFlip({ locale }: { locale: Locale }) {
  const router = useRouter();

  function flip() {
    const next: Locale = locale === "de" ? "en" : "de";
    try {
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      // Cookies unavailable (e.g. blocked) — the click just does nothing.
    }
    router.refresh();
  }

  const en = locale === "en";
  return (
    <LinkStyle tone="light" icon highlight={false}>
      <button type="button" onClick={flip} className="cursor-pointer">
        {/* 64×32 capsule (inside the 1px border: 62×30); the knob is 25×24
            with 3px of air on every side, and it travels 31px — exactly one
            half of the inside — so it sits centred under either letter. */}
        <span
          aria-hidden="true"
          className="relative flex h-8 w-16 items-center rounded-full border border-current/40 text-[12px] leading-none"
        >
          <span
            className={`absolute left-[3px] top-[3px] h-[24px] w-[25px] rounded-full bg-current transition-transform duration-150 ease-out ${
              en ? "translate-x-[31px]" : ""
            }`}
          />
          <span className={`relative flex-1 text-center ${en ? "" : "text-slab"}`} lang="de">
            D
          </span>
          <span className={`relative flex-1 text-center ${en ? "text-slab" : ""}`} lang="en">
            E
          </span>
        </span>
        <span className="sr-only">{en ? "Auf Deutsch wechseln" : "Switch to English"}</span>
      </button>
    </LinkStyle>
  );
}
