import { ImageResponse } from "next/og";

export const alt = "Bima Panji Wijaya — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0c0f",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "64px",
            height: "6px",
            borderRadius: "3px",
            background: "#c9a84c",
            marginBottom: "40px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "72px",
            fontWeight: 700,
            color: "#eff0f3",
            marginBottom: "20px",
          }}
        >
          Bima Panji Wijaya
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "36px",
            fontWeight: 500,
            color: "#c9a84c",
            marginBottom: "28px",
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#8b919d",
          }}
        >
          React · Next.js · Node.js · PostgreSQL — Jakarta, Indonesia
        </div>
      </div>
    ),
    { ...size }
  );
}
