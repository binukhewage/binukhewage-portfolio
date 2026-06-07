import HomeClient from "./HomeClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.com";

export const metadata = {
  title: "Binuk Hewage | Full-Stack Developer & AI Solutions Engineer",
  description: "Professional portfolio of Binuk Hewage, a Full-Stack Developer specializing in high-performance web applications, modern UI/UX design, and AI-driven solutions (GEO/SEO).",
  keywords: [
    "Binuk Hewage",
    "Binuk",
    "Hewage",
    "Full-Stack Developer",
    "AI solutions",
    "GEO",
    "Generative Engine Optimization",
    "web developer portfolio",
    "React",
    "Next.js",
    "Sri Lanka developer"
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Binuk Hewage | Full-Stack Developer & AI Solutions Engineer",
    description: "Professional portfolio of Binuk Hewage. Specializing in high-performance web applications, modern UI/UX design, and AI-driven solutions (GEO/SEO).",
    url: siteUrl,
    siteName: "Binuk Hewage Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binuk Hewage | Full-Stack Developer & AI Solutions Engineer",
    description: "Professional portfolio of Binuk Hewage. Specializing in high-performance web applications, modern UI/UX design, and AI-driven solutions (GEO/SEO).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Binuk Hewage",
    "url": siteUrl,
    "jobTitle": "Full-Stack Developer & AI Solutions Engineer",
    "sameAs": [
      "https://github.com/binukhewage",
      "https://linkedin.com/in/binuk-hewage",
      "https://instagram.com/binuk.he"
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "Next.js",
      "React",
      "Node.js",
      "Generative Engine Optimization",
      "GEO",
      "SEO",
      "Web Design"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}