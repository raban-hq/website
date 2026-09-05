// The site's two languages. The copy was written German-first for the German
// Mittelstand, and German is the fallback — but a visitor sees the site in the
// language their browser asks for (Accept-Language) until they use the switch
// in the footer, whose choice lives in a cookie rather than the URL, so
// switching never changes a link someone shared. LanguageFlip writes the
// cookie and refreshes.
//
// This file is deliberately import-free so client components can use the type
// and the cookie name; resolving the language server-side (cookie, then the
// browser's preference) lives in utils/locale-server.ts (next/headers must not
// reach the client bundle).
export type Locale = "de" | "en";

export const LOCALE_COOKIE = "raban-locale";
