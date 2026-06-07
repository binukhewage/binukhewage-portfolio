import WorkClient from "./WorkClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.com";

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
  return <WorkClient />;
}