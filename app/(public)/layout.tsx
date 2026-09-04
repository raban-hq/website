import { Footer } from "../components/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
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
          so it belongs here on the card; its other half, --page-cast, is thrown
          from the boundary element below — see globals.css for why the two are
          split across two elements.
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
      {/* The boundary. The footer is the surface being cast onto, and the empty
          div after it is what throws the cast: same width, same bottom radius as
          the card, so the silhouette is identical, but STATIC — nothing inside
          it animates, so it never joins a composited layer. That is the whole
          reason it exists rather than the cast sitting on the card, where the
          globe's animation re-rasterized it and flashed a square corner through
          the notches (see --page-cast in globals.css).
          Its own box covers the strip above the boundary, and an outer shadow is
          clipped to outside the box it's thrown from — so the cast only ever
          appears below the line and in the two corner notches, never smudged
          upward over the paper. bottom-full pins it to the footer's top edge, so
          it follows the footer's height without anything measuring it. It comes
          after <Footer /> so it paints over the slab, and it must stay
          pointer-events-none: it lies over the last 84px of the page. */}
      <div className="relative">
        <Footer />
        <div className="pointer-events-none absolute inset-x-0 bottom-full h-[calc(var(--radius)*3)] rounded-b-[var(--radius)] [corner-shape:superellipse(1.5)] shadow-[var(--page-cast)]" />
      </div>
    </div>
  );
}
