"use client";

import React from "react";

export function HireProcess() {
  const steps = [
    {
      num: "01",
      title: "Define Requirements",
      desc: "Specify your project needs, key skill sets, target tech stacks, and team composition constraints."
    },
    {
      num: "02",
      title: "Review Resume Matches",
      desc: "Receive curated, handpicked developer profiles matching your requirements in under 48 hours."
    },
    {
      num: "03",
      title: "Direct Client Interviews",
      desc: "Evaluate matching candidates through custom live technical screening and culture fit rounds."
    },
    {
      num: "04",
      title: "5-Day Risk-Free Trial",
      desc: "Onboard chosen developers. Pay only if they meet your productivity and work ethic standards."
    },
    {
      num: "05",
      title: "Agile Scale & Launch",
      desc: "Integrate developers into your workflow (Slack, Jira, daily stands) with managed oversight."
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-20 px-6 md:px-[80px] bg-slate-50 border-t border-slate-100">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="badge-primary mb-4">ONBOARDING WORKFLOW</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Get Started in 5 Simple Steps
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Our streamlined process ensures you get the exact talent you need without the standard administrative overhead.
          </p>
        </div>

        {/* Process Steps Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Decorative connectors for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-blue-100/60 shadow-lg flex items-center justify-center mb-6 group-hover:border-[#4B56D2] group-hover:shadow-[0_8px_30px_rgba(21,93,252,0.2)] transition-all duration-300">
                <span className="text-xl font-extrabold text-[#4B56D2]">
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-3 group-hover:text-[#4B56D2] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
