export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.dev";
  const content = `User-agent: *
Allow: /
Content-Signal: ai-train=no, search=yes, ai-input=no
Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
