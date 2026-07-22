"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, RefreshCw } from "lucide-react";
import { HeroBackground } from "@/components";

export function AgileMindsetHero() {
  return (
    <section className="w-full relative overflow-hidden flex items-center min-h-[90vh] bg-[#f8f9ff]">
        <HeroBackground />
      
      
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-48 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-left max-w-2xl relative">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 shadow-[0_4px_24px_-8px_rgba(75,86,210,0.3)] border border-white backdrop-blur-xl mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B56D2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4B56D2]"></span>
              </span>
              <span className="text-sm font-bold tracking-[0.15em] text-[#4B56D2] uppercase">The Krazio Philosophy</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Driven by <br/>
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-[#4B56D2]/30 blur-2xl animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500 animate-gradient-x">
                  Agile Innovation
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10 font-medium"
            >
              At Krazio Cloud, Agile is at the heart of everything we build. Our collaborative and iterative approach enables us to deliver high-quality digital solutions faster, adapt to changing business needs, and create continuous value throughout the development journey.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-xl border border-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#4B56D2]/10 flex items-center justify-center border border-[#4B56D2]/20 shadow-inner">
                  <Zap className="w-5 h-5 text-[#4B56D2]" />
                </div>
                <div>
                  <span className="text-slate-800 font-bold block">Faster Delivery</span>
                  <span className="text-slate-600 text-sm">Accelerate project timelines with iterative development and rapid releases.</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-xl border border-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#4B56D2]/10 flex items-center justify-center border border-[#4B56D2]/20 shadow-inner">
                  <RefreshCw className="w-5 h-5 text-[#4B56D2]" />
                </div>
                <div>
                  <span className="text-slate-800 font-bold block">Continuous Innovation</span>
                  <span className="text-slate-600 text-sm">Continuously refine, optimize, and enhance solutions based on feedback.</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 20 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group perspective-1000 overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Agile Mindset Collaboration" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4B56D2]/40 via-blue-900/10 to-transparent mix-blend-overlay" />
            
            {/* Floating Glass Card on Image */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              className="absolute bottom-6 left-6 right-6 md:right-auto md:w-3/4 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl"
            >
              <p className="text-slate-900 font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#4B56D2] to-blue-500">
                "Elevating engineering through continuous alignment and collaboration."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
