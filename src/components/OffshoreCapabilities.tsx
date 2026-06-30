"use client";
import React, { useState } from "react";

export function OffshoreCapabilities() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      title: "Dedicated Teams",
      desc: "Assemble a hand-picked team of full-stack developers, QA engineers, and project managers exclusively focused on your product.",
      features: ["Long-term engagement", "Direct communication", "Seamless integration", "Full transparency"]
    },
    {
      title: "Project Outsourcing",
      desc: "Hand over end-to-end project execution to our experts. We handle the entire software development lifecycle from discovery to deployment.",
      features: ["Fixed price or T&M", "Defined deliverables", "Guaranteed timelines", "Comprehensive QA"]
    },
    {
      title: "Staff Augmentation",
      desc: "Quickly scale your existing team with specialized talent. Fill skill gaps immediately without the overhead of long-term hiring.",
      features: ["Rapid onboarding", "Niche skillsets", "Flexible scaling", "Cultural fit"]
    },
    {
      title: "Build-Operate-Transfer (BOT)",
      desc: "We build your offshore operations, run them efficiently, and smoothly transfer ownership when you are ready to take control.",
      features: ["Risk mitigation", "Operational setup", "Legal compliance", "Seamless handover"]
    }
  ];

  return (
    <section id="capabilities" className="w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Our Offshore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Capabilities</span>
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Tailored engagement models designed to match your specific business requirements and operational maturity.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-1/3 space-y-2">
          {capabilities.map((cap, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left px-6 py-4 rounded-xl transition-all font-semibold ${
                activeTab === idx 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {cap.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 min-h-[300px] flex items-center relative overflow-hidden shadow-sm">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />
          
          <div key={activeTab} className="animate-fade-in-up w-full z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{capabilities[activeTab].title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {capabilities[activeTab].desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
