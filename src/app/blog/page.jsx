import BlogClient from "./BlogClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.dev";

export const metadata = {
  title: "Writings & Insights | Binuk Hewage Portfolio",
  description: "Read technical articles, deep dives, and insights by Binuk Hewage on web development, modern full-stack architecture, and Generative Engine Optimization (GEO).",
  keywords: [
    "Binuk Hewage blog",
    "web development blog",
    "GEO articles",
    "Generative Engine Optimization blog",
    "full-stack engineering insights"
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Writings & Insights | Binuk Hewage Portfolio",
    description: "Read technical articles, deep dives, and insights by Binuk Hewage on web development, modern full-stack architecture, and Generative Engine Optimization (GEO).",
    url: `${siteUrl}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writings & Insights | Binuk Hewage Portfolio",
    description: "Read technical articles, deep dives, and insights by Binuk Hewage on web development, modern full-stack architecture, and Generative Engine Optimization (GEO).",
  },
};

export default function Page() {
  return <BlogClient />;
}
