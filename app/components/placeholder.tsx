// A visible, greppable marker for copy that has not been written yet. Every
// instance is a launch blocker: `grep -rn "<Placeholder" app` must come back
// empty before the site goes live.
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-2 border-ink/20 pl-4 text-ink/50">
      Noch zu schreiben — {children}
    </p>
  );
}
