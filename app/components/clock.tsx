"use client";

import { useEffect, useState } from "react";

function format(now: Date) {
  // The browser formats the local offset for us ("GMT+2", "GMT+5:30"); we just
  // relabel GMT -> UTC. Handles half-hour zones and DST automatically.
  return now
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "shortOffset",
    })
    .replace("GMT", "UTC");
}

export function Clock() {
  // null until mounted so the server/client render match (time is client-only).
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      // Sits in the bottom-right corner of its relative parent (the globe
      // section), --gutter in from the section's right and bottom edges.
      className="absolute right-[var(--gutter)] bottom-[var(--gutter)] z-10 text-[12px] tabular-nums text-ink"
      suppressHydrationWarning
    >
      {time}
    </span>
  );
}
