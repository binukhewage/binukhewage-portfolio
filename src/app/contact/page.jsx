import ContactClient from "./ContactClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.com";

export const metadata = {
  title: "Contact | Binuk Hewage Portfolio",
  description: "Get in touch with Binuk Hewage for freelance inquiries, consultancy, full-stack development, and UI/UX design collaboration. Available for global projects.",
  keywords: [
    "hire Binuk Hewage",
    "contact developer",
    "freelance web development",
    "Next.js developer Sri Lanka",
    "hire full-stack engineer"
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact | Binuk Hewage Portfolio",
    description: "Get in touch with Binuk Hewage for freelance inquiries, consultancy, full-stack development, and UI/UX design collaboration. Available for global projects.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Binuk Hewage Portfolio",
    description: "Get in touch with Binuk Hewage for freelance inquiries, consultancy, full-stack development, and UI/UX design collaboration. Available for global projects.",
  },
};

export default function Page() {
  return <ContactClient />;
}