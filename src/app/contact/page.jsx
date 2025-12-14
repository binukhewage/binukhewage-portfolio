'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Send, Plus, Minus, Copy, Check } from 'lucide-react';


// --- FAQ DATA ---
const faqs = [
  {
    question: "What is your typical timeline?",
    answer: "Most full-stack projects take between 4-8 weeks, depending on complexity. I work in two-week sprints with regular updates."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, I provide a 30-day bug fix window for free. After that, I offer monthly maintenance packages to keep your site secure and updated."
  },
  {
    question: "What is your tech stack?",
    answer: "I specialize in the MERN stack (MongoDB, Express, React, Node) and Next.js for high-performance frontend applications."
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

// Reusable Interactive Input Component
const InputField = ({ label, type = "text", placeholder, isTextArea = false }) => {
    return (
        <div className="group relative">
            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 group-focus-within:text-black transition-colors duration-300">
                {label}
            </label>
            {isTextArea ? (
                <textarea 
                    rows="4" 
                    placeholder={placeholder}
                    className="w-full bg-gray-50 border border-gray-200 p-6 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300 resize-none rounded-sm placeholder:text-gray-300"
                ></textarea>
            ) : (
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    className="w-full bg-gray-50 border border-gray-200 p-6 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300 rounded-sm placeholder:text-gray-300"
                />
            )}
        </div>
    );
};

const ContactItem = ({ icon: Icon, label, value, href }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <a href={href} className="flex items-start gap-4 group p-4 -ml-4 rounded-md hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center bg-white group-hover:border-black transition-colors">
                <Icon size={18} />
            </div>
            <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">{label}</span>
                <span className="text-xl font-medium block">{value}</span>
            </div>
            <button onClick={handleCopy} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-400 hover:text-black">
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
        </a>
    );
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      

      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30" 
           style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <main className="relative z-10 pt-40 px-6 md:px-12 max-w-[1600px] mx-auto pb-24">
        
        {/* 1. HEADER SECTION */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-black">
                <RevealText delay={0.1}>Let's</RevealText>
                <RevealText delay={0.2}>Collaborate</RevealText>
            </h1>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-4 flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-full bg-white"
            >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">Available for new projects</span>
            </motion.div>
          </div>
        </section>

        {/* 2. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-black pt-16">
            
            {/* LEFT COLUMN: CONTACT INFO (Spans 4 columns) */}
            <div className="lg:col-span-4 space-y-12">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-black"></span> 
                        Direct Channels
                    </h3>
                    <div className="space-y-2">
                        <ContactItem icon={Mail} label="Email" value="binukhe@gmail.com" href="mailto:binukhe@gmail.com" />
                        <ContactItem icon={Phone} label="Phone" value="+94 77 881 0168" href="tel:+94770000000" />
                        <ContactItem icon={MapPin} label="Office" value="Colombo, Sri Lanka" href="#" />
                    </div>
                </div>

                {/* FAQ Mini Section */}
                <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Answers</h3>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <h4 className="font-bold text-sm mb-2">{faq.question}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: THE FORM (Spans 8 columns) */}
            <div className="lg:col-span-8">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InputField label="Your Name" placeholder="John Doe" />
                        <InputField label="Email Address" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <InputField label="Company (Optional)" placeholder="Tech Corp Ltd." />
                         <div className="group relative">
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-gray-400 group-focus-within:text-black transition-colors duration-300">
                                Project Type
                            </label>
                            <select className="w-full bg-gray-50 border border-gray-200 p-6 text-lg outline-none focus:border-black focus:bg-white transition-all duration-300 rounded-sm appearance-none cursor-pointer">
                                <option>Full Stack Development</option>
                                <option>Frontend Architecture</option>
                                <option>UI/UX Design</option>
                                <option>Consultancy</option>
                            </select>
                            <div className="absolute right-6 top-[3.2rem] pointer-events-none">
                                <Plus size={16} />
                            </div>
                        </div>
                    </div>

                    <InputField label="Project Details" isTextArea={true} placeholder="Tell me about your goals, timeline, and budget..." />

                    <div className="pt-8">
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full md:w-auto bg-black text-white px-10 py-6 rounded-sm uppercase font-bold tracking-widest text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-4 group"
                        >
                            Send Inquiry 
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                        </motion.button>
                        <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest text-center md:text-left">
                            Usually responds within 24 hours
                        </p>
                    </div>
                </form>
            </div>

        </div>
      </main>
    </div>
  );
}