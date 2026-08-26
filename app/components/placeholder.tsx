// A visible, greppable marker for copy that has not been written yet. Every
// instance is a launch blocker: `grep -rn "<Placeholder" app` must come back
// empty before the site goes live.
//
// className lets a placeholder keep the type of the slot it stands in — the
// home hero is a different size from body copy, and the layout should look
// right while the words are still missing.
export function Placeholder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`border-l-2 border-ink/20 pl-4 text-ink/50 ${className}`}>
      Noch zu schreiben — {children}
    </p>
  );
}
