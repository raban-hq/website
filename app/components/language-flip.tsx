"use client";

import { useRouter } from "next/navigation";

import { LOCALE_COOKIE, type Locale } from "@/utils/locale";

import { LinkStyle } from "./link-style";

// The language switch, sitting above the theme flip in the footer and built
// the same way: a capsule with a knob, drawn in currentColor, one distinction —
// position. One letter per language sits inside the track, and the knob slides
// behind the current one; the letter on the knob inverts to the slab so it
// stays legible (that's legibility, not a second signal). Same 40×20 capsule
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
        {/* 40×20 capsule (inside the 1px border: 38×18); the knob is 15×14
            with 2px of air on every side, and it travels 19px — exactly one
            half of the inside — so it sits centred under either letter. */}
        <span
          aria-hidden="true"
          className="relative flex h-5 w-10 items-center rounded-full border border-current/40 text-[9px] leading-none"
        >
          <span
            className={`absolute left-[2px] top-[2px] h-[14px] w-[15px] rounded-full bg-current transition-transform duration-150 ease-out ${
              en ? "translate-x-[19px]" : ""
            }`}
          />
          {/* Each letter is centred as a GLYPH, not as a line box: text-box
              trims the box to the cap height (Safari 18.2+, Chrome 133+), so
              items-center lands the capital itself on the capsule's midline.
              Without it the 9px line box is centred and the letter sits low —
              by an amount that differs per browser, since Safari and Chrome
              place Archivo's baseline from different font tables. Older
              browsers ignore the property and keep the line-box centring. */}
          <span
            className={`relative flex-1 text-center [text-box:trim-both_cap_alphabetic] ${en ? "" : "text-slab"}`}
            lang="de"
          >
            D
          </span>
          <span
            className={`relative flex-1 text-center [text-box:trim-both_cap_alphabetic] ${en ? "text-slab" : ""}`}
            lang="en"
          >
            E
          </span>
        </span>
        <span className="sr-only">{en ? "Auf Deutsch wechseln" : "Switch to English"}</span>
      </button>
    </LinkStyle>
  );
}
