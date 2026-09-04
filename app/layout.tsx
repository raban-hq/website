import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { getLocale } from "@/utils/locale-server";
import { Navbar } from "./components/navbar";
import { ScrollReset } from "./components/scroll-reset";
import { THEME_SCRIPT } from "./components/theme";
import "./globals.css";

export const metadata: Metadata = { title: "Raban" };

// The one typeface, for every word on the site and every label inside the
// graphics: Archivo — the face the pitch deck is set in (its "Modernist"
// design system runs Archivo for headings at 800 and body at 400), so the
// site and the deck read as one thing. A grotesque with a slightly wider
// stance than Helvetica, which suits the wide, flat graphics. Self-hosted by
// next/font at build time (no request to Google at runtime, in keeping with
// the site's no-tracking stance) and published as the --font-sans variable
// that globals.css puts on body, with the system Helvetica stack behind it.
// latin-ext for the German umlauts and ß; the variable font carries every
// weight, so headings keep their black.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // The visitor's language (a cookie, German by default — see utils/locale.ts)
  // names the document and drives the navbar; the pages read it themselves.
  const locale = await getLocale();
  return (
    // suppressHydrationWarning because THEME_SCRIPT below writes data-theme onto
    // this element before React hydrates, so the client <html> deliberately
    // carries an attribute the server's didn't. It suppresses that on THIS
    // element only, not the tree under it.
    <html lang={locale} className={archivo.variable} suppressHydrationWarning>
      <body>
        {/* First thing in the body, so a stored theme override is applied before
            the browser paints anything. A render-blocking inline script is the
            whole point here — anything deferred (a component effect, next/script
            with a strategy) runs after first paint, which is the white flash it
            exists to prevent. Nothing else in the app inlines a script. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <ScrollReset />
        <Navbar locale={locale} />
        {children}
      </body>
    </html>
  );
}
