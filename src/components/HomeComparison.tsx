"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Clock, CheckCircle, CheckSquare } from "lucide-react";

export function HomeComparison() {
  const comparisonData = [
    {
      label: "Time to first shortlist",
      withUs: "48 hours",
      onOwn: "4–8 weeks (job posting + screening)"
    },
    {
      label: "Time to hire",
      withUs: "3 weeks",
      onOwn: "3–6 months average"
    },
    {
      label: "Compliance risk",
      withUs: "zero risk",
      onOwn: "High — India labour law is complex"
    },
    {
      label: "Local entity required",
      withUs: "No — we're the legal employer",
      onOwn: "Yes — 6–12 months to register"
    },
    {
      label: "Payroll & social insurance",
      withUs: "Fully handled",
      onOwn: "Manual, high error risk"
    },
    {
      label: "Candidate pool",
      withUs: "100+ ready to deploy",
      onOwn: "Cold outreach from zero"
    },
    {
      label: "Indian market expertise",
      withUs: "10+ years of building tech teams",
      onOwn: "Learning curve at your cost"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#f8f9ff] relative overflow-hidden">
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f0f4ff] border border-[#d6e0ff] text-[#4B56D2] font-bold text-[11px] sm:text-xs tracking-widest uppercase mb-4">
            Why K Res .coder
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why K Res .coder: Hiring Alone vs. Hiring With Us
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed">
            See how K Res .coder simplifies hiring, reduces risk, and helps you build your team faster.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">

          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 bg-slate-50">
            <div className="hidden md:block p-6"></div>
            <div className="p-4 md:p-6 flex items-center justify-center bg-[#4B56D2] border-b border-slate-100 md:border-b-0 md:border-x border-slate-200/50 rounded-tl-[24px] md:rounded-t-[0] md:rounded-tl-[24px]">
              <img
                src="/Frame 66 (2).svg?v=3"
                alt="K Res Coder Logo"
                className="h-6 md:h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="p-6 md:p-8 text-center flex items-center justify-center">
              <h3 className="text-slate-500 font-bold tracking-widest text-[13px] uppercase">
                Hiring On Your Own
              </h3>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors"
              >
                {/* Label (Mobile: shown above the columns, Desktop: left column) */}
                <div className="p-4 md:p-6 flex items-center bg-slate-50/50 md:bg-transparent border-b border-slate-100 md:border-b-0">
                  <span className="font-semibold text-slate-700 text-[15px]">{row.label}</span>
                </div>

                {/* With Us Column */}
                <div className="p-4 md:p-6 flex items-center justify-start bg-[#4B56D2]/[0.03] border-b border-slate-100 md:border-b-0 md:border-x border-slate-200/50 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4B56D2]/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#4B56D2] font-bold" />
                    </div>
                    <span className="font-semibold text-slate-900 text-[15px]">{row.withUs}</span>
                  </div>
                </div>

                {/* On Own Column */}
                <div className="p-4 md:p-6 flex items-center justify-start">
                  <div className="flex items-center gap-3 opacity-75">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <span className="text-slate-500 text-[15px] font-medium">{row.onOwn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Area */}
        <div className="mt-16 text-center flex flex-col items-center">
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
