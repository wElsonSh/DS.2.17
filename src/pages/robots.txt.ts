import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  // site автоматически берётся из astro.config.mjs
  const sitemapUrl = new URL("sitemap-index.xml", site).href;

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
    `.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
