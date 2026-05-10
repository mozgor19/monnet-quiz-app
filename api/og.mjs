import {
  getBaseUrlFromNodeRequest,
  getResultById,
  getVersionedStaticOgImageUrl
} from "../lib/share-utils.mjs";

export default function handler(request, response) {
  const baseUrl = getBaseUrlFromNodeRequest(request);
  const requestUrl = new URL(request.url || "/api/og", baseUrl);
  const result = getResultById(requestUrl.searchParams.get("result"));
  const target = getVersionedStaticOgImageUrl(result, baseUrl);

  response.statusCode = 302;
  response.setHeader("Location", target);
  response.setHeader("Cache-Control", "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800");
  response.end(`Redirecting to ${target}`);
}
