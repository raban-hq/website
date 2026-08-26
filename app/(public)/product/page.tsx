import { Placeholder } from "@/app/components/placeholder";

export default function ProductPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--header-gap)] text-base text-ink">
        <h1 className="text-[length:var(--h1)] font-black leading-[var(--h1-line)]">Product</h1>
        <div className="max-w-[var(--measure)] space-y-[var(--header-gap)]">
          <Placeholder>how Raban works, in the order the reader needs it</Placeholder>
        </div>
      </div>
    </main>
  );
}
