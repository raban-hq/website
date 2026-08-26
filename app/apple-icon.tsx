import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// The mark: a solid black field with a simple white dot in the lower-right
// corner. Carried over from the founders' earlier project — shared on purpose. Full-bleed black (iOS masks the corners); the dot is positioned to
// mirror app/icon.svg (centre at 72,72 on a 0–100 grid → 33px inset at 180px).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 33,
        }}
      >
        <div style={{ width: 34, height: 34, borderRadius: 34, background: "#fff" }} />
      </div>
    ),
    { ...size },
  );
}
