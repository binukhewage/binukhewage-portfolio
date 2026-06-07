"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

import { posts } from "./postsData";

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

const BlogCard = ({ post, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 py-20 border-t border-gray-200`}
    >
      {/* 1. IMAGE SECTION */}
      <div className="md:w-3/5 group cursor-pointer">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative overflow-hidden aspect-[16/10] bg-gray-50 rounded-sm border border-gray-200">
            {/* Image Hover Scale */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </motion.div>

            {/* Overlay Button */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="md:w-2/5 flex flex-col justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-6 mb-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-black"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              {post.category}
            </span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6 hover:text-gray-600 transition-colors">
              {post.title}
            </h3>
          </Link>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
            {post.summary}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
          <Link
            href={`/blog/${post.slug}`}
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
          >
            Read Article
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function BlogClient() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#ccc 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <main className="relative z-10 pt-40 px-6 md:px-12 max-w-[1600px] mx-auto pb-24">
        {/* HEADER */}
        <section className="mb-24">
          <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-black mb-12">
            <RevealText delay={0.1}>Writings &</RevealText>
            <RevealText delay={0.2}>insights</RevealText>
          </h1>
          <p className="max-w-xl text-xl text-gray-500 leading-relaxed font-light">
            Deep dives, strategies, and reflections on design, full-stack
            engineering, and the future of digital discovery.
          </p>
        </section>

        {/* BLOG POST LIST */}
        <section className="min-h-[50vh]">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </section>
      </main>
    </div>
  );
}
