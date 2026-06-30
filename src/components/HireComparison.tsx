"use client";

import React from "react";

export function HireComparison() {
  const comparisonData = [
    {
      feature: "Recruitment Fees",
      krazio: "$0 (No sourcing fees)",
      inhouse: "High Agency Fees (15-20%)",
      freelance: "Platform service markup fees"
    },
    {
      feature: "Average Setup Speed",
      krazio: "3 - 5 Days",
      inhouse: "45 - 90 Days",
      freelance: "1 - 7 Days (Unreliable)"
    },
    {
      feature: "Talent Quality Vetting",
      krazio: "Top 1% vetted developers only",
      inhouse: "Manual vetting / HR pipeline bottlenecks",
      freelance: "Self-proclaimed skills, high variance"
    },
    {
      feature: "Workplace & Tools Setup",
      krazio: "Managed workstations & secure portal",
      inhouse: "Office hardware costs & license overheads",
      freelance: "Unsecured personal devices, security risks"
    },
    {
      feature: "Replacement & Scaling",
      krazio: "Instant replacement, flexible contracts",
      inhouse: "Exit policy costs & long replacement cycles",
      freelance: "High abandonment risk, zero accountability"
    }
  ];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-20 px-6 md:px-[80px] bg-white border-t border-slate-100">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-primary mb-4">THE KRAZIO ADVANTAGE</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Why Companies Choose Krazio Over Alternatives
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Hiring dedicated tech talent shouldn't take months or consume half your budget. Compare the core features below.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-[32px] border border-slate-100 shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-6 px-8 text-sm font-bold text-slate-400 uppercase tracking-wider">Metrics</th>
                <th className="py-6 px-8 text-sm font-extrabold text-[#4B56D2] uppercase tracking-wider">Krazio Cloud</th>
                <th className="py-6 px-8 text-sm font-bold text-slate-600 uppercase tracking-wider">In-House Team</th>
                <th className="py-6 px-8 text-sm font-bold text-slate-600 uppercase tracking-wider">Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/30 transition-colors duration-200">
                  {/* Feature Metric */}
                  <td className="py-6 px-8 text-sm font-bold text-slate-900">{row.feature}</td>
                  
                  {/* Krazio (Highlighted Column) */}
                  <td className="py-6 px-8 text-sm font-extrabold text-[#4B56D2] bg-blue-50/20">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{row.krazio}</span>
                    </div>
                  </td>
                  
                  {/* In House */}
                  <td className="py-6 px-8 text-sm text-slate-500 font-medium">{row.inhouse}</td>
                  
                  {/* Freelancers */}
                  <td className="py-6 px-8 text-sm text-slate-500 font-medium">{row.freelance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
