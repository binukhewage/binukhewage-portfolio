import AboutClient from "./AboutClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.com";

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
  return <AboutClient />;
}
