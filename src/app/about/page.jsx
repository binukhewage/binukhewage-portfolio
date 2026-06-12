import AboutClient from "./AboutClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.dev";

export const metadata = {
  title: "About | Binuk Hewage",
  description: "Learn more about Binuk Hewage's professional background, software quality & development engineering experience at CYouMedia, and full-stack technical stack.",
  keywords: [
    "Binuk Hewage about",
    "Binuk Hewage career",
    "software quality engineer",
    "full-stack developer experience",
    "Next.js developer profile",
    "CYouMedia developer"
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About | Binuk Hewage",
    description: "Learn more about Binuk Hewage's professional background, software quality & development engineering experience at CYouMedia, and full-stack technical stack.",
    url: `${siteUrl}/about`,
    type: "profile",
    firstName: "Binuk",
    lastName: "Hewage",
    username: "binukhewage",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Binuk Hewage",
    description: "Learn more about Binuk Hewage's professional background, software quality & development engineering experience at CYouMedia, and full-stack technical stack.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Binuk Hewage",
      "alternateName": "Binuk Hewage Portfolio",
      "description": "Software Quality & Development Engineer at CYouMedia. Specialized in GEO, SEO, and full-stack development.",
      "image": `${siteUrl}/bh.jpg`,
      "sameAs": [
        "https://github.com/binukhewage",
        "https://linkedin.com/in/binuk-hewage",
        "https://instagram.com/binuk.he"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
