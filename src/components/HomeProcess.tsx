"use client";

import React from "react";
import Link from "next/link";
import { FileText, Users, Briefcase, CheckCircle, Clock, CheckSquare } from "lucide-react";

export function HomeProcess() {
  const steps = [
    {
      number: "01",
      badge: "Day 1 - 24 hrs",
      title: "Share Your Brief",
      desc: "Tell us the role, tech stack, and budget. We review your brief and assign a dedicated recruiter within 24 hours someone who knows the engineering market deeply.",
      icon: <FileText className="w-6 h-6 text-[#4B56D2]" />,
    },
    {
      number: "02",
      badge: "Day 2-3 - 48 hrs",
      title: "Receive Your Shortlist",
      desc: "Within 48 hours, you get 3-5 pre vetted, interview ready candidates. Every profile is screened technically and reviewed by a senior recruiter before it reaches your inbox.",
      icon: <Users className="w-6 h-6 text-[#4B56D2]" />,
    },
    {
      number: "03",
      badge: "Week 3-4 - placement done",
      title: "Interview, Hire, and Onboard",
      desc: "You interview and select. We handle contracts, payroll setup, and everything else so your developer can start working in 3-4 weeks from your first brief.",
      icon: <Briefcase className="w-6 h-6 text-[#4B56D2]" />,
    },
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f0f4ff] border border-[#d6e0ff] text-[#4B56D2] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            From Brief to Hire in 3-4 Weeks
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed">
            No guesswork, no long timelines. Here's exactly what happens when you work with us.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Dashed line connecting steps (hidden on mobile) */}
          <div className="hidden md:block absolute top-[24px] left-[16.5%] right-[16.5%] h-[2px] bg-slate-200 border-t-2 border-dashed border-[#4B56D2]/30" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col">
                {/* Number Badge */}
                <div className="mx-auto bg-[#4B56D2] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_15px_rgba(75,86,210,0.4)] relative z-10">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-[#4B56D2]/20 rounded-2xl p-6 lg:p-8 flex-1 transition-all duration-300 shadow-sm hover:shadow-xl group relative overflow-hidden">
                  {/* Subtle top gradient on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4B56D2] to-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#4B56D2]/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="bg-[#4B56D2]/10 text-[#4B56D2] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {step.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-slate-900 mb-3 group-hover:text-[#4B56D2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="mt-20 text-center flex flex-col items-center">
          <Link
            href="/#interview-section"
            className="btn-ripple inline-flex items-center justify-center px-8 h-[56px] rounded-full text-white font-bold text-[16px] tracking-wide shadow-[0_8px_25px_rgba(75,86,210,0.3)] hover:shadow-[0_12px_35px_rgba(75,86,210,0.5)] transition-all duration-300 bg-[#4B56D2] mb-6"
          >
            Start with a Free Brief Review
          </Link>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#4B56D2]" />
              <span>15-min call</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#4B56D2]" />
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#4B56D2]" />
              <span>Full roadmap discovery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
