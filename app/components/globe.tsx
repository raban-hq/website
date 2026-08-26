"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import type { Geo } from "./globe-map";

// Where the globe rests when the edge geo headers are absent (local dev, or a
// visitor whose country the edge can't resolve). Country-level like every
// other resting point, so a fallback is indistinguishable from a real answer.
const FALLBACK: Geo = { lat: 51.1, lng: 10.4, label: "Germany" };

const GlobeMap = dynamic<Geo>(() => import("./globe-map").then((m) => m.GlobeMap), {
  ssr: false,
});

export function Globe({ geo }: { geo: Geo | null }) {
  // Location is resolved server-side (utils/visitor-geo.ts) and passed in as a
  // prop — no device storage, so no consent needed. Fall back to a default when
  // the edge geo headers are absent (e.g. local dev).
  const props = geo ?? FALLBACK;
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    function onRefresh() {
      setRefreshKey((k) => k + 1);
    }
    window.addEventListener("raban-refresh", onRefresh);
    return () => window.removeEventListener("raban-refresh", onRefresh);
  }, []);

  return <GlobeMap key={refreshKey} {...props} />;
}
