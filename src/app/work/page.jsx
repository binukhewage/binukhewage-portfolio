'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

// --- DATA ---
const projects = [
  {
    num: '01',
    category: 'Custom Web Application',
    title: 'Ceylon Wild Escapes',
    description: 'A custom web platform for a wildlife travel company, designed to showcase tours, photography, and services with a strong focus on performance, clarity, and responsive design. Built to provide a smooth browsing experience across all devices.',
    stack: ["NextJS", "Tailwind Css"],
    image: 'cwe.png',
    live: 'https://www.ceylonwildescapes.com',
    github: "https://github.com/binukhewage/Ceylon-Wild-Escapes",
  },
  {
    num: '02',
    category: 'E-Commerce Platform',
    title: 'GOAT CULT',
    description: 'A full-stack streetwear e-commerce platform built for high-performance and visual impact. The platform features role-based access, a custom admin dashboard for inventory management, and secure payments via Stripe/PayPal.',
    stack: ["ReactJS", "MongoDB", "ExpressJs", "NodeJs", "Tailwind Css"],
    image: '/goatnew.png',
    live: 'https://www.goatcult.lk',
    github: "https://github.com/binukhewage/goatco",
  },
  {
    num: '03',
    category: 'Corporate Custom Website',
    title: 'ORAGAN',
    description: "The official corporate identity for ORAGAN, an idea-to-product company. Built with Next.js to showcase their mission and services with a focus on seamless, responsive motion and high-end aesthetics.",
    stack: ["NextJS", "Tailwind Css"],
    image: '/oragan.png',
    live: 'https://www.oragan-idea.com',
    github: "https://github.com/binukhewage/ORAGAN",
  },
  {
    num: '04',
    category: 'fullstack project',
    title: 'ECMS Dashboard',
    description: 'A Real-time Environmental Condition Monitoring System (ECMS). This dashboard allows operators to monitor data from multiple IoT sensors in real-time, providing critical alerts and historical data analysis.',
    stack: ["ReactJS", "MongoDB", "ExpressJs", "NodeJs", "Tailwind Css"],
    image: '/ecms.png',
    live: 'https://environmental-condition-monitoring-psi.vercel.app',
    github: "https://github.com/binukhewage/Environmental-Condition-Monitoring-System",
  },
  {
    num: '05',
    category: 'Custom Web Application',
    title: 'RUBION',
    description: 'A modern web application for Rubion, designed to present services, featured work, and brand values through a clean interface and fast, responsive experience.',
    stack: ["NextJS", "Tailwind Css"],
    image: '/rubion.png',
    live: 'https://rubion-chi.vercel.app/',
    github: "https://github.com/binukhewage/rubion",
  },
  {
    num: '06',
    category: 'frontend project',
    title: 'Fashion Portfolio',
    description: 'An immersive visual portfolio for a fashion designer. The layout prioritizes large imagery and smooth navigation to highlight the craftsmanship of the collections.',
    stack: ["Wix"],
    image: '/shey.png',
    live: 'https://sheharamad4.wixsite.com/shehara-madurawala-3',
    github: "",
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

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 py-24 border-t border-gray-200`}
    >
      {/* 1. IMAGE SECTION */}
      <div className="md:w-3/5 group cursor-pointer">
        <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 rounded-sm">
            {/* Image Hover Scale */}
            <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
            >
                {/* Placeholder Image Logic - Replace src with project.image */}
                <div className="w-full h-full bg-gray-200 relative">
                     {/* If using Next/Image, put it here. Using standard img for now. */}
                     <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                     />
                </div>
            </motion.div>

            {/* Overlay Button */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white text-black h-12 w-12 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={20} />
                </div>
            </div>
        </div>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="md:w-2/5 flex flex-col justify-between">
        <div>
             {/* Huge Number */}
            <div className="text-6xl md:text-8xl font-black text-gray-100 mb-6 leading-none">
                {project.num}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-black"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{project.category}</span>
            </div>

            <h3 className="text-4xl font-bold uppercase tracking-tighter mb-6">{project.title}</h3>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wide text-gray-500">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
            {project.live && (
                <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
                >
                    Live Project <ExternalLink size={16} />
                </a>
            )}
            {project.github && (
                <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
                >
                    Github Code <Github size={16} />
                </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      

      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <main className="relative z-10 pt-40 px-6 md:px-12 max-w-[1600px] mx-auto pb-24">
        
        {/* HEADER */}
        <section className="mb-24">
          <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-black mb-12">
            <RevealText delay={0.1}>Project</RevealText>
            <RevealText delay={0.2}>ARCHIVE</RevealText>
          </h1>
          <p className="max-w-xl text-xl text-gray-500 leading-relaxed font-light">
            A curated selection of full-stack web applications and platforms, engineered for performance, reliability, and real-world use.
          </p>
        </section>

        {/* PROJECT LIST */}
        <section>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </section>

        {/* FOOTER CTA */}
        <section className="pt-24 border-t border-black mt-12 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                Have an idea?
            </h2>
            <a href="/contact" className="bg-black text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Start a Project
            </a>
        </section>

      </main>
    </div>
  );
}