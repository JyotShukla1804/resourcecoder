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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-stretch mb-10">

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
          className="w-full md:w-[405.33px] h-auto md:h-[286.5px] bg-black border border-black rounded-[24px] p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 relative"
          style={{
            transform: "rotate(0deg)",
            opacity: 1
          }}
        >
          {/* Decorative Glow */}
          <div 
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              width: "96px",
              height: "96px",
              transform: "rotate(0deg)",
              opacity: 1,
              borderRadius: "33554400px",
              background: "linear-gradient(90deg, rgba(0, 73, 255, 0.2) 0%, rgba(39, 11, 222, 0.2) 100%)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              filter: "blur(40px)",
              zIndex: 0
            }}
            className="pointer-events-none"
          />

          {/* Badge */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full uppercase shadow-lg whitespace-nowrap z-20"
            style={{
              color: "#FFFFFF",
              background: "#4B56D2",
              fontFamily: "Nimbus Sans, Liberation Sans, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
              verticalAlign: "middle"
            }}
          >
            MOST POPULAR
          </div>

          <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", flex: 1 }}>
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
          style={{
            width: "100%",
            maxWidth: "443.38px",
            height: "60px",
            borderRadius: "33554400px",
            paddingTop: "16px",
            paddingRight: "40px",
            paddingBottom: "16px",
            paddingLeft: "40px",
            backgroundColor: "#4B56D2",
            color: "#FFFFFF",
            fontFamily: "Liberation Sans, sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "0.9px",
            textAlign: "center",
            verticalAlign: "middle",
            textTransform: "uppercase"
          }}
        >
          Schedule a Developer Interview
        </Link>
      </div>
    </section>
  );
}
