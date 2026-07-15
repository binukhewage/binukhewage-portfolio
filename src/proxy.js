import { NextResponse } from "next/server";

const HOMEPAGE_MARKDOWN = `# Binuk Hewage - Portfolio

Professional portfolio of Binuk Hewage, a Full-Stack Developer and AI Solutions Engineer specializing in high-performance web applications, modern UI/UX design, and AI-driven solutions (GEO/SEO).

## Technical Capabilities
- **Frontend Architecture**: Next.js, React, Tailwind CSS, Framer Motion, TypeScript, JavaScript
- **Backend & Databases**: Node.js, Express.js, FastAPI, MongoDB, MySQL, Firebase, Supabase, JWT Authentication
- **Data, APIs & Visualization**: REST APIs, Chart.js, Google Sheets API
- **Tools, DevOps & Workflow**: Git, GitHub, Vercel, Google Cloud Platform, Figma, Postman

## Premium Projects
1. **Ceylon Wild Escapes** - Tourism & Travel Website built with Next.js, Tailwind CSS
2. **Shey Collective** - Fashion E-Commerce built with Next.js, Sanity CMS, Tailwind
3. **GOAT Cult** - Streetwear E-Commerce built with MERN Stack, Stripe
4. **Rubion Agency Website** - Creative Agency Website built with Next.js, Framer Motion, Tailwind
5. **CommuteIQ** - Fuel & Travel Analytics Dashboard built with Next.js, Supabase, Recharts

## Contact & Connections
- **GitHub**: https://github.com/binukhewage
- **LinkedIn**: https://linkedin.com/in/binuk-hewage
- **Instagram**: https://instagram.com/binuk.he
- **Email**: contact@binukhewage.dev
- **Sitemap**: https://binukhewage.dev/sitemap.xml
`;

const ABOUT_MARKDOWN = `# About Binuk Hewage

I am a Software Quality & Development Engineer at CYouMedia specializing in Generative Engine Optimization (GEO), SEO optimization, and modern full-stack web infrastructure.

## Professional Experience

### Software Quality & Development Engineer | CYouMedia (May 2025 — Present)
Working on AI-driven digital platforms focused on GEO (Generative Engine Optimization), SEO optimization, and modern web infrastructure. Frontend and backend development, UI/UX improvements, quality assurance, debugging, performance optimization, and AI-powered website systems.

### Software Engineer Intern | UEXplus (Nov 2024 — May 2025)
Developed responsive and interactive web interfaces using React.js. Integrated APIs to handle dynamic data and collaborated with design teams.

### Full Stack Intern | Sri Lanka Telecom (June 2024 — May 2025)
Worked on full-stack web applications using React JS, PHP, FastAPI, and MySQL. Contributed to IoT monitoring dashboards and internal enterprise systems.

## Technical Stack
- **Languages**: JavaScript, TypeScript, SQL
- **Frontend**: React, Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, PostgreSQL, MongoDB, Firebase, Supabase
- **DevOps & Tools**: Docker, Vercel, Google Cloud Platform, Git, Postman
`;

const WORK_MARKDOWN = `# Portfolio Projects - Binuk Hewage

Here is a selection of premium full-stack and frontend development projects.

## Projects

### 1. Ceylon Wild Escapes
- **Category**: Tourism & Travel Website
- **Tech Stack**: Next.js, Tailwind CSS
- **Description**: High-performance booking and discovery site for luxury tourism and travel experiences in Sri Lanka.

### 2. Shey Collective
- **Category**: Fashion E-Commerce
- **Tech Stack**: Next.js, Sanity CMS, Tailwind
- **Description**: Premium online fashion commerce platform featuring a headless CMS integration for rich catalog management.

### 3. GOAT Cult
- **Category**: Streetwear E-Commerce
- **Tech Stack**: MERN Stack (MongoDB, Express, React, Node), Stripe
- **Description**: Streetwear ecommerce site with seamless payment gateway checkout flows and client-side cart logic.

### 4. Rubion Agency Website
- **Category**: Creative Agency Website
- **Tech Stack**: Next.js, Framer Motion, Tailwind
- **Description**: Premium creative agency portfolio with immersive micro-interactions and performance optimization.

### 5. CommuteIQ
- **Category**: Fuel & Travel Analytics Dashboard
- **Tech Stack**: Next.js, Supabase, Recharts
- **Description**: Full-stack travel cost and fuel efficiency analytical dashboard built with real-time database syncing and interactive charts.
`;

const BLOG_MARKDOWN = `# Blog Posts - Binuk Hewage

Articles and insights regarding software engineering, AI, GEO, and modern web development.
`;

const CONTACT_MARKDOWN = `# Contact Binuk Hewage

Get in touch for full-stack development, Generative Engine Optimization (GEO), or API integration inquiries.

## Contact Information
- **Email**: contact@binukhewage.dev
- **LinkedIn**: https://linkedin.com/in/binuk-hewage
- **GitHub**: https://github.com/binukhewage
- **Instagram**: https://instagram.com/binuk.he

## Frequently Asked Questions
- **What is your typical timeline?**: Most full-stack projects take between 4-8 weeks, depending on complexity. I work in two-week sprints with regular updates.
- **Do you offer post-launch support?**: Yes, I provide a 30-day bug fix window for free. Monthly maintenance packages are available thereafter.
- **What is your tech stack?**: I specialize in the MERN stack (MongoDB, Express, React, Node) and Next.js for high-performance frontend applications.
`;

function countTokens(text) {
  // Simple token estimator (1 token ~ 4 chars)
  return Math.ceil(text.length / 4);
}

export function proxy(request) {
  const acceptHeader = request.headers.get("accept") || "";
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only handle GET requests for page routes
  if (request.method === "GET" && acceptHeader.includes("text/markdown")) {
    let markdown = null;
    if (pathname === "/") {
      markdown = HOMEPAGE_MARKDOWN;
    } else if (pathname === "/about") {
      markdown = ABOUT_MARKDOWN;
    } else if (pathname === "/work") {
      markdown = WORK_MARKDOWN;
    } else if (pathname === "/blog") {
      markdown = BLOG_MARKDOWN;
    } else if (pathname === "/contact") {
      markdown = CONTACT_MARKDOWN;
    }

    if (markdown !== null) {
      return new NextResponse(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": countTokens(markdown).toString(),
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/about", "/work", "/blog", "/contact"],
};
