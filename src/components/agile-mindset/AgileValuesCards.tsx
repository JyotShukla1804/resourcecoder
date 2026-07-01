"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Target } from "lucide-react";

export function AgileValuesCards() {
  return (
    <section className="w-full bg-slate-50 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Core Values Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-lg border border-slate-200 group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4B56D2]/5 rounded-full blur-[80px] group-hover:bg-[#4B56D2]/10 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4B56D2] via-blue-500 to-cyan-400 flex items-center justify-center text-white mb-8 shadow-xl shadow-[#4B56D2]/20 border border-[#4B56D2]/20">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                Core Values
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our core values encompass a commitment to excellence, continuous learning, and fostering a collaborative environment. We build software that not only works but drives meaningful business growth, ensuring every decision is rooted in transparency and trust.
              </p>
            </div>
          </motion.div>

          {/* What Sets Us Apart Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#4B56D2] p-10 shadow-2xl border border-[#4B56D2] group"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] group-hover:bg-white/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl shadow-black/10 relative">
                <svg width="0" height="0" className="absolute">
                  <linearGradient id="targetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#4B56D2" offset="0%" />
                    <stop stopColor="#3b82f6" offset="50%" />
                    <stop stopColor="#22d3ee" offset="100%" />
                  </linearGradient>
                </svg>
                <Target className="w-8 h-8" stroke="url(#targetGradient)" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                What Sets Us Apart
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                What sets us apart is our relentless Agile mindset, allowing us to deliver software solutions with unmatched speed, quality, and adaptability. We prioritize your strategic goals in every sprint we execute, pivoting swiftly to seize new market opportunities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
