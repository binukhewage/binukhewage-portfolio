import { posts } from "./blog/postsData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.dev";

export default async function sitemap() {
  const baseRoutes = ["", "/about", "/work", "/blog", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogPostRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...baseRoutes, ...blogPostRoutes];
}
