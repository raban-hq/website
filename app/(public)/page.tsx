import { Placeholder } from "@/app/components/placeholder";

export default function HomePage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--header-gap)] text-base text-ink">
        <h1 className="max-w-[var(--measure)] text-[length:var(--h1)] font-black leading-[var(--h1-line)]">
          Raban
        </h1>
        <div className="max-w-[var(--measure)] space-y-[var(--header-gap)]">
          <Placeholder>the one line that says what Raban is</Placeholder>
          <Placeholder>the supporting paragraph under it</Placeholder>
        </div>
      </div>
    </main>
  );
}
