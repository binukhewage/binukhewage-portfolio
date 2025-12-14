'use client';
import React from 'react'; // Removed useState as it's no longer needed for hover state
import { motion } from 'framer-motion';
import { Download, Code2, Layout, Server, Box } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiPostgresql, SiReact, SiNextdotjs, 
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb, 
  SiDocker, SiFirebase, SiVercel, SiGit, SiPostman 
} from 'react-icons/si';

// --- DATA ARRAYS ---

const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "ORAGAN",
    year: "2023 — Present",
    description: "Leading the frontend migration to Next.js 14. Implemented a design system used by 40+ developers and improved core web vitals by 35%."
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "UEXplus",
    year: "Nov 2024 — May 2025",
    description: "Built interactive campaigns for global brands using React, GSAP, and WebGL. Managed backend integrations with Node.js and AWS."
  },
  {
    id: 3,
    role: "Full Stack Intern",
    company: "SL Telecom",
    year: "June 2024 — May 2025",
    description: "Collaborated on early-stage SaaS product development. Focused on UI implementation and API integration using REST & GraphQL."
  }
];

const techStack = [
  {
    category: "Languages",
    icon: Code2,
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, 
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, 
      { name: "SQL", icon: SiPostgresql, color: "#336791" },
    ]
  },
  {
    category: "Frontend",
    icon: Layout,
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" }, 
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, 
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, 
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }, 
    ]
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, 
      { name: "Express", icon: SiExpress, color: "#000000" }, 
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }, 
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, 
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }, 
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Box,
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" }, 
      { name: "Vercel", icon: SiVercel, color: "#000000" }, 
      { name: "Git", icon: SiGit, color: "#F05032" }, 
      { name: "Postman", icon: SiPostman, color: "#FF6C37" }, 
    ]
  }
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

// UPDATED: Simple, Premium Tech Card
const TechCard = ({ tech }) => {
  return (
    <motion.div
      // Base styles: clean white box with gray border
      className="flex items-center gap-4 p-4 rounded-sm border border-gray-200 bg-white cursor-default transition-all duration-300 hover:shadow-md hover:border-gray-300"
      // Simple lift effect on hover
      whileHover={{ y: -4 }}
    >
      {/* Icon Container */}
      <div className="p-2 rounded-md bg-gray-50">
        {/* Icon with permanent brand color */}
        <tech.icon size={20} style={{ color: tech.color }} />
      </div>

      {/* Tech Name */}
      <span className="font-medium text-sm tracking-wide text-gray-700">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
     
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }}>
      </div>

      <main className="relative z-10 pt-40 px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
        
        {/* 1. HERO INTRO */}
        <section className="mb-32">
          <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-black mb-12">
            <RevealText delay={0.1}>Profile &</RevealText>
            <RevealText delay={0.2}>Background</RevealText>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 border-t border-black pt-8">
            <div className="md:w-1/3">
               <span className="text-sm font-bold uppercase tracking-widest">About Me</span>
            </div>
            <div className="md:w-2/3">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-light leading-snug text-gray-800"
              >
                I’m a Full - Stack Developer who builds complete, production-ready web applications from backend systems and APIs to clean, intuitive user interfaces. I currently freelance through RUBION, my independent studio for building modern websites.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <a href="/cv.pdf" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
                  Download Resume <Download size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. STICKY SCROLL: EXPERIENCE */}
        <section className="mb-40 relative">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left Column (Sticky) */}
            <div className="md:w-1/3">
               <div className="sticky top-32">
                  <div className="h-[1px] bg-black w-12 mb-6"></div>
                  <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Experience</h2>
                  <p className="text-gray-500 max-w-xs leading-relaxed">
                      A timeline of my professional career and key contributions to the tech industry.
                  </p>
               </div>
            </div>

            {/* Right Column (Scrollable List) */}
            <div className="md:w-2/3 space-y-12">
                {experience.map((job, index) => (
                    <motion.div 
                        key={job.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                        className="group border-t border-gray-200 pt-8 hover:border-black transition-colors duration-500"
                    >
                        <div className="flex justify-between items-baseline mb-4">
                            <h3 className="text-3xl font-bold uppercase">{job.company}</h3>
                            <span className="font-mono text-sm text-gray-400">{job.year}</span>
                        </div>
                        <h4 className="text-xl text-gray-600 mb-4">{job.role}</h4>
                        <p className="text-gray-500 leading-relaxed max-w-lg">{job.description}</p>
                    </motion.div>
                ))}
            </div>

          </div>
        </section>

        {/* 3. STICKY SCROLL: TECHNICAL ARSENAL */}
        <section className="mb-40 relative">
            <div className="flex flex-col md:flex-row gap-12">
                
                {/* Left Column (Sticky) */}
                <div className="md:w-1/3">
                    <div className="sticky top-32">
                        <div className="h-[1px] bg-black w-12 mb-6"></div>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Technical<br />Stack</h2>
                        <p className="text-gray-500 max-w-xs leading-relaxed">
                            A curated list of technologies I use to build performant, scalable digital products.
                        </p>
                    </div>
                </div>

                {/* Right Column (Scrollable Categories) */}
                <div className="md:w-2/3 space-y-16">
                    {techStack.map((cat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1 }}
                            className="border-t border-gray-200 pt-8"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <cat.icon size={20} className="text-gray-400" />
                                <h3 className="text-sm font-bold uppercase tracking-widest">{cat.category}</h3>
                            </div>

                            {/* The Grid of simple TechCards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cat.items.map((tech) => (
                                    <TechCard key={tech.name} tech={tech} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>

      </main>
    </div>
  );
}