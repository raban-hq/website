import { Placeholder } from "@/app/components/placeholder";
import { SectionIndex, type Section } from "../../components/section-index";

// One list feeds both the sticky index and the headings, so the order and the
// numbering can't drift.
//
// EVERY BODY IS A PLACEHOLDER. A privacy policy has to describe what THIS site
// actually does — nothing here is carried over from another site, because a
// policy that describes someone else's data handling is worse than none.
// Sections that only existed for the other site's features (account login,
// homepage globe, AI voice interviews) are deliberately not here; add sections
// as the site grows features that need them.
const SECTIONS: (Section & { body: React.ReactNode })[] = [
  { id: "controller", title: "Controller", body: <Placeholder>who is responsible for the data, with a postal address</Placeholder> },
  { id: "what-we-process", title: "What we process and why", body: <Placeholder>what this site collects, and the legal basis for each</Placeholder> },
  { id: "server-logs", title: "Server logs", body: <Placeholder>what the host logs, and how long it is kept</Placeholder> },
  { id: "cookies", title: "Cookies", body: <Placeholder>which cookies are set, if any</Placeholder> },
  { id: "recipients", title: "Recipients and processors", body: <Placeholder>every processor with access, hosting included</Placeholder> },
  { id: "transfers", title: "International data transfers", body: <Placeholder>whether data leaves the EU, and on what basis</Placeholder> },
  { id: "your-rights", title: "Your rights", body: <Placeholder>the GDPR rights and how to exercise them</Placeholder> },
  { id: "complaint", title: "Right to lodge a complaint", body: <Placeholder>the competent supervisory authority</Placeholder> },
  { id: "automated-decisions", title: "Automated decision-making", body: <Placeholder>whether any takes place on this site</Placeholder> },
  { id: "changes", title: "Changes to this policy", body: <Placeholder>how changes are announced</Placeholder> },
];

export default function PrivacyPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)] max-xl:pt-[calc(var(--content-top)+var(--nav-h))]">
      <div className="grid grid-cols-[1fr_minmax(0,var(--measure))_1fr] items-baseline gap-y-[var(--header-gap)]">
        <h1 className="col-start-2 row-start-1 text-[length:var(--h1)] font-black leading-[var(--h1-line)]">
          Privacy policy
        </h1>
        <SectionIndex sections={SECTIONS} />
        <div className="col-start-2 row-start-2 min-w-0 space-y-[var(--header-gap)] text-base text-ink">
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
