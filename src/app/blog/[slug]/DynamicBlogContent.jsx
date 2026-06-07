'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ChevronRight, Share2, Sparkles, BookOpen } from 'lucide-react';

export default function DynamicBlogContent({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500 font-light">Article not found.</p>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const renderContentBlock = (block, idx) => {
    switch (block.type) {
      case 'intro':
        return (
          <p key={idx} className="text-xl md:text-2xl leading-relaxed text-black font-normal">
            {block.text}
          </p>
        );
      
      case 'paragraph':
        return (
          <p key={idx} className="text-lg font-light leading-relaxed text-gray-800">
            {block.text}
          </p>
        );

      case 'heading':
        return (
          <h2 key={idx} className="text-3xl font-bold uppercase tracking-tighter text-black pt-4">
            {block.text}
          </h2>
        );

      case 'bullets':
        return (
          <ul key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 font-mono text-sm text-gray-600 my-6">
            {block.items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2">
                <ChevronRight size={14} className="text-black shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'blockquote':
        return (
          <div key={idx} className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-4 font-mono text-sm my-6">
            <div className="text-gray-400 uppercase text-xs">Example Query</div>
            <div className="text-black font-semibold">“{block.query}”</div>
            <div className="h-[1px] bg-gray-200" />
            <div className="text-gray-400 uppercase text-xs">Direct Answer Snippet</div>
            <div className="text-gray-700">“{block.answer}”</div>
          </div>
        );

      case 'callout':
        return (
          <blockquote key={idx} className="border-l-4 border-black pl-6 py-2 my-8 italic text-xl text-black font-normal bg-gray-50 pr-4">
            "{block.text}"
          </blockquote>
        );

      case 'comparison-grid':
        return (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 p-6 rounded-sm">
              <h4 className="font-bold uppercase text-xs tracking-wider text-gray-400 mb-4">{block.left.title}</h4>
              <div className="flex flex-col gap-4 text-sm font-mono text-gray-600">
                {block.left.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-center gap-2">
                    <span className="text-xs text-gray-300">0{stepIdx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-black p-6 rounded-sm bg-black text-white">
              <h4 className="font-bold uppercase text-xs tracking-wider text-gray-500 mb-4">{block.right.title}</h4>
              <div className="flex flex-col gap-4 text-sm font-mono text-gray-400">
                {block.right.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">0{stepIdx + 1}</span>
                    <span className="text-white">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'timeline-comparison':
        return (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {block.items.map((item, itemIdx) => {
              const isGEO = item.title === 'GEO';
              return (
                <div 
                  key={itemIdx} 
                  className={`p-6 rounded-sm border ${
                    isGEO 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 bg-white text-black'
                  }`}
                >
                  <h3 className="text-xl font-bold uppercase mb-3">{item.title}</h3>
                  <div className={`text-sm font-mono mb-4 ${isGEO ? 'text-gray-500' : 'text-gray-400'}`}>
                    Focus: {item.focus}
                  </div>
                  <p className="text-sm font-light">{item.goal}</p>
                </div>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <main className="relative z-10 pt-40 px-6 md:px-12 max-w-[1200px] mx-auto pb-24">
        {/* BACK LINK */}
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Writings
          </Link>
        </div>

        {/* HERO TITLE & FEATURED IMAGE HEADER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 pb-16 border-b border-gray-200">
          
          {/* LEFT: TEXT (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                {post.subtitle && (
                  <>
                    <span className="w-8 h-[1px] bg-gray-300"></span>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{post.subtitle}</span>
                  </>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-8 text-black">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl font-light text-gray-500 leading-relaxed max-w-xl">
                {post.summary}
              </p>
            </div>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-gray-100 pt-6 mt-8">
              <div className="flex items-center gap-6 text-sm font-mono text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <button 
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
              >
                <Share2 size={14} />
                Share
              </button>
            </div>
          </div>

          {/* RIGHT: FEATURED IMAGE (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-square bg-gray-50 rounded-sm border border-gray-200 overflow-hidden group">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>

        </section>

        {/* ARTICLE CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* ARTICLE BODY */}
          <article className="lg:w-2/3 space-y-10">
            {post.content.map((block, idx) => renderContentBlock(block, idx))}
          </article>

          {/* SIDEBAR */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-10 border-t lg:border-t-0 lg:border-l border-gray-200 pt-10 lg:pt-0 lg:pl-10">
              
              {/* Author Box */}
              {post.author && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Written by</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
                      <img 
                        src={post.author.image} 
                        alt={post.author.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase text-sm tracking-tight">{post.author.name}</h5>
                      <p className="text-xs text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Specs Box */}
              {post.specs && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Specifications</h4>
                  <div className="text-sm font-mono space-y-2 text-gray-600">
                    {Object.entries(post.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span className="text-black font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related/Studio Info */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-sm space-y-4">
                <BookOpen size={20} className="text-black" />
                <h4 className="font-bold uppercase text-sm tracking-tight">Need help adapting?</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  I design and engineer modern web platforms optimized for the AI recommendation era. Get in touch to design your transition.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors"
                >
                  Get in touch <ChevronRight size={12} />
                </Link>
              </div>

            </div>
          </aside>

        </div>

        {/* BOTTOM NAV BAR */}
        <section className="mt-24 pt-12 border-t border-black flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Writings
          </Link>
          
          <Link 
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Discuss GEO Optimization
          </Link>
        </section>

      </main>
    </div>
  );
}
