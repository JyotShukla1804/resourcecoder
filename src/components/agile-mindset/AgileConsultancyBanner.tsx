"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AgileConsultancyBanner() {
  return (
    <section className="w-full relative overflow-hidden bg-[#4B56D2] py-16 md:py-24">
      {/* Abstract geometric background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-800/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-3/5 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wider uppercase">Startup Consultancy</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Achieve true Agility with our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Expert Guidance</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            At Krazio Cloud, our tailored consultancy services help you align your strategy, adopt Agile frameworks, and navigate the complexities of product development. Let our experts guide your startup towards sustainable, scalable success.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.3 }}
            className="pt-4"
          >
            <Link 
              href="/services/startup-consulting" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#4B56D2] font-bold rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all"
            >
              Discover More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, delay: 0.4 }}
          className="w-full md:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-[350px] transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-2xl overflow-hidden border border-white/20">
            <Image 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mastering the Art of Startup Consultancy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl leading-tight mb-2">Mastering the Art of Startup Consultancy</h3>
              <p className="text-cyan-200 text-sm font-medium">by Krazio Cloud</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
