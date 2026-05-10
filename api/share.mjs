import {
  creator,
  defaultBaseUrl,
  escapeHtml,
  getBaseUrlFromNodeRequest,
  getResultById,
  getShareLine,
  getVersionedStaticOgImageUrl,
  shareVersion
} from "../lib/share-utils.mjs";

export default function handler(request, response) {
  const baseUrl = getBaseUrlFromNodeRequest(request);
  const requestUrl = new URL(request.url || "/api/share", baseUrl);
  const result = getResultById(requestUrl.searchParams.get("result"));
  const resultPath = result ? `/?result=${encodeURIComponent(result.id)}` : "/";
  const resultUrl = new URL(resultPath, baseUrl).toString();
  const shareUrl = result ? new URL(`/share/${encodeURIComponent(result.id)}?v=${shareVersion}`, baseUrl).toString() : baseUrl;
  const imageUrl = result
    ? getVersionedStaticOgImageUrl(result, baseUrl)
    : new URL(`/social-preview.png?v=${shareVersion}`, defaultBaseUrl).toString();
  const title = result
    ? `Ben "${result.title}" çıktım | Hangi Monet Tablosusun?`
    : "Hangi Monet Tablosusun?";
  const description = result
    ? `${getShareLine(result)}. Sen hangi Monet tablosusun? ${creator}`
    : "10 soruda sana en yakın Claude Monet tablosunu bul.";
  const imageAlt = result
    ? `${result.title} sonucu için Hangi Monet tablosusun paylaşım görseli.`
    : "Hangi Monet tablosusun testi için Monet esintili sosyal paylaşım görseli.";

  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800");
  response.end(`<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(shareUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(shareUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Hangi Monet Tablosusun?" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />
    <meta property="og:image:type" content="${result ? "image/jpeg" : "image/png"}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />
    <script>
      window.location.replace(${JSON.stringify(resultUrl)});
    </script>
  </head>
  <body>
    <a href="${escapeHtml(resultUrl)}">Sonucu aç</a>
  </body>
</html>`);
}
