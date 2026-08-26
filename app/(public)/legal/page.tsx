import { Placeholder } from "@/app/components/placeholder";
import { SectionIndex, type Section } from "../../components/section-index";

// Same data-driven shape as /privacy: one list feeds both the sticky index and
// the headings, and the numbering falls out of the order rather than being
// typed in.
//
// EVERY BODY IS A PLACEHOLDER. A German business site needs an Impressum under
// § 5 DDG naming a real provider with a postal address — that has to be filled
// in by a founder before this site goes live. Nothing here is invented.
const SECTIONS: (Section & { body: React.ReactNode })[] = [
  {
    id: "provider",
    title: "Provider",
    body: <Placeholder>legal name and postal address of the provider (§ 5 DDG)</Placeholder>,
  },
  {
    id: "contact",
    title: "Contact",
    body: <Placeholder>contact details the Impressum has to carry</Placeholder>,
  },
  {
    id: "dispute-resolution",
    title: "Consumer dispute resolution",
    body: <Placeholder>the VSBG statement</Placeholder>,
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
