import { NextResponse } from "next/server";

const premiumProjects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Tourism & Travel Website",
    tech: "Next.js, Tailwind CSS",
    image: "/cwee.png"
  },
  {
    id: 2,
    title: "Shey Collective",
    category: "Fashion E-Commerce",
    tech: "Next.js, Sanity CMS, Tailwind",
    image: "/sheyy.png"
  },
  {
    id: 3,
    title: "GOAT Cult",
    category: "Streetwear E-Commerce",
    tech: "MERN Stack, Stripe",
    image: "/goat.png"
  },
  {
    id: 4,
    title: "Rubion Agency Website",
    category: "Creative Agency Website",
    tech: "Next.js, Framer Motion, Tailwind",
    image: "/rubionew.png"
  },
  {
    id: 5,
    title: "CommuteIQ",
    category: "Fuel & Travel Analytics Dashboard",
    tech: "Next.js, Supabase, Recharts",
    image: "/commuteiq1.png"
  }
];

export async function GET() {
  return NextResponse.json(premiumProjects);
}
