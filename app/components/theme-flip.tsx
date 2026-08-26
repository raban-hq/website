"use client";

import { LinkStyle } from "./link-style";
import { THEME_KEY } from "./theme";

// The theme control, in the footer under the wordmark: a capsule with a knob,
// and nothing else — no label, no icon, no second state to read. It is the one
// switch in the app, so it doesn't need naming; the knob's side is the whole
// message (left is light, right is dark, the way every switch in every OS runs).
//
// There are only ever two states worth showing someone: what they're looking at,
// and the other one. The third — "follow my device" — is the DEFAULT rather than
// a position on the switch: the site follows the device until you flip it, and
// flipping back to whatever the device says drops the override entirely, so
// you're following the device again and it keeps deciding (change your Mac to
// dark at sunset and the page changes with it, no reload). That's why there's no
// "System" notch — you get back to system by flipping back.
//
// It holds no React state and runs no effect, which is what keeps it honest
// through hydration: the ACTIVE theme lives in the DOM (a [data-theme] pin, or
// the device's own preference when there is none), the knob is placed from it by
// CSS, and the click handler reads it back at the moment of the click. A
// useState copy would render the knob left for everyone on the server and then
// correct itself after hydration — the flash this design avoids.
export function ThemeFlip() {
  function flip() {
    const root = document.documentElement;
    const deviceDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // What's on screen right now: the pin if there is one, the device otherwise.
    const showingDark = root.dataset.theme ? root.dataset.theme === "dark" : deviceDark;
    const next = showingDark ? "light" : "dark";

    if (next === (deviceDark ? "dark" : "light")) {
      // Flipped back to what the device already says — stop overriding it.
      delete root.dataset.theme;
    } else {
      root.dataset.theme = next;
    }

    try {
      if (root.dataset.theme) {
        localStorage.setItem(THEME_KEY, root.dataset.theme);
      } else {
        localStorage.removeItem(THEME_KEY);
      }
    } catch {
      // Private mode: the flip still works for this page, it just won't persist.
    }
  }

  return (
    <LinkStyle tone="light" icon highlight={false}>
      <button type="button" onClick={flip} className="cursor-pointer">
        {/* The capsule: 32×16, both on the 8px grid, and `rounded-full` so the
            ends are true half-circles — the chrome's own rounding rule (radius =
            half the height) taken to its limit. Everything is drawn in
            currentColor, so the switch is one object: LinkStyle moves the
            colour the track and knob both borrow, and neither is restated.
            `icon highlight={false}` is the flip asking for **full ink and no
            hover state at all** — the only control in the app with neither.
            Not the half ink the links beside it rest at: that rule is about
            clickable *text*, and a capsule is not a word — a hairline track at
            half of half (border-current/40 through slab-ink/50) is a control
            you can barely see, with no size or weight left in it to carry what
            the ink took away. And no dim or box on hover either, because this
            switch already answers louder than any of them: the knob slides.
            Feedback for a click whose whole result is a 150ms move across the
            capsule is a second signal saying what the first one says better.
            A hairline track and a solid knob, flat, no fill — one distinction
            (position), never position AND a filled track. */}
        <span
          aria-hidden="true"
          className="relative block h-4 w-8 rounded-full border border-current/40"
        >
          {/* The knob sits 2px inside the 16px track (a 10px dot with 2px of air
              all round, which is where the 8px grid runs out — below the chrome
              scale this is a control, not layout). It travels the 16px between
              the two ends: left for light, right for dark. The transition is the
              exception to the app's no-transition rule and earns it — a switch
              whose knob teleports reads as a repaint rather than a mechanism. */}
          <span className="absolute left-[2px] top-[2px] size-[10px] rounded-full bg-current transition-transform duration-150 ease-out dark:translate-x-4" />
        </span>
        {/* The accessible name, swapped by the same variant that moves the knob.
            display:none takes the inactive one out of the accessibility tree, so
            the button's name is always the action it will actually perform — and
            there is no aria-label to keep in sync with the visible state. */}
        <span className="sr-only dark:hidden">Switch to dark mode</span>
        <span className="sr-only hidden dark:inline">Switch to light mode</span>
      </button>
    </LinkStyle>
  );
}
