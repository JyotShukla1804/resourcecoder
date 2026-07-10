"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { HeroBackground } from "@/components";

export function StartupHero() {
  return (
    <section className="w-full relative overflow-hidden flex items-center min-h-[90vh] bg-[#f8f9ff]">
        <HeroBackground />
      
      
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-48 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 shadow-[0_4px_24px_-8px_rgba(75,86,210,0.3)] border border-white backdrop-blur-xl mb-8"
        >
          <Lightbulb className="w-4 h-4 text-[#4B56D2]" />
          <span className="text-sm font-bold tracking-[0.15em] text-[#4B56D2] uppercase">1:1 Startup Consulting</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto"
        >
          Expert Consulting to <br className="hidden md:block"/>
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-2 bg-[#4B56D2]/30 blur-2xl animate-pulse"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500 animate-gradient-x">
              Scale Your Startup
            </span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-3xl mx-auto"
        >
          Transform your brilliant idea into a market-leading product. Our 1:1 consulting provides the technical and strategic roadmap you need to build, launch, and scale efficiently.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#interview-section"
            className="btn-ripple w-full sm:w-auto inline-flex items-center justify-center bg-[#4B56D2] rounded-full text-white font-bold text-lg px-10 py-5 transition-shadow duration-300 shadow-[0_8px_30px_rgba(75,86,210,0.3)] hover:shadow-[0_8px_40px_rgba(75,86,210,0.5)] group"
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
