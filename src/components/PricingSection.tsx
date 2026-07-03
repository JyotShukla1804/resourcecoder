import React from "react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 max-w-[1400px] mx-auto bg-white">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-3 leading-[1.15]">
          Hire Dedicated Developers In India As Per Your Need
        </h2>
        <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#4B56D2] uppercase">
          SIMPLE & TRANSPARENT PRICING | FULLY SIGNED NDA | CODE SECURITY | EASY EXIT POLICY
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[1358px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-stretch mb-10">

        {/* Hourly Card */}
        <div className="w-full md:w-[405.33px] h-auto md:h-[286.5px] bg-white border border-slate-100 rounded-[24px] p-10 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:border-slate-200/80 transition-all duration-300">
          <div>
            <span className="text-base sm:text-lg font-black tracking-[0.08em] text-slate-400 uppercase block mb-3">
              HOURLY
            </span>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl sm:text-6xl font-black text-[#0f172a] tracking-tight">
                $20
              </span>
              <span className="text-sm text-slate-400 ml-1 font-medium">/hr</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed font-normal">
            The model works well when you have a short-term project, need specialized service, or have a specific task to be completed.
          </p>
        </div>

        {/* Monthly Card (Highlighted / Most Popular) */}
        <div 
          className="w-full md:w-[405.33px] h-auto md:h-[286.5px] bg-black border border-black rounded-[24px] p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 relative transform-none opacity-100"
        >
          {/* Decorative Glow */}
          <div 
            
            className="pointer-events-none"
          />

          {/* Badge */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 px-5 py-2 rounded-full uppercase shadow-lg whitespace-nowrap z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[11px] tracking-widest border border-blue-400/30"
          >
            MOST POPULAR
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full flex-1">
            <div>
              <span className="text-base sm:text-lg font-black tracking-[0.08em] text-slate-400 uppercase block mb-3">
                MONTHLY
              </span>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  $2500
                </span>
                <span className="text-sm text-slate-400 ml-1 font-medium">/mo</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed font-normal">
              When you seek a long-term partnership with a limited budget and in less time, hire our experienced developers monthly.
            </p>
          </div>
        </div>

        {/* Quarterly Card */}
        <div className="w-full md:w-[405.33px] h-auto md:h-[286.5px] bg-white border border-slate-100 rounded-[24px] p-10 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:border-slate-200/80 transition-all duration-300">
          <div>
            <span className="text-base sm:text-lg font-black tracking-[0.08em] text-slate-400 uppercase block mb-3">
              QUARTERLY
            </span>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl sm:text-6xl font-black text-[#0f172a] tracking-tight">
                $7500
              </span>
              <span className="text-sm text-slate-400 ml-1 font-medium">/qt</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed font-normal">
            Need constant support from developers to serve your volatile requirements? Hiring our developers quarterly will save you from all the hassle.
          </p>
        </div>

      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center">
        <Link
          href="#interview-section"
          className="btn-ripple inline-flex items-center justify-center transition-shadow duration-300 shadow-[0_10px_25px_rgba(21,93,252,0.3)] hover:shadow-[0_10px_35px_rgba(21,93,252,0.5)]"
          
        >
          Schedule a Developer Interview
        </Link>
      </div>
    </section>
  );
}
