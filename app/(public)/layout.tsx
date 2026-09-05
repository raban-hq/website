import { getLocale } from "@/utils/locale-server";

import { Footer } from "../components/footer";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  // The language choice (a cookie, German default) is read once here for the
  // footer's switch; pages read it themselves for their copy.
  const locale = await getLocale();
  return (
    // The page is a card hanging from the top of the viewport: paper, square
    // where it meets the navbar, rounded where it ends. The radius sits on the
    // content block — the thing directly above the footer — never on the footer
    // itself, which is square. The slab is the surface the card hangs over, so
    // it's painted on the wrapper: that's what shows through the two corner
    // notches the curve cuts out of the paper, and the footer below is the same
    // slab continuing rather than a second block.
    <div className="relative flex min-h-[100vh] flex-col bg-slab">
      {/* --page-lip is the card's own bottom edge, graded so the sheet reads as
          curving over the footer rather than being cut off at it. It's an inset,
          so it sits on the card and never reaches the footer. (History: an
          outset cast — a white glow in light, a black shadow in dark — used to
          be thrown onto the footer from a static boundary element that sat
          here after <Footer />. It was removed: the smear over the footer read
          as a stain rather than an edge. The lip is the whole edge now.)
          overflow-clip makes the card clip its descendants to that curve, which
          a border-radius alone does NOT do: the globe animates on a transform,
          so while it runs it sits on its own composited layer, and a composited
          layer is free to paint outside an ancestor's radius. Clip, not hidden —
          hidden would make the card a scroll container and re-anchor the sticky
          section index to it (same note as on html/body in globals.css). It
          costs nothing: the globe exactly fills its section at every breakpoint
          and is smaller than it while animating. */}
      <div className="grow overflow-clip rounded-b-[var(--radius)] [corner-shape:superellipse(1.5)] bg-paper shadow-[var(--page-lip)]">
        {children}
      </div>
      <Footer locale={locale} />
    </div>
  );
}
