import WorkClient from "./WorkClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.dev";

export const metadata = {
  title: "Projects Archive | Binuk Hewage Portfolio",
  description: "Explore a curated archive of full-stack projects, web applications, and analytics tools built by Binuk Hewage, including Ceylon Wild Escapes, GOAT Cult, CommuteIQ, and ORAGAN.",
  keywords: [
    "Binuk Hewage projects",
    "project archive",
    "web application portfolio",
    "MERN stack projects",
    "Next.js portfolio projects",
    "Ceylon Wild Escapes",
    "GOAT Cult",
    "CommuteIQ"
  ],
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    title: "Projects Archive | Binuk Hewage Portfolio",
    description: "Explore a curated archive of full-stack projects, web applications, and analytics tools built by Binuk Hewage, including Ceylon Wild Escapes, GOAT Cult, CommuteIQ, and ORAGAN.",
    url: `${siteUrl}/work`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Archive | Binuk Hewage Portfolio",
    description: "Explore a curated archive of full-stack projects, web applications, and analytics tools built by Binuk Hewage, including Ceylon Wild Escapes, GOAT Cult, CommuteIQ, and ORAGAN.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects Archive | Binuk Hewage Portfolio",
    "description": "Explore a curated archive of full-stack projects, web applications, and analytics tools built by Binuk Hewage.",
    "url": `${siteUrl}/work`,
    "about": {
      "@type": "Person",
      "name": "Binuk Hewage"
    },
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Ceylon Wild Escapes",
        "description": "A custom web platform for a wildlife travel company.",
        "url": "https://www.ceylonwildescapes.com"
      },
      {
        "@type": "CreativeWork",
        "name": "GOAT CULT",
        "description": "A full-stack streetwear e-commerce platform.",
        "url": "https://www.goatcult.lk"
      },
      {
        "@type": "CreativeWork",
        "name": "RUBION",
        "description": "A modern web application for Rubion agency.",
        "url": "https://rubion.dev/"
      },
      {
        "@type": "CreativeWork",
        "name": "CommuteIQ",
        "description": "A smart fuel and travel analytics dashboard.",
        "url": "https://commuteiq-topaz.vercel.app/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkClient />
    </>
  );
}