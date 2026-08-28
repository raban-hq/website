// Rebuilt, not copied: the other site's About page was a personal story
// (university, hometown) and none of it belongs here.
export default function AboutPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--header-gap)] text-base text-ink">
        <h1 className="text-[length:var(--h1)] font-black leading-[var(--h1-line)]">About</h1>
        <div className="max-w-[var(--measure)] space-y-[var(--header-gap)]">
          <p>
            In most established companies, the most important knowledge lives in a
            few people&rsquo;s heads — and many of them are retiring in the
            next few years. Raban captures that knowledge in conversation before
            they leave, and puts it to work for the rest of the team.
          </p>
          <p>Built by Simon Waiß and Johannes Koch.</p>
        </div>
      </div>
    </main>
  );
}
