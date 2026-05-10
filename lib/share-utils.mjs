import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export const data = require("../data.js");
export const creator = "@mozgor19";
export const defaultBaseUrl = "https://monnet-quiz-app.vercel.app";
export const shareVersion = "2";

export function getResultById(id) {
  if (!id) return null;
  return data.paintings.find((painting) => painting.id === id) || null;
}

export function getShareLine(result) {
  return result ? `ben ${result.title} tablosu çıktım` : "sen hangi Monet tablosusun?";
}

export function getStaticOgImagePath(result) {
  return result ? `/og/${encodeURIComponent(result.id)}.jpg` : "/social-preview.png";
}

export function getVersionedStaticOgImageUrl(result, baseUrl) {
  const url = new URL(getStaticOgImagePath(result), baseUrl);
  url.searchParams.set("v", shareVersion);
  return url.toString();
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function getBaseUrlFromNodeRequest(request) {
  const hostHeader = request.headers["x-forwarded-host"] || request.headers.host;
  const protoHeader = request.headers["x-forwarded-proto"] || "https";
  const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;
  const proto = Array.isArray(protoHeader) ? protoHeader[0] : protoHeader;

  return host ? `${proto}://${host}` : defaultBaseUrl;
}

async function queryCommons(params) {
  const endpoint = "https://commons.wikimedia.org/w/api.php";
  try {
    const response = await fetch(`${endpoint}?${params.toString()}`, {
      headers: {
        "user-agent": "monnet-quiz-app/1.0 (https://monnet-quiz-app.vercel.app)"
      },
      signal: AbortSignal.timeout(4500)
    });
    if (!response.ok) return null;
    return response.json();
  } catch (_error) {
    return null;
  }
}

async function fetchImageFromFileTitles(titles) {
  const fileTitles = titles.filter(Boolean).map((title) =>
    title.startsWith("File:") ? title : `File:${title}`
  );
  if (!fileTitles.length) return "";

  const params = new URLSearchParams({
    action: "query",
    titles: fileTitles.join("|"),
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "900",
    format: "json",
    origin: "*"
  });
  const payload = await queryCommons(params);
  const pages = Object.values(payload?.query?.pages || {});
  return (
    pages
      .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
      .find(Boolean) || ""
  );
}

export async function fetchCommonsImage(result) {
  if (!result?.category) return "";

  const categoryParams = new URLSearchParams({
    action: "query",
    generator: "categorymembers",
    gcmtitle: `Category:${result.category}`,
    gcmtype: "file",
    gcmlimit: "10",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "900",
    format: "json",
    origin: "*"
  });
  const categoryPayload = await queryCommons(categoryParams);
  const categoryPages = Object.values(categoryPayload?.query?.pages || {});
  const categoryImage =
    categoryPages
      .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
      .find(Boolean) || "";

  if (categoryImage) return categoryImage;

  const directFileImage = await fetchImageFromFileTitles([result.category]);
  if (directFileImage) return directFileImage;

  const searchParams = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: `${result.title} Claude Monet`,
    srnamespace: "6",
    srlimit: "5",
    format: "json",
    origin: "*"
  });
  const searchPayload = await queryCommons(searchParams);
  const searchTitles = searchPayload?.query?.search?.map((page) => page.title) || [];

  return fetchImageFromFileTitles(searchTitles);
}
