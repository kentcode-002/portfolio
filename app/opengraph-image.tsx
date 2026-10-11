import { ImageResponse } from "next/og";

export const alt = "Kent Robert Dela Cruz, full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: 80
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#a1a1a1" }}>
          kent-dev.vercel.app
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02
            }}
          >
            Kent Robert Dela Cruz
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#a1a1a1",
              marginTop: 20
            }}
          >
            Full-stack developer. Next.js, React, TypeScript, Laravel.
          </div>
        </div>
        <div
          style={{ display: "flex", width: 180, height: 6, background: "#808080" }}
        />
      </div>
    ),
    { ...size }
  );
}
