import { SectionIndex, type Section } from "../../components/section-index";

// One list feeds both the sticky index and the headings, so the order and the
// numbering can't drift.
//
// A privacy policy has to describe what THIS site actually does — nothing here
// is carried over from another site, because a policy that describes someone
// else's data handling is worse than none. Sections that only existed for the
// other site's features (account login, AI voice interviews) are deliberately
// not here; add sections as the site grows features that need them. The globe
// IS here — this site has one.
const SECTIONS: (Section & { body: React.ReactNode })[] = [
  {
    id: "controller",
    title: "Controller",
    body: (
      <p>
        Simon Wai&szlig;, Fichtenweg 22, 72076 T&uuml;bingen, Germany.
        <br />
        Email: simon@simonwaiss.de
      </p>
    ),
  },
  {
    id: "what-we-process",
    title: "What we process and why",
    body: (
      <p>
        This site processes what it needs to serve pages, point the homepage
        globe at your country (see below), and, if you write to us, whatever
        you put in that message yourself. We run no analytics, no tracking
        scripts, and no advertising cookies.
      </p>
    ),
  },
  // The home page resolves the visitor's COUNTRY from Vercel's edge geo headers
  // to point the globe (utils/visitor-geo.ts): per request, never stored, no
  // cookie. It still has to be declared here.
  {
    id: "globe-location",
    title: "Location of the homepage globe",
    body: (
      <p>
        The homepage globe points to your country, read from headers our
        hosting provider, Vercel, adds to each request. This happens fresh on
        every request &mdash; nothing is stored, and no cookie is set.
      </p>
    ),
  },
  // Retention is Vercel's own, set by the plan this project runs on: 1 hour on
  // Hobby, 1 day on Pro, 3 days on Enterprise (vercel.com/docs/logs/runtime,
  // read 28.08.2026). The wording below holds for all three; narrow it to the
  // exact figure once someone confirms the plan.
  {
    id: "server-logs",
    title: "Server logs",
    body: (
      <p>
        Serving a page leaves an entry in our hosting provider&rsquo;s logs:
        the page requested, the time, the HTTP status, the browser&rsquo;s
        user agent, and the region that handled it. Vercel keeps these for a
        few days at most and then discards them. We do not copy them anywhere
        else, and we do not use them to build a profile of you.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        This site does not set cookies. Your light/dark choice is saved in
        your browser&rsquo;s local storage, on your own device only, and
        never sent to us.
      </p>
    ),
  },
  {
    id: "recipients",
    title: "Recipients and processors",
    body: (
      <p>
        Vercel Inc., our hosting provider, processes requests to run this
        site. No other processor has access.
      </p>
    ),
  },
  // Vercel Functions default to iad1, Washington D.C. (vercel.com/docs/regions,
  // "Compute defaults", read 28.08.2026), and this project sets no region — so
  // the home page, which is dynamic because it reads the geo headers, runs in
  // the USA. Setting the function region to fra1 (Frankfurt) would keep that
  // processing inside the EU and let this section say so instead.
  {
    id: "transfers",
    title: "International data transfers",
    body: (
      <p>
        Vercel is a US company, and the homepage runs on its servers in the
        United States, so serving it involves a transfer outside the EU. That
        transfer rests on the European Commission&rsquo;s standard contractual
        clauses, agreed with Vercel in our data processing agreement.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <p>
        Under the GDPR, you can ask to see the data we hold on you, have it
        corrected or deleted, get a copy of it, limit how we use it, and
        object to processing based on legitimate interest. Contact us using
        the details in Controller above to use any of these.
      </p>
    ),
  },
  {
    id: "complaint",
    title: "Right to lodge a complaint",
    body: (
      <p>
        You can complain to a data protection supervisory authority at any
        time &mdash; in particular in the state where you live, where you
        work, or where you believe a violation took place.
      </p>
    ),
  },
  {
    id: "automated-decisions",
    title: "Automated decision-making",
    body: <p>No automated decision-making, including profiling, takes place on this site.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>This policy may change as the site changes. The version on this page is always the current one.</p>,
  },
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
