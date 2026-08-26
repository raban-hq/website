"use client";

import { useEffect } from "react";

import { LinkStyle } from "./components/link-style";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="px-[var(--gutter)] pb-[var(--content-gap)] pt-[var(--content-top)]">
      <p className="text-base">Something went wrong.</p>
      <LinkStyle>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="mt-3 cursor-pointer bg-transparent text-base"
        >
          Try again
        </button>
      </LinkStyle>
    </main>
  );
}
