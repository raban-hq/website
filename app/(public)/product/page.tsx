export default function ProductPage() {
  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <div className="space-y-[var(--header-gap)] text-base text-ink">
        <h1 className="text-[length:var(--h1)] font-black leading-[var(--h1-line)]">Product</h1>
        <div className="max-w-[var(--measure)] space-y-[var(--header-gap)]">
          <p>
            Raban starts with what your company already has: files, protocols,
            the things people wrote down. Whatever&rsquo;s missing, it gets by
            talking to the people who carry it, while they&rsquo;re still there.
          </p>
          <p>
            After that, anyone on the team can ask a question and get an
            answer in seconds, with its source and the person behind it.
          </p>
        </div>
      </div>
    </main>
  );
}
