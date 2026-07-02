import React from "react";
import Link from "next/link";

export function OffshoreCTA() {
  return (
    <section className="w-full relative overflow-hidden bg-[#4B56D2]">
      {/* Abstract geometric background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-400/40 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-800/40 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Experience Builds What <br className="hidden sm:block"/> Luck Never Can
        </h2>
        <p className="mt-6 text-indigo-100 text-lg max-w-2xl mx-auto">
          Don't leave your product development to chance. Partner with a proven offshore development center that delivers consistent, high-quality results engineered for your success.
        </p>
        <div className="mt-10">
          <Link 
            href="#contact-form"
            className="btn-ripple inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-[#4B56D2] bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all"
          >
            Start Building Today
          </Link>
        </div>
      </div>
    </section>
  );
}
