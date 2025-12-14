"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  ArrowUpRight,
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
} from "react-icons/si";
import Image from "next/image";

// --- DATA ARRAYS ---

// Organized Skills into Categories for the "Spec Sheet" Layout
const skillCategories = [
  {
    id: "01",
    label: "Frontend Architecture",
    icon: Layout,
    tools: [
      // Added specific brand colors for each tool
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Using black for contrast
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    id: "02",
    label: "Backend & Database",
    icon: Database,
    tools: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "03",
    label: "Tools & DevOps",
    icon: Server,
    tools: [
      { name: "Github", icon: FaGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Ceylon Wild Escapes",
    category: "Custom Web Application",
    year: "2024",
    tech: "Next.js | TailwindCSS",
    image: "/cwe.png",
  },
  {
    id: 2,
    title: "Goat Cult",
    category: "E-Commerce Platform",
    year: "2024",
    tech: "MERN Stack | Framer Motion | TailwindCSS",
    image: "/goathome.png",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/binukhewage",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/binuk-hewage",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/binuk.he",
    label: "Instagram",
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
                className="inline-flex items-center bg-black text-white uppercase text-sm font-medium tracking-widest px-8 py-4 hover:bg-gray-800 transition-colors rounded-sm"
              >
                Download CV <Download className="ml-2" size={16} />
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4 md:ml-8 md:border-l md:pl-8 border-gray-200"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
                  >
                    <Icon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
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

        {/* SELECTED WORK SECTION */}
        <section className="py-32" id="work">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] bg-black w-12"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest">
              Project Archive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative mb-6 rounded-sm">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="w-full h-full bg-gray-200 relative group-hover:grayscale-0 transition-all duration-500"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                  </motion.div>
                </div>

                <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 group-hover:border-black transition-colors duration-300">
                  <h3 className="text-3xl font-medium">{project.title}</h3>
                  <span className="text-sm uppercase text-gray-500">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-gray-500 font-semibold">
                  {project.category}
                </p>
                <p className="mt-2 text-gray-500 font-mono text-sm">
                  {project.tech}
                </p>
              </motion.div>
            ))}
          </div>

          {/* UPDATED: "More Work" Link aligned with the grid */}
          <div className=" pt-8 flex justify-end">
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

        {/* UPDATED: SKILLS SECTION (Tech Specs Layout) */}
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
                    className="py-12" // Removed 'group' class as hover isn't needed on parent anymore
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
                          // Capitalize component for React rendering
                          const IconComponent = tool.icon;
                          return (
                            <div
                              key={tool.name}
                              // Set text to standard black, removed hover/transition classes
                              className="flex items-center gap-2 text-black"
                            >
                              {/* Apply the specific color inline, removed opacity classes */}
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
