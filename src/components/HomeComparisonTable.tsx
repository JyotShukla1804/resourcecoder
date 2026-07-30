"use client";

import React from "react";
import Link from "next/link";
import { Clock, CheckCircle, CheckSquare } from "lucide-react";

export function HomeComparisonTable() {
  const criteria = [
    {
      label: "First shortlist timeline",
      jdi: "48 hours",
      jobBoards: "4–8 weeks",
      agencies: "2–4 weeks",
      freelance: "Days (unvetted)"
    },
    {
      label: "Pre-vetted candidates",
      jdi: "100+ screened",
      jobBoards: "Self-apply only",
      agencies: "Partial",
      freelance: "Self-rated"
    },
    {
      label: "IT / Tech specialist recruiters",
      jdi: "Tech-only focus",
      jobBoards: "—",
      agencies: "Often generalist",
      freelance: "—"
    },
    {
      label: "No local entity needed",
      jdi: "EOR included",
      jobBoards: "—",
      agencies: "Varies",
      freelance: "Contractor only"
    },
    {
      label: "Licensed compliance",
      jdi: "Full compliance",
      jobBoards: "—",
      agencies: "Varies",
      freelance: "—"
    },
    {
      label: "Success-only fee model",
      jdi: "No placement, no fee",
      jobBoards: "Subscription cost",
      agencies: "Often retainer",
      freelance: "Platform % fee"
    },
    {
      label: "Payroll & contracts managed",
      jdi: "End-to-end",
      jobBoards: "—",
      agencies: "Add-on cost",
      freelance: "—"
    },
    {
      label: "Dedicated account manager",
      jdi: "Senior consultant",
      jobBoards: "—",
      agencies: "Varies",
      freelance: "—"
    },
    {
      label: "Typical time-to-hire",
      jdi: "14–21 days",
      jobBoards: "6–10 weeks",
      agencies: "4–8 weeks",
      freelance: "1–2 weeks (risk)"
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f0f4ff] border border-[#d6e0ff] text-[#4B56D2] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-4">
            How We Compare
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Companies Choose K Res .coder Over Other Options
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed">
            Not all India developer hiring options are equal. Here's how K Res .coder stacks up against job boards, generic recruitment agencies, and freelance platforms.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Header Row */}
            <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
              <div className="p-6 font-semibold text-slate-700 text-sm">
                Hiring Criteria
              </div>
              <div className="p-6 text-center bg-[#4B56D2] relative flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#60A5FA]" />
                <img 
                  src="/Frame 66 (2).svg?v=3" 
                  alt="K Res Coder Logo" 
                  className="h-7 w-auto object-contain brightness-0 invert" 
                />
              </div>
              <div className="p-6 text-center flex flex-col justify-center items-center border-l border-slate-100">
                <h3 className="text-slate-700 font-bold text-[14px]">Job Boards</h3>
                <span className="text-slate-400 text-[12px] font-normal">(TopDev, ITviec)</span>
              </div>
              <div className="p-6 text-center flex flex-col justify-center items-center border-l border-slate-100">
                <h3 className="text-slate-700 font-bold text-[14px]">Generic Agencies</h3>
              </div>
              <div className="p-6 text-center flex flex-col justify-center items-center border-l border-slate-100">
                <h3 className="text-slate-700 font-bold text-[14px]">Freelance Platforms</h3>
                <span className="text-slate-400 text-[12px] font-normal">(Upwork, etc.)</span>
              </div>
            </div>

            {/* Data Rows */}
            <div className="flex flex-col">
              {criteria.map((row, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="p-4 md:p-6 flex items-center bg-slate-50/50 md:bg-transparent border-r border-slate-100">
                    <span className="font-semibold text-slate-700 text-[14px]">{row.label}</span>
                  </div>
                  
                  <div className={`p-4 md:p-6 flex items-center justify-center ${idx % 2 === 0 ? 'bg-[#4B56D2]/[0.08]' : 'bg-[#4B56D2]/[0.02]'} border-r border-slate-200/50`}>
                    <span className="font-semibold text-slate-900 text-[14px] text-center">{row.jdi}</span>
                  </div>

                  <div className="p-4 md:p-6 flex items-center justify-center border-r border-slate-100">
                    <span className="text-slate-500 text-[14px] text-center">{row.jobBoards}</span>
                  </div>

                  <div className="p-4 md:p-6 flex items-center justify-center border-r border-slate-100">
                    <span className="text-slate-500 text-[14px] text-center">{row.agencies}</span>
                  </div>

                  <div className="p-4 md:p-6 flex items-center justify-center">
                    <span className="text-slate-500 text-[14px] text-center">{row.freelance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Area */}
        <div className="mt-16 text-center flex flex-col items-center">
          <Link
            href="/#interview-section"
            className="btn-ripple inline-flex items-center justify-center px-8 h-[56px] rounded-full text-white font-bold text-[16px] tracking-wide shadow-[0_8px_25px_rgba(75,86,210,0.3)] hover:shadow-[0_12px_35px_rgba(75,86,210,0.5)] transition-all duration-300 bg-[#4B56D2] mb-6"
          >
            Start Hiring Today
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
