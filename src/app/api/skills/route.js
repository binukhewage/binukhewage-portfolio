import { NextResponse } from "next/server";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "PHP", "Python"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "FastAPI", "JWT"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Vercel", "Google Cloud Platform", "Git", "Postman", "Figma"]
  }
];

export async function GET() {
  return NextResponse.json(skills);
}
