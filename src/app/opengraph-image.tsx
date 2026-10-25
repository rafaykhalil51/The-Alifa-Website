import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "The Alifa Educational Consultants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12110F",
          color: "white",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#FFFFFF",
            borderRadius: 20,
            padding: "12px 16px",
            width: 220,
          }}
        >
          {/* next/og renders a plain img; next/image is not available in this file. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={188} height={191} style={{ objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>Your Future Begins Beyond Borders.</div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#E0B000" }}>Educational consultancy · Karachi</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
