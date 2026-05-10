import { ImageResponse } from "@vercel/og";
import React from "react";
import {
  creator,
  defaultBaseUrl,
  fetchCommonsImage,
  getResultById,
  getShareLine
} from "../lib/share-utils.mjs";

const h = React.createElement;

function hexToRgba(hex, opacity) {
  const normalized = /^#[0-9a-f]{6}$/i.test(hex) ? hex.slice(1) : "5a8a87";
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

function makeSoftBackground(palette) {
  return [
    "linear-gradient(120deg, #fbf4e9 0%, #f5eadb 42%, transparent 70%)",
    `linear-gradient(42deg, ${hexToRgba(palette[0], 0.38)} 18%, transparent 54%)`,
    `linear-gradient(315deg, ${hexToRgba(palette[2], 0.6)} 0%, transparent 46%)`,
    `linear-gradient(210deg, transparent 42%, ${hexToRgba(palette[3], 0.5)} 100%)`,
    "#f7efe5"
  ].join(", ");
}

function makePaintingFallback(palette) {
  return `linear-gradient(135deg, ${palette[0]} 0%, ${palette[1] || palette[0]} 52%, ${palette[2]} 100%)`;
}

export default async function handler(request) {
  const requestUrl = new URL(request.url || "/api/og", defaultBaseUrl);
  const result = getResultById(requestUrl.searchParams.get("result"));
  const palette = result?.palette || ["#5a8a87", "#6f78a8", "#e0a14a", "#d9908a"];
  const paintingUrl = result ? await fetchCommonsImage(result).catch(() => "") : "";
  const shareLine = getShareLine(result);

  return new ImageResponse(
    h(
      "div",
      {
        style: {
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: makeSoftBackground(palette),
          color: "#25221f",
          fontFamily: "Noto Sans, sans-serif"
        }
      },
      h("div", {
        style: {
          position: "absolute",
          left: 18,
          top: 18,
          width: 1164,
          height: 594,
          border: "1px solid rgba(205, 177, 140, 0.72)",
          borderRadius: 34
        }
      }),
      h(
        "div",
        {
          style: {
            position: "absolute",
            left: 70,
            top: 76,
            width: 590,
            display: "flex",
            flexDirection: "column"
          }
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              color: "#76584a",
              fontSize: 30,
              fontWeight: 800,
              lineHeight: 1
            }
          },
          "10 soru · 60+ olası sonuç"
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              marginTop: 48,
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 0.98
            }
          },
          h("div", null, "hangi monet"),
          h("div", null, "tablosusun?")
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: 52,
              color: "#706a62",
              fontSize: 33,
              fontWeight: 500,
              lineHeight: 1.32,
              width: 560
            }
          },
          "gündelik seçimlerine göre sana en yakın claude monet tablosunu bul."
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: 30,
              maxWidth: 570,
              padding: "12px 24px 14px",
              borderRadius: 999,
              background: "#25201c",
              color: "#fffaf2",
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.22
            }
          },
          shareLine
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: 18,
              color: "#76584a",
              fontSize: 20,
              fontWeight: 700
            }
          },
          creator
        )
      ),
      h(
        "div",
        {
          style: {
            position: "absolute",
            left: 706,
            top: 72,
            width: 420,
            height: 420,
            padding: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 250, 242, 0.9)",
            border: "2px solid rgba(215, 190, 154, 0.78)",
            borderRadius: 26
          }
        },
        h(
          "div",
          {
            style: {
              width: 376,
              height: 376,
              display: "flex",
              overflow: "hidden",
              background: makePaintingFallback(palette)
            }
          },
          paintingUrl
            ? h("img", {
                src: paintingUrl,
                alt: result ? result.title : "Claude Monet tablosu",
                width: 376,
                height: 376,
                style: {
                  width: 376,
                  height: 376,
                  objectFit: "cover"
                }
              })
            : null
        )
      )
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "cache-control": "public, immutable, no-transform, max-age=31536000"
      }
    }
  );
}
