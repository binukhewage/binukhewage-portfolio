"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Database,
  Layout,
  Server,
} from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiFigma,
  SiVercel,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiFastapi,
  SiJsonwebtokens,
  SiChartdotjs,
  SiGooglesheets,
} from "react-icons/si";
import Image from "next/image";

// --- DATA ARRAYS ---

const skillCategories = [
  {
    id: "01",
    label: "Frontend Architecture",
    icon: Layout,
    tools: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    id: "02",
    label: "Backend & Databases",
    icon: Database,
    tools: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#000000" },
    ],
  },
  {
    id: "03",
    label: "Data, APIs & Visualization",
    icon: Server,
    tools: [
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
      { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
      { name: "Google Sheets API", icon: SiGooglesheets, color: "#34A853" },
    ],
  },
  {
    id: "04",
    label: "Tools, DevOps & Workflow",
    icon: Server,
    tools: [
      { name: "Git & GitHub", icon: FaGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const premiumProjects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Tourism & Travel Website",
    tech: "Next.js, Tailwind CSS",
    // Hero Item
    gridClass: "md:col-span-8 md:row-span-2",
    image: "/cwee.png",
  },
  {
    id: 2,
    title: "Shey Collective",
    category: "Fashion E-Commerce",
    tech: "Next.js, Sanity CMS, Tailwind",
    // Middle Right
    gridClass: "md:col-span-4 md:row-span-1",
    image: "/sheyy.png",
  },
  {
    id: 3,
    title: "GOAT Cult",
    category: "Streetwear E-Commerce",
    tech: "MERN Stack, Stripe",
    // Top Right
    gridClass: "md:col-span-4 md:row-span-1",
    image: "/goat.png",
  },
  {
    id: 4,
    title: "Rubion Agency Website",
    category: "Creative Agency Website",
    tech: "Next.js, Framer Motion, Tailwind",
    // Bottom Left
    gridClass: "md:col-span-6 md:row-span-1",
    image: "/rubionew.png",
  },
  {
    id: 5,
    title: "ECMS Dashboard",
    category: "IoT Monitoring System",
    tech: "React, FastAPI, Chart.js",
    // Bottom Right
    gridClass: "md:col-span-6 md:row-span-1",
    image: "/ecms.png",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/binukhewage",
    label: "GitHub",
    hover: "hover:bg-black hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/binuk-hewage",
    label: "LinkedIn",
    hover: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/binuk.he",
    label: "Instagram",
    hover:
      "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white",
  },
];

// --- COMPONENTS ---

const RevealText = ({ children, delay = 0 }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Page() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      {/* Background Grid Pattern */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      ></div>

      <main className="relative z-10 pt-40 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] bg-black w-12"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest">
              creative technologist
            </h2>
          </div>
          <div className="space-y-2">
            <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-black">
              <RevealText delay={0.1}>Full - stack</RevealText>
              <RevealText delay={0.2}>Developer</RevealText>
            </h1>
            <div className="pt-10 flex flex-wrap gap-4 items-center">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="/BinukHewageCV.pdf"
                className="inline-flex items-center bg-black text-white uppercase text-sm font-medium tracking-widest px-8 py-4 hover:bg-gray-800 transition-colors rounded-sm download"
              >
                Download CV <Download className="ml-2" size={16} />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 md:ml-8 md:border-l md:pl-8 border-gray-200"
              >
                {socialLinks.map(({ icon: Icon, href, label, hover }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 border border-gray-200 rounded-full transition-all duration-300 group ${hover}`}
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-105 transition-transform"
                    />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 mt-12 md:mt-24 border-t border-black pt-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-md text-lg md:text-xl font-light text-gray-600 leading-relaxed"
            >
              Building reliable, production-ready web applications with a strong
              focus on clean architecture, performance, and thoughtful user
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 md:mt-0 flex flex-col text-right"
            >
              <span className="text-xs font-bold uppercase tracking-widest mb-1">
                Status
              </span>
              <div className="flex items-center justify-end gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-medium">Available for work</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE STRIP */}
        <div className="w-full overflow-hidden py-12 border-y border-gray-200 bg-white">
          <motion.div
            className="flex gap-12 whitespace-nowrap text-6xl md:text-8xl font-black text-transparent stroke-text opacity-10 uppercase"
            style={{ x }}
          >
            <span className="text-stroke">Full Stack Architecture</span>
            <span className="text-stroke"> — </span>
            <span className="text-stroke">Scalable</span>
            <span className="text-stroke"> — </span>
          </motion.div>
        </div>

        {/* === UPDATED SELECTED WORK SECTION === */}
        <section className="py-32" id="work">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] bg-black w-12"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest">
              Selected Works
            </h2>
          </div>

          {/* Premium Masonry Grid Layout (5 Items, No Gaps) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]">
            {premiumProjects.map((project, index) => (
              <motion.div
                key={project.id}
                // UPDATED LINE BELOW: Checks if index >= 3. If so, hides on mobile (default), shows on md+.
                className={`relative group rounded-sm overflow-hidden bg-gray-100 ${
                  project.gridClass
                } ${index >= 3 ? "hidden md:block" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image Container with Hover Scale */}
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* "More Work" Link aligned right */}
          <div className="pt-12 flex justify-end">
            <a
              href="/work"
              className="group inline-flex items-center gap-4 text-xl md:text-2xl font-medium uppercase tracking-tighter hover:text-gray-600 transition-colors"
            >
              <span>View Complete Archive</span>
              <div className="bg-black text-white p-3 rounded-full group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </section>

        {/* SKILLS SECTION (Tech Specs Layout) */}
        <section className="py-32 border-t border-black bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Title Column */}
            <div className="md:w-1/3">
              <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] bg-black w-12"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest">
                  Tools & Stack
                </h2>
              </div>
              <h2 className="text-[4rem] leading-none font-bold uppercase tracking-tighter text-gray-200 mb-8">
                Technical
                <br />
                Specs
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                The tools and technologies I rely on to build scalable,
                production-ready web applications from frontend to backend.
              </p>
            </div>

            {/* List Column */}
            <div className="md:w-2/3">
              <div className="divide-y divide-gray-200 border-t border-gray-200">
                {skillCategories.map((cat) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-12"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12">
                      <div className="flex items-center gap-4 md:w-48 shrink-0">
                        <span className="text-xs font-mono text-gray-400">
                          {cat.id}
                        </span>
                        <h3 className="text-xl font-bold uppercase tracking-wide text-black">
                          {cat.label}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {cat.tools.map((tool) => {
                          const IconComponent = tool.icon;
                          return (
                            <div
                              key={tool.name}
                              className="flex items-center gap-2 text-black"
                            >
                              <IconComponent
                                className="text-lg"
                                style={{ color: tool.color }}
                              />
                              <span className="font-medium">{tool.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}