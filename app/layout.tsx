import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { ScrollReset } from "./components/scroll-reset";
import { THEME_SCRIPT } from "./components/theme";
import "./globals.css";

export const metadata: Metadata = { title: "Raban" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning because THEME_SCRIPT below writes data-theme onto
    // this element before React hydrates, so the client <html> deliberately
    // carries an attribute the server's didn't. It suppresses that on THIS
    // element only, not the tree under it.
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* First thing in the body, so a stored theme override is applied before
            the browser paints anything. A render-blocking inline script is the
            whole point here — anything deferred (a component effect, next/script
            with a strategy) runs after first paint, which is the white flash it
            exists to prevent. Nothing else in the app inlines a script. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <ScrollReset />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
