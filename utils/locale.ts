// The site's two languages. German is the default: the audience is the German
// Mittelstand, and the copy was written German-first. The choice lives in a
// cookie rather than the URL, so switching never changes a link someone shared;
// LanguageFlip in the footer writes the cookie and refreshes.
//
// This file is deliberately import-free so client components can use the type
// and the cookie name; reading the cookie server-side lives in
// utils/locale-server.ts (next/headers must not reach the client bundle).
export type Locale = "de" | "en";

export const LOCALE_COOKIE = "raban-locale";
