import { Placeholder } from "@/app/components/placeholder";

// Rebuilt, not copied: the other site's About page was a personal story
// (university, hometown) and none of it belongs here.
export default function AboutPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--header-gap)] text-base text-ink">
        <h1 className="text-[length:var(--h1)] font-black leading-[var(--h1-line)]">About</h1>
        <div className="max-w-[var(--measure)] space-y-[var(--header-gap)]">
          <Placeholder>who is behind Raban, and how much of that should be public</Placeholder>
        </div>
      </div>
    </main>
  );
}
