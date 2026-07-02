"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DevProcessBanner() {
  return (
    <section className="w-full relative overflow-hidden bg-[#4B56D2] py-16 md:py-24">
      {/* Abstract geometric background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-dev" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-dev)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          Transform Your App – Build, Enhance, and Grow with Confidence
        </h2>
        
        <Link 
          href="/contact"
          className="btn-ripple inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-[#4B56D2] bg-white rounded-full hover:bg-slate-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
        >
          Start Building Today
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
