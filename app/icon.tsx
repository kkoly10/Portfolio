import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: "KK" monogram in the brand navy.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f3a5f",
          color: "#faf8f5",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 14,
        }}
      >
        KK
      </div>
    ),
    size
  );
}
