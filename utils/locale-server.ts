import { cookies, headers } from "next/headers";

import { LOCALE_COOKIE, type Locale } from "./locale";

// Server half of the locale (see utils/locale.ts). The visitor's own choice
// (the cookie the footer switch writes) wins; without one, the browser's
// language preference decides; and with neither, German. Reading cookies() and
// headers() makes a page dynamic — the home page already is (visitor geo), and
// the others accept it for the switch.
export async function getLocale(): Promise<Locale> {
  const chosen = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (chosen === "de" || chosen === "en") return chosen;
  return fromAcceptLanguage((await headers()).get("accept-language"));
}

// Accept-Language is a weighted list ("de-CH, en;q=0.8, fr;q=0.5"). Take the
// highest-weighted entry whose primary tag is one of ours — so a browser set
// to French then English gets English, and one that lists neither gets
// German, the site's home language.
export function fromAcceptLanguage(header: string | null): Locale {
  if (!header) return "de";
  const ranked = header
    .split(",")
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      const weight = q ? parseFloat(q.slice(2)) : 1;
      return { lang: tag.trim().toLowerCase().split("-")[0], weight: isNaN(weight) ? 0 : weight, i };
    })
    .filter((e) => e.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.i - b.i);
  for (const { lang } of ranked) {
    if (lang === "de" || lang === "en") return lang;
  }
  return "de";
}
