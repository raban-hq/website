// Visitor location for the globe, read from Vercel's edge geo headers.
//
// The globe shows the COUNTRY, never the city: city-level IP geolocation is
// routinely off by a whole region (a Frankfurt exit node for a Heidelberg
// visitor), and a wrong city name is the one thing a reader can check. So the
// marker sits on the country's own centre (utils/country-centroids.ts, derived
// from the same shapes the globe draws) rather than on the IP's coordinates —
// the label and the dot then agree, and both are right.
//
// The IP's own coordinates are still the fallback for the ~89 microstates and
// territories the 110m atlas has no shape for (Singapore, Malta, Hong Kong...),
// where a city point IS country-level precision.
//
// Derived per request and never stored: no cookie, nothing kept after the
// response, so this needs no consent banner under §25 DDG (see /privacy).
// Reading headers opts the calling route into dynamic rendering.

import { headers } from "next/headers";

import { COUNTRY_CENTROIDS } from "./country-centroids";

export type VisitorGeo = { lat: number; lng: number; label: string | null };

export async function visitorGeo(): Promise<VisitorGeo | null> {
  const h = await headers();
  const code = h.get("x-vercel-ip-country");
  const centroid = code ? COUNTRY_CENTROIDS[code.toUpperCase()] : undefined;
  if (centroid) {
    return { lng: centroid[0], lat: centroid[1], label: countryName(code) };
  }

  // No shape for this country (or no country header at all) — aim at the IP's
  // coordinates instead, still labelled with the country.
  const lat = h.get("x-vercel-ip-latitude");
  const lng = h.get("x-vercel-ip-longitude");
  if (!lat || !lng) return null; // absent in local dev — caller falls back
  return { lat: parseFloat(lat), lng: parseFloat(lng), label: countryName(code) };
}

// ISO 3166-1 alpha-2 -> English country name, via the runtime's own ICU data
// (no table to maintain). Vercel also emits non-ISO placeholders such as "T1"
// for Tor exits; Intl throws on those, and "XX" resolves to nothing.
function countryName(code: string | null): string | null {
  if (!code) return null;
  try {
    return new Intl.DisplayNames(["en"], { type: "region", fallback: "none" }).of(code) ?? null;
  } catch {
    return null;
  }
}
