import { SectionIndex, type Section } from "../../components/section-index";

// Same data-driven shape as /privacy: one list feeds both the sticky index and
// the headings, and the numbering falls out of the order rather than being
// typed in.
//
// Filled with Simon Waiß's sole proprietorship as an interim provider: Raban
// has a second founder (Johannes Koch), and whether the two of them running
// the business together already forms a GbR under German law is still open.
// Revisit this section once that is resolved.
const SECTIONS: (Section & { body: React.ReactNode })[] = [
  {
    id: "provider",
    title: "Provider",
    body: (
      <p>
        Simon Wai&szlig;, sole proprietorship (Einzelunternehmen).
        <br />
        Fichtenweg 22, 72076 T&uuml;bingen, Germany.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Phone: +49 162 2091542
        <br />
        Email: simon@simonwaiss.de
      </p>
    ),
  },
  {
    id: "dispute-resolution",
    title: "Consumer dispute resolution",
    body: (
      <p>
        We are not obligated to participate in dispute resolution proceedings
        before a consumer arbitration board, and do not intend to.
      </p>
    ),
  },
];

export default function LegalPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)] max-xl:pt-[calc(var(--content-top)+var(--nav-h))]">
      <div className="grid grid-cols-[1fr_minmax(0,var(--measure))_1fr] items-baseline gap-y-[var(--header-gap)]">
        <h1 className="col-start-2 row-start-1 text-[length:var(--h1)] font-black leading-[var(--h1-line)]">
          Legal
        </h1>
        <SectionIndex sections={SECTIONS} />
        <div className="col-start-2 row-start-2 min-w-0 space-y-[var(--header-gap)] text-base text-ink">
          <p>Information pursuant to &sect; 5 DDG (German Digital Services Act).</p>
          {SECTIONS.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-[var(--content-top)] space-y-2 max-xl:scroll-mt-[calc(var(--content-top)+var(--nav-h))]"
            >
              <h2 className="text-[length:var(--h2)] font-bold leading-[var(--h2-line)]">
                {i + 1}. {section.title}
              </h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
