import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sahaj Gyawali — Data Science & AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#EEF1EA",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#93968A",
            }}
          >
            Fig. 1 — Portfolio
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#93968A",
            }}
          >
            27.71°N 85.32°E
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#1B1B17", lineHeight: 1.05 }}>
            Sahaj Gyawali
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 24 }}>
            <div style={{ width: 48, height: 4, backgroundColor: "#A8401F", marginRight: 20 }} />
            <div style={{ fontSize: 32, color: "#445A34" }}>Data Science &amp; AI/ML Engineer</div>
          </div>
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#5B5D52",
            borderTop: "1px solid rgba(27,27,23,0.15)",
            paddingTop: 24,
          }}
        >
          Kathmandu, Nepal — sahajgyawali.com.np
        </div>
      </div>
    ),
    { ...size }
  );
}
