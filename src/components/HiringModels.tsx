import React from "react";
import Link from "next/link";


export function HiringModels() {
  const models = [
    {
      title: "Fixed Price",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <line x1="9" y1="7" x2="9" y2="19" />
          <line x1="15" y1="7" x2="15" y2="19" />
        </svg>
      ),
    },
    {
      title: "Hourly Model",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      title: "Dedicated Team",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          {/* Front User */}
          <circle cx="9.5" cy="9" r="3.5" />
          <path d="M3.5 18a5.5 5.5 0 0 1 11 0" />
          {/* Back User */}
          <path d="M12.8 6.5a3.5 3.5 0 1 1-1.3 4.8" />
          <path d="M14.5 14.5a5.5 5.5 0 0 1 5.5 3.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-black relative z-10 overflow-hidden border-t border-slate-950/80">
      <div className="w-full max-w-[1358px] mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-[55px] relative min-h-[auto]">
        {/* Decorative Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full relative z-10">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center mb-10 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
            Hire Dedicated Developers <br className="hidden md:block" />To Fill the Gap in Your Talent Pool
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            We provide flexible, transparent, and cost-effective hiring models to help you scale your team
            effortlessly. With Krazio's dedicated developers, you only pay for what you need—no hidden
            costs, just quality-driven development.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="bg-[#0e0e11] border border-[#1c1c1f]/80 rounded-[32px] py-8 px-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:border-slate-800 shadow-md group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#4B56D2] to-[#1d4ed8] flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(37,99,235,0.25)] group-hover:shadow-[0_4px_25px_rgba(37,99,235,0.45)] transition-all duration-300">
                {model.icon}
              </div>
              <h3 className="text-white font-extrabold text-base md:text-lg tracking-wide text-center mt-2">
                {model.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Button at the bottom of HiringModels */}
        <div className="flex justify-center mt-12 relative z-10">
          <Link
            href="#interview-section"
            className="btn-ripple inline-flex items-center justify-center bg-[#4B56D2] w-[231px] h-[44px] px-8 py-3 rounded-full text-white font-bold text-xs tracking-wider transition-shadow duration-300 shadow-lg hover:shadow-xl select-none uppercase"
          >
            TALK TO OUR EXPERT
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
