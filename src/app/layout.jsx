import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://binukhewage.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Binuk Hewage | Full-Stack Developer & AI Solutions Engineer",
    template: "%s | Binuk Hewage",
  },
  description: "Portfolio of Binuk Hewage - Full-Stack Developer specializing in high-performance web applications, modern UI/UX design, and AI-driven solutions.",
  keywords: [
    "Binuk Hewage",
    "Binuk",
    "Hewage",
    "Full-Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "GEO",
    "Generative Engine Optimization",
    "Colombo Developer"
  ],
  openGraph: {
    title: "Binuk Hewage | Full-Stack Developer",
    description: "Portfolio of Binuk Hewage - Full-Stack Developer specializing in high-performance web applications.",
    siteName: "Binuk Hewage Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binuk Hewage | Full-Stack Developer",
    description: "Portfolio of Binuk Hewage - Full-Stack Developer specializing in high-performance web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
