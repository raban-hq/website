import { cookies } from "next/headers";

import { LOCALE_COOKIE, type Locale } from "./locale";

// Server half of the locale (see utils/locale.ts): read the visitor's choice,
// German by default. Reading cookies() makes a page dynamic — the home page
// already is (visitor geo), and the others accept it for the switch.
export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return value === "en" ? "en" : "de";
}
